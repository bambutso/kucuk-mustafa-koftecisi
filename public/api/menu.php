<?php
/**
 * Menüyü yayınlar.
 *
 *   POST /api/menu.php          → menüyü kaydeder (şifre ister)
 *   POST /api/menu.php?giris=1  → yalnızca şifreyi doğrular (panel girişi)
 *
 * Menü, derleme çıktısının dışındaki data/menu.json dosyasına yazılır; site
 * onu doğrudan okur. Böylece her yayında (dist yüklemesi) canlı menünün
 * üzerine yazılmaz.
 */
require __DIR__ . '/config.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_yanit(405, ['hata' => 'Yalnızca POST kabul edilir.']);
}

yetki_dogrula();

/* Panel girişi: şifre doğruysa başka bir şey yapmadan onay döner. */
if (isset($_GET['giris'])) {
    json_yanit(200, ['tamam' => true]);
}

$ham = file_get_contents('php://input');
if ($ham === false || $ham === '') {
    json_yanit(400, ['hata' => 'Boş istek.']);
}
if (strlen($ham) > 8 * 1024 * 1024) {
    json_yanit(413, ['hata' => 'Menü verisi çok büyük.']);
}

$veri = json_decode($ham, true);
if (!is_array($veri)) {
    json_yanit(400, ['hata' => 'Geçersiz JSON.']);
}

/* Sunucu tarafı doğrulama: bozuk bir menü yayına çıkıp siteyi kırmasın.
   Tarayıcıdaki kontrole güvenilmez — istek elle de gönderilebilir. */
foreach ($veri as $kategori) {
    if (
        !is_array($kategori)
        || !isset($kategori['id'], $kategori['title'], $kategori['items'])
        || !is_string($kategori['id'])
        || !is_string($kategori['title'])
        || !is_array($kategori['items'])
    ) {
        json_yanit(422, ['hata' => 'Menü biçimi hatalı: kategori alanları eksik.']);
    }
    foreach ($kategori['items'] as $urun) {
        if (!is_array($urun) || !isset($urun['id'], $urun['name'])) {
            json_yanit(422, [
                'hata' => 'Menü biçimi hatalı: "' . $kategori['title'] . '" içindeki bir üründe id veya ad yok.',
            ]);
        }
    }
}

if (!veri_klasoru_hazirla()) {
    json_yanit(500, ['hata' => 'data klasörü oluşturulamadı. Klasör izinlerini kontrol edin.']);
}

/* Bir önceki sürümü yedekle — yanlış kayıtta geri dönülebilsin. */
if (is_file(MENU_DOSYASI)) {
    @copy(MENU_DOSYASI, MENU_DOSYASI . '.bak');
}

/* Atomik yazım: yarım yazılmış dosya siteye asla servis edilmez. */
$gecici = MENU_DOSYASI . '.tmp';
$yazilan = file_put_contents(
    $gecici,
    json_encode($veri, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
);
if ($yazilan === false || !rename($gecici, MENU_DOSYASI)) {
    @unlink($gecici);
    json_yanit(500, ['hata' => 'Menü yazılamadı. data klasörünün yazma izni olmalı.']);
}

$urunSayisi = 0;
foreach ($veri as $kategori) {
    $urunSayisi += count($kategori['items']);
}

json_yanit(200, [
    'tamam' => true,
    'kategori' => count($veri),
    'urun' => $urunSayisi,
    'zaman' => date('c'),
]);
