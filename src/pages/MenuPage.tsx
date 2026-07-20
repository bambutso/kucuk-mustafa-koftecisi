import { useMemo, useState } from "react";
import { menu } from "../data/menu";
import { usePageMeta } from "../hooks/usePageMeta";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MenuHeader } from "../sections/menu/MenuHeader";
import { MenuFilterBar } from "../sections/menu/MenuFilterBar";
import { CategorySection } from "../sections/menu/CategorySection";
import { MenuCard } from "../sections/menu/MenuCard";
import { MenuNote } from "../sections/menu/MenuNote";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

const categoryIds = menu.map((category) => category.id);

export default function MenuPage() {
  usePageMeta(
    "Menü — Küçük Mustafa Köftecisi | Kırklareli",
    "Kırklareli köftesi, ızgaralar, çorbalar, yöresel lezzetler ve tatlılar. Meşe kömürünün korunda, 1939'dan beri.",
  );

  const [query, setQuery] = useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(categoryIds.length > 0 ? [categoryIds[0]] : []),
  );
  const activeId = useScrollSpy(categoryIds);
  const searching = query.trim().length > 0;

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return [];
    return menu.flatMap((category) =>
      category.items.filter(
        (item) =>
          item.name.toLocaleLowerCase("tr").includes(q) ||
          item.description.toLocaleLowerCase("tr").includes(q),
      ),
    );
  }, [query]);

  const selectCategory = (id: string) => {
    setOpenIds((prev) => new Set(prev).add(id));
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  const toggleCategory = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      <MenuHeader />
      <MenuFilterBar
        categories={menu}
        activeId={activeId}
        onSelectCategory={selectCategory}
        query={query}
        onQueryChange={setQuery}
      />

      <Container className="pb-24 pt-4 md:pt-8">
        {searching ? (
          results.length > 0 ? (
            <>
              <p className="mt-6 text-sm text-cream/50" role="status">
                {results.length} sonuç bulundu
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-24 text-center" role="status">
              <p className="font-display text-3xl italic text-cream/70">
                Aradığınızı közde bulamadık.
              </p>
              <p className="mt-3 text-sm text-cream/45">
                Farklı bir kelimeyle deneyin — ör. “köfte”, “piyaz”,
                “hardaliye”.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-8"
                onClick={() => setQuery("")}
              >
                Aramayı temizle
              </Button>
            </div>
          )
        ) : (
          <div>
            {menu.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                collapsible={!isDesktop}
                open={openIds.has(category.id)}
                onToggle={() => toggleCategory(category.id)}
              />
            ))}
          </div>
        )}

        <MenuNote />
      </Container>
    </>
  );
}
