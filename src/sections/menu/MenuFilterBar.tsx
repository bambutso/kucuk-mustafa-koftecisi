import { Search, X } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { cn } from "../../utils/cn";

interface MenuFilterBarProps {
  categories: ReadonlyArray<{ id: string; title: string }>;
  activeId: string | null;
  onSelectCategory: (id: string) => void;
  query: string;
  onQueryChange: (value: string) => void;
}

/**
 * Yapışkan filtre çubuğu: arama + yatay kaydırılabilir kategori sekmeleri.
 * Arama doluyken kategori gezinmesi devre dışı görünür (sonuçlar düz liste olur).
 */
export function MenuFilterBar({
  categories,
  activeId,
  onSelectCategory,
  query,
  onQueryChange,
}: MenuFilterBarProps) {
  const searching = query.trim().length > 0;

  // Mobilde yapışkan değil: navbar artık sayfayla kaydığı için top-16 boşlukta
  // asılı kalıyordu; en tepeye yapıştırmak ise iOS 26'da cam akışını bozuyor
  // (Safari sticky elemanları da örnekliyor). lg+ ekranda navbar fixed olduğundan
  // eski yapışkan davranış korunur.
  return (
    <div className="z-40 border-b border-cream/10 bg-charcoal/95 backdrop-blur-md lg:sticky lg:top-20">
      <Container className="flex flex-col gap-0 md:flex-row md:items-center md:justify-between md:gap-8">
        {/* Kategori sekmeleri */}
        <nav
          aria-label="Menü kategorileri"
          className={cn(
            "no-scrollbar order-2 -mx-5 flex overflow-x-auto px-5 sm:-mx-8 sm:px-8 md:order-1 md:mx-0 md:px-0",
            searching && "pointer-events-none opacity-35",
          )}
        >
          {categories.map((category) => {
            const isActive = !searching && activeId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative shrink-0 whitespace-nowrap px-3.5 py-3.5 font-sans text-sm transition-colors sm:px-4",
                  isActive
                    ? "font-semibold text-ember"
                    : "text-cream/60 hover:text-cream",
                )}
              >
                {category.title}
                {isActive && (
                  <span aria-hidden className="kor-line absolute inset-x-3 bottom-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Arama */}
        <div className="order-1 py-3 md:order-2 md:w-64 md:shrink-0 md:py-3">
          <label className="relative block">
            <span className="sr-only">Menüde ara</span>
            <Search
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Menüde ara: köfte, piyaz, hardaliye…"
              className="h-10 w-full rounded-[2px] border border-earth/40 bg-coffee/60 pl-9 pr-9 font-sans text-sm text-cream placeholder:text-cream/35 transition-colors focus:border-copper focus:outline-none"
            />
            {searching && (
              <button
                type="button"
                onClick={() => onQueryChange("")}
                aria-label="Aramayı temizle"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-cream/50 transition-colors hover:text-ember"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>
      </Container>
    </div>
  );
}
