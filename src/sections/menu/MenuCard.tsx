import type { ComponentType } from "react";
import { Box, ChefHat, Flame, MapPin, Sparkles } from "lucide-react";
import type { ItemTag, MenuItem } from "../../types/menu";
import { Badge, type BadgeProps } from "../../components/ui/Badge";
import { SpiceIndicator } from "../../components/ui/SpiceIndicator";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import { formatPrice } from "../../utils/format";
import { cn } from "../../utils/cn";

const TAG_META: Record<
  ItemTag,
  {
    label: string;
    variant: BadgeProps["variant"];
    Icon: ComponentType<{ className?: string }>;
  }
> = {
  "sef-onerisi": { label: "Şef Önerisi", variant: "copper", Icon: ChefHat },
  "cok-tercih": { label: "En Çok Tercih", variant: "ember", Icon: Flame },
  yeni: { label: "Yeni", variant: "cream", Icon: Sparkles },
  yoresel: { label: "Yöresel", variant: "earth", Icon: MapPin },
};

interface MenuCardProps {
  item: MenuItem;
  /** Ürünün 3D/AR görünümünü açar (model3d tanımlı ürünlerde buton çıkar) */
  onView3D?: (item: MenuItem) => void;
}

export function MenuCard({ item, onView3D }: MenuCardProps) {
  const hasMeta =
    (item.tags && item.tags.length > 0) || item.spice !== undefined;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden border border-earth/30 bg-coffee/70",
        "transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:bg-coffee hover:shadow-[0_16px_36px_-16px_rgba(217,119,47,0.3)]",
      )}
    >
      {item.image && (
        <div className="overflow-hidden">
          <ImageWithFallback
            src={item.image}
            alt={item.imageAlt ?? item.name}
            fallbackLabel={item.name}
            loading="lazy"
            className="warm-photo aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline">
          <h3 className="font-display text-xl font-semibold leading-tight text-cream">
            {item.name}
          </h3>
          <span aria-hidden className="price-leader" />
          <p className="whitespace-nowrap font-display text-lg font-semibold text-copper">
            {formatPrice(item.price)}
          </p>
        </div>

        {item.unit && (
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-cream/40">
            {item.unit}
          </p>
        )}

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream/60">
          {item.description}
        </p>

        {hasMeta && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {item.tags?.map((tag) => {
              const meta = TAG_META[tag];
              return (
                <Badge key={tag} variant={meta.variant}>
                  <meta.Icon aria-hidden className="h-3 w-3" />
                  {meta.label}
                </Badge>
              );
            })}
            {item.spice !== undefined && <SpiceIndicator level={item.spice} />}
          </div>
        )}

        {item.model3d && onView3D && (
          <button
            type="button"
            onClick={() => onView3D(item)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-copper/50 bg-coal/40 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-copper transition-all duration-300 hover:border-ember hover:text-ember hover:shadow-[0_0_20px_rgba(217,119,47,0.25)]"
          >
            <Box aria-hidden className="h-4 w-4" />
            3D Gör · Masanıza Koyun
          </button>
        )}
      </div>
    </article>
  );
}
