import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { images, restaurant } from "../../data/restaurant";
import { buttonVariants } from "../../components/ui/Button";
import { Stamp } from "../../components/ui/Stamp";
import { cn } from "../../utils/cn";

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
      {/* Arka plan: karanlıkta yanan köz — yavaş açılış + scroll parallax */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <motion.img
          src={images.heroFire}
          alt=""
          className="h-full w-full scale-105 object-cover object-[38%_center] md:object-center"
          initial={reduceMotion ? undefined : { scale: 1.14, opacity: 0.6 }}
          animate={reduceMotion ? undefined : { scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.6, ease: "easeOut" }}
        />
        {/* Közün etrafını saran karanlık — metin okunurluğu */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-coal/55 to-coal/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(20,17,16,0.75)_100%)]" />
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
