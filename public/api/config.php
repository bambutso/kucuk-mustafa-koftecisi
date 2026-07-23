<?php
/**
 * Yönetim paneli sunucu ayarları.
 *
 * ŞİFRE BU DOSYADA DURMAZ. Özeti (hash) data/sifre.php içinde tutulur; o
 * klasör derleme çıktısının dışındadır, böylece siteyi her yayınlayışınızda
 * şifreniz SİLİNMEZ. İlk kurulumda /api/sifre-uret.php sayfasından şifrenizi
 * belirlersiniz — dosya düzenlemeniz gerekmez.
 */

/**
 * Yazılabilir veri klasörü. Derleme çıktısının (dist) DIŞINDA durur ki her
 * yayında üzerine yazılmasın — canlı menü ve şifre kaybolmasın.
 */
/**
 * İKİ AYRI KLASÖR — bilerek:
 *
 *  VERI_KLASORU  (public_html/data)  → menu.json burada durur ve HERKESE
 *      AÇIK olmak ZORUNDADIR; site menüyü tarayıcıdan buradan okur.
 *
 *  GIZLI_KLASORU (public_html'in DIŞINDA) → şifre özeti ve giriş sayacı.
 *      Web kökünün dışında olduğu için sunucu bu dosyalara hiçbir adresten
 *      erişim veremez. .htaccess kurallarına güvenmek yerine böyle yapıldı:
 *      kural bir gün çalışmazsa (paylaşımlı sunucularda AllowOverride
 *      ayarları değişebiliyor) sır yine de açığa çıkmaz.
 */
const VERI_KLASORU = __DIR__ . '/../data';
const MENU_DOSYASI = VERI_KLASORU . '/menu.json';

/** public_html/api/../../gizli  →  .../domains/<alan>/gizli */
const GIZLI_KLASORU = __DIR__ . '/../../gizli';
const SIFRE_DOSYASI = GIZLI_KLASORU . '/sifre.php';

/** Web kökünün dışına yazamayan sunucular için son çare (o zaman .htaccess korur) */
const YEDEK_SIFRE_DOSYASI = VERI_KLASORU . '/sifre.php';

/** Şifrenin yazılacağı/okunacağı yol: dışarısı mümkünse orası. */
function sifre_yolu(): string
{
    if (is_file(SIFRE_DOSYASI)) {
        return SIFRE_DOSYASI;
    }
    if (is_file(YEDEK_SIFRE_DOSYASI)) {
        return YEDEK_SIFRE_DOSYASI;
    }
    return klasoru_hazirla(GIZLI_KLASORU) ? SIFRE_DOSYASI : YEDEK_SIFRE_DOSYASI;
}

/** Kayıtlı şifre özetini okur; henüz belirlenmemişse boş döner. */
function sifre_ozeti(): string
{
    /* Eski kurulum public_html içine yazmış olabilir: bir kereliğine dışarı taşı. */
    if (!is_file(SIFRE_DOSYASI) && is_file(YEDEK_SIFRE_DOSYASI)) {
        if (klasoru_hazirla(GIZLI_KLASORU) && @copy(YEDEK_SIFRE_DOSYASI, SIFRE_DOSYASI)) {
            @unlink(YEDEK_SIFRE_DOSYASI);
        }
    }
    $yol = is_file(SIFRE_DOSYASI) ? SIFRE_DOSYASI : YEDEK_SIFRE_DOSYASI;
    if (!is_file($yol)) {
        return '';
    }
    $ozet = @include $yol;
    return is_string($ozet) ? $ozet : '';
}

/** Panelden yüklenen görsellerin klasörü (yine dist dışında). */
const GORSEL_KLASORU = __DIR__ . '/../yuklenen';
const GORSEL_YOLU = '/yuklenen';

/** Yüklenecek görselin en fazla genişliği; menü kartında ~350px görünüyor. */
const GORSEL_MAX_GENISLIK = 1400;
const GORSEL_MAX_BAYT = 12 * 1024 * 1024;

/** Kaç hatalı denemeden sonra bekletilsin (kaba kuvvet yavaşlatma). */
const HATA_SINIRI = 5;
const HATA_PENCERESI = 900; // saniye

function json_yanit(int $kod, array $govde): void
{
    http_response_code($kod);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    /* Panel kendi alan adımızda; başka kaynaktan istek kabul edilmez. */
    header('X-Content-Type-Options: nosniff');
    echo json_encode($govde, JSON_UNESCAPED_UNICODE);
    exit;
}

function klasoru_hazirla(string $yol): bool
{
    return is_dir($yol) || @mkdir($yol, 0755, true);
}

/**
 * data/ klasörünü hazırlar ve korumasını yazar.
 *
 * Klasörde menu.json HERKESE AÇIK olmalı (site onu okur), ama sifre.php,
 * .giris-denemeleri ve .bak/.tmp yedekleri dışarıdan istenememeli.
 *
 * sifre.php PHP olarak çalıştığında çıktı vermez, yani özet normalde
 * sızmaz; ama sunucuda PHP bir gün devre dışı kalırsa kaynak düz metin
 * servis edilirdi. Bu kural o ihtimali de kapatır.
 *
 * Yasak listesi yerine "her şeyi kapat, menu.json'u aç" yazılmadı: o kurgu
 * yanlış giderse menü okunamaz ve site menüsüz kalırdı.
 */
function veri_klasoru_hazirla(): bool
{
    if (!klasoru_hazirla(VERI_KLASORU)) {
        return false;
    }
    /* Gizli klasör web kökünün dışında olsa bile bir koruma bırak: bazı
       paylaşımlı sunucularda alan adı klasörünün tamamı yayınlanabiliyor. */
    if (is_dir(GIZLI_KLASORU) && !is_file(GIZLI_KLASORU . '/.htaccess')) {
        @file_put_contents(GIZLI_KLASORU . '/.htaccess', "Require all denied" . PHP_EOL);
    }

    $koruma = VERI_KLASORU . '/.htaccess';
    if (!is_file($koruma)) {
        @file_put_contents($koruma, implode(PHP_EOL, [
            'Options -Indexes -ExecCGI',
            '',
            '# Betikler, yedekler ve yarim yazilmis dosyalar disariya kapali',
            '<FilesMatch "\.(php|phtml|phar|pl|py|sh|cgi|bak|tmp)$">',
            '  Require all denied',
            '</FilesMatch>',
            '',
            '# Nokta ile baslayan dosyalar (.giris-denemeleri, .htaccess) kapali',
            '<FilesMatch "^\.">',
            '  Require all denied',
            '</FilesMatch>',
            '',
        ]));
    }
    return true;
}

/** Basit, dosya tabanlı hatalı giriş sayacı. */
function hata_sayaci(): array
{
    $dosya = (klasoru_hazirla(GIZLI_KLASORU) ? GIZLI_KLASORU : VERI_KLASORU)
        . '/giris-denemeleri.json';
    $simdi = time();
    $kayit = ['adet' => 0, 'ilk' => $simdi];
    if (is_file($dosya)) {
        $okunan = json_decode((string) @file_get_contents($dosya), true);
        if (is_array($okunan) && isset($okunan['adet'], $okunan['ilk'])) {
            $kayit = $okunan;
        }
    }
    if ($simdi - (int) $kayit['ilk'] > HATA_PENCERESI) {
        $kayit = ['adet' => 0, 'ilk' => $simdi];
    }
    return [$kayit, $dosya];
}

function hatayi_kaydet(): void
{
    [$kayit, $dosya] = hata_sayaci();
    $kayit['adet'] = (int) $kayit['adet'] + 1;
    veri_klasoru_hazirla();
    @file_put_contents($dosya, json_encode($kayit));
}

function hatalari_sifirla(): void
{
    [, $dosya] = hata_sayaci();
    @unlink($dosya);
}

/**
 * Şifreyi doğrular. Çok fazla hatalı denemede yavaşlatır — parola deneme
 * saldırısını pratikte kullanışsız kılar.
 */
function yetki_dogrula(): void
{
    $ozet = sifre_ozeti();
    if ($ozet === '') {
        json_yanit(503, [
            'hata' => 'Sunucuda henüz şifre belirlenmemiş. '
                . '/api/sifre-uret.php sayfasından bir şifre belirleyin.',
        ]);
    }

    [$kayit] = hata_sayaci();
    if ((int) $kayit['adet'] >= HATA_SINIRI) {
        sleep(3);
    }

    $basliklar = function_exists('getallheaders') ? getallheaders() : [];
    $sifre = '';
    foreach ($basliklar as $ad => $deger) {
        if (strtolower($ad) === 'x-yonetim-sifresi') {
            $sifre = (string) $deger;
            break;
        }
    }
    if ($sifre === '' && isset($_SERVER['HTTP_X_YONETIM_SIFRESI'])) {
        $sifre = (string) $_SERVER['HTTP_X_YONETIM_SIFRESI'];
    }

    if ($sifre === '' || !password_verify($sifre, $ozet)) {
        hatayi_kaydet();
        json_yanit(401, ['hata' => 'Şifre hatalı.']);
    }
    hatalari_sifirla();
}

/* Klasör koruması her istekte kendini onarır: kurulum sırasında
   oluşturulmuş eski bir data/ klasöründe .htaccess eksikse tamamlanır. */
veri_klasoru_hazirla();
