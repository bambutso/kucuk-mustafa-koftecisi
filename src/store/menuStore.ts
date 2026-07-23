/**
 * Menü deposu — üç katman, öncelik sırasıyla:
 *
 *   1. SUNUCU  (/data/menu.json)  → panelden "Yayınla" denince yazılır,
 *      TÜM ziyaretçiler bunu görür. Asıl kaynak budur.
 *   2. TARAYICI (localStorage)    → panelde kaydedilmiş ama HENÜZ
 *      yayınlanmamış taslak; yalnızca düzenleyenin cihazında görünür.
 *   3. KOD      (data/menu.ts)    → ikisi de yoksa devreye giren varsayılan.
 *
 * Sunucudaki dosya derleme çıktısının dışında durur; bu yüzden siteyi yeniden
 * yayınlamak canlı menüyü ezmez.
 */
import { useSyncExternalStore } from "react";
import { menu as defaultMenu } from "../data/menu";
import type { MenuCategory } from "../types/menu";

/**
 * Sürüm numarası menü ŞEMASI ya da varsayılan menü KUŞAĞI değiştiğinde
 * artırılır. Aksi hâlde panelden bir kez kaydetmiş cihazlarda eski menü
 * localStorage'dan gelip yenisini sessizce ezer ve site güncellenmemiş
 * görünür. v2: 2026-07-23'te işletmenin güncel menüsüne geçildi.
 */
const STORAGE_KEY = "kmk-menu-v2";
const ESKI_ANAHTARLAR = ["kmk-menu-v1"];

/** Artık okunmayan sürümleri temizler; kota boşa dolmasın. */
function eskiKayitlariSil(): void {
  for (const anahtar of ESKI_ANAHTARLAR) {
    try {
      localStorage.removeItem(anahtar);
    } catch {
      /* depolama kapalıysa önemsiz */
    }
  }
}

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
    eskiKayitlariSil();
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

/** Sunucudaki yayınlanmış menü; okunana kadar null. */
let sunucuMenusu: MenuCategory[] | null = null;
let sunucudanOkundu = false;

/**
 * Yayınlanmış menüyü sunucudan çeker ve varsa uygular.
 *
 * Hata durumunda SESSİZCE geçilir: sunucu ucu henüz kurulmamışsa ya da
 * geçici bir sorun varsa site koddaki menüyle çalışmaya devam eder —
 * ziyaretçi boş sayfa görmez.
 */
export async function sunucuMenusunuYukle(): Promise<void> {
  if (sunucudanOkundu) return;
  sunucudanOkundu = true;
  try {
    const yanit = await fetch(
      `${import.meta.env.BASE_URL}data/menu.json?v=${Date.now()}`,
      { cache: "no-store" },
    );
    if (!yanit.ok) return;
    const veri: unknown = await yanit.json();
    if (!isValidMenu(veri)) return;
    sunucuMenusu = veri;
    /* Taslak yoksa yayınlanmış menüyü göster */
    if (readOverride() === null) {
      snapshot = { categories: veri, customized: false };
      emit();
    }
  } catch {
    /* sunucu ucu yok ya da ulaşılamıyor — koddaki menüyle devam */
  }
}

/** Sunucuda yayınlanmış bir menü var mı? */
export function yayindakiMenu(): MenuCategory[] | null {
  return sunucuMenusu;
}

export function getMenuSnapshot(): MenuSnapshot {
  if (snapshot === null) {
    const override = readOverride();
    snapshot = {
      categories: override ?? sunucuMenusu ?? defaultMenu,
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
