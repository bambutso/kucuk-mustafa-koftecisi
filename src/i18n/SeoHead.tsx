import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_LANG, LANG_PARAM, useLang } from ".";
import { LANGS } from "./types";

/**
 * Dili URL'e yazar ve arama motoru etiketlerini rota/dil değiştikçe günceller.
 *
 * Neden URL'de: dil yalnızca localStorage'da yaşarsa Bulgarca sayfa paylaşılamaz
 * ve arama motoru siteyi tek dilli sanır. Kanonik dil (Türkçe) parametresiz kalır;
 * diğerleri "?lang=bg" taşır. Router içinde çalışmalıdır — her gezinmede yeniden kurar.
 */

/** og:locale biçimi tire değil alt çizgi ister: tr-TR → tr_TR, ar → ar_AR */
function toOgLocale(locale: string): string {
  const [base, region] = locale.split("-");
  return `${base}_${(region ?? base).toUpperCase()}`;
}

/** Aynı seçicideki etiketi günceller, yoksa oluşturur. */
function upsert<T extends HTMLElement>(
  selector: string,
  create: () => T,
): T {
  const existing = document.head.querySelector<T>(selector);
  if (existing) return existing;
  const created = create();
  document.head.appendChild(created);
  return created;
}

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  const link = upsert<HTMLLinkElement>(selector, () => {
    const el = document.createElement("link");
    el.rel = rel;
    if (hreflang) el.hreflang = hreflang;
    return el;
  });
  link.href = href;
}

function setMetaProperty(property: string, content: string) {
  const meta = upsert<HTMLMetaElement>(
    `meta[property="${property}"]`,
    () => {
      const el = document.createElement("meta");
      el.setAttribute("property", property);
      return el;
    },
  );
  meta.content = content;
}

export function SeoHead() {
  const { lang } = useLang();
  const location = useLocation();

  useEffect(() => {
    /* 1) Dili adres çubuğuna yaz — router state'i korunarak. */
    const params = new URLSearchParams(window.location.search);
    const desired = lang === DEFAULT_LANG ? null : lang;
    if (params.get(LANG_PARAM) !== desired) {
      if (desired) params.set(LANG_PARAM, desired);
      else params.delete(LANG_PARAM);
      const query = params.toString();
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
      );
    }

    /* 2) Kanonik ve dil alternatifleri — sorgu dizesi dil dışında taşınmaz.
       Yol sonuna eğik çizgi: ön-render edilmiş dizin adresleriyle (scripts/prerender.mjs)
       aynı kanonik URL çıksın; yoksa /menu ile /menu/ ayrı sayfa sayılır. */
    const path = window.location.pathname.replace(/\/?$/, "/");
    const base = `${window.location.origin}${path}`;
    const urlFor = (code: string) =>
      code === DEFAULT_LANG ? base : `${base}?${LANG_PARAM}=${code}`;

    setLink("canonical", urlFor(lang));
    for (const l of LANGS) setLink("alternate", urlFor(l.code), l.code);
    setLink("alternate", urlFor(DEFAULT_LANG), "x-default");

    /* 3) Paylaşım kartı bu dile ve bu sayfaya işaret etsin. */
    const meta = LANGS.find((l) => l.code === lang);
    setMetaProperty("og:url", urlFor(lang));
    setMetaProperty("og:locale", toOgLocale(meta?.locale ?? "tr-TR"));
    document.head
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((el) => el.remove());
    for (const l of LANGS) {
      if (l.code === lang) continue;
      const el = document.createElement("meta");
      el.setAttribute("property", "og:locale:alternate");
      el.content = toOgLocale(l.locale);
      document.head.appendChild(el);
    }
  }, [lang, location.pathname, location.search]);

  return null;
}
