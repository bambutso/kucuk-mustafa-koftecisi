/**
 * Her rota için dist/<yol>/index.html yazar (postbuild).
 *
 * NEDEN: GitHub Pages'te tek index.html'li SPA'da /menu gibi derin linkler
 * 404.html üzerinden açılır — sayfa görünür ama sunucu HTTP 404 döner ve
 * Google o adresi indekslemez. Her rotaya gerçek bir dosya koyunca 200 döner.
 *
 * Dosyalar aynı JS paketini yükler; fark yalnızca crawler'ın JS çalıştırmadan
 * gördüğü baş etiketlerdedir (title, description, canonical, hreflang, og:*).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DEFAULT_LANG, LANGS, ROUTES, SITE, urlFor } from "./site.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = resolve(ROOT, "dist");

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/** Aynı sayfanın tüm dil sürümlerini ve kanonik adresini bildirir. */
function headLinks(path) {
  return [
    `    <link rel="canonical" href="${urlFor(path, DEFAULT_LANG)}" />`,
    ...LANGS.map(
      (lang) =>
        `    <link rel="alternate" hreflang="${lang}" href="${urlFor(path, lang)}" />`,
    ),
    `    <link rel="alternate" hreflang="x-default" href="${urlFor(path, DEFAULT_LANG)}" />`,
    `    <meta property="og:url" content="${urlFor(path, DEFAULT_LANG)}" />`,
  ].join("\n");
}

function render(template, { path, title, description }) {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  return template
    /* index.html'deki schema.org "url" alanı: alan adı site.mjs'te tek yerde
       durabilsin diye şablonda %SITE_URL% yer tutucusu olarak yazılıdır.
       (npm run dev sırasında yer tutucu ham haliyle görünür, zararsızdır.) */
    .replaceAll("%SITE_URL%", SITE)
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta\s+name="description"[^>]*>/,
      `<meta name="description" content="${d}" />`,
    )
    .replace(
      /<meta\s+property="og:title"[^>]*>/,
      `<meta property="og:title" content="${t}" />`,
    )
    .replace(
      /<meta\s+property="og:description"[^>]*>/,
      `<meta property="og:description" content="${d}" />`,
    )
    .replace("</head>", `${headLinks(path)}\n  </head>`);
}

const template = readFileSync(resolve(DIST, "index.html"), "utf8");

for (const route of ROUTES) {
  const html = render(template, route);
  const dir = resolve(DIST, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "index.html"), html, "utf8");
}

console.log(
  `ön-render: ${ROUTES.length} rota için index.html yazıldı (${ROUTES.map((r) => r.path || "/").join(", ")})`,
);
