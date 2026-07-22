import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import type { MenuItem } from "../types/menu";
import { useLocalizedMenu } from "../i18n/useLocalizedMenu";
import { useContent } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { MenuHeader } from "../sections/menu/MenuHeader";
import { MenuFilterBar } from "../sections/menu/MenuFilterBar";
import { CategorySection } from "../sections/menu/CategorySection";
import { MenuCard } from "../sections/menu/MenuCard";
import { MenuNote } from "../sections/menu/MenuNote";
import { Model3DViewer } from "../sections/menu/Model3DViewer";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export default function MenuPage() {
  const ui = useContent().ui.menuPage;
  usePageMeta(ui.docTitle, ui.docDesc);

  const { categories } = useLocalizedMenu();
  const categoryIds = useMemo(
    () => categories.map((category) => category.id),
    [categories],
  );

  const [query, setQuery] = useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(categoryIds.length > 0 ? [categoryIds[0]] : []),
  );
  const activeId = useScrollSpy(categoryIds);
  const searching = query.trim().length > 0;

  /* 3D/AR görünümü: ?model3d=<urun-id> ile doğrudan da açılabilir (QR akışı) */
  const [searchParams, setSearchParams] = useSearchParams();
  const [view3DItem, setView3DItem] = useState<MenuItem | null>(null);

  useEffect(() => {
    const wanted = searchParams.get("model3d");
    if (!wanted) return;
    /* Eski kimlik: menü gerçek menüye göre yenilenirken imza köfte yeniden
       adlandırıldı. Dolaşımdaki QR/linkler kırılmasın diye eşlenir. */
    const id = wanted === "porsiyon-kofte" ? "kucuk-mustafa-koftesi" : wanted;
    const found = categories
      .flatMap((category) => category.items)
      .find((item) => item.id === id && item.model3d);
    if (found) setView3DItem(found);
  }, [searchParams, categories]);

  const close3D = () => {
    setView3DItem(null);
    if (searchParams.has("model3d")) {
      const next = new URLSearchParams(searchParams);
      next.delete("model3d");
      setSearchParams(next, { replace: true });
    }
  };

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return [];
    return categories.flatMap((category) =>
      category.items.filter(
        (item) =>
          item.name.toLocaleLowerCase("tr").includes(q) ||
          item.description.toLocaleLowerCase("tr").includes(q),
      ),
    );
  }, [query, categories]);

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
        categories={categories}
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
                {ui.resultsFound(results.length)}
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((item) => (
                  <MenuCard key={item.id} item={item} onView3D={setView3DItem} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-24 text-center" role="status">
              <p className="font-display text-3xl italic text-cream/70">
                {ui.noResultsTitle}
              </p>
              <p className="mt-3 text-sm text-cream/45">{ui.noResultsHint}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-8"
                onClick={() => setQuery("")}
              >
                {ui.clearSearch}
              </Button>
            </div>
          )
        ) : (
          <div>
            {categories.map((category) => (
              <CategorySection
                key={category.id}
                category={category}
                collapsible={!isDesktop}
                open={openIds.has(category.id)}
                onToggle={() => toggleCategory(category.id)}
                onView3D={setView3DItem}
              />
            ))}
          </div>
        )}

        <MenuNote />
      </Container>

      <AnimatePresence>
        {view3DItem && <Model3DViewer item={view3DItem} onClose={close3D} />}
      </AnimatePresence>
    </>
  );
}
