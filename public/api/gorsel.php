<?php
/**
 * Panelden gelen ürün fotoğrafını sunucuya kaydeder.
 *
 *   POST /api/gorsel.php   (alan adı: "dosya", şifre başlıkta)
 *   → { "yol": "/yuklenen/ab12cd34.webp" }
 *
 * GÜVENLİK: Yüklenen dosyaya asla olduğu gibi güvenilmez. Gerçekten görsel
 * olduğu doğrulanır, GD ile YENİDEN ÇİZİLİR (içine gömülü olabilecek her şey
 * böylece atılır) ve rastgele adla, çalıştırma izni olmayan bir klasöre yazılır.
 */
require __DIR__ . '/config.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_yanit(405, ['hata' => 'Yalnızca POST kabul edilir.']);
}

yetki_dogrula();

if (!isset($_FILES['dosya']) || $_FILES['dosya']['error'] !== UPLOAD_ERR_OK) {
    $kod = $_FILES['dosya']['error'] ?? -1;
    $mesaj = in_array($kod, [UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE], true)
        ? 'Dosya sunucunun izin verdiğinden büyük.'
        : 'Dosya alınamadı (kod ' . $kod . ').';
    json_yanit(400, ['hata' => $mesaj]);
}

$gecici = $_FILES['dosya']['tmp_name'];
if (!is_uploaded_file($gecici)) {
    json_yanit(400, ['hata' => 'Geçersiz yükleme.']);
}
if (filesize($gecici) > GORSEL_MAX_BAYT) {
    json_yanit(413, ['hata' => 'Görsel çok büyük.']);
}

/* Uzantıya değil, dosyanın gerçek içeriğine bakılır. */
$bilgi = @getimagesize($gecici);
if ($bilgi === false) {
    json_yanit(415, ['hata' => 'Bu dosya bir görsel değil.']);
}
[$genislik, $yukseklik] = $bilgi;
$tip = $bilgi[2];

$okuyucular = [
    IMAGETYPE_JPEG => 'imagecreatefromjpeg',
    IMAGETYPE_PNG => 'imagecreatefrompng',
    IMAGETYPE_WEBP => 'imagecreatefromwebp',
];
if (!isset($okuyucular[$tip]) || !function_exists($okuyucular[$tip])) {
    json_yanit(415, ['hata' => 'Yalnızca JPEG, PNG veya WebP yükleyebilirsiniz.']);
}

$kaynak = @$okuyucular[$tip]($gecici);
if ($kaynak === false) {
    json_yanit(422, ['hata' => 'Görsel çözümlenemedi.']);
}

/* Ölçekle: menüde en fazla ~1400px'e ihtiyaç var; büyüğü boşuna yer kaplar. */
$oran = min(1, GORSEL_MAX_GENISLIK / $genislik);
$yeniG = (int) round($genislik * $oran);
$yeniY = (int) round($yukseklik * $oran);

$hedef = imagecreatetruecolor($yeniG, $yeniY);
/* PNG/WebP saydamlığı bozulmasın */
imagealphablending($hedef, false);
imagesavealpha($hedef, true);
imagecopyresampled($hedef, $kaynak, 0, 0, 0, 0, $yeniG, $yeniY, $genislik, $yukseklik);
imagedestroy($kaynak);

if (!klasoru_hazirla(GORSEL_KLASORU)) {
    imagedestroy($hedef);
    json_yanit(500, ['hata' => 'yuklenen klasörü oluşturulamadı.']);
}

/* Klasörün kendi koruması: burada hiçbir betik çalıştırılmaz. Bu kural
   ancak klasörün İÇİNDEKİ .htaccess ile yazılabilir (üst .htaccess'te
   <Directory> kullanmak sunucuyu 500'e düşürür). */
$koruma = GORSEL_KLASORU . '/.htaccess';
if (!is_file($koruma)) {
    @file_put_contents($koruma, implode("\n", [
        'Options -Indexes -ExecCGI',
        'AddHandler cgi-script .php .phtml .phar .pl .py .sh',
        '<FilesMatch "\.(php|phtml|phar|pl|py|sh|cgi|htaccess)$">',
        '  Require all denied',
        '</FilesMatch>',
        '',
    ]));
}

$ad = bin2hex(random_bytes(8));
if (function_exists('imagewebp')) {
    $dosyaAdi = $ad . '.webp';
    $ok = imagewebp($hedef, GORSEL_KLASORU . '/' . $dosyaAdi, 82);
} else {
    $dosyaAdi = $ad . '.jpg';
    $ok = imagejpeg($hedef, GORSEL_KLASORU . '/' . $dosyaAdi, 82);
}
imagedestroy($hedef);

if (!$ok) {
    json_yanit(500, ['hata' => 'Görsel kaydedilemedi. Klasör izinlerini kontrol edin.']);
}

json_yanit(200, [
    'yol' => GORSEL_YOLU . '/' . $dosyaAdi,
    'genislik' => $yeniG,
    'yukseklik' => $yeniY,
    'bayt' => filesize(GORSEL_KLASORU . '/' . $dosyaAdi),
]);
