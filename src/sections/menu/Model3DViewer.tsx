import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, Smartphone, X } from "lucide-react";
import type { MenuItem } from "../../types/menu";
import { DEFAULT_LANG, LANG_PARAM, useContent, useLang } from "../../i18n";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/cn";
import { gallerySrcSet } from "../../utils/images";

/** model-viewer kütüphanesi yalnızca modal ilk açıldığında yüklenir. */
let modelViewerPromise: Promise<unknown> | null = null;
function ensureModelViewer(): Promise<unknown> {
  modelViewerPromise ??= import("@google/model-viewer");
  return modelViewerPromise;
}

interface Model3DViewerProps {
  item: MenuItem;
  onClose: () => void;
}

export function Model3DViewer({ item, onClose }: Model3DViewerProps) {
  const content = useContent();
  const { lang } = useLang();
  const ui = content.ui.menuPage;
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const qrRef = useRef<HTMLCanvasElement>(null);
  const [libReady, setLibReady] = useState(false);
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const model = item.model3d;

  useEffect(() => {
    let alive = true;
    ensureModelViewer().then(() => {
      if (alive) setLibReady(true);
    });
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      alive = false;
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  /* Masaüstünde: telefona geçiş için QR kod (AR kamera akışı telefonda çalışır) */
  useEffect(() => {
    if (!isDesktop || !qrRef.current) return;
    /* Sondaki eğik çizgi: GitHub Pages "menu" isteğini "menu/" adresine yönlendirir,
       doğrudan doğru adrese gidip fazladan atlamayı atlıyoruz. Dil de taşınır ki
       QR'ı okuyan misafir sayfayı bulunduğu dilde açsın. */
    const langQuery = lang === DEFAULT_LANG ? "" : `&${LANG_PARAM}=${lang}`;
    const url = `${window.location.origin}${import.meta.env.BASE_URL}menu/?model3d=${item.id}${langQuery}`;
    import("qrcode").then((QRCode) => {
      if (!qrRef.current) return;
      QRCode.toCanvas(qrRef.current, url, {
        width: 128,
        margin: 1,
        color: { dark: "#1b1b1b", light: "#f7f2ea" },
      });
    });
  }, [isDesktop, item.id, lang]);

  if (!model) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} — ${ui.m3dEyebrow}`}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-coal/[0.97] p-4 backdrop-blur-sm sm:p-8"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-3xl flex-col border border-earth/40 bg-coffee"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Başlık */}
        <div className="flex items-center justify-between border-b border-earth/30 px-5 py-4">
          <div>
            <p className="eyebrow text-[0.6rem]">{ui.m3dEyebrow}</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-cream">
              {item.name}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={content.ui.common.close}
            className="p-2 text-cream/60 transition-colors hover:text-ember"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* 3D sahne */}
        <div className="relative min-h-0 flex-1">
          {libReady ? (
            <model-viewer
              src={model.glb}
              ios-src={model.usdz}
              poster={model.poster}
              alt={model.alt}
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="auto"
              ar-placement="floor"
              camera-controls
              touch-action="pan-y"
              auto-rotate
              auto-rotate-delay="1200"
              shadow-intensity="1.1"
              shadow-softness="0.7"
              exposure="1.05"
              interaction-prompt="auto"
              style={{
                width: "100%",
                height: "min(56vh, 480px)",
                backgroundColor: "#221a15",
              }}
            >
              {/* AR desteklenen cihazlarda model-viewer bu butonu gösterir,
                  desteklenmeyenlerde otomatik gizler */}
              <button
                slot="ar-button"
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-[2px] bg-ember px-5 py-3 font-sans text-sm font-semibold text-coal shadow-[0_0_28px_rgba(217,119,47,0.5)] transition-transform active:scale-95"
              >
                <Camera aria-hidden className="h-4 w-4" />
                {ui.m3dArButton}
              </button>
            </model-viewer>
          ) : (
            <div
              className="flex w-full flex-col items-center justify-center gap-5 bg-[#221a15]"
              style={{ height: "min(56vh, 480px)" }}
              role="status"
            >
              {model.poster && (
                <img
                  src={model.poster}
                  srcSet={gallerySrcSet(model.poster)}
                  sizes="176px"
                  alt=""
                  className="h-32 w-44 object-cover opacity-40"
                />
              )}
              <p className="font-display text-lg italic text-cream/60">
                {ui.m3dPreparing}
              </p>
              <div className="kor-line kor-line--live w-28" />
            </div>
          )}
        </div>

        {/* Alt bilgi */}
        <div
          className={cn(
            "flex flex-col gap-4 border-t border-earth/30 px-5 py-4",
            isDesktop && "sm:flex-row sm:items-center sm:justify-between",
          )}
        >
          <p className="flex items-start gap-2.5 text-xs leading-relaxed text-cream/55">
            <Smartphone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
            <span>{ui.m3dHint}</span>
          </p>
          {isDesktop && (
            <div className="flex shrink-0 items-center gap-3">
              <canvas
                ref={qrRef}
                className="h-24 w-24 border border-copper/40"
                aria-label={ui.m3dQrAria}
              />
              <p className="max-w-32 text-[0.65rem] leading-snug text-cream/45">
                {ui.m3dQrHint}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
