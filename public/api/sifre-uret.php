<?php
/**
 * Yönetim şifresini belirler / değiştirir.
 *
 * İlk kurulumda şifre yoktur; bu sayfadan bir kez belirlenir. Sonrasında
 * değiştirmek için MEVCUT şifre sorulur — yani sayfa sunucuda kalsa bile
 * kimse şifrenizi sıfırlayamaz.
 *
 * Şifrenin kendisi hiçbir yere yazılmaz; yalnızca geri döndürülemez özeti
 * (password_hash) data/sifre.php içine kaydedilir. O klasör derleme
 * çıktısının dışındadır, siteyi yeniden yayınlamak şifreyi silmez.
 */
require __DIR__ . '/config.php';

$mevcutOzet = sifre_ozeti();
$ilkKurulum = $mevcutOzet === '';
$mesaj = '';
$basarili = false;

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $eski = (string) ($_POST['eski'] ?? '');
    $yeni = (string) ($_POST['yeni'] ?? '');
    $tekrar = (string) ($_POST['tekrar'] ?? '');

    if (!$ilkKurulum && !password_verify($eski, $mevcutOzet)) {
        sleep(2);
        $mesaj = 'Mevcut şifre hatalı.';
    } elseif (strlen($yeni) < 8) {
        $mesaj = 'Yeni şifre en az 8 karakter olmalı.';
    } elseif ($yeni !== $tekrar) {
        $mesaj = 'İki şifre birbirini tutmuyor.';
    } elseif (!veri_klasoru_hazirla()) {
        $mesaj = 'data klasörü oluşturulamadı. Klasör yazma iznini kontrol edin.';
    } else {
        $icerik = "<?php\n/* Yönetim şifresinin özeti. Elle düzenlemeyin. */\nreturn "
            . var_export(password_hash($yeni, PASSWORD_DEFAULT), true) . ";\n";
        $hedef = sifre_yolu();
        if (@file_put_contents($hedef, $icerik) === false) {
            $mesaj = 'Şifre kaydedilemedi. Klasör yazma iznini kontrol edin.';
        } else {
            @chmod($hedef, 0640);
            /* Eski, web kökü içindeki kopya varsa temizle */
            if ($hedef !== YEDEK_SIFRE_DOSYASI && is_file(YEDEK_SIFRE_DOSYASI)) {
                @unlink(YEDEK_SIFRE_DOSYASI);
            }
            $basarili = true;
            $mesaj = $ilkKurulum
                ? 'Şifreniz belirlendi. Artık /yonetim sayfasından giriş yapabilirsiniz.'
                : 'Şifreniz değiştirildi.';
            $ilkKurulum = false;
        }
    }
}
?>
<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Yönetim şifresi</title>
<style>
  body { background:#141110; color:#e8ded2; font:16px/1.6 system-ui, sans-serif;
         max-width:34rem; margin:0 auto; padding:3rem 1.25rem; }
  h1 { font-size:1.5rem; margin-bottom:.25rem; }
  p.alt { color:#b9ab9c; margin-top:0; }
  label { display:block; margin-top:1.1rem; font-size:.85rem;
          letter-spacing:.08em; text-transform:uppercase; color:#b9ab9c; }
  input { width:100%; margin-top:.35rem; padding:.7rem; font-size:1rem;
          background:#1e1a18; color:#e8ded2; border:1px solid #6b5a4a; border-radius:2px; }
  button { margin-top:1.4rem; padding:.75rem 1.6rem; font-size:1rem; cursor:pointer;
           background:#d9772f; color:#141110; border:0; border-radius:2px; font-weight:600; }
  .kutu { margin-top:1.5rem; padding:1rem; border:1px solid; border-radius:2px; }
  .ok { border-color:#4a7c4e; color:#a8d5aa; }
  .hata { border-color:#a5462f; color:#e0a03c; }
  .not { margin-top:2.5rem; font-size:.85rem; color:#8a7d70; }
</style>
</head>
<body>
<h1><?= $ilkKurulum ? 'Şifre belirleyin' : 'Şifre değiştir' ?></h1>
<p class="alt">Küçük Mustafa Köftecisi — yönetim paneli</p>

<?php if ($mesaj !== ''): ?>
  <div class="kutu <?= $basarili ? 'ok' : 'hata' ?>"><?= htmlspecialchars($mesaj, ENT_QUOTES, 'UTF-8') ?></div>
<?php endif; ?>

<?php if (!$basarili || !$ilkKurulum): ?>
<form method="post" autocomplete="off">
  <?php if (!$ilkKurulum): ?>
    <label for="eski">Mevcut şifre</label>
    <input id="eski" type="password" name="eski" required>
  <?php endif; ?>

  <label for="yeni">Yeni şifre</label>
  <input id="yeni" type="password" name="yeni" required minlength="8" placeholder="En az 8 karakter">

  <label for="tekrar">Yeni şifre (tekrar)</label>
  <input id="tekrar" type="password" name="tekrar" required minlength="8">

  <button type="submit"><?= $ilkKurulum ? 'Şifreyi belirle' : 'Şifreyi değiştir' ?></button>
</form>
<?php endif; ?>

<p class="not">
  Şifreniz sunucuda geri döndürülemez bir özet olarak saklanır; ne bu sayfa ne
  de site paketi şifrenin kendisini görebilir. Değiştirmek için her zaman
  mevcut şifre gerekir, bu yüzden sayfanın sunucuda kalması sakıncalı değildir.
</p>
</body>
</html>
