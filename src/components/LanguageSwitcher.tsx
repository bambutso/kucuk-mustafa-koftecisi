import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Languages } from "lucide-react";
import { useLang } from "../i18n";
import { LANGS } from "../i18n/types";
import { cn } from "../utils/cn";

/**
 * Sol altta her zaman görünen dil kutusu.
 * Alt kenara DEĞMEZ (margin bırakır): iOS 26 Safari alt çubuk rengini viewport
 * kenarındaki sabit elemanlardan örnekler; kenara değmeyen küçük buton güvenlidir.
 */
export function LanguageSwitcher() {
  const { lang, setLang, content } = useLang();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.code === lang);

  return (
    <div
      ref={rootRef}
      className="fixed z-[65]"
      style={{
        left: "max(1rem, env(safe-area-inset-left))",
        bottom: "calc(1rem + env(safe-area-inset-bottom))",
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={content.ui.langBox.label}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="mb-2 w-44 border border-earth/50 bg-coal/95 py-1.5 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md"
          >
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-2 text-start font-sans text-sm transition-colors",
                      active
                        ? "font-semibold text-ember"
                        : "text-cream/75 hover:bg-coffee/70 hover:text-cream",
                    )}
                  >
                    <span>{l.label}</span>
                    {active && <Check aria-hidden className="h-3.5 w-3.5" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={content.ui.langBox.label}
        className={cn(
          "flex items-center gap-2 border border-earth/50 bg-coal/90 px-3.5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-cream/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors",
          "hover:border-copper/60 hover:text-ember",
        )}
      >
        <Languages aria-hidden className="h-4 w-4 text-copper" />
        {current?.code.toUpperCase()}
      </button>
    </div>
  );
}
