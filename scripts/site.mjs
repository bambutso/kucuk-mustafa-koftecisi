/**
 * Build betiklerinin ortak sayfa/dil tablosu (gen-sitemap.mjs + prerender.mjs).
 *
 * Bu dosya düz .mjs olduğu için TS kaynaklarını import edemez; aşağıdaki listeler
 * şunlarla elle eşleşmelidir:
 *   ROUTES  → src/App.tsx rotaları, title/description → src/i18n/tr.ts (ui.<sayfa>.docTitle/docDesc)
 *   LANGS   → src/i18n/types.ts (LANGS)
 */

/** Yayın adresi. Özel alan adına geçilirse burası ve vite.config.ts base'i birlikte değişir. */
export const SITE = "https://bambutso.github.io/kucuk-mustafa-koftecisi/";

/** URL'de parametre taşımayan kanonik dil */
export const DEFAULT_LANG = "tr";
export const LANGS = ["tr", "en", "bg", "el", "ar"];

/**
 * Herkese açık rotalar. /yonetim bilerek yok: yönetim paneli noindex taşır.
 * path kök için "", diğerleri sonda eğik çizgiyle — GitHub Pages dizin
 * index.html'i böyle servis eder, yönlendirme (301) olmadan 200 döner.
 */
export const ROUTES = [
  {
    path: "",
    priority: "1.0",
    title: "Küçük Mustafa Köftecisi — 1939'dan Beri | Kırklareli",
    description:
      "1939'dan günümüze yaşayan efsane. Meşe kömürünün korunda, dört kuşaktır aynı usulle pişen Kırklareli köftesi.",
  },
  {
    path: "menu/",
    priority: "0.9",
    title: "Menü — Küçük Mustafa Köftecisi",
    description:
      "Közde köfte, piyaz, közlenmiş biber ve ocaktan çıkan diğer lezzetler. Kırklareli'nin 1939'dan beri değişmeyen sofrası.",
  },
  {
    path: "hikayemiz/",
    priority: "0.8",
    title: "Hikayemiz — Küçük Mustafa Köftecisi",
    description:
      "1935'te bir seyyar arabayla başlayan, dört kuşaktır sönmeyen bir közün hikâyesi.",
  },
  {
    path: "mekan/",
    priority: "0.8",
    title: "Mekân — Küçük Mustafa Köftecisi",
    description:
      "Kasaplar Arası'nda 16 masa, 75 kişilik salon. Özel organizasyon ve toplu yemek için rezervasyon.",
  },
  {
    path: "galeri/",
    priority: "0.7",
    title: "Galeri — Küçük Mustafa Köftecisi",
    description: "Közden ve sofradan kareler: köfte, salon ve ocak başı.",
  },
  {
    path: "iletisim/",
    priority: "0.7",
    title: "İletişim — Küçük Mustafa Köftecisi",
    description:
      "Karacaibrahim Mah. Kasaplar Arası, Kırklareli. Haftanın 7 günü 09:00–03:00 · 0288 212 76 12",
  },
  {
    path: "rezervasyon/",
    priority: "0.7",
    title: "Rezervasyon — Küçük Mustafa Köftecisi",
    description:
      "Masanız közün karşısında ayrılsın. Telefonla rezervasyon: 0288 212 76 12",
  },
];

/** Bir sayfanın belirli dildeki tam adresi (kanonik dil parametresizdir). */
export function urlFor(path, lang) {
  return `${SITE}${path}${lang === DEFAULT_LANG ? "" : `?lang=${lang}`}`;
}
