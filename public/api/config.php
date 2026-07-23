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
const VERI_KLASORU = __DIR__ . '/../data';
const MENU_DOSYASI = VERI_KLASORU . '/menu.json';
const SIFRE_DOSYASI = VERI_KLASORU . '/sifre.php';

/** Kayıtlı şifre özetini okur; henüz belirlenmemişse boş döner. */
function sifre_ozeti(): string
{
    if (!is_file(SIFRE_DOSYASI)) {
        return '';
    }
    $ozet = @include SIFRE_DOSYASI;
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

/** Basit, dosya tabanlı hatalı giriş sayacı. */
function hata_sayaci(): array
{
    $dosya = VERI_KLASORU . '/.giris-denemeleri';
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
    klasoru_hazirla(VERI_KLASORU);
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
