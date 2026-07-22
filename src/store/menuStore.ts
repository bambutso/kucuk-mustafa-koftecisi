/**
 * Menü deposu: varsayılan menü `data/menu.ts`'den gelir; yönetim panelinde
 * yapılan değişiklikler localStorage'a yazılır ve varsayılanın önüne geçer.
 *
 * NOT (demo sınırı): localStorage cihaza özeldir. Menünün tüm ziyaretçilere
 * yayınlanabilmesi için sunucu taraflı bir kayıt (API/CMS) gerekir.
 */
import { useSyncExternalStore } from "react";
import { menu as defaultMenu } from "../data/menu";
import type { MenuCategory } from "../types/menu";

const STORAGE_KEY = "kmk-menu-v1";

export interface MenuSnapshot {
  categories: MenuCategory[];
  /** localStorage'da özelleştirilmiş menü var mı? */
  customized: boolean;
}

type Listener = () => void;
const listeners = new Set<Listener>();
let snapshot: MenuSnapshot | null = null;

export function isValidMenu(value: unknown): value is MenuCategory[] {
  return (
    Array.isArray(value) &&
    value.every(
      (category) =>
        category &&
        typeof category === "object" &&
        typeof (category as MenuCategory).id === "string" &&
        typeof (category as MenuCategory).title === "string" &&
        Array.isArray((category as MenuCategory).items),
    )
  );
}

function readOverride(): MenuCategory[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isValidMenu(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function emit() {
  for (const listener of listeners) listener();
}

export function getMenuSnapshot(): MenuSnapshot {
  if (snapshot === null) {
    const override = readOverride();
    snapshot = {
      categories: override ?? defaultMenu,
      customized: override !== null,
    };
  }
  return snapshot;
}

/**
 * Menüyü kaydeder.
 *
 * Panelden yüklenen görseller veri adresi (data URL) olarak menünün içinde
 * durur; bu yüzden localStorage kotası (tarayıcıya göre ~5 MB) dolabilir.
 * Kota aşıldığında sessizce kaybolmasın diye anlaşılır bir hata fırlatılır —
 * çağıran taraf kullanıcıya gösterir.
 */
export function saveMenu(categories: MenuCategory[]): void {
  const veri = JSON.stringify(categories);
  try {
    localStorage.setItem(STORAGE_KEY, veri);
  } catch (hata) {
    const kotaHatasi =
      hata instanceof DOMException &&
      (hata.name === "QuotaExceededError" ||
        hata.name === "NS_ERROR_DOM_QUOTA_REACHED");
    if (kotaHatasi) {
      throw new Error(
        `Tarayıcı depolama alanı doldu (${menuBoyutuKb(veri)} KB). ` +
          "Bazı ürün görsellerini kaldırın ya da daha küçük kareler yükleyin. " +
          "Menüyü JSON olarak dışa aktarmak veriyi güvene alır.",
      );
    }
    throw hata;
  }
  snapshot = { categories, customized: true };
  emit();
}

function menuBoyutuKb(veri: string): number {
  return Math.round(new Blob([veri]).size / 1024);
}

/** Menünün kayıtlı hâlinin yaklaşık boyutu (KB) — panelde gösterilir. */
export function menuBoyutu(categories: MenuCategory[]): number {
  return menuBoyutuKb(JSON.stringify(categories));
}

export function resetMenu(): void {
  localStorage.removeItem(STORAGE_KEY);
  snapshot = { categories: defaultMenu, customized: false };
  emit();
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Menünün güncel halini (varsayılan ya da panelden düzenlenmiş) verir. */
export function useMenu(): MenuSnapshot {
  return useSyncExternalStore(subscribe, getMenuSnapshot);
}
