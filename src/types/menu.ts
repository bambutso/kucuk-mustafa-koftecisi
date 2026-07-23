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

/**
 * Aynı ürünün ölçüye göre değişen fiyatı. Rakılarda kullanılır: bir marka tek
 * kalemdir, altında Tek/Duble/20 cl … 100 cl fiyatları listelenir.
 *
 * `label` sabit ve küçük bir kimlik kümesidir (`tek` `duble` `20cl` `35cl`
 * `50cl` `70cl` `100cl`); arayüz bunu `ui.menuPage.servings` üzerinden
 * çevirir, karşılığı yoksa olduğu gibi gösterir.
 */
export interface PriceVariant {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  /**
   * Ürünün altında italik görünen kısa tanıtım. İçecekler ve alkollü
   * ürünlerde bilerek yoktur — işletme kararı: alkolün altına servis/garnitür
   * ifadesi yazılmaz, müşteri o şekilde servis edildiğini sanmasın.
   */
  description?: string;
  /**
   * TL cinsinden fiyat. Tanımsız bırakılabilir: fiyatı güne göre değişen
   * kalemlerde (balıklar) satırda fiyat yerine kategori notu geçerlidir.
   */
  price?: number;
  /** Ölçüye göre fiyatlanan kalemlerde `price` yerine bu kullanılır (rakılar) */
  variants?: ReadonlyArray<PriceVariant>;
  /**
   * Kategori içindeki alt grup (bkz. `MenuCategory.groups`). Ör. Alkollü
   * İçecekler kategorisinde "biralar" | "rakilar" | "viskiler" | "saraplar".
   */
  group?: string;
  /** Gramaj / adet bilgisi, ör. "225 g · 8 adet" */
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
  /**
   * Fiyat sütunu yerine `note`u öne çıkaran kategori (balıklar). Satırlarda
   * fiyat gösterilmez; not, başlığın altında çerçeveli kutuda durur.
   */
  priceOnRequest?: boolean;
  /**
   * Kategori içi alt başlıklar (sekme değil, bölüm içi ayrım). Sıralıdır;
   * ürünler `MenuItem.group` ile buraya bağlanır. Grubu olmayan ürünler
   * alt başlıkların üstünde listelenir.
   */
  groups?: ReadonlyArray<{ id: string; title: string; note?: string }>;
  items: MenuItem[];
}
