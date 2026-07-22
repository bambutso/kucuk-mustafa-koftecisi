/**
 * Build betiklerinin ortak sayfa/dil tablosu (gen-sitemap.mjs + prerender.mjs).
 *
 * Bu dosya düz .mjs olduğu için TS kaynaklarını import edemez; aşağıdaki listeler
 * şunlarla elle eşleşmelidir:
 *   ROUTES  → src/App.tsx rotaları, title/description → src/i18n/tr.ts (ui.<sayfa>.docTitle/docDesc)
 *   LANGS   → src/i18n/types.ts (LANGS)
 */

/**
 * Yayın adresi — sitenin alan adı SADECE burada tanımlıdır.
 * sitemap.xml, robots.txt, canonical/hreflang etiketleri ve index.html içindeki
 * schema.org "url" alanı hep buradan beslenir.
 *
 * Alan adı değişirse yalnızca aşağıdaki satırı düzenle. Sondaki eğik çizgi şart.
 * GitHub Pages'e (alt yol altında) yayın için SITE_URL + BASE_PATH ortam
 * değişkenleri geçici olarak ezer — bkz. .github/workflows/deploy.yml.
 */
export const SITE = process.env.SITE_URL ?? "https://www.kucukmustafakoftecisi.com/";

/** URL'de parametre taşımayan kanonik dil */
export const DEFAULT_LANG = "tr";
export const LANGS = ["tr", "en", "bg", "el", "ar", "es", "ja"];

/**
 * Herkese açık rotalar. /yonetim bilerek yok: yönetim paneli noindex taşır.
 * path kök için "", diğerleri sonda eğik çizgiyle — GitHub Pages dizin
 * index.html'i böyle servis eder, yönlendirme (301) olmadan 200 döner.
 */
export const ROUTES = [
  {
    path: "",
    heading: "Küçük Mustafa Köftecisi — Kırklareli Köftesi — 1939'dan Beri",
    intro:
      "Dana etine Kırklareli'nin coğrafi işaretli Kıvırcık kuzusu katılır; kuru soğan ve bayat ekmekle yoğrulur, meşe kömürünün korunda mühürlenir. Baharat azdır — damakta kalan et olsun diye. Yanında piyazlık soğan, közlenmiş yeşil biber ve ev yapımı acı sos.",
    priority: "1.0",
    title: "Küçük Mustafa Köftecisi — Kırklareli Köftesi, 1939'dan Beri",
    description:
      "1939'dan günümüze yaşayan efsane. Meşe kömürünün korunda, dört kuşaktır aynı usulle pişen Kırklareli köftesi.",
  },
  {
    path: "menu/",
    heading: "Menü",
    intro:
      "Közden gelen ne varsa; çorbasından tatlısına, Trakya usulü. İmza köfteler, ızgaralar, mezeler, salatalar, tatlılar ve içecekler.",
    priority: "0.9",
    title: "Menü — Küçük Mustafa Köftecisi",
    description:
      "Közde köfte, piyaz, közlenmiş biber ve ocaktan çıkan diğer lezzetler. Kırklareli'nin 1939'dan beri değişmeyen sofrası.",
  },
  {
    path: "hikayemiz/",
    heading: "Hikayemiz",
    intro:
      "1935'te Arasta Çarşısı'nın önündeki bir seyyar arabayla başladı; 1939'da Kasaplar Arası'ndaki dükkâna taşındı. Dört kuşaktır aynı ocak, aynı harç.",
    priority: "0.8",
    title: "Hikayemiz — Küçük Mustafa Köftecisi",
    description:
      "1935'te bir seyyar arabayla başlayan, dört kuşaktır sönmeyen bir közün hikâyesi.",
  },
  {
    path: "mekan/",
    heading: "Mekân",
    intro:
      "Şevket Dingiloğlu Parkı'nın karşısında, Kasaplar Arası'nda; önü bir zamanlar bakkal, arkası hep köfteci olan dükkân.",
    priority: "0.8",
    title: "Mekân — Küçük Mustafa Köftecisi",
    description:
      "Kasaplar Arası'nda ahşap salon ve meşe kömürlü ocak. Özel organizasyon ve toplu yemek için rezervasyon.",
  },
  {
    path: "galeri/",
    heading: "Galeri",
    intro:
      "Dükkân, köz ve sofra: Küçük Mustafa Köftecisi'nden gerçek kareler.",
    priority: "0.7",
    title: "Galeri — Küçük Mustafa Köftecisi",
    description: "Közden ve sofradan kareler: köfte, salon ve ocak başı.",
  },
  {
    path: "iletisim/",
    heading: "İletişim",
    intro:
      "Karacaibrahim Mahallesi, Şükrü Naili Geçidi No:1, Kasaplar Arası, Merkez / Kırklareli. Telefon: 0288 212 76 12. Haftanın 7 günü 10:00–02:00.",
    priority: "0.7",
    title: "İletişim — Küçük Mustafa Köftecisi",
    description:
      "Karacaibrahim Mah. Kasaplar Arası, Kırklareli. Haftanın 7 günü 09:00–03:00 · 0288 212 76 12",
  },
  {
    path: "rezervasyon/",
    heading: "Rezervasyon",
    intro:
      "Rezervasyonlar telefonla alınır: 0288 212 76 12. Haftanın 7 günü 10:00–02:00.",
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
