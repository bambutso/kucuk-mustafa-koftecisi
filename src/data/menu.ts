/**
 * ─────────────────────────────────────────────────────────────────────────
 *  NOT: Bu menü örnek olarak hazırlanmıştır. Ürün içerikleri ve fiyatlar
 *  işletme tarafından güncellenecektir.
 *
 *  Ürünler; işletmenin bilinen mutfağı (köfte, ızgaralar, çorbalar, koyun
 *  yoğurdu, Hayrabolu tatlısı, hardaliye…) temel alınarak, 2026 Türkiye
 *  restoran fiyat seviyesine göre kurgulanmıştır.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { MenuCategory } from "../types/menu";
import { images } from "./restaurant";

export const MENU_NOTE =
  "Bu menü örnek olarak hazırlanmıştır. Ürün içerikleri ve fiyatlar işletme tarafından güncellenecektir.";

export const menu: MenuCategory[] = [
  {
    id: "imza-kofteler",
    title: "İmza Köfteler",
    note: "Dana + coğrafi işaretli Kıvırcık kuzu; meşe kömürünün korunda.",
    items: [
      {
        id: "porsiyon-kofte",
        name: "Porsiyon Köfte",
        unit: "250 g · 8 adet",
        description:
          "Kuru soğan ve bayat ekmekle yoğrulan harç, meşe korunda mühürlenir. Piyazlık soğan, közlenmiş yeşil biber ve ev yapımı acı sosla servis edilir.",
        price: 380,
        image: images.koftePlate,
        imageAlt: "Sekiz adet köfte; közlenmiş biber, domates ve piyazlık soğanla",
        tags: ["sef-onerisi", "cok-tercih"],
      },
      {
        id: "bir-bucuk-porsiyon",
        name: "Bir Buçuk Porsiyon Köfte",
        unit: "375 g · 12 adet",
        description:
          "İştahı açık olanlara. Aynı harç, aynı kor; dört köfte fazlasıyla.",
        price: 540,
      },
      {
        id: "yarim-porsiyon",
        name: "Yarım Porsiyon Köfte",
        unit: "125 g · 4 adet",
        description: "Küçük misafirlerimize ve hafif yemek isteyenlere.",
        price: 220,
      },
      {
        id: "kofte-ekmek",
        name: "Köfte Ekmek",
        unit: "4 adet",
        description:
          "Tezgâhtan alıp parkta yemenin adresi. Piyazlık soğan ve isteğe göre acı sosla, yarım ekmek arası.",
        price: 240,
        tags: ["cok-tercih"],
        spice: 1,
      },
    ],
  },
  {
    id: "izgaralar",
    title: "Izgaralar",
    note: "Hepsi meşe kömürünün korunda, döküm ızgarada.",
    items: [
      {
        id: "karisik-izgara",
        name: "Karışık Izgara",
        unit: "Köfte · pirzola · şiş",
        description:
          "Kararsız kalanlara ocağın özeti: dört köfte, iki pirzola ve bir kuzu şiş, közlenmiş sebzelerle.",
        price: 690,
        image: images.grillPlate,
        imageAlt: "Döküm tabakta karışık ızgara, közlenmiş biber ve patatesle",
        tags: ["sef-onerisi"],
      },
      {
        id: "kuzu-pirzola",
        name: "Kuzu Pirzola",
        unit: "4 adet",
        description: "Trakya kuzusundan, kemiği tutulacak kadar sulu.",
        price: 650,
      },
      {
        id: "kuzu-sis",
        name: "Kuzu Şiş",
        unit: "2 şiş",
        description:
          "Kuşbaşı kuzu, közde mühürlenir; piyazlık soğan ve közlenmiş biberle.",
        price: 520,
        image: images.lambSkewer,
        imageAlt: "Piyazlık soğan ve domatesle servis edilen kuzu şiş",
      },
      {
        id: "tavuk-sis",
        name: "Tavuk Şiş",
        unit: "2 şiş",
        description: "Az baharatlı, közde. Et yemeyenin gönlü kalmasın diye.",
        price: 360,
      },
    ],
  },
  {
    id: "baslangiclar",
    title: "Başlangıçlar",
    note: "Sabah 09.00'dan gece kapanışa kadar kazanda.",
    items: [
      {
        id: "kelle-paca",
        name: "Kelle Paça Çorbası",
        description:
          "Gece üçe kadar açık bir köftecinin olmazsa olmazı. Sarımsaklı sirke ve pul biberle.",
        price: 180,
        tags: ["cok-tercih"],
      },
      {
        id: "mercimek",
        name: "Mercimek Çorbası",
        description: "Tereyağlı, kıvamı yerinde. Limonla sevene.",
        price: 140,
      },
      {
        id: "tavuk-suyu",
        name: "Tavuk Suyu Çorba",
        description: "Şehriyeli, ev usulü. Kış akşamlarının ilacı.",
        price: 150,
      },
    ],
  },
  {
    id: "yoresel",
    title: "Yöresel Lezzetler",
    note: "Trakya'nın sofrasından, mevsimi geldikçe.",
    items: [
      {
        id: "koyun-yogurdu",
        name: "Mevsiminde Koyun Yoğurdu",
        description:
          "Süt bollaşınca kurulan yoğurt; kaşığın dik durduğu kıvamda. Mevsiminde sorunuz.",
        price: 130,
        tags: ["yoresel"],
      },
      {
        id: "trakya-peynir",
        name: "Trakya Beyaz Peynir Söğüşü",
        description: "Yerli beyaz peynir, söğüş domates ve salatalıkla.",
        price: 160,
        tags: ["yoresel"],
      },
      {
        id: "kozde-biber-aci-sos",
        name: "Közde Biber & Ev Yapımı Acı Sos",
        description:
          "Közlenmiş yeşil biberin yanında dükkânın kendi acı sosu. Köftenin yol arkadaşı, tek başına da meze.",
        price: 120,
        tags: ["yoresel"],
        spice: 2,
      },
    ],
  },
  {
    id: "salatalar",
    title: "Salatalar",
    items: [
      {
        id: "piyaz",
        name: "Piyaz",
        description:
          "Kuru fasulye, bol kuru soğan, sirke ve zeytinyağı. Köftenin değişmez eşlikçisi.",
        price: 150,
        tags: ["cok-tercih"],
      },
      {
        id: "coban-salata",
        name: "Çoban Salatası",
        description: "Domates, salatalık, biber ve soğan; ince kıyım.",
        price: 160,
      },
      {
        id: "sogus",
        name: "Söğüş Tabağı",
        description: "Mevsim sebzesi, iri doğranmış, limonlu.",
        price: 140,
      },
    ],
  },
  {
    id: "tatlilar",
    title: "Tatlılar",
    note: "Köftenin üstüne tatlı, Trakya usulü.",
    items: [
      {
        id: "hayrabolu",
        name: "Hayrabolu Tatlısı",
        description:
          "Trakya'nın peynirli şerbetli tatlısı; taze peynirle, ılık servis.",
        price: 180,
        tags: ["sef-onerisi", "yoresel"],
      },
      {
        id: "firin-sutlac",
        name: "Fırın Sütlaç",
        description: "Üstü közlenmiş, taş fırından.",
        price: 160,
      },
      {
        id: "tel-kadayif",
        name: "Tel Kadayıf",
        description: "Cevizli, şerbeti ölçülü, dilim dilim.",
        price: 170,
      },
      {
        id: "trilece",
        name: "Trileçe",
        description: "Balkan göçmenlerinin hediyesi; sütlü, karamelli.",
        price: 160,
        tags: ["yeni"],
      },
    ],
  },
  {
    id: "icecekler",
    title: "İçecekler",
    items: [
      {
        id: "acik-ayran",
        name: "Açık Ayran",
        description: "Köpüklü, bakır maşrapada.",
        price: 60,
        tags: ["cok-tercih"],
      },
      {
        id: "hardaliye",
        name: "Hardaliye",
        description:
          "Kırklareli'nin asırlık içeceği: hardal tohumuyla fermente üzüm şırası.",
        price: 90,
        tags: ["yoresel"],
      },
      {
        id: "salgam",
        name: "Şalgam",
        description: "Acılı ya da acısız.",
        price: 70,
        spice: 1,
      },
      {
        id: "gazoz",
        name: "Gazoz",
        description: "Cam şişede, buz gibi.",
        price: 70,
      },
      {
        id: "cay",
        name: "Çay",
        description: "İnce belli bardakta, demli.",
        price: 30,
      },
      {
        id: "turk-kahvesi",
        name: "Türk Kahvesi",
        description: "Közde pişmiş, yanında lokum.",
        price: 90,
      },
      {
        id: "maden-suyu",
        name: "Maden Suyu",
        description: "Sade ya da meyveli.",
        price: 50,
      },
      {
        id: "yerli-bira",
        name: "Yerli Bira",
        unit: "50 cl",
        description: "Soğuk servis. Alkollü servis salonda geçerlidir.",
        price: 160,
      },
      {
        id: "raki",
        name: "Rakı",
        unit: "Tek kadeh",
        description: "Közde köftenin klasik eşlikçisi; beyaz peynir ve kavunla.",
        price: 220,
      },
    ],
  },
];
