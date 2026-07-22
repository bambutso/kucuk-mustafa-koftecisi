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

const escapeText = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * `#root` içine, sayfanın GERÇEKTEN gösterdiği başlık ve giriş metnini basar.
 *
 * NEDEN: Bu bir SPA; JavaScript çalışmadan gövde tamamen boştu — ne <h1> vardı
 * ne de tek satır metin. Arama motoru içeriği görmek için JS çalıştırmak
 * zorunda kalıyordu ve ziyaretçi paket yüklenene kadar boş ekrana bakıyordu.
 *
 * Basılan metin sayfanın kendi içeriğiyle AYNIDIR (site.mjs'teki heading/intro,
 * i18n'deki Türkçe metinlerin özeti) — gizli/farklı içerik değildir. React
 * yüklenince bu blok yerini gerçek uygulamaya bırakır.
 */
function seoBlock({ heading, intro, path }) {
  if (!heading) return "";
  const digerSayfalar = ROUTES.filter((r) => r.path !== path)
    .map(
      (r) =>
        `<a href="${SITE}${r.path}" style="color:#d9772f;margin-right:1rem">${escapeText(r.heading ?? r.title)}</a>`,
    )
    .join("");
  return (
    `<div style="max-width:60rem;margin:0 auto;padding:6rem 1.5rem;color:#e8ded2;font-family:Georgia,serif">` +
    `<h1 style="font-size:2.5rem;font-weight:600;margin:0 0 1rem">${escapeText(heading)}</h1>` +
    `<p style="line-height:1.7;color:#b9ab9c">${escapeText(intro)}</p>` +
    `<p style="margin-top:2rem;font-size:.9rem">Küçük Mustafa Köftecisi · Karacaibrahim Mah. Şükrü Naili Geçidi No:1, Kasaplar Arası, Merkez / Kırklareli · ` +
    `<a href="tel:+902882127612" style="color:#d9772f">0288 212 76 12</a> · Haftanın 7 günü 10:00–02:00</p>` +
    `<nav style="margin-top:1.5rem;font-size:.9rem">${digerSayfalar}</nav>` +
    `</div>`
  );
}

function render(template, route) {
  const { path, title, description } = route;
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
    .replace("</head>", `${headLinks(path)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${seoBlock(route)}</div>`);
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
