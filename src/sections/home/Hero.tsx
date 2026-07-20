import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { igImages, images, restaurant } from "../../data/restaurant";
import { buttonVariants } from "../../components/ui/Button";
import { Stamp } from "../../components/ui/Stamp";
import { cn } from "../../utils/cn";

/** v2: hero, işletmenin kendi karelerinden oluşan yavaş bir vitrin */
const slides = [
  {
    src: igImages.kofteTabak,
    alt: "Ekmek üstünde iki iri köfte, söğüş garnitürüyle",
    position: "center 55%",
  },
  {
    src: images.ustaGrill,
    alt: "Usta, meşe kömürünün korunda köfteleri pişirirken",
    position: "center 40%",
  },
  {
    src: igImages.salonBordo,
    alt: "Yenilenen salon: bordo kadife koltuklar",
    position: "center 60%",
  },
] as const;

const SLIDE_MS = 6500;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setSlide((current) => (current + 1) % slides.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-coal"
      aria-label="Karşılama"
    >
      {/* Arka plan: işletmenin kendi kareleri, yavaş geçişle */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={slides[slide].src}
            src={slides[slide].src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: slides[slide].position }}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{
              opacity: { duration: 1.6, ease: "easeInOut" },
              scale: { duration: SLIDE_MS / 1000 + 2, ease: "linear" },
            }}
          />
        </AnimatePresence>
        {/* Metin okunurluğu için karartma katmanları */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-coal/70 to-coal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(20,17,16,0.82)_100%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 px-5 pb-24 pt-32 text-center"
        style={reduceMotion ? undefined : { opacity: contentOpacity }}
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
      >
        <motion.p variants={item} className="eyebrow">
          Kırklareli · Kasaplar Arası
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-6xl font-semibold leading-[0.95] text-cream sm:text-7xl md:text-8xl"
        >
          <span className="sr-only">{restaurant.name} — </span>
          1939'dan Beri
        </motion.h1>

        <motion.div variants={item} className="mx-auto mt-8 w-44">
          <div className="kor-line kor-line--live" />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-md font-display text-xl italic leading-snug text-cream/80 sm:text-2xl"
        >
          Meşe kömürünün korunda, dört kuşaktır aynı köfte.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/menu" className={cn(buttonVariants({ size: "lg" }), "w-56 sm:w-auto")}>
            Menüyü İncele
          </Link>
          <a
            href={restaurant.phone.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-56 sm:w-auto",
            )}
          >
            <Phone aria-hidden className="h-4 w-4" />
            Bizi Ara
          </a>
        </motion.div>

        {/* Slayt göstergesi */}
        {!reduceMotion && (
          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-2"
            aria-hidden
          >
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                tabIndex={-1}
                onClick={() => setSlide(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === slide ? "w-8 bg-ember" : "w-3 bg-cream/25",
                )}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Damga — masaüstünde sağ alt köşe */}
      <Stamp className="absolute bottom-10 right-10 z-10 hidden h-28 w-28 opacity-70 lg:block" />

      {/* Kaydırma göstergesi */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/50"
      >
        <ChevronDown className="h-6 w-6 motion-safe:animate-bounce" />
      </div>
    </section>
  );
}
