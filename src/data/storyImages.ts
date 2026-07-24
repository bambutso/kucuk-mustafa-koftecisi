/**
 * Hikaye / anlatı bölümlerinde kullanılan görsellerin YOLLARI.
 *
 * Eski usta ve dükkân cephesi fotoğrafları (belirsiz kaynaklı arşiv kareleri)
 * Hikayemiz bölümünden/sayfasından kaldırıldı; yerlerine şimdilik NÖTR bir
 * yer tutucu (placeholder) kullanılır.
 *
 * ► Yeni gerçek fotoğraflar gelince: yalnızca aşağıdaki yolları değiştirin.
 *   Bileşenlere (Story.tsx / StoryPage.tsx) dokunmaya gerek yok.
 *   Örn:  storefront: `${BASE}gallery/yeni-cephe.webp`,
 *
 * Kullanım: Hikayemiz (Story.tsx + StoryPage.tsx) ve Mekân "Ocak" bölümü
 * (PlacePage.tsx) bu placeholder'ı gösterir. Mekân/İletişim sayfa başlıkları
 * ise artık görselsiz (düz koyu zemin). Eski Wix kareleri (cephe/usta) tamamen
 * kaldırıldı; Galeri'den de çıkarıldı ve restaurant.ts'teki tanımları silindi.
 */
const BASE = import.meta.env.BASE_URL;

/** Nötr yer tutucu — yeni fotoğraf gelene kadar gösterilir. */
export const STORY_PHOTO_PLACEHOLDER = `${BASE}gallery/foto-placeholder.svg`;

export const storyPhotos = {
  /** 1939 tabelalı dükkân cephesi — yeni foto gelince yolunu buraya yaz. */
  storefront: STORY_PHOTO_PLACEHOLDER,
  /** Köz başındaki usta — yeni foto gelince yolunu buraya yaz. */
  ustaGrill: STORY_PHOTO_PLACEHOLDER,
} as const;
