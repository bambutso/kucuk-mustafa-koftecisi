/** Acılık derecesi: 1 hafif — 3 yakıcı. Tanımsızsa acısız. */
export type SpiceLevel = 1 | 2 | 3;

export type ItemTag = "sef-onerisi" | "cok-tercih" | "yeni" | "yoresel";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** TL cinsinden fiyat */
  price: number;
  /** Gramaj / adet bilgisi, ör. "250 g · 8 adet" */
  unit?: string;
  image?: string;
  imageAlt?: string;
  tags?: ItemTag[];
  spice?: SpiceLevel;
}

export interface MenuCategory {
  id: string;
  title: string;
  /** Kategori altında görünen kısa açıklama */
  note?: string;
  items: MenuItem[];
}
