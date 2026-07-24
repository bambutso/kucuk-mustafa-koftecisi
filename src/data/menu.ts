/**
 * ─────────────────────────────────────────────────────────────────────────
 *  MENÜ — İŞLETMENİN GÜNCEL MENÜSÜ (2026-07-23)
 *
 *  Kaynak: işletmenin kendi verdiği güncel fiyat listesi. Bu liste TAM ve
 *  KESİNDİR — önceki kuşak fiyatlar (galeri fotoğraflarından okunmuş basılı
 *  menü ve ayaklı pano) tamamen geçersizdir, listede olmayan ürünler
 *  menüden çıkarılmıştır (Paçanga Böreği ve Güveçte Kaşarlı Mantar dâhil —
 *  işletme "artık yok" dedi).
 *
 *  Gramajlar işletmeden alınmıştır. DİKKAT: beş imza köftenin gramajı aynı
 *  DEĞİLDİR — yalnızca düz köfte 225 g · 8 adettir, diğerleri daha iri
 *  köftelerden 2 adettir.
 *
 *  İÇECEKLERDE VE ALKOLLÜ ÜRÜNLERDE AÇIKLAMA YOKTUR. Bu bilinçli bir
 *  işletme kararıdır: alkolün altına servis/garnitür ifadesi ("beyaz peynir
 *  ve kavunla" gibi) yazılırsa müşteri ürünün o şekilde servis edildiğini
 *  sanabiliyor. Yeni alkol kalemi eklerken açıklama YAZMAYIN.
 *
 *  Balıkların fiyatı güne göre değiştiğinden `priceOnRequest` ile
 *  işaretlenmiştir; satırlarda fiyat yerine kategori notu geçerlidir.
 *
 *  Ürün adları menüdeki yazımıyla korunmuştur.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { MenuCategory } from "../types/menu";
import { gmImages } from "./restaurant";

export const MENU_NOTE =
  "Ürünler ve fiyatlar işletmenin kendi menüsünden alınmıştır; güncel liste için işletmeye danışınız.";

export const menu: MenuCategory[] = [
  {
    id: "imza-kofteler",
    title: "İmza Köfteler",
    note: "Dana + coğrafi işaretli Kıvırcık kuzu; meşe kömürünün korunda.",
    items: [
      {
        id: "kucuk-mustafa-koftesi",
        name: "Küçük Mustafa Köftesi",
        unit: "225 g · 8 adet",
        description:
          "Dükkânın adını taşıyan köfte. Kuru soğan ve bayat ekmekle yoğrulan harç meşe korunda mühürlenir; kemik suyuna batırılmış köy ekmeği eşliğinde gelir.",
        price: 440,
        tags: ["sef-onerisi", "cok-tercih"],
        model3d: {
          glb: `${import.meta.env.BASE_URL}models/kofte.glb`,
          usdz: `${import.meta.env.BASE_URL}models/kofte.usdz`,
          poster: gmImages.koftePorsiyon,
          alt: "Tabakta ızgara köfte, garnitürüyle — 3D model",
        },
      },
      {
        id: "acili-kofte",
        name: "Acılı Köfte",
        unit: "230 g · 2 adet",
        description: "Aynı harç, acısı harca katılmış hâliyle.",
        price: 450,
        spice: 2,
      },
      {
        id: "kasarli-kofte",
        name: "Kaşarlı Köfte",
        unit: "240 g · 2 adet",
        description: "Köftenin içi kaşarla doldurulur; közde erir.",
        price: 460,
      },
      {
        id: "pastirmali-kofte",
        name: "Pastırmalı Köfte",
        unit: "240 g · 2 adet",
        description: "Harca pastırma katılır; közde kokusu salona yayılır.",
        price: 480,
      },
      {
        id: "sefin-koftesi",
        name: "Şefin Köftesi",
        unit: "250 g · 2 adet",
        description: "Ocağın başındaki ustanın kendi tarifi.",
        price: 500,
        tags: ["sef-onerisi"],
      },
    ],
  },
  {
    id: "baslangiclar",
    title: "Başlangıçlar",
    groups: [
      { id: "salatalar", title: "Salata Çeşitleri" },
      { id: "ara-sicaklar", title: "Ara Sıcaklar" },
      { id: "mezeler", title: "Meze Çeşitleri" },
      {
        id: "soguk-mezeler",
        title: "Soğuk Meze Çeşitleri",
        note: "Porsiyonlar ortalama 150–175 g.",
      },
    ],
    items: [
      /* ── Salata Çeşitleri ── */
      {
        id: "piyaz",
        group: "salatalar",
        name: "Piyaz",
        description:
          "Kuru fasulye, bol kuru soğan, sirke ve zeytinyağı. Köftenin değişmez eşlikçisi.",
        price: 180,
        tags: ["cok-tercih"],
      },
      {
        id: "coban-salatasi",
        group: "salatalar",
        name: "Çoban Salata",
        description: "Domates, salatalık, biber ve soğan; ince kıyım.",
        price: 180,
      },
      {
        id: "akdeniz-salata",
        group: "salatalar",
        name: "Akdeniz Salata",
        description: "Mevsim yeşillikleri, zeytin ve zeytinyağıyla.",
        price: 230,
      },
      {
        id: "sopska-salatasi",
        group: "salatalar",
        name: "Şopska Salatası",
        description: "Balkan klasiği; üzeri rendelenmiş beyaz peynirle.",
        price: 280,
        tags: ["yoresel"],
      },

      /* ── Ara Sıcaklar ── */
      {
        id: "mercimek-corbasi",
        group: "ara-sicaklar",
        name: "Mercimek Çorbası",
        description: "Tereyağlı, kıvamı yerinde. Limonla sevene.",
        price: 130,
      },
      {
        id: "patates-kizartmasi",
        group: "ara-sicaklar",
        name: "Patates Kızartması",
        description: "Elde doğranmış, sıcak servis.",
        price: 220,
      },

      /* ── Meze Çeşitleri ── */
      {
        id: "sogus-tabagi",
        group: "mezeler",
        name: "Salatalık Söğüş",
        description: "İri doğranmış taze salatalık, tuzu yanında.",
        price: 100,
      },
      {
        id: "cerez",
        group: "mezeler",
        name: "Çerez",
        description: "Kuruyemiş tabağı, sohbetin yanına.",
        price: 120,
      },
      {
        id: "eski-kasar",
        group: "mezeler",
        name: "Eski Kaşar",
        description: "Trakya'nın olgunlaşmış kaşarı, dilimlenmiş.",
        price: 150,
        tags: ["yoresel"],
      },
      {
        id: "lux-cerez",
        group: "mezeler",
        name: "Lüx Çerez",
        description: "Antep fıstığı ağırlıklı, geniş tabak.",
        price: 200,
      },

      /* ── Soğuk Meze Çeşitleri ── */
      {
        id: "tek-peynir",
        group: "soguk-mezeler",
        name: "Tek Peynir",
        description: "Beyaz peynir, dilimlenmiş.",
        price: 160,
      },
      {
        id: "atom",
        group: "soguk-mezeler",
        name: "Atom",
        description: "Yoğurtlu, acı biberli.",
        price: 160,
        spice: 3,
      },
      {
        id: "sirkeli-kapya",
        group: "soguk-mezeler",
        name: "Sirkeli Kapya",
        description: "Közlenmiş kapya biber, sirkeli sosuyla.",
        price: 160,
      },
      {
        id: "semizotu",
        group: "soguk-mezeler",
        name: "Semizotu",
        description: "Yoğurtlu, sarımsaklı.",
        price: 160,
      },
      {
        id: "haydari",
        group: "soguk-mezeler",
        name: "Haydari",
        description: "Süzme yoğurt, dereotu ve sarımsak.",
        price: 160,
      },
      {
        id: "havuc-tarator",
        group: "soguk-mezeler",
        name: "Havuç Tarator",
        description: "Rendelenmiş havuç, yoğurtla.",
        price: 160,
      },
      {
        id: "rus-salatasi",
        group: "soguk-mezeler",
        name: "Rus Salatası",
        description: "Klasik, mayonezli.",
        price: 160,
      },
      {
        id: "acili-ezme",
        group: "soguk-mezeler",
        name: "Acılı Ezme",
        description: "İnce kıyım domates, biber ve soğan; ev usulü.",
        price: 160,
        spice: 2,
      },
      {
        id: "cacik",
        group: "soguk-mezeler",
        name: "Cacık",
        description: "Salatalıklı, buz gibi.",
        price: 170,
      },
      {
        id: "karisik-kizartma",
        group: "soguk-mezeler",
        name: "Karışık Kızartma",
        description: "Patlıcan, biber ve kabak; yoğurt ve domates sosuyla.",
        price: 190,
      },
      {
        id: "kopeoglu",
        group: "soguk-mezeler",
        name: "Köpeoğlu",
        description: "Közlenmiş patlıcan, yoğurt ve domates sosu.",
        price: 190,
      },
      {
        id: "soslu-patlican",
        group: "soguk-mezeler",
        name: "Soslu Patlıcan",
        description: "Kızarmış patlıcan, domates sosuyla.",
        price: 190,
      },
      {
        id: "manca",
        group: "soguk-mezeler",
        name: "Manca",
        description: "Trakya'nın göçmen mezesi; yoğurtlu, sarımsaklı.",
        price: 190,
        tags: ["yoresel"],
      },
      {
        id: "koyun-yogurdu",
        group: "soguk-mezeler",
        name: "Koyun Yoğurdu",
        description: "Mevsiminde kurulan yoğurt; kaşığın dik durduğu kıvamda.",
        price: 190,
        tags: ["yoresel", "cok-tercih"],
      },
      {
        id: "girit",
        group: "soguk-mezeler",
        name: "Girit",
        description: "Beyaz peynir, ceviz ve yeşillikle ezilmiş.",
        price: 230,
      },
      {
        id: "soka",
        group: "soguk-mezeler",
        name: "Soka",
        description: "Balkan sofralarından, közlenmiş biberli meze.",
        price: 230,
        tags: ["yoresel"],
      },
    ],
  },
  {
    id: "izgaralar",
    title: "Izgara Çeşitleri",
    note: "Hepsi meşe kömürünün korunda, döküm ızgarada.",
    items: [
      {
        id: "tavuk-izgara",
        name: "Tavuk Izgara",
        description: "Az baharatlı, közde. Et yemeyenin gönlü kalmasın diye.",
        price: 350,
      },
      {
        id: "kasap-sucuk",
        name: "Kasap Sucuk",
        unit: "200 g",
        description: "Kasaplar Arası'nın sucuğu, közde kıtırlaşana kadar.",
        price: 400,
      },
      {
        id: "tava-ciger",
        name: "Tava Ciğer",
        unit: "225 g",
        description: "İnce doğranmış ciğer, kızgın tavada; piyazlık soğanla.",
        price: 460,
      },
      {
        id: "ciger-sis",
        name: "Ciğer Şiş",
        unit: "225 g · 3 şiş",
        description: "Kuyruk yağıyla şişe dizilir, korda çevrilir.",
        price: 480,
      },
      {
        id: "hamburger",
        name: "Hamburger",
        description: "Közde pişen dana köfte, ekmeğin arasında.",
        price: 500,
      },
      {
        id: "antrikot",
        name: "Antrikot",
        unit: "200 g",
        description: "Kalın kesim, mühürlenip dinlendirilir.",
        price: 670,
      },
      {
        id: "istranca-kuzu-sis",
        name: "Istranca Kuzu Şiş",
        unit: "260 g · 3 şiş",
        description:
          "Istranca Dağları'nın kuzusundan kuşbaşı; közde mühürlenir, piyazlık soğan ve közlenmiş biberle.",
        price: 670,
        tags: ["yoresel"],
      },
      {
        id: "kulbasti",
        name: "Külbastı",
        unit: "270 g · 3 şiş",
        description: "İnce dövülmüş et, doğrudan külün üstünde.",
        price: 690,
      },
      {
        id: "kusleme",
        name: "Küşleme",
        unit: "180–200 g · 1 adet",
        description: "Kuzunun en makbul yeri; ağızda dağılır.",
        price: 720,
      },
      {
        id: "bonfile",
        name: "Bonfile",
        unit: "200 g",
        description: "Yağsız, yumuşak kesim; istediğiniz pişme derecesinde.",
        price: 750,
      },
      {
        id: "istranca-kuzu-pirzola",
        name: "Istranca Kuzu Pirzola",
        unit: "240 g · 3 adet",
        description: "Trakya kuzusundan, kemiği tutulacak kadar sulu.",
        price: 790,
        tags: ["yoresel"],
      },
      {
        id: "istranca-kuzu-lokum",
        name: "Istranca Kuzu Lokum",
        unit: "240 g · 4 adet",
        description: "Kuzunun lokum gibi kesimi; sadece tuz ve kor.",
        price: 820,
        tags: ["yoresel"],
      },
      {
        id: "karisik-izgara",
        name: "Karışık Izgara",
        unit: "1 Kuzu Lokum · 1 Kuzu Pirzola · 2 Köfte · 1 Külbastı",
        description: "Kararsız kalanlara ocağın özeti; tek tabakta beş kalem.",
        price: 820,
        tags: ["sef-onerisi"],
      },
      {
        id: "karisik-kofte",
        name: "Karışık Köfte",
        unit: "2 kişilik · 4 Tek Köfte · 1 Acılı · 1 Kaşarlı · 1 Pastırmalı · 1 Şefin Köftesi",
        description: "Beş köftenin hepsi tek tabakta; paylaşmak için.",
        price: 1200,
        tags: ["sef-onerisi"],
      },
    ],
  },
  {
    id: "baliklar",
    title: "Balık Çeşitlerimiz",
    note: "Ürünlerin fiyatları alış fiyatına göre belirlenmektedir. Lütfen personelimizden bilgi alınız.",
    priceOnRequest: true,
    groups: [
      { id: "izgara-balik", title: "Izgara Balıklar" },
      { id: "kizartma-balik", title: "Kızartma Balıklar" },
    ],
    items: [
      {
        id: "cupra",
        group: "izgara-balik",
        name: "Çupra",
        description: "Bütün hâlde, közde.",
      },
      {
        id: "levrek",
        group: "izgara-balik",
        name: "Levrek",
        description: "Bütün hâlde, közde.",
      },
      {
        id: "lufer",
        group: "izgara-balik",
        name: "Lüfer",
        description: "Mevsiminde, boğazın makbul balığı.",
      },
      {
        id: "somon",
        group: "izgara-balik",
        name: "Somon",
        description: "Kalın dilim, közde.",
      },
      {
        id: "sardalya",
        group: "kizartma-balik",
        name: "Sardalya",
        description: "Kızgın yağda, mısır ununa bulanmış.",
      },
      {
        id: "hamsi",
        group: "kizartma-balik",
        name: "Hamsi",
        description: "Mevsiminde, tavada.",
      },
      {
        id: "istavrit",
        group: "kizartma-balik",
        name: "İstavrit",
        description: "Kızgın yağda, mısır ununa bulanmış.",
      },
      {
        id: "mezgit",
        group: "kizartma-balik",
        name: "Mezgit",
        description: "Kılçıksız, tavada kızarmış.",
      },
    ],
  },
  {
    id: "tatlilar",
    title: "Tatlılar",
    note: "Köftenin üstüne tatlı, Trakya usulü.",
    items: [
      {
        id: "kabak-tatlisi",
        name: "Kabak Tatlısı",
        description: "Tahin ve ceviz ile servis edilir.",
        price: 160,
      },
      {
        id: "profiterol",
        name: "Profiterol",
        description: "Çikolata soslu, buzdolabından.",
        price: 160,
      },
      {
        id: "sutlac",
        name: "Fırın Sütlaç",
        description: "Üstü közlenmiş, fırından.",
        price: 160,
      },
      {
        id: "dondurma",
        name: "Dondurma",
        unit: "3 top",
        description: "Günün çeşitlerinden seçiminizle.",
        price: 180,
      },
      {
        id: "kaymakli-hayrabolu",
        name: "Kaymaklı Hayrabolu",
        description:
          "Trakya'nın peynirli şerbetli tatlısı; tahin ve ceviz ile servis edilir.",
        price: 180,
        tags: ["sef-onerisi", "yoresel"],
      },
      {
        id: "antep-fistikli-baklava",
        name: "Antep Fıstıklı Baklava",
        description: "Kaymak ile servis edilir.",
        price: 200,
      },
      {
        id: "meyve-tabagi",
        name: "Meyve Tabağı",
        description: "Mevsim meyveleri, buz üstünde.",
        price: 250,
      },
    ],
  },
  {
    /* İçeceklerde açıklama yoktur — bkz. dosya başı notu. */
    id: "icecekler",
    title: "İçecekler",
    groups: [
      { id: "soguk-icecekler", title: "Soğuk İçecekler" },
      { id: "sicak-icecekler", title: "Sıcak İçecekler" },
    ],
    items: [
      { id: "su", group: "soguk-icecekler", name: "Su", price: 35 },
      { id: "soda", group: "soguk-icecekler", name: "Soda", price: 40 },
      {
        id: "ayran",
        group: "soguk-icecekler",
        name: "Ayran",
        price: 50,
        tags: ["cok-tercih"],
      },
      { id: "salgam", group: "soguk-icecekler", name: "Şalgam", price: 50 },
      { id: "kola", group: "soguk-icecekler", name: "Kola", price: 55 },
      { id: "fanta", group: "soguk-icecekler", name: "Fanta", price: 55 },
      { id: "sprite", group: "soguk-icecekler", name: "Sprite", price: 55 },
      {
        id: "premium-soda",
        group: "soguk-icecekler",
        name: "Premium Soda",
        price: 60,
      },
      { id: "kutu-kola", group: "soguk-icecekler", name: "Kutu Kola", price: 75 },
      {
        id: "kutu-fanta",
        group: "soguk-icecekler",
        name: "Kutu Fanta",
        price: 75,
      },
      {
        id: "kutu-sprite",
        group: "soguk-icecekler",
        name: "Kutu Sprite",
        price: 75,
      },
      {
        id: "kutu-fuse-tea",
        group: "soguk-icecekler",
        name: "Kutu Fuse Tea",
        price: 75,
      },
      { id: "redbull", group: "soguk-icecekler", name: "Redbull", price: 130 },
      {
        id: "hardaliye",
        group: "soguk-icecekler",
        name: "Hardaliye",
        price: 250,
        tags: ["yoresel"],
      },
      {
        id: "cay",
        group: "sicak-icecekler",
        name: "Çay",
        price: 60,
      },
      {
        id: "turk-kahvesi",
        group: "sicak-icecekler",
        name: "Türk Kahvesi",
        price: 110,
      },
      { id: "espresso", group: "sicak-icecekler", name: "Espresso", price: 120 },
      {
        id: "americano",
        group: "sicak-icecekler",
        name: "Americano",
        price: 140,
      },
      { id: "latte", group: "sicak-icecekler", name: "Latte", price: 150 },
    ],
  },
  {
    /*
     * Alkollü ürünlerde AÇIKLAMA YOKTUR — işletme kararı, bkz. dosya başı.
     * Rakılar ölçüye göre fiyatlandığı için `price` yerine `variants` taşır.
     */
    id: "alkollu-icecekler",
    title: "Alkollü İçecekler",
    note: "Alkollü servis salonda geçerlidir.",
    groups: [
      { id: "rakilar", title: "Rakılar" },
      { id: "saraplar", title: "Şaraplar", note: "Şişe fiyatıdır." },
      { id: "kadeh-sarap", title: "Kadeh Şarap" },
      { id: "biralar", title: "Biralar" },
      { id: "yabanci-alkoller", title: "Yabancı Alkoller", note: "Duble fiyatıdır." },
    ],
    items: [
      /* ── Rakılar ── */
      {
        id: "yeni-raki",
        group: "rakilar",
        name: "Yeni Rakı",
        variants: [
          { label: "tek", price: 190 },
          { label: "duble", price: 370 },
          { label: "20cl", price: 950 },
          { label: "35cl", price: 1350 },
          { label: "50cl", price: 1900 },
          { label: "70cl", price: 2500 },
          { label: "100cl", price: 3100 },
        ],
      },
      {
        id: "beylerbeyi-gobek",
        group: "rakilar",
        name: "Beylerbeyi Göbek",
        variants: [
          { label: "tek", price: 270 },
          { label: "duble", price: 520 },
          { label: "20cl", price: 1075 },
          { label: "35cl", price: 1700 },
          { label: "50cl", price: 2350 },
          { label: "70cl", price: 3050 },
          { label: "100cl", price: 3950 },
        ],
      },
      {
        id: "tekirdag-altin-seri",
        group: "rakilar",
        name: "Tekirdağ Altın Seri",
        variants: [
          { label: "tek", price: 230 },
          { label: "duble", price: 450 },
          { label: "20cl", price: 995 },
          { label: "35cl", price: 1650 },
          { label: "50cl", price: 2350 },
          { label: "70cl", price: 3000 },
          { label: "100cl", price: 3800 },
        ],
      },
      {
        id: "efe-gold",
        group: "rakilar",
        name: "Efe Gold",
        variants: [
          { label: "tek", price: 230 },
          { label: "duble", price: 450 },
          { label: "20cl", price: 995 },
          { label: "35cl", price: 1650 },
          { label: "50cl", price: 2350 },
          { label: "70cl", price: 3000 },
          { label: "100cl", price: 3800 },
        ],
      },

      /* ── Şaraplar (şişe) ── */
      { id: "sarap-vd-purnese", group: "saraplar", name: "VD Pürneşe", price: 700 },
      { id: "sarap-buzbag", group: "saraplar", name: "Buzbağ", price: 900 },
      { id: "sarap-vd-okuzgozu", group: "saraplar", name: "VD Öküzgözü", price: 950 },
      { id: "sarap-vd-arc-virtus", group: "saraplar", name: "VD Arc Virtus", price: 1000 },
      { id: "sarap-vd-merlot", group: "saraplar", name: "VD Merlot", price: 1000 },
      { id: "sarap-vd-190", group: "saraplar", name: "VD 190", price: 1300 },

      /* ── Kadeh Şarap ── */
      { id: "kadeh-vd-purnese", group: "kadeh-sarap", name: "VD Pürneşe", price: 350 },
      { id: "kadeh-buzbag", group: "kadeh-sarap", name: "Buzbağ", price: 450 },
      { id: "kadeh-vd-okuzgozu", group: "kadeh-sarap", name: "VD Öküzgözü", price: 475 },
      { id: "kadeh-vd-arc-virtus", group: "kadeh-sarap", name: "VD Arc Virtus", price: 500 },
      { id: "kadeh-vd-merlot", group: "kadeh-sarap", name: "VD Merlot", price: 500 },
      { id: "kadeh-vd-190", group: "kadeh-sarap", name: "VD 190", price: 650 },

      /* ── Biralar ── */
      { id: "efes-33", group: "biralar", name: "Efes", unit: "33 cl", price: 180 },
      /* Peja alkolsüzdür; bilgi açıklama değil etiket olarak durur ki
         müşteri alkollü sanmasın. */
      { id: "peja", group: "biralar", name: "Peja", unit: "Alkolsüz", price: 220 },
      { id: "efes-plus1", group: "biralar", name: "Efes +1", price: 220 },
      { id: "efes-malt", group: "biralar", name: "Efes Malt", price: 220 },
      { id: "tuborg", group: "biralar", name: "Tuborg", price: 230 },
      { id: "carlsberg", group: "biralar", name: "Carlsberg", price: 240 },
      { id: "efes-ozel-seri", group: "biralar", name: "Efes Özel Seri", price: 240 },
      { id: "bomonti-filtresiz", group: "biralar", name: "Bomonti Filtresiz", price: 240 },
      { id: "belfast", group: "biralar", name: "Belfast", price: 250 },
      { id: "budweiser", group: "biralar", name: "Budweiser", price: 260 },
      { id: "stella-artois", group: "biralar", name: "Stella Artois", price: 270 },
      { id: "heineken", group: "biralar", name: "Heineken", price: 300 },

      /* ── Yabancı Alkoller (duble) ── */
      { id: "absolute", group: "yabanci-alkoller", name: "Absolute", price: 450 },
      { id: "gordons", group: "yabanci-alkoller", name: "Gordon's", price: 450 },
      { id: "jack-daniels", group: "yabanci-alkoller", name: "Jack Daniel's", price: 525 },
      { id: "chivas-regal", group: "yabanci-alkoller", name: "Chivas Regal", price: 550 },
    ],
  },
];
