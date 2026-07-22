/**
 * media/gallery/*.jpg kaynaklarından public/gallery/<ad>-<genişlik>.webp üretir
 * ve src/data/imageManifest.ts dosyasını yazar.
 *
 * Elle çalıştırılır: `npm run images`. Build'e bağlı DEĞİL — üretilen dosyalar
 * repoda durur, böylece CI'da sharp'ın yerel ikilisine bağımlılık olmaz.
 * Yeni bir Instagram karesi eklendiğinde: media/gallery'ye at, komutu çalıştır.
 *
 * Neden birden çok genişlik: kareler 1440px, telefonda ~390px'lik alanda
 * görünüyor. srcSet ile tarayıcı ekranına uyanı indirir (bkz. ImageWithFallback).
 */
import { readdirSync, statSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = resolve(ROOT, "media/gallery");
const OUT_DIR = resolve(ROOT, "public/gallery");
const MANIFEST = resolve(ROOT, "src/data/imageManifest.ts");

/** Hedef genişlikler; kaynaktan büyükleri üretilmez (görsel büyütülmez). */
const WIDTHS = [480, 960, 1440];
const QUALITY = 80;

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const sources = readdirSync(SRC_DIR)
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

const manifest = {};
let before = 0;
let after = 0;

for (const file of sources) {
  const src = resolve(SRC_DIR, file);
  const name = basename(file).replace(/\.[^.]+$/, "");
  const image = sharp(src);
  const { width: natural } = await image.metadata();
  before += statSync(src).size;

  /* Kaynaktan küçük hedefler + kaynağın kendi genişliği (1440'ı aşmadan) */
  const cap = Math.min(natural, WIDTHS[WIDTHS.length - 1]);
  const widths = [...new Set([...WIDTHS.filter((w) => w < cap), cap])].sort(
    (a, b) => a - b,
  );

  for (const width of widths) {
    const out = resolve(OUT_DIR, `${name}-${width}.webp`);
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(out);
    after += statSync(out).size;
  }

  manifest[name] = widths;
  console.log(
    `${name.padEnd(20)} ${natural}px → ${widths.join(", ")}  (kaynak ${kb(statSync(src).size)})`,
  );
}

const lines = [
  "/* OTOMATİK ÜRETİLDİ — `npm run images` (scripts/gen-images.mjs). Elle düzenlemeyin. */",
  "",
  "/** Yerel galeri karelerinin üretilmiş WebP genişlikleri: dosya adı → [genişlikler] */",
  "export const IMAGE_WIDTHS: Record<string, number[]> = {",
  ...Object.entries(manifest).map(
    ([name, widths]) => `  "${name}": [${widths.join(", ")}],`,
  ),
  "};",
  "",
];
writeFileSync(MANIFEST, lines.join("\n"), "utf8");

console.log(
  `\n${sources.length} görsel → ${Object.values(manifest).flat().length} WebP.` +
    ` Kaynak toplamı ${kb(before)}, üretilen toplam ${kb(after)}.`,
);
