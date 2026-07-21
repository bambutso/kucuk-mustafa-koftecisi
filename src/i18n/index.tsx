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

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: SiteContent;
  locale: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.some((l) => l.code === stored)) return stored as Lang;
  } catch {
    /* localStorage kapalıysa varsayılan dil */
  }
  return "tr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

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
