/**
 * Galeri içeriği. Tamamı işletmenin kendi arşivi (Instagram, Wix) ile
 * Google Haritalar kartındaki ziyaretçi karelerinden oluşur; temsilî
 * (stok) kare kalmadı. `authentic` alanı olası gelecek eklemeler için durur.
 */
import { gmImages, igImages, images } from "./restaurant";

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
    id: "sofra-kullan",
    src: `${import.meta.env.BASE_URL}gallery/sofra-galeri.webp`,
    alt: "Logolu bordo runner üzerinde kurulmuş meze ve rakı sofrası",
    caption: "Meze ve rakı sofrası, logolu runner üzerinde",
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
  /* Eski "cephe" ve "usta" Wix kareleri (cc20b1b… ve d55687d…) galeriden
     kaldırıldı — işletme isteğiyle bu iki görsel artık hiç kullanılmıyor. */
  {
    id: "porsiyon",
    src: images.koftePlate,
    alt: "Sekiz köfte, közlenmiş biber, domates ve piyazlık soğan",
    caption: "Porsiyon: 225 gram, sekiz köfte — 1939'dan beri aynı tabak",
    category: "sofra",
    authentic: true,
  },
  {
    id: "ates",
    src: gmImages.ocak,
    alt: "Ocağın başı: döküm ızgara, közün üstünde",
    caption: "Meşe kömürü kor bağlayana kadar beklenir",
    category: "koz",
    authentic: true,
  },
  {
    id: "dokum",
    src: gmImages.karisikIzgara,
    alt: "Şiş ve köftelerle karışık ızgara tabağı, söğüş ve ekmekle",
    caption: "Közden inen, sıcak servis edilir",
    category: "sofra",
    authentic: true,
  },
  {
    id: "sis",
    src: gmImages.kuzuSis,
    alt: "Közden inmiş kuzu şişler; domates ve közlenmiş biberle",
    caption: "Şişin yanında piyazlık soğan eksik olmaz",
    category: "sofra",
    authentic: true,
  },
  {
    id: "sofra-kurulumu",
    src: gmImages.sofraKurulumu,
    alt: "Kurulmuş sofra: köfte, piyaz, acı sos ve ekmek sepeti",
    caption: "Köfte, piyaz, acı sos: sofra kurulmuştur",
    category: "sofra",
    authentic: true,
  },
  {
    id: "cay",
    src: gmImages.cay,
    alt: "İnce belli bardakta demli çay, logolu runner üzerinde",
    caption: "Hesaptan önce mutlaka bir çay",
    category: "sofra",
    authentic: true,
  },
];
