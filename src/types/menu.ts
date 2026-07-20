/** Acılık derecesi: 1 hafif — 3 yakıcı. Tanımsızsa acısız. */
export type SpiceLevel = 1 | 2 | 3;

export type ItemTag = "sef-onerisi" | "cok-tercih" | "yeni" | "yoresel";

/** Ürünün 3D/AR varlığı — model-viewer ile gösterilir */
export interface Model3DAsset {
  /** GLB (binary glTF) dosya yolu */
  glb: string;
  /** iOS AR Quick Look için USDZ (varsa) */
  usdz?: string;
  /** Model yüklenene kadar gösterilen görsel */
  poster?: string;
  /** Erişilebilirlik açıklaması */
  alt: string;
}

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
  /** Varsa ürün kartında "3D Gör" butonu çıkar */
  model3d?: Model3DAsset;
}

export interface MenuCategory {
  id: string;
  title: string;
  /** Kategori altında görünen kısa açıklama */
  note?: string;
  items: MenuItem[];
}
