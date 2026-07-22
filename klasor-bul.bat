@echo off
chcp 65001 >nul
cd /d "%~dp0"
title FTP klasor bul
echo.
echo   FTP'de web kokunu ariyoruz.
echo   Sifre sorulacak; yazarken ekranda GORUNMEZ.
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "scripts\ftp-deploy.ps1" -Explore
echo.
echo   Yukaridaki ciktinin TAMAMINI kopyalayip Claude'a yapistirin.
echo   Pencereyi kapatmak icin bir tusa basin.
pause >nul
