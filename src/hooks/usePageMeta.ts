import { useEffect } from "react";

/**
 * Sayfa başlığını ve açıklama meta'sını günceller.
 * noindex: sayfa arama sonuçlarına girmesin (yönetim paneli gibi).
 */
export function usePageMeta(
  title: string,
  description?: string,
  noindex = false,
) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
    }
  }, [title, description]);

  useEffect(() => {
    if (!noindex) return;
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, [noindex]);
}
