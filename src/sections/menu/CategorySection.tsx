import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Info } from "lucide-react";
import type { MenuCategory, MenuItem } from "../../types/menu";
import { useContent } from "../../i18n";
import { MenuRow } from "./MenuRow";
import { cn } from "../../utils/cn";

interface CategorySectionProps {
  category: MenuCategory;
  /** Mobilde accordion davranışı; masaüstünde her bölüm açık kalır. */
  collapsible: boolean;
  open: boolean;
  onToggle: () => void;
  onView3D?: (item: MenuItem) => void;
}

/**
 * Ölçülü kalemler (rakılar) satır içinde kendi fiyat listesini açtığı için
 * yüksek olur; o grupları iki sütuna bölmek okumayı zorlaştırıyor.
 */
function ItemList({
  items,
  category,
  onView3D,
}: {
  items: MenuItem[];
  category: MenuCategory;
  onView3D?: (item: MenuItem) => void;
}) {
  const cokSutunlu = !items.some((item) => item.variants?.length);
  return (
    <div className={cn("grid gap-x-14", cokSutunlu && "lg:grid-cols-2")}>
      {items.map((item) => (
        <MenuRow
          key={item.id}
          item={item}
          priceOnRequest={category.priceOnRequest}
          onView3D={onView3D}
        />
      ))}
    </div>
  );
}

export function CategorySection({
  category,
  collapsible,
  open,
  onToggle,
  onView3D,
}: CategorySectionProps) {
  const reduceMotion = useReducedMotion();
  const ui = useContent().ui.menuPage;
  const expanded = !collapsible || open;

  /* Grup tanımı olmayan kategorilerde tüm ürünler tek listede kalır. */
  const ungrouped = category.groups
    ? category.items.filter((item) => !item.group)
    : category.items;
  const groups = (category.groups ?? [])
    .map((group) => ({
      ...group,
      items: category.items.filter((item) => item.group === group.id),
    }))
    .filter((group) => group.items.length > 0);

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
        {/* Fiyatı sorulacak kategoride not, başlık altı değil kutu içinde durur */}
        {category.note && !category.priceOnRequest && (
          <p className="mt-1.5 text-sm italic text-cream/45">{category.note}</p>
        )}
      </div>
      <div className="flex items-center gap-3 pb-1">
        <span className="text-xs uppercase tracking-[0.2em] text-cream/35">
          {ui.itemsCount(category.items.length)}
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
            {/* Balık gibi fiyatı güne göre değişen kategorilerde not öne çıkar */}
            {category.priceOnRequest && category.note && (
              <p className="mt-6 flex items-start gap-3 border border-copper/35 bg-coffee/60 px-4 py-3.5 text-sm leading-relaxed text-cream/75">
                <Info aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                {category.note}
              </p>
            )}

            {/* Grupsuz ürünler önce; alt başlıklı gruplar ardından */}
            {ungrouped.length > 0 && (
              <div className="pt-4">
                <ItemList
                  items={ungrouped}
                  category={category}
                  onView3D={onView3D}
                />
              </div>
            )}

            {groups.map((group) => (
              <div key={group.id}>
                <h3 className="mt-9 flex items-center gap-4 font-display text-xl font-semibold text-copper first:mt-6">
                  {group.title}
                  <span aria-hidden className="h-px flex-1 bg-earth/35" />
                  <span className="text-xs uppercase tracking-[0.2em] text-cream/30">
                    {ui.itemsCount(group.items.length)}
                  </span>
                </h3>
                {group.note && (
                  <p className="mt-1 text-xs italic text-cream/40">
                    {group.note}
                  </p>
                )}
                <div className="pt-2">
                  <ItemList
                    items={group.items}
                    category={category}
                    onView3D={onView3D}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
