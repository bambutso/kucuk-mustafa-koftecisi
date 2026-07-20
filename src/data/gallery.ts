/**
 * Galeri içeriği. Gerçek işletme fotoğrafları ile paleti tamamlayan
 * temsilî atmosfer kareleri (Unsplash) bir arada; temsilî olanlar işaretlidir.
 */
import { igImages, images } from "./restaurant";

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
    id: "ig-kofte",
    src: igImages.kofteTabak,
    alt: "Ekmek üstünde iki iri köfte; salatalık, domates ve közlenmiş biberle",
    caption: "Ekmek üstü köfte — bugünün tabağı",
    category: "sofra",
    authentic: true,
  },
  {
    id: "ig-salon-bordo",
    src: igImages.salonBordo,
    alt: "Yenilenen salon: bordo kadife koltuklar, ahşap lambri duvarlar",
    caption: "Yenilenen salonumuz",
    category: "mekan",
    authentic: true,
  },
  {
    id: "ig-guvec",
    src: igImages.guvecMantar,
    alt: "Güveçte kaşarlı mantar, üzeri kızarmış",
    caption: "Güveçte kaşarlı mantar — yeni ürün",
    category: "sofra",
    authentic: true,
  },
  {
    id: "ig-menu-foyu",
    src: igImages.menuFoyu,
    alt: "Logo işlemeli menü föyü, pirinç lamba ışığında",
    caption: "Menü föyümüz, lamba ışığında",
    category: "mekan",
    authentic: true,
  },
  {
    id: "ig-organizasyon",
    src: igImages.organizasyon,
    alt: "Organizasyon için kurulmuş uzun masa, pencere kenarı",
    caption: "Toplu yemekler için kurulan sofra",
    category: "mekan",
    authentic: true,
  },
  {
    id: "ig-masa-detay",
    src: igImages.masaDetay,
    alt: "Logo baskılı kırmızı runner ile masa kurulumu",
    caption: "Masa, misafirini bekler",
    category: "mekan",
    authentic: true,
  },
  {
    id: "ig-salon-ici",
    src: igImages.salonIci,
    alt: "Salonun gündelik hali; duvarda Küçük Mustafa Köftecisi yazısı",
    caption: "Bir öğle vakti, salondan",
    category: "mekan",
    authentic: true,
  },
  {
    id: "ig-gece",
    src: igImages.geceAtmosfer,
    alt: "Loş salonda mum ışığı ve kadehler",
    caption: "Gece, salon sakinleşince",
    category: "mekan",
    authentic: true,
  },
  {
    id: "ig-lamba",
    src: igImages.lamba,
    alt: "Pirinç masa lambasının sıcak ışığı",
    caption: "Masadaki pirinç lamba",
    category: "mekan",
    authentic: true,
  },
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
    id: "cay",
    src: unsplash("photo-1571934811356-5cc061b6821f"),
    alt: "Demli çay ve kurutulmuş bitkiler",
    caption: "Hesaptan önce mutlaka bir çay",
    category: "sofra",
    authentic: false,
  },
];
