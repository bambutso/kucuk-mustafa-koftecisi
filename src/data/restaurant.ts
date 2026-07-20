/**
 * İşletmeye ait tüm gerçek bilgiler tek kaynaktan yönetilir.
 * Kaynaklar: işletme künyesi, kirklarelikoftesi.com, TripAdvisor.
 */

export const CART_YEAR = 1935;
export const FOUNDING_YEAR = 1939;

/** Dükkânın yaşı — site yıllar geçse de doğru kalsın diye dinamik. */
export function shopAge(): number {
  return new Date().getFullYear() - FOUNDING_YEAR;
}

/** Wix CDN'deki gerçek işletme fotoğrafları için boyutlandırılmış URL üretir. */
function wixPhoto(id: string, w = 1200, h = 800): string {
  return `https://static.wixstatic.com/media/1d5e1c_${id}~mv2.jpg/v1/fill/w_${w},h_${h},al_c,q_85/kucuk-mustafa-koftecisi.jpg`;
}

function unsplash(id: string, w = 1600): string {
  return `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const images = {
  /** Karanlıkta yanan ateş — hero atmosferi (Unsplash) */
  heroFire: unsplash("photo-1475738972911-5b44ce984c42", 2000),
  /** Gerçek fotoğraf: 8 köftelik porsiyon, közlenmiş biber ve piyazıyla */
  koftePlate: wixPhoto("e862a722eaef4dacb3e88864c27efbd1"),
  /** Gerçek fotoğraf: 1939 tabelalı dükkân cephesi */
  storefront: wixPhoto("cc20b1bff6874f1eb4740fb21c07dd2b"),
  /** Gerçek fotoğraf: usta, köz başında */
  ustaGrill: wixPhoto("d55687df66b840fb8657152e7b0fbc56"),
  /** Dökme tavada ızgara — koyu atmosfer (Unsplash) */
  grillPlate: unsplash("photo-1594041680534-e8c8cdebd659", 1200),
  /** Piyazlık soğanla şiş tabağı (Unsplash) */
  lambSkewer: unsplash("photo-1603360946369-dc9bb6258143", 1200),
  /** Şiş ve közlenmiş sebze sofrası (Unsplash) */
  skewerSpread: unsplash("photo-1555939594-58d7cb561ad1", 1200),
  /** Sıcak ahşap dokulu salon atmosferi (Unsplash) */
  salonInterior: unsplash("photo-1514933651103-005eec06c04b", 1600),
} as const;

/**
 * İşletmenin kendi Instagram arşivinden indirilen kareler (@kucukmustafakoftecisi1939).
 * CDN linkleri kısa ömürlü olduğundan siteye yerel kopyaları gömülüdür.
 */
function local(file: string): string {
  return `${import.meta.env.BASE_URL}gallery/${file}`;
}

export const igImages = {
  /** Ekmek üstünde iki iri köfte, söğüş garnitürüyle — güncel sunum */
  kofteTabak: local("ig-kofte-tabak.jpg"),
  /** Güveçte kaşarlı mantar — yeni ürün */
  guvecMantar: local("ig-guvec-mantar.jpg"),
  /** Logo işlemeli menü föyü, loş lamba ışığında */
  menuFoyu: local("ig-menu-foyu.jpg"),
  /** Yenilenen salon: bordo kadife koltuklar, ahşap lambri */
  salonBordo: local("ig-salon-bordo.jpg"),
  /** Salon, kırmızı perde ve tuğla dokusu */
  salonPerde: local("ig-salon-perde.jpg"),
  /** Toplu yemek / organizasyon için kurulmuş uzun masa */
  organizasyon: local("ig-organizasyon.jpg"),
  /** Logo baskılı runner ile masa kurulumu detayı */
  masaDetay: local("ig-masa-detay.jpg"),
  /** Salonun gündelik hali, misafirlerle */
  salonIci: local("ig-salon-ici.jpg"),
  /** Gece atmosferi: mum ışığı ve kadehler */
  geceAtmosfer: local("ig-gece-atmosfer.jpg"),
  /** Pirinç masa lambası detayı */
  lamba: local("ig-lamba.jpg"),
} as const;

/** Ana sayfadaki Instagram şeridi — gerçek gönderi linkleriyle */
export const instagramStrip = [
  {
    image: igImages.kofteTabak,
    alt: "Ekmek üstünde iki köfte, söğüş garnitürüyle",
    href: "https://www.instagram.com/p/DRZtqsNjNKU/",
  },
  {
    image: igImages.salonBordo,
    alt: "Yenilenen salon: bordo kadife koltuklar",
    href: "https://www.instagram.com/p/DWTp66hDGqO/",
  },
  {
    image: igImages.guvecMantar,
    alt: "Güveçte kaşarlı mantar",
    href: "https://www.instagram.com/p/DRNXw44jCUm/",
  },
  {
    image: igImages.menuFoyu,
    alt: "Logo işlemeli menü föyü",
    href: "https://www.instagram.com/p/DRckSt-DDFe/",
  },
  {
    image: igImages.masaDetay,
    alt: "Masa kurulumu detayı",
    href: "https://www.instagram.com/p/DV3UPrVDKjO/",
  },
  {
    image: igImages.salonIci,
    alt: "Salonun gündelik hali",
    href: "https://www.instagram.com/p/DI1c5cOMYoJ/",
  },
] as const;

export const restaurant = {
  name: "Küçük Mustafa Köftecisi",
  city: "Kırklareli",
  slogan: "1939'dan günümüze yaşayan efsane",
  phone: {
    display: "0288 212 76 12",
    href: "tel:+902882127612",
  },
  address: {
    lines: [
      "Karacaibrahim Mahallesi",
      "Şükrü Naili Geçidi No:1, Kasaplar Arası",
      "Merkez / Kırklareli",
    ],
    landmark: "Şevket Dingiloğlu Parkı karşısı",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=K%C3%BC%C3%A7%C3%BCk+Mustafa+K%C3%B6ftecisi+K%C4%B1rklareli",
    embedUrl:
      "https://maps.google.com/maps?q=K%C3%BC%C3%A7%C3%BCk+Mustafa+K%C3%B6ftecisi+K%C4%B1rklareli&z=16&ie=UTF8&output=embed",
  },
  hours: {
    days: "Haftanın 7 günü",
    open: "09:00",
    close: "03:00",
  },
  capacity: {
    tables: 16,
    seats: 75,
  },
  services: ["Yerinde Servis", "Paket Servis", "Gel Al", "Alkollü Servis"],
  socials: {
    instagram: "https://www.instagram.com/kucukmustafakoftecisi1939/",
    tripadvisor:
      "https://www.tripadvisor.com.tr/Restaurant_Review-g3252637-d10962098-Reviews-Kucuk_Mustafa_Koftecisi-Kirklareli_Kirklareli_Province.html",
  },
  /** TripAdvisor'dan alınan gerçek veriler */
  rating: {
    score: 4.4,
    outOf: 5,
    count: 56,
    rank: 1,
    totalInCity: 87,
    award: "Travellers' Choice",
    source: "TripAdvisor",
  },
} as const;

/** Ana sayfa — marka özeti */
export const manifesto = {
  eyebrow: "Kırklareli Köftesi",
  title: "Tarif 1939'dan beri aynı; değiştirmeyi hiç düşünmedik.",
  text: "Dana etine Kırklareli'nin coğrafi işaretli Kıvırcık kuzusu katılır; kuru soğan ve bayat ekmekle yoğrulur, meşe kömürünün korunda mühürlenir. Baharat azdır — damakta kalan et olsun diye. Yanında piyazlık soğan, közlenmiş yeşil biber ve ev yapımı acı sos: sofra kurulmuştur.",
} as const;

/** Ana sayfa — hikâye bölümü */
export const story = {
  pullQuote: "Babamın beni ilk götürdüğü köfteci.",
  chapters: [
    {
      year: "1935",
      title: "Arasta Çarşısı'nın önünde bir araba",
      text: "Mustafa Akkul'un boyu kısaydı; herkes ona \"Küçük Mustafa\" derdi. 1935'te Arasta Çarşısı'nın önüne küçük bir seyyar araba koydu. Sermayesi azdı ama terazisi doğru, közü sabırlıydı. Kırklareli, köfteyle onun elinden tanıştı.",
    },
    {
      year: "1939",
      title: "Önü bakkal, arkası köfteci",
      text: "Kırklareli'nin kurtuluşunun 15. yılında Küçük Mustafa da kendi çatısına kavuştu: Şevket Dingiloğlu Parkı'nın karşısında bir dükkân. Ön tarafta bakkal tezgâhı, arkada köz. Kapıdan ekmek almaya giren, köfte kokusuyla çıkardı.",
    },
    {
      year: "Bugün",
      title: "Ustadan çırağa, dört kuşak",
      text: "Ocağın başı hiç boş kalmadı: İbrahim Kayacan, Necdet Kayacan, Cüneyt Kayacan… Bugün közün karşısında Ergin Kalınoğlu duruyor. İsimler değişti; köftenin harcı, közün ateşi, kapıdan girene verilen selam değişmedi.",
    },
  ],
} as const;

/** Ana sayfa — "Neden farklı?" kartları */
export const features = [
  {
    id: "et",
    kicker: "Et",
    title: "Coğrafi işaretli Kıvırcık",
    text: "Dana etinin yanına Kırklareli'nin coğrafi işaretli Kıvırcık kuzu eti katılır. Harcın sırrı oranda; ölçüsü seksen yılı aşkın el terazisi.",
  },
  {
    id: "harc",
    kicker: "Harç",
    title: "Az baharat, çok et",
    text: "Kuru soğan, bayat ekmek, tuz. Baharat etin önüne geçmesin diye kapıda bekletilir; damakta kalan köfte değil, et olur.",
  },
  {
    id: "ates",
    kicker: "Ateş",
    title: "Meşe kömürünün koru",
    text: "Alev değil, kor. Meşe kömürü küllenip kor bağlayınca köfte ızgaraya gelir; dışı mühürlenir, içi sulu kalır.",
  },
  {
    id: "sunum",
    kicker: "Sunum",
    title: "Değişmeyen tabak",
    text: "Piyazlık kuru soğan, közlenmiş yeşil biber, ev yapımı acı sos. 250 gramlık porsiyonda sekiz köfte — 1939'dan beri böyle.",
  },
] as const;

/**
 * Yorum kartları temsilîdir; gerçek müşteri yorumu değildir.
 * Puan, yorum sayısı ve sıralama ise TripAdvisor'ın gerçek verisidir.
 */
export const sampleReviews = [
  {
    quote:
      "Köfte tam kıvamında; közün kokusu tabağa kadar geliyor. Servis hızlı, esnaf güler yüzlü.",
    context: "Lezzet ve servis üzerine",
  },
  {
    quote:
      "Kırklareli'ye yolu düşen buraya uğramadan dönmesin. Piyazı ve ev yapımı acı sosu başka yerde yok.",
    context: "Yöresellik üzerine",
  },
  {
    quote:
      "Çocukluğumun tadı aynen duruyor. Bir zamanlar babamla gelirdim; şimdi oğlumla geliyorum.",
    context: "Hatıralar üzerine",
  },
] as const;

export const reviewsDisclaimer =
  "Puan, yorum sayısı ve sıralama TripAdvisor verisidir; yorum kartları temsilî örneklerdir.";

/** Hikayemiz sayfası — genişletilmiş anlatı */
export const storyPage = {
  lead: "Bu hikâye bir dükkândan büyük. Bir adamın lakabından, bir şehrin damak hafızasından ve seksen yılı aşkındır sönmeyen bir közden yapılma.",
  chapters: [
    {
      id: "1935",
      year: "1935",
      title: "Arasta Çarşısı'nın önünde bir araba",
      paragraphs: [
        "Mustafa Akkul'un boyu kısaydı. Kırklareli çarşısında herkes ona \"Küçük Mustafa\" derdi; o da bu ismi bir kusur gibi değil, bir imza gibi taşıdı.",
        "1935'te Arasta Çarşısı'nın önüne küçük bir seyyar araba koydu. Sermayesi bir maşa, bir ızgara ve doğru tartan bir teraziydi. Sabah pazara inen esnaf, akşam evine dönen memur; herkes o arabanın önünde bir kez olsun durdu.",
        "Köfte o yıllarda da vardı elbette. Ama Kırklareli, köftenin bir ustanın elinde nasıl başka bir şeye dönüştüğünü Küçük Mustafa'nın arabasında öğrendi.",
      ],
    },
    {
      id: "1939",
      year: "1939",
      title: "Önü bakkal, arkası köfteci",
      paragraphs: [
        "1939, Kırklareli'nin kurtuluşunun 15. yılıydı. Şehir bayram yerindeyken Küçük Mustafa da kendi bayramını yaşadı: Şevket Dingiloğlu Parkı'nın karşısında, kendi çatısı olan bir dükkân.",
        "Dükkân iki yüzlüydü: Ön tarafta bakkal tezgâhı — ekmek, peynir, zeytin. Arka tarafta ise köz. Kapıdan ekmek almaya giren, arkadan gelen kokuya dayanamaz, bir porsiyon köfteyle çıkardı.",
        "O gün asılan tabela bugün hâlâ aynı yerde duruyor: Karacaibrahim Mahallesi, Kasaplar Arası. Adres hiç değişmedi; değişmesin diye de kimse kapıyı başka semte taşımayı aklından geçirmedi.",
      ],
    },
    {
      id: "kusaklar",
      year: "Kuşaklar",
      title: "Ustadan çırağa: Kayacanlar",
      paragraphs: [
        "Bir dükkânı açmak hünerse, onu devretmek daha büyük hünerdir. Küçük Mustafa'nın ocağı, çıraklarına kaldı: önce İbrahim Kayacan, sonra Necdet Kayacan, sonra Cüneyt Kayacan.",
        "Her biri kendi devrinin zorluklarından geçti; kıtlık yılları, göç yılları, çarşının değişen çehresi. Değişmeyen tek şey tezgâhın arkasındaki ölçüydü: az baharat, çok et, sabırlı kor.",
        "Kırklareli'nde bir söz vardır; tarif dükkânın değil, ocağın malıdır denir. Ocak kimdeyse tarif ondadır — ve bu ocak hiç sönmedi.",
      ],
    },
    {
      id: "bugun",
      year: "Bugün",
      title: "Közün başında: Ergin Kalınoğlu",
      paragraphs: [
        "Bugün közün karşısında Ergin Kalınoğlu duruyor. Sabah dokuzda kepenk açılıyor, gece üçte son çay ocaktan iniyor; haftanın yedi günü.",
        "Deden kalma usul aynı: Dana etine coğrafi işaretli Kıvırcık kuzusu, kuru soğan, bayat ekmek. Meşe kömürü küllenip kor bağlamadan tek köfte ızgaraya konmuyor.",
        "Ve hâlâ, her gün, kapıdan girip \"Babamla gelirdik buraya\" diyen biri oluyor. Bu cümle, seksen yılı aşkın emeğin tek gerçek ödülü.",
      ],
    },
  ],
} as const;

/** Mekân sayfası içeriği */
export const placePage = {
  lead: "Şevket Dingiloğlu Parkı'nın karşısında, Kasaplar Arası'nda; önü bir zamanlar bakkal, arkası hep köfteci olan dükkân.",
  salon: {
    title: "Salon",
    text: "On altı masa, yetmiş beş sandalye. Ne büyük bir salon, ne gösterişli bir dekor — formika değil ahşap, poster değil hatıra. Masalar birbirine yakındır; çünkü burada yan masayla muhabbet, mönünün gayriresmî parçasıdır.",
  },
  ocak: {
    title: "Ocak",
    text: "Salonun kalbi arkadaki ocaktır. Meşe kömürü küllenip kor bağlayana kadar beklenir; alev görmüş köfte bu tezgâhtan çıkmaz. Közün başındaki maşa, günde yüzlerce kez ama hep aynı sabırla döner.",
  },
  organizasyon: {
    title: "Özel Organizasyon & Toplu Yemek",
    text: "Seminer, eğitim, aile yemeği ya da kalabalık kutlamalar için salonumuz masa düzeniyle hazırlanır. Toplu yemek ve özel organizasyonlar için önceden rezervasyon yaptırmanız yeterli.",
  },
  services: [
    {
      id: "yerinde",
      title: "Yerinde Servis",
      text: "Haftanın 7 günü 09:00–03:00. Öğle esnafı, akşam aileler, gece vardiyadan çıkanlar; salon hiç boş kalmaz.",
    },
    {
      id: "paket",
      title: "Paket Servis",
      text: "Telefonla sipariş verin, közden indiği gibi kapınıza gelsin: 0288 212 76 12.",
    },
    {
      id: "gelal",
      title: "Gel Al",
      text: "Tezgâhtan teslim. Köfte ekmek sarılır, park karşıda — gerisi size kalmış.",
    },
    {
      id: "alkollu",
      title: "Alkollü Servis",
      text: "Salonda rakı ve yerli bira servisi yapılır. Közde köfteyle rakı, Trakya'nın eski âdetidir.",
    },
  ],
} as const;
