import { useEffect, useState } from "react";

/**
 * Verilen id'li bölümlerden görünürde olanı izler.
 * Menü sayfasındaki yapışkan kategori çubuğunun aktif durumu için.
 */
export function useScrollSpy(
  ids: readonly string[],
  rootMargin = "-35% 0px -55% 0px",
): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);
  const key = ids.join(",");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, rootMargin]);

  return activeId;
}
