/**
 * public/sitemap.xml ve public/robots.txt üretir. Her build öncesi çalışır (prebuild),
 * böylece sayfa ya da dil eklendiğinde sitemap elle güncellenmeyi beklemez.
 * Sayfa/dil tablosu scripts/site.mjs içindedir.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, DEFAULT_LANG, LANGS, ROUTES, urlFor } from "./site.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const alternates = (path) =>
  [
    ...LANGS.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${urlFor(path, lang)}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(path, DEFAULT_LANG)}"/>`,
  ].join("\n");

/* Her dil ayrı <url> girdisidir; hepsi birbirinin alternatifini bildirir. */
const entries = ROUTES.flatMap(({ path, priority }) =>
  LANGS.map((lang) =>
    [
      "  <url>",
      `    <loc>${urlFor(path, lang)}</loc>`,
      alternates(path),
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n"),
  ),
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

/* GitHub Pages proje sitesinde robots.txt yalnızca alan adı kökünde geçerlidir;
   burada özel alan adına geçiş ihtimali için hazır durur. Yönetim paneli
   ayrıca sayfa içinde noindex meta'sı taşır — asıl koruma odur. */
const robots = [
  "User-agent: *",
  "Allow: /",
  "Disallow: /yonetim",
  "",
  `Sitemap: ${SITE}sitemap.xml`,
  "",
].join("\n");

mkdirSync(resolve(ROOT, "public"), { recursive: true });
writeFileSync(resolve(ROOT, "public/sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(ROOT, "public/robots.txt"), robots, "utf8");

console.log(
  `sitemap.xml: ${entries.length} adres (${ROUTES.length} sayfa × ${LANGS.length} dil), robots.txt yazıldı.`,
);
