/**
 * "Bordo BEYAZ" (açık zemin) varyantını üretir: koyu-tema dosyalarını açık
 * temaya çevirir. Yalnızca ÖNİZLEME içindir (GitHub Pages /beyaz/).
 *
 * Kullanım (CI ya da yerelde): önce KOYU build alınır, sonra bu script
 * çalıştırılıp BEYAZ build alınır. Yereldeki denemeden sonra geri almak için:
 *   git checkout -- src/styles/global.css src/components/ui/Button.tsx src/sections/home/Hero.tsx
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(resolve(root, p), "utf8");
const write = (p, s) => writeFileSync(resolve(root, p), s, "utf8");
const swap = (p, pairs) => {
  let t = read(p);
  for (const [from, to] of pairs) {
    if (!t.includes(from)) throw new Error(`Beklenen metin bulunamadı (${p}): ${from.slice(0, 60)}`);
    t = t.split(from).join(to);
  }
  write(p, t);
};

// 1) global.css — @theme token'ları (koyu bordo → açık bordo) + color-scheme
swap("src/styles/global.css", [
  ["--color-charcoal: #1f0c10;", "--color-charcoal: #f4ebdd;"],
  ["--color-coal: #150609;", "--color-coal: #eaddc9;"],
  ["--color-coffee: #331519;", "--color-coffee: #fdf8f0;"],
  ["--color-earth: #6d343c;", "--color-earth: #cbb393;"],
  ["--color-copper: #cfa269;", "--color-copper: #8a1c22;"],
  ["--color-cream: #f5ece1;", "--color-cream: #2c1512;"],
  ["--color-ember: #b23640;", "--color-ember: #7d151b;"],
  ["color-scheme: dark;", "color-scheme: light;"],
]);

// 2) Button — birincil buton metni açık kalsın (bordo dolgu üzerinde)
swap("src/components/ui/Button.tsx", [
  ["bg-ember text-cream hover:bg-copper", "bg-ember text-white hover:bg-copper"],
]);

// 3) Hero — koyu karartma katmanlarını açık (krem) örtüye çevir
swap("src/sections/home/Hero.tsx", [
  [
    '<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-coal/70 to-coal/60" />',
    '<div className="absolute inset-0 bg-charcoal/82" />',
  ],
  [
    '<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(20,17,16,0.82)_100%)]" />',
    '<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(244,235,221,0.85)_100%)]" />',
  ],
]);

console.log("Bordo BEYAZ tema uygulandı (global.css, Button.tsx, Hero.tsx).");
