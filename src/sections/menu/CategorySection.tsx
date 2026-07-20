import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { MenuCategory } from "../../types/menu";
import { MenuCard } from "./MenuCard";
import { cn } from "../../utils/cn";

interface CategorySectionProps {
  category: MenuCategory;
  /** Mobilde accordion davranışı; masaüstünde her bölüm açık kalır. */
  collapsible: boolean;
  open: boolean;
  onToggle: () => void;
}

export function CategorySection({
  category,
  collapsible,
  open,
  onToggle,
}: CategorySectionProps) {
  const reduceMotion = useReducedMotion();
  const expanded = !collapsible || open;
  const panelId = `panel-${category.id}`;
  const headingId = `heading-${category.id}`;

  const header = (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2
          id={headingId}
          className="font-display text-3xl font-semibold text-cream md:text-4xl"
        >
          {category.title}
        </h2>
        {category.note && (
          <p className="mt-1.5 text-sm italic text-cream/45">{category.note}</p>
        )}
      </div>
      <div className="flex items-center gap-3 pb-1">
        <span className="text-xs uppercase tracking-[0.2em] text-cream/35">
          {category.items.length} ürün
        </span>
        {collapsible && (
          <ChevronDown
            aria-hidden
            className={cn(
              "h-5 w-5 text-copper transition-transform duration-300",
              expanded && "rotate-180",
            )}
          />
        )}
      </div>
    </div>
  );

  return (
    <section
      id={category.id}
      aria-labelledby={headingId}
      className="scroll-mt-48 border-b border-earth/25 py-10 last:border-b-0 md:scroll-mt-40"
    >
      {collapsible ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="block w-full text-left"
        >
          {header}
        </button>
      ) : (
        header
      )}

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 pt-8 sm:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
