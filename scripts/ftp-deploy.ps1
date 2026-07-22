<#
.SYNOPSIS
  dist/ klasörünü FTP ile yayına gönderir (Güzel Hosting / cPanel-DirectAdmin).

.DESCRIPTION
  Önce `npm run build` çalıştırın; bu betik yalnızca yükleme yapar.
  .htaccess gibi GİZLİ dosyalar da gönderilir (-Force ile listelenir) — site
  yönlendirmeleri ve 3D/AR MIME tipleri o dosyaya bağlıdır.

  Hiçbir uzak dosyayı SİLMEZ. İçerik özetli (hash) dosya adları yüzünden eski
  assets/ dosyaları zamanla birikir; ara sıra FTP'den elle temizleyebilirsiniz.

.PARAMETER ListOnly
  Hiçbir şey yüklemez; yalnızca bağlanıp giriş yapılan dizini listeler.
  İLK ÇALIŞTIRMADA BUNU KULLANIN — doğru klasöre yüklediğinizi böyle görürsünüz.

.EXAMPLE
  # 1) Önce nereye düştüğünüzü görün
  powershell -ExecutionPolicy Bypass -File scripts\ftp-deploy.ps1 -ListOnly

.EXAMPLE
  # 2) Doğru klasörü gördükten sonra yükleyin
  powershell -ExecutionPolicy Bypass -File scripts\ftp-deploy.ps1 -RemoteDir public_html
#>
[CmdletBinding()]
param(
  [string]$Server    = "kucukmustafakoftecisi.com",
  [string]$User      = "islem@kucukmustafakoftecisi.com",
  # cPanel/DirectAdmin'de web kökü public_html'dir. public_ftp ANONİM FTP
  # klasörüdür ve web sunucusu oradan yayın YAPMAZ.
  [string]$RemoteDir = "public_html",
  [string]$LocalDir  = "dist",
  [System.Security.SecureString]$Password,
  # Sunucu açık FTPS (AUTH TLS) desteklemiyorsa -NoTls ekleyin. Şifre o zaman
  # ağ üzerinde AÇIK METİN gider — mümkünse kullanmayın.
  [switch]$NoTls,
  [switch]$ListOnly
)

$ErrorActionPreference = "Stop"

if (-not $Password) {
  $Password = Read-Host -AsSecureString "FTP şifresi ($User)"
}
$cred = New-Object System.Net.NetworkCredential($User, $Password)
$useSsl = -not $NoTls

function New-FtpRequest {
  param([string]$Path, [string]$Method)
  $uri = "ftp://$Server/$($Path -replace '\\','/' -replace '^/+','')"
  $req = [System.Net.FtpWebRequest]::Create($uri)
  $req.Credentials = $cred
  $req.Method      = $Method
  $req.EnableSsl   = $useSsl
  $req.UsePassive  = $true
  $req.UseBinary   = $true
  $req.KeepAlive   = $false
  $req.Timeout     = 120000
  return $req
}

# --- Bağlantı testi / dizin listesi -----------------------------------------
try {
  $req = New-FtpRequest -Path $(if ($ListOnly) { "" } else { $RemoteDir }) `
                        -Method ([System.Net.WebRequestMethods+Ftp]::ListDirectory)
  $res = $req.GetResponse()
  $reader = New-Object System.IO.StreamReader($res.GetResponseStream())
  $listing = $reader.ReadToEnd()
  $reader.Close(); $res.Close()
} catch {
  Write-Host "BAĞLANTI HATASI: $($_.Exception.Message)" -ForegroundColor Red
  if ($useSsl) {
    Write-Host "Sunucu FTPS desteklemiyor olabilir. -NoTls ekleyip tekrar deneyin." -ForegroundColor Yellow
  }
  exit 1
}

if ($ListOnly) {
  Write-Host "Bağlantı başarılı. Giriş yapılan dizindeki klasörler:" -ForegroundColor Green
  $listing -split "`r?`n" | Where-Object { $_ } | ForEach-Object { "  $_" }
  Write-Host ""
  Write-Host "Web kökü hangisiyse -RemoteDir ile onu verin (genellikle public_html)." -ForegroundColor Cyan
  exit 0
}

# --- Yükleme ----------------------------------------------------------------
$root = Resolve-Path $LocalDir
$files = Get-ChildItem -Path $root -Recurse -File -Force
if (-not $files) { Write-Host "$LocalDir boş — önce 'npm run build' çalıştırın." -ForegroundColor Red; exit 1 }

Write-Host "$($files.Count) dosya → ftp://$Server/$RemoteDir" -ForegroundColor Cyan
Write-Host ("TLS: " + $(if ($useSsl) { "açık (FTPS)" } else { "KAPALI — şifre açık metin gidiyor" })) -ForegroundColor $(if ($useSsl) { "Green" } else { "Yellow" })

$made = New-Object 'System.Collections.Generic.HashSet[string]'
function Confirm-RemoteDir {
  param([string]$Dir)
  if ([string]::IsNullOrWhiteSpace($Dir) -or $made.Contains($Dir)) { return }
  # Üst klasörleri de sırayla oluştur
  $parts = $Dir -split '/' | Where-Object { $_ }
  $acc = ""
  foreach ($p in $parts) {
    $acc = if ($acc) { "$acc/$p" } else { $p }
    if ($made.Contains($acc)) { continue }
    try {
      $r = New-FtpRequest -Path $acc -Method ([System.Net.WebRequestMethods+Ftp]::MakeDirectory)
      $r.GetResponse().Close()
    } catch {
      # 550 = zaten var; diğer hatalar yüklemede zaten patlar
    }
    [void]$made.Add($acc)
  }
}

$done = 0; $failed = @()
foreach ($f in $files) {
  $rel = $f.FullName.Substring($root.Path.Length).TrimStart('\','/') -replace '\\','/'
  $remote = "$RemoteDir/$rel"
  $dir = Split-Path $remote -Parent
  Confirm-RemoteDir -Dir ($dir -replace '\\','/')

  try {
    $r = New-FtpRequest -Path $remote -Method ([System.Net.WebRequestMethods+Ftp]::UploadFile)
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $r.ContentLength = $bytes.Length
    $s = $r.GetRequestStream()
    $s.Write($bytes, 0, $bytes.Length)
    $s.Close()
    $r.GetResponse().Close()
    $done++
    Write-Progress -Activity "Yükleniyor" -Status "$done/$($files.Count) — $rel" `
                   -PercentComplete (($done / $files.Count) * 100)
  } catch {
    $failed += "$rel — $($_.Exception.Message)"
  }
}
Write-Progress -Activity "Yükleniyor" -Completed

Write-Host ""
Write-Host "Yüklenen: $done / $($files.Count)" -ForegroundColor Green
if ($failed) {
  Write-Host "Başarısız: $($failed.Count)" -ForegroundColor Red
  $failed | Select-Object -First 15 | ForEach-Object { "  $_" }
} else {
  Write-Host "Tamamlandı → https://$Server/" -ForegroundColor Green
}
