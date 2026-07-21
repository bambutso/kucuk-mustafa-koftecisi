import { useMemo } from "react";
import type { MenuCategory } from "../types/menu";
import { useMenu } from "../store/menuStore";
import { useLang } from "./index";

/**
 * Menü verisini geçerli dile göre katmanlar: kategori başlığı/notu ile ürün
 * birimi/açıklaması çevrilir; çevirisi olmayan (ör. panelden yeni eklenen)
 * içerik Türkçesiyle kalır. Ürün adları marka gereği her dilde Türkçedir.
 */
export function useLocalizedMenu(): { categories: MenuCategory[] } {
  const { categories } = useMenu();
  const { lang, content } = useLang();

  const localized = useMemo(() => {
    if (lang === "tr") return categories;
    return categories.map((category) => {
      const cat = content.menu.categories[category.id];
      return {
        ...category,
        title: cat?.title ?? category.title,
        note: category.note ? (cat?.note ?? category.note) : category.note,
        items: category.items.map((item) => {
          const tr9n = content.menu.items[item.id];
          return {
            ...item,
            unit: item.unit ? (tr9n?.unit ?? item.unit) : item.unit,
            description: tr9n?.description ?? item.description,
          };
        }),
      };
    });
  }, [categories, lang, content]);

  return { categories: localized };
}
