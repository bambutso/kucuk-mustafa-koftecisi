import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems, type GalleryItem } from "../data/gallery";
import { images } from "../data/restaurant";
import { useContent } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { PageHeader } from "../components/ui/PageHeader";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { cn } from "../utils/cn";
import { gallerySrcSet } from "../utils/images";

function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const content = useContent();
  const ui = content.ui.gallery;
  const item = items[index];

  const prev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate],
  );
  const next = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate],
  );

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[70] flex flex-col bg-coal/[0.97] backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="flex justify-end p-4">
        <button
          ref={closeRef}
          type="button"
          aria-label={content.ui.common.close}
          onClick={onClose}
          className="p-2 text-cream/70 transition-colors hover:text-ember"
        >
          <X className="h-7 w-7" />
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-center gap-2 px-2 pb-6 sm:gap-4 sm:px-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label={ui.prev}
          onClick={prev}
          className="shrink-0 p-2 text-cream/60 transition-colors hover:text-ember"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <figure className="flex max-h-full min-w-0 flex-col items-center">
          <motion.img
            key={item.id}
            src={item.src}
            srcSet={gallerySrcSet(item.src)}
            /* Büyütülmüş görünüm: neredeyse ekran genişliği kadar */
            sizes="90vw"
            alt={item.alt}
            className="max-h-[72vh] w-auto max-w-full border border-copper/30 object-contain"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-3 px-4 text-center">
            <span className="font-display text-lg italic text-cream/85">
              {content.gallery[item.id]?.caption ?? item.caption}
            </span>
            {!item.authentic && (
              <Badge variant="cream">{ui.representative}</Badge>
            )}
          </figcaption>
          <p className="mt-1.5 text-xs text-cream/35">
            {index + 1} / {items.length}
          </p>
        </figure>

        <button
          type="button"
          aria-label={ui.next}
          onClick={next}
          className="shrink-0 p-2 text-cream/60 transition-colors hover:text-ember"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const content = useContent();
  const ui = content.ui.gallery;
  usePageMeta(ui.docTitle, ui.docDesc);

  const [filter, setFilter] = useState<string>("hepsi");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    { id: "hepsi", label: ui.filterAll },
    { id: "mekan", label: ui.filterPlace },
    { id: "koz", label: ui.filterEmber },
    { id: "sofra", label: ui.filterTable },
  ];

  const visibleItems = useMemo(
    () =>
      filter === "hepsi"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  return (
    <>
      <PageHeader
        eyebrow={ui.eyebrow}
        title={ui.title}
        lead={ui.lead}
        image={images.skewerSpread}
      />

      <div className="bg-charcoal py-14 md:py-20">
        <Container>
          {/* Filtre */}
          <div
            role="group"
            aria-label={ui.filterAria}
            className="no-scrollbar -mx-5 flex overflow-x-auto px-5 sm:mx-0 sm:px-0"
          >
            {filterCategories.map((category) => {
              const isActive = filter === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setFilter(category.id);
                    setLightboxIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={cn(
                    "relative shrink-0 whitespace-nowrap px-4 py-3 font-sans text-sm transition-colors",
                    isActive
                      ? "font-semibold text-ember"
                      : "text-cream/60 hover:text-cream",
                  )}
                >
                  {category.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="kor-line absolute inset-x-3 bottom-0"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Masonry ızgara */}
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {visibleItems.map((item, i) => (
              <Reveal
                key={item.id}
                delay={Math.min(i * 0.05, 0.3)}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden border border-earth/30 text-left transition-colors hover:border-copper/60"
                  aria-label={ui.enlarge(
                    content.gallery[item.id]?.caption ?? item.caption,
                  )}
                >
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    fallbackLabel={item.caption}
                    loading="lazy"
                    /* Masonry: 1 → 2 → 3 sütun; en geniş kapta ~350px */
                    sizes="(min-width: 1200px) 350px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                    className={cn(
                      "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                      item.authentic && "warm-photo",
                    )}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-coal/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-sm italic text-cream">
                      {content.gallery[item.id]?.caption ?? item.caption}
                    </span>
                  </span>
                  {!item.authentic && (
                    <Badge
                      variant="cream"
                      className="absolute right-3 top-3 bg-coal/70"
                    >
                      {ui.representative}
                    </Badge>
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-cream/40">
            {ui.disclaimer}
          </p>
        </Container>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && visibleItems[lightboxIndex] && (
          <Lightbox
            items={visibleItems}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </>
  );
}
