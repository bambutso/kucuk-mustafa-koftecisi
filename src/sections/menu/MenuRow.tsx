import type { ComponentType } from "react";
import { Box, ChefHat, Flame, MapPin, Sparkles } from "lucide-react";
import type { ItemTag, MenuItem } from "../../types/menu";
import { useContent } from "../../i18n";
import type { SiteContent } from "../../i18n/types";
import { Badge, type BadgeProps } from "../../components/ui/Badge";
import { SpiceIndicator } from "../../components/ui/SpiceIndicator";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import { formatPrice } from "../../utils/format";
import { cn } from "../../utils/cn";

const TAG_META: Record<
  ItemTag,
  {
    labelKey: keyof SiteContent["ui"]["menuPage"]["tags"];
    variant: BadgeProps["variant"];
    Icon: ComponentType<{ className?: string }>;
  }
> = {
  "sef-onerisi": { labelKey: "chef", variant: "copper", Icon: ChefHat },
  "cok-tercih": { labelKey: "popular", variant: "ember", Icon: Flame },
  yeni: { labelKey: "fresh", variant: "cream", Icon: Sparkles },
  yoresel: { labelKey: "local", variant: "earth", Icon: MapPin },
};

interface MenuRowProps {
  item: MenuItem;
  /**
   * Fiyatı güne göre değişen kategorilerde (balıklar) fiyat sütunu boş kalır;
   * bilgi kategori başlığındaki not kutusunda durur.
   */
  priceOnRequest?: boolean;
  /** Ürünün 3D/AR görünümünü açar (model3d tanımlı ürünlerde buton çıkar) */
  onView3D?: (item: MenuItem) => void;
}

/**
 * Klasik menü föyü satırı: ad solda, noktalı hat, fiyat sağda.
 * Görseli olan üründe solda küçük kare durur, olmayanda satır tam genişliktir.
 */
export function MenuRow({ item, priceOnRequest, onView3D }: MenuRowProps) {
  const ui = useContent().ui.menuPage;
  const hasMeta =
    (item.tags && item.tags.length > 0) || item.spice !== undefined;
  const hasVariants = item.variants && item.variants.length > 0;

  return (
    <article className="group flex gap-4 border-b border-earth/20 py-4 last:border-b-0">
      {item.image && (
        <ImageWithFallback
          src={item.image}
          alt={item.imageAlt ?? item.name}
          fallbackLabel={item.name}
          loading="lazy"
          /* Sabit 72–88px kare; ızgara değil, o yüzden tek genişlik yeter. */
          sizes="88px"
          className="warm-photo h-[72px] w-[72px] shrink-0 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-[88px] sm:w-[88px]"
        />
      )}

      <div className="min-w-0 flex-1">
        {/* Ad ····· fiyat */}
        <div className="flex items-baseline">
          <h3 className="font-display text-lg font-semibold leading-tight text-cream sm:text-xl">
            {item.name}
          </h3>
          {!hasVariants && (
            <>
              <span aria-hidden className="price-leader" />
              {priceOnRequest ? (
                /* Fiyat sütunu bilerek boş: bilgi kategori notunda. */
                <span className="sr-only">{ui.priceOnRequest}</span>
              ) : (
                <p
                  className={cn(
                    "whitespace-nowrap font-display font-semibold",
                    item.price === undefined
                      ? "text-xs uppercase tracking-[0.14em] text-cream/45"
                      : "text-lg text-copper sm:text-xl",
                  )}
                >
                  {item.price === undefined
                    ? ui.askPrice
                    : formatPrice(item.price)}
                </p>
              )}
            </>
          )}
        </div>

        {item.unit && (
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-cream/40">
            {item.unit}
          </p>
        )}

        {item.description && (
          <p className="mt-1.5 text-sm italic leading-relaxed text-cream/55">
            {item.description}
          </p>
        )}

        {/* Ölçüye göre fiyatlanan kalemler (rakılar) */}
        {hasVariants && (
          <dl className="mt-2.5 grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-x-6">
            {item.variants?.map((variant) => (
              <div key={variant.label} className="flex items-baseline py-1">
                <dt className="text-sm text-cream/60">
                  {ui.servings[variant.label] ?? variant.label}
                </dt>
                <span aria-hidden className="price-leader" />
                <dd className="whitespace-nowrap font-display text-base font-semibold text-copper">
                  {formatPrice(variant.price)}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {hasMeta && (
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            {item.tags?.map((tag) => {
              const meta = TAG_META[tag];
              return (
                <Badge key={tag} variant={meta.variant}>
                  <meta.Icon aria-hidden className="h-3 w-3" />
                  {ui.tags[meta.labelKey]}
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
            className="mt-3 inline-flex items-center justify-center gap-2 border border-copper/50 bg-coal/40 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-copper transition-all duration-300 hover:border-ember hover:text-ember hover:shadow-[0_0_20px_rgba(217,119,47,0.25)]"
          >
            <Box aria-hidden className="h-4 w-4" />
            {ui.view3d}
          </button>
        )}
      </div>
    </article>
  );
}
