@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Kucuk Mustafa Koftecisi - Siteyi Yayinla

echo.
echo   KUCUK MUSTAFA KOFTECISI - SITEYI YAYINLA
echo   ========================================
echo.
echo   [1/2] Site derleniyor...
echo.
call npm run build
if errorlevel 1 goto derleme_hatasi

echo.
echo   [2/2] FTP'ye yukleniyor.
echo   Sifre birazdan sorulacak; yazarken ekranda GORUNMEZ, bu normaldir.
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "scripts\ftp-deploy.ps1" -RemoteDir public_html
goto son

:derleme_hatasi
echo.
echo   HATA: Derleme basarisiz oldu. Yukleme YAPILMADI.
echo   Yukaridaki hata mesajini Claude'a gosterin.

:son
echo.
echo   Pencereyi kapatmak icin bir tusa basin.
pause >nul
