/**
 * Galeri içeriği. Gerçek işletme fotoğrafları ile paleti tamamlayan
 * temsilî atmosfer kareleri (Unsplash) bir arada; temsilî olanlar işaretlidir.
 */
import { images } from "./restaurant";

export type GalleryCategoryId = "mekan" | "koz" | "sofra";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategoryId;
  /** İşletmenin kendi karesi mi, temsilî atmosfer karesi mi? */
  authentic: boolean;
}

export const galleryCategories: ReadonlyArray<{
  id: GalleryCategoryId | "hepsi";
  label: string;
}> = [
  { id: "hepsi", label: "Tümü" },
  { id: "mekan", label: "Mekân" },
  { id: "koz", label: "Közden" },
  { id: "sofra", label: "Sofra" },
];

function unsplash(id: string, w = 1400): string {
  return `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "cephe",
    src: images.storefront,
    alt: "Küçük Mustafa Köftecisi'nin 1939 tabelalı dükkân cephesi",
    caption: "Kasaplar Arası'ndaki dükkân — tabelada: 1939'dan günümüze yaşayan efsane",
    category: "mekan",
    authentic: true,
  },
  {
    id: "usta",
    src: images.ustaGrill,
    alt: "Usta, meşe kömürünün korunda köfteleri çevirirken",
    caption: "Köz başında usta — maşa hiç boş durmaz",
    category: "koz",
    authentic: true,
  },
  {
    id: "porsiyon",
    src: images.koftePlate,
    alt: "Sekiz köfte, közlenmiş biber, domates ve piyazlık soğan",
    caption: "Porsiyon: 250 gram, sekiz köfte — 1939'dan beri aynı tabak",
    category: "sofra",
    authentic: true,
  },
  {
    id: "ates",
    src: unsplash("photo-1475738972911-5b44ce984c42", 1600),
    alt: "Karanlıkta yanan odun ateşi, yükselen kıvılcımlar",
    caption: "Meşe kömürü kor bağlayana kadar beklenir",
    category: "koz",
    authentic: false,
  },
  {
    id: "dokum",
    src: unsplash("photo-1594041680534-e8c8cdebd659"),
    alt: "Döküm tabakta ızgara et, közlenmiş biber ve patates",
    caption: "Közden inen, sıcak servis edilir",
    category: "sofra",
    authentic: false,
  },
  {
    id: "sis",
    src: unsplash("photo-1603360946369-dc9bb6258143"),
    alt: "Piyazlık soğan ve domatesle servis edilen şişler",
    caption: "Şişin yanında piyazlık soğan eksik olmaz",
    category: "sofra",
    authentic: false,
  },
  {
    id: "sofra-kurulumu",
    src: unsplash("photo-1555939594-58d7cb561ad1"),
    alt: "Şişler, közlenmiş biber ve patlıcanla kurulmuş sofra",
    caption: "Közlenmiş sebze, sofranın harcı",
    category: "sofra",
    authentic: false,
  },
  {
    id: "et",
    src: unsplash("photo-1558030006-450675393462"),
    alt: "Ahşap kesme tahtasında dilimlenmiş ızgara et",
    caption: "Et, dinlendirilmeden kesilmez",
    category: "sofra",
    authentic: false,
  },
  {
    id: "salon",
    src: unsplash("photo-1514933651103-005eec06c04b", 1600),
    alt: "Sıcak ahşap dokulu, loş salon",
    caption: "Ahşap masa, loş ışık, uzun sohbet",
    category: "mekan",
    authentic: false,
  },
  {
    id: "cay",
    src: unsplash("photo-1571934811356-5cc061b6821f"),
    alt: "Demli çay ve kurutulmuş bitkiler",
    caption: "Hesaptan önce mutlaka bir çay",
    category: "sofra",
    authentic: false,
  },
];
