"""
dist/ klasörünü site.zip olarak paketler — hosting panelindeki File Manager ile
yükleyip "Extract" demek için.

Neden ayrı bir betik: Windows'un kendi ZIP API'si girdi adlarında ters bölü
kullanabiliyor; bazı sunucu tarafı çıkarıcılar bunu klasör değil dosya adının
parçası sanıp siteyi düz bir dosya yığınına çeviriyor. Python'ın zipfile'ı her
zaman düz bölü yazar.

Gizli dosyalar da dahildir — .htaccess olmadan yönlendirmeler ve 3D/AR MIME
tipleri çalışmaz.
"""

import os
import sys
import zipfile

DIST = "dist"
OUT = "site.zip"


def main() -> int:
    if not os.path.isdir(DIST):
        print(f"{DIST}/ yok — önce 'npm run build' çalıştırın.")
        return 1

    if os.path.exists(OUT):
        os.remove(OUT)

    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for root, _dirs, files in os.walk(DIST):
            for name in files:
                full = os.path.join(root, name)
                rel = os.path.relpath(full, DIST).replace(os.sep, "/")
                z.write(full, rel)

    with zipfile.ZipFile(OUT) as z:
        names = z.namelist()

    mb = os.path.getsize(OUT) / (1024 * 1024)
    print(f"site.zip hazir: {mb:.1f} MB, {len(names)} dosya")
    if ".htaccess" not in names:
        print("UYARI: .htaccess pakete girmedi!")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
