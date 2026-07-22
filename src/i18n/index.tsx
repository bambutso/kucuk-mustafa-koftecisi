import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGS, type Lang, type SiteContent } from "./types";
import { tr } from "./tr";
import { en } from "./en";
import { bg } from "./bg";
import { el } from "./el";
import { ar } from "./ar";

const DICTS: Record<Lang, SiteContent> = { tr, en, bg, el, ar };
const STORAGE_KEY = "km-lang";

/** Kanonik dil: URL'de dil parametresi taşımaz, sitenin varsayılanıdır. */
export const DEFAULT_LANG: Lang = "tr";
/** Paylaşılabilir dil linki: ?lang=bg */
export const LANG_PARAM = "lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: SiteContent;
  locale: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function isLang(value: string | null | undefined): value is Lang {
  return !!value && LANGS.some((l) => l.code === value);
}

/**
 * Öncelik: paylaşılan linkteki dil → kayıtlı tercih → Türkçe.
 *
 * Tarayıcı diline göre otomatik geçiş BİLEREK yok: Googlebot siteyi en-US ile
 * gezer, parametresiz (Türkçe kanonik) adreste İngilizce içerik görür ve ana
 * sayfa yanlış dille indekslenirdi. Doğru dile yönlendirmeyi hreflang etiketleri
 * ile sitemap yapar — ziyaretçi zaten arama sonucunda kendi dilindeki adrese düşer.
 */
function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get(LANG_PARAM);
    if (isLang(fromUrl)) return fromUrl;
  } catch {
    /* bozuk sorgu dizesi — sıradaki kaynağa geç */
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* localStorage kapalıysa varsayılan dil */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sessiz geç */
    }
  }, []);

  /* <html lang/dir> — Arapçada sağdan sola düzen */
  useEffect(() => {
    const meta = LANGS.find((l) => l.code === lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = meta?.dir ?? "ltr";
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const meta = LANGS.find((l) => l.code === lang);
    return {
      lang,
      setLang,
      content: DICTS[lang],
      locale: meta?.locale ?? "tr-TR",
    };
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang, LanguageProvider içinde kullanılmalı");
  return ctx;
}

/** Geçerli dilin içerik sözlüğü */
export function useContent(): SiteContent {
  return useLang().content;
}
