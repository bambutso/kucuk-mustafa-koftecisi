import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  /** Saniye cinsinden gecikme — kart dizilerinde kademeli giriş için */
  delay?: number;
  /** Başlangıçtaki dikey kayma (px) */
  y?: number;
  className?: string;
}

/** Scroll ile görünüme girince yumuşak fade-up. Hareket azaltma tercihine saygılıdır. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
