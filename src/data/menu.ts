/**
 * ─────────────────────────────────────────────────────────────────────────
 *  MENÜ — İŞLETMENİN KENDİ MENÜSÜNDEN OKUNDU
 *
 *  Kaynaklar (Google Haritalar galerisindeki işletme fotoğrafları):
 *   • Basılı menü (EN GÜNCEL fiyat kuşağı) → Izgara Çeşitleri, Başlangıçlar,
 *     Salata/Meze/Soğuk Meze listeleri ve fiyatları.
 *   • Ayaklı fiyat panosu (bir kuşak eski) → Tatlılar ve Soğuk İçecekler.
 *     Bu iki kategorinin fiyatları basılı menüde görünmüyordu; pano
 *     fiyatları ızgaralarda basılı menünün ~%12 altında kalıyor.
 *   • Bar dolabı ve raf fotoğrafları → alkollü içecek markaları.
 *     Alkolde FİYAT KAYNAĞI YOK; bu kalemler bilerek fiyatsız bırakıldı
 *     (kart "fiyat için sorunuz" gösterir). Uydurma fiyat yazılmadı.
 *
 *  Ürün adları menüdeki yazımıyla korunmuştur.
 * ─────────────────────────────────────────────────────────────────────────
 */
import type { MenuCategory } from "../types/menu";
import { gmImages, igImages } from "./restaurant";

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
        description:
          "Dükkânın adını taşıyan köfte. Kuru soğan ve bayat ekmekle yoğrulan harç meşe korunda mühürlenir; kemik suyuna batırılmış köy ekmeği eşliğinde gelir.",
        price: 390,
        image: gmImages.koftePorsiyon,
        imageAlt:
          "Porsiyon köfte; ev yapımı acı sos, piyazlık soğan, domates ve közlenmiş biberle",
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
        description: "Aynı harç, acısı harca katılmış hâliyle.",
        price: 410,
        image: gmImages.kofteOnikili,
        imageAlt: "Kalabalık köfte tabağı; domates ve piyazlık soğanla",
        spice: 2,
      },
      {
        id: "kasarli-kofte",
        name: "Kaşarlı Köfte",
        description: "Köftenin içi kaşarla doldurulur; közde erir.",
        price: 430,
        image: gmImages.kofteYarim,
        imageAlt: "Közlenmiş yeşil biberle servis edilen köfte tabağı",
      },
      {
        id: "pastirmali-kofte",
        name: "Pastırmalı Köfte",
        description: "Harca pastırma katılır; közde kokusu salona yayılır.",
        price: 450,
      },
      {
        id: "sefin-koftesi",
        name: "Şefin Köftesi",
        description: "Ocağın başındaki ustanın kendi tarifi.",
        price: 490,
        tags: ["sef-onerisi"],
      },
    ],
  },
  {
    id: "izgaralar",
    title: "Izgaralar",
    note: "Hepsi meşe kömürünün korunda, döküm ızgarada.",
    items: [
      {
        id: "tavuk-izgara",
        name: "Tavuk Izgara",
        description: "Az baharatlı, közde. Et yemeyenin gönlü kalmasın diye.",
        price: 300,
      },
      {
        id: "kasap-sucuk",
        name: "Kasap Sucuk",
        description: "Kasaplar Arası'nın sucuğu, közde kıtırlaşana kadar.",
        price: 390,
      },
      {
        id: "tava-ciger",
        name: "Tava Ciğer",
        description: "İnce doğranmış ciğer, kızgın tavada; piyazlık soğanla.",
        price: 430,
      },
      {
        id: "ciger-sis",
        name: "Ciğer Şiş",
        description: "Kuyruk yağıyla şişe dizilir, korda çevrilir.",
        price: 450,
      },
      {
        id: "antrikot",
        name: "Antrikot",
        description: "Kalın kesim, mühürlenip dinlendirilir.",
        price: 590,
      },
      {
        id: "istranca-kuzu-sis",
        name: "Istranca Kuzu Şiş",
        description:
          "Istranca Dağları'nın kuzusundan kuşbaşı; közde mühürlenir, piyazlık soğan ve közlenmiş biberle.",
        price: 650,
        image: gmImages.kuzuSis,
        imageAlt: "Közden inmiş kuzu şişler; domates ve közlenmiş biberle",
        tags: ["yoresel"],
      },
      {
        id: "kulbasti",
        name: "Külbastı",
        description: "İnce dövülmüş et, doğrudan külün üstünde.",
        price: 650,
      },
      {
        id: "kusleme",
        name: "Küşleme",
        description: "Kuzunun en makbul yeri; ağızda dağılır.",
        price: 720,
      },
      {
        id: "bonfile",
        name: "Bonfile",
        description: "Yağsız, yumuşak kesim; istediğiniz pişme derecesinde.",
        price: 750,
      },
      {
        id: "istranca-kuzu-pirzola",
        name: "Istranca Kuzu Pirzola",
        description: "Trakya kuzusundan, kemiği tutulacak kadar sulu.",
        price: 750,
        tags: ["yoresel"],
      },
      {
        id: "istranca-kuzu-lokum",
        name: "Istranca Kuzu Lokum",
        description: "Kuzunun lokum gibi kesimi; sadece tuz ve kor.",
        price: 790,
        tags: ["yoresel"],
      },
      {
        id: "karisik-izgara",
        name: "Karışık Izgara",
        unit: "1 Kuzu Lokum · 1 Kuzu Pirzola · 2 Köfte · 1 Külbastı",
        description: "Kararsız kalanlara ocağın özeti; tek tabakta beş kalem.",
        price: 790,
        image: gmImages.karisikIzgara,
        imageAlt: "Şiş ve köftelerle karışık ızgara tabağı, söğüş ve ekmekle",
        tags: ["sef-onerisi"],
      },
    ],
  },
  {
    id: "ara-sicaklar",
    title: "Ara Sıcaklar",
    items: [
      {
        id: "mercimek-corbasi",
        name: "Mercimek Çorbası",
        description: "Tereyağlı, kıvamı yerinde. Limonla sevene.",
        price: 120,
      },
      {
        id: "pacanga-boregi",
        name: "Paçanga Böreği",
        description: "Pastırma ve kaşar, ince yufkada kızarmış.",
        price: 200,
      },
      {
        id: "patates-kizartmasi",
        name: "Patates Kızartması",
        description: "Elde doğranmış, sıcak servis.",
        price: 220,
      },
      {
        id: "guvec-kasarli-mantar",
        name: "Güveçte Kaşarlı Mantar",
        description:
          "Toprak güveçte, üzeri kaşarla örtülüp közde kızartılır. Ocaktan geldiği gibi, fokurdarken servis edilir.",
        image: igImages.guvecMantar,
        imageAlt: "Güveçte kaşarlı mantar, üzeri kızarmış halde",
        tags: ["yeni"],
      },
    ],
  },
  {
    id: "mezeler",
    title: "Mezeler",
    note: "Günlük hazırlanır; tabak tabak masaya gelir.",
    items: [
      {
        id: "sogus-tabagi",
        name: "Söğüş Tabağı",
        description: "Mevsim sebzesi, iri doğranmış, limonlu.",
        price: 75,
        image: gmImages.sogus,
        imageAlt: "Limonlu söğüş tabağı; domates, soğan ve siyah zeytinle",
      },
      {
        id: "cerez",
        name: "Çerez",
        description: "Kuruyemiş tabağı, rakının yanına.",
        price: 100,
      },
      {
        id: "eski-kasar",
        name: "Eski Kaşar",
        description: "Trakya'nın olgunlaşmış kaşarı, dilimlenmiş.",
        price: 120,
        image: gmImages.peynirSogus,
        imageAlt: "Beyaz peynir söğüşü; domates, biber ve ekmekle kurulmuş masa",
        tags: ["yoresel"],
      },
      { id: "atom", name: "Atom", description: "Yoğurtlu, acı biberli.", price: 150, spice: 3 },
      {
        id: "sirkeli-kapya",
        name: "Sirkeli Kapya",
        description: "Közlenmiş kapya biber, sirkeli sosuyla.",
        price: 150,
      },
      { id: "semizotu", name: "Semizotu", description: "Yoğurtlu, sarımsaklı.", price: 150 },
      { id: "haydari", name: "Haydari", description: "Süzme yoğurt, dereotu ve sarımsak.", price: 150 },
      {
        id: "havuc-tarator",
        name: "Havuç Tarator",
        description: "Rendelenmiş havuç, yoğurtla.",
        price: 150,
      },
      { id: "rus-salatasi", name: "Rus Salatası", description: "Klasik, mayonezli.", price: 150 },
      {
        id: "kuru-domates",
        name: "Kuru Domates",
        description: "Zeytinyağında dinlendirilmiş.",
        price: 150,
      },
      {
        id: "acili-ezme",
        name: "Acılı Ezme",
        description: "İnce kıyım domates, biber ve soğan; ev usulü.",
        price: 150,
        spice: 2,
      },
      { id: "cacik", name: "Cacık", description: "Salatalıklı, buz gibi.", price: 150 },
      {
        id: "koyun-yogurdu",
        name: "Koyun Yoğurdu",
        description: "Mevsiminde kurulan yoğurt; kaşığın dik durduğu kıvamda.",
        price: 150,
        image: gmImages.koyunYogurdu,
        imageAlt: "Kaşığın dik durduğu kıvamda, kesme koyun yoğurdu",
        tags: ["yoresel", "cok-tercih"],
      },
      {
        id: "karisik-kizartma",
        name: "Karışık Kızartma",
        description: "Patlıcan, biber ve kabak; yoğurt ve domates sosuyla.",
        price: 180,
      },
      {
        id: "kopeoglu",
        name: "Köpeoğlu",
        description: "Közlenmiş patlıcan, yoğurt ve domates sosu.",
        price: 180,
      },
      {
        id: "soslu-patlican",
        name: "Soslu Patlıcan",
        description: "Kızarmış patlıcan, domates sosuyla.",
        price: 180,
      },
      {
        id: "manca",
        name: "Manca",
        description: "Trakya'nın göçmen mezesi; yoğurtlu, sarımsaklı.",
        price: 180,
        tags: ["yoresel"],
      },
      {
        id: "girit",
        name: "Girit",
        description: "Beyaz peynir, ceviz ve yeşillikle ezilmiş.",
        price: 190,
      },
      {
        id: "lux-cerez",
        name: "Lüx Çerez",
        description: "Antep fıstığı ağırlıklı, geniş tabak.",
        price: 190,
      },
      {
        id: "soka",
        name: "Soka",
        description: "Balkan sofralarından, közlenmiş biberli meze.",
        price: 210,
        tags: ["yoresel"],
      },
      {
        id: "buzlu-badem",
        name: "Buzlu Badem",
        description: "Buz üstünde, çıtır çıtır.",
        price: 210,
      },
    ],
  },
  {
    id: "salatalar",
    title: "Salatalar",
    items: [
      {
        id: "coban-salatasi",
        name: "Çoban Salatası",
        description: "Domates, salatalık, biber ve soğan; ince kıyım.",
        price: 170,
        image: gmImages.cobanSalata,
        imageAlt: "Çoban salatası; domates, salatalık, biber, soğan ve zeytinle",
      },
      {
        id: "piyaz",
        name: "Piyaz",
        description:
          "Kuru fasulye, bol kuru soğan, sirke ve zeytinyağı. Köftenin değişmez eşlikçisi.",
        price: 170,
        image: gmImages.piyaz,
        imageAlt: "Kuru fasulye piyazı; domates, soğan ve haşlanmış yumurtayla",
        tags: ["cok-tercih"],
      },
      {
        id: "yesil-salata",
        name: "Yeşil Salata",
        description: "Mevsim yeşillikleri, limon ve zeytinyağıyla.",
        price: 220,
      },
      {
        id: "sopska-salatasi",
        name: "Şopska Salatası",
        description: "Balkan klasiği; üzeri rendelenmiş beyaz peynirle.",
        price: 250,
        tags: ["yoresel"],
      },
    ],
  },
  {
    id: "tatlilar",
    title: "Tatlılar",
    note: "Köftenin üstüne tatlı, Trakya usulü.",
    items: [
      {
        id: "kaymakli-baklava",
        name: "Havuç Dilimi Kaymaklı Baklava",
        description: "Havuç dilimi kesim, üzeri kaymaklı.",
        price: 90,
      },
      {
        id: "kaymakli-peynir-tatlisi",
        name: "Kaymaklı Peynir Tatlısı",
        description: "Şerbetli peynir tatlısı, kaymağıyla.",
        price: 90,
      },
      {
        id: "kaymakli-hayrabolu",
        name: "Kaymaklı Hayrabolu",
        description:
          "Trakya'nın peynirli şerbetli tatlısı; taze peynirle, ılık servis.",
        price: 90,
        image: gmImages.hayrabolu,
        imageAlt: "Şerbetli peynir tatlısı, ılık servis",
        tags: ["sef-onerisi", "yoresel"],
      },
      {
        id: "tralice",
        name: "Traliçe",
        unit: "Özel ev yapımı",
        description: "Balkan göçmenlerinin hediyesi; sütlü, karamelli.",
        price: 90,
        tags: ["yoresel"],
      },
      {
        id: "sutlac",
        name: "Sütlaç",
        description: "Üstü közlenmiş, fırından.",
        price: 90,
      },
      {
        id: "meyve-tabagi",
        name: "Meyve Tabağı",
        description: "Mevsim meyveleri, buz üstünde.",
        price: 190,
      },
    ],
  },
  {
    id: "soguk-icecekler",
    title: "Soğuk İçecekler",
    items: [
      { id: "su", name: "Su", description: "Yarım litre.", price: 20 },
      {
        id: "ayran",
        name: "Ayran",
        description: "Köpüklü, bakır maşrapada.",
        price: 30,
        tags: ["cok-tercih"],
      },
      { id: "soda", name: "Soda", description: "Sade ya da meyveli.", price: 30 },
      { id: "salgam", name: "Şalgam", description: "Acılı ya da acısız.", price: 40, spice: 1 },
      { id: "kola", name: "Kola", description: "Buz gibi, soğutucudan.", price: 55 },
      { id: "fanta", name: "Fanta", description: "Buz gibi, soğutucudan.", price: 55 },
      { id: "sprite", name: "Sprite", description: "Buz gibi, soğutucudan.", price: 55 },
      {
        id: "hardaliye",
        name: "Hardaliye",
        description:
          "Kırklareli'nin asırlık içeceği: hardal tohumuyla fermente üzüm şırası. Şişesi Kırk Kimse'den.",
        tags: ["yoresel"],
      },
    ],
  },
  {
    id: "sicak-icecekler",
    title: "Sıcak İçecekler",
    items: [
      {
        id: "cay",
        name: "Çay",
        description: "İnce belli bardakta, demli.",
        image: gmImages.cay,
        imageAlt: "İnce belli bardakta demli çay, logolu runner üzerinde",
      },
      {
        id: "turk-kahvesi",
        name: "Türk Kahvesi",
        description: "Közde pişmiş, yanında lokum.",
      },
    ],
  },
  {
    id: "biralar",
    title: "Biralar",
    note: "Alkollü servis salonda geçerlidir. Fiyatlar için servis ekibimize danışın.",
    items: [
      {
        id: "efes-pilsen",
        name: "Efes Pilsen",
        description: "Soğuk servis, şişede.",
        image: gmImages.bira,
        imageAlt: "Buz gibi bira, dış masada",
      },
      {
        id: "tuborg-gold",
        name: "Tuborg Gold",
        description: "Soğuk servis, şişede.",
      },
    ],
  },
  {
    id: "rakilar",
    title: "Rakılar",
    note: "Közde köftenin klasik eşlikçisi. Şişe boyları 20–100 cl arasında değişir.",
    items: [
      {
        id: "yeni-raki",
        name: "Yeni Rakı",
        unit: "Yeni Seri",
        description: "Klasik. Beyaz peynir ve kavunla.",
        image: gmImages.raki,
        imageAlt: "Rakı şişesi ve işletmenin logolu peçetesi",
        tags: ["cok-tercih"],
      },
      {
        id: "tekirdag-altin-seri",
        name: "Tekirdağ Rakısı Altın Seri",
        description: "Meşe fıçılarda dinlendirilmiş; Trakya'nın kendi rakısı.",
        tags: ["yoresel"],
      },
      {
        id: "tekirdag-sir-kavrulmus",
        name: "Tekirdağ Rakısı Sır Kavrulmuş",
        description: "Kavrulmuş anasonuyla, dolgun.",
        tags: ["yoresel"],
      },
      {
        id: "izmir-gobek",
        name: "İzmir Rakısı Göbek",
        description: "Göbek suyundan, yumuşak içimli.",
      },
      {
        id: "kulup-rakisi",
        name: "Kulüp Rakısı",
        description: "Eski usul, sert karakterli.",
      },
      {
        id: "efe-gold",
        name: "Efe Gold",
        description: "Hafif anasonlu, dengeli.",
      },
    ],
  },
  {
    id: "viskiler",
    title: "Viskiler",
    note: "Kadeh ya da şişe olarak servis edilir.",
    items: [
      {
        id: "chivas-regal-12",
        name: "Chivas Regal 12",
        unit: "12 yıllık",
        description: "İskoç harman viski, yumuşak bitişli.",
      },
      {
        id: "jack-daniels",
        name: "Jack Daniel's",
        unit: "Tennessee",
        description: "Akçaağaç kömüründe süzülmüş, tatlımsı.",
      },
    ],
  },
  {
    id: "saraplar",
    title: "Şaraplar",
    note: "Trakya bağlarından; kadeh ya da şişe.",
    items: [
      {
        id: "saranta",
        name: "Saranta",
        description:
          "Kırklareli bağlarından butik şarap; köftenin yanında yerli bir seçenek.",
        tags: ["yoresel"],
      },
      {
        id: "vino-dessera",
        name: "Vino Dessera",
        description:
          "Vize'de üretilen Trakya şarabı; kırmızı ve beyaz seçenekleriyle.",
        tags: ["yoresel"],
      },
    ],
  },
];
