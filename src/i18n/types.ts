/**
 * Çok dilli içerik altyapısının tip sözleşmesi.
 * tr.ts kaynak (kanonik) içeriktir; diğer diller bu arabirimi doldurur.
 * Menü ve galeri çevirileri id-anahtarlı katmandır: çeviri yoksa Türkçesine düşülür
 * (yönetim panelinden eklenen yeni ürünler böylece bozulmaz).
 */

export type Lang = "tr" | "en" | "bg" | "el" | "ar" | "es" | "ja";

/** Dil kutusunda bayrağı çizilen ülkeler (bkz. components/ui/Flag.tsx) */
export type LangCountry = "TR" | "GB" | "BG" | "GR" | "SA" | "ES" | "JP";

export const LANGS: ReadonlyArray<{
  code: Lang;
  /** Dilin kendi adıyla etiketi (dil kutusunda görünür) */
  label: string;
  dir: "ltr" | "rtl";
  /** Tarih biçimlendirme için yerel ayar */
  locale: string;
  /**
   * Dil kutusundaki bayrağın ülkesi (ISO 3166-1 alpha-2).
   * Dil ≠ ülke; burada dilin en yaygın tanındığı bayrak seçilir.
   */
  country: LangCountry;
}> = [
  { code: "tr", label: "Türkçe", dir: "ltr", locale: "tr-TR", country: "TR" },
  { code: "en", label: "English", dir: "ltr", locale: "en-GB", country: "GB" },
  { code: "bg", label: "Български", dir: "ltr", locale: "bg-BG", country: "BG" },
  { code: "el", label: "Ελληνικά", dir: "ltr", locale: "el-GR", country: "GR" },
  { code: "ar", label: "العربية", dir: "rtl", locale: "ar", country: "SA" },
  { code: "es", label: "Español", dir: "ltr", locale: "es-ES", country: "ES" },
  { code: "ja", label: "日本語", dir: "ltr", locale: "ja-JP", country: "JP" },
];

export interface Chapter {
  year: string;
  title: string;
  text: string;
}

export interface StoryPageChapter {
  id: string;
  year: string;
  title: string;
  paragraphs: ReadonlyArray<string>;
}

export interface Feature {
  id: string;
  kicker: string;
  title: string;
  text: string;
}

/** "Hakkımızda" bölümündeki vurgu kartı (ikon bileşende, metin i18n'de). */
export interface AboutCard {
  id: string;
  title: string;
  text: string;
}

/** Ana sayfa "Hakkımızda" bölümü: metin paragrafları + 3 vurgu kartı. */
export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: ReadonlyArray<string>;
  cards: ReadonlyArray<AboutCard>;
}

/** Ana sayfa "Neden Biz" şeridi: kısa rozet metinleri (ikon bileşende). */
export interface WhyUsContent {
  eyebrow: string;
  items: ReadonlyArray<{ id: string; text: string }>;
}

export interface ServiceCard {
  id: string;
  title: string;
  text: string;
}

/** Gerçek bir yorumun başlığı ve (kısaltılmış) metni */
export interface RealReview {
  title: string;
  quote: string;
}

export interface ReservationStep {
  no: string;
  title: string;
  text: string;
}

export interface SiteContent {
  ui: {
    common: {
      reserve: string;
      callUs: string;
      directions: string;
      close: string;
      callNow: string;
    };
    nav: {
      home: string;
      story: string;
      place: string;
      menu: string;
      gallery: string;
      contact: string;
      reservation: string;
      openMenu: string;
      closeMenu: string;
      mainNav: string;
      mobileNav: string;
      footerNav: string;
      skipToContent: string;
      admin: string;
    };
    home: { docTitle: string; docDesc: string };
    hero: {
      title: string;
      /** H1'de markadan sonra okunan, ne sattığımızı söyleyen kısım */
      srSuffix: string;
      tagline: string;
      ctaMenu: string;
      reviewGoogle: string;
      reviewTripadvisor: string;
    };
    stats: { years: string; generations: string; portion: string };
    homeStory: {
      eyebrow: string;
      title: string;
      captionShop: string;
      captionUsta: string;
      quoteSub: string;
    };
    why: { eyebrow: string; title: string; lead: string };
    signature: {
      eyebrow: string;
      title: string;
      lead: string;
      imageCaption: string;
      seeAll: string;
    };
    instagram: {
      title: string;
      lead: string;
      follow: string;
      openPost: string;
    };
    reviews: {
      eyebrow: string;
      reviewsWord: string;
      rankLine: (rank: number, total: number) => string;
      ourPage: (source: string) => string;
      starsAria: (score: number, outOf: number) => string;
      /** Google bloğu — TripAdvisor bloğuyla simetrik başlık ve etiketler */
      googleEyebrow: string;
      googleLine: string;
      writeReview: string;
    };
    location: {
      eyebrow: string;
      title: string;
      mapTitle: string;
    };
    footer: {
      addressTitle: string;
      hoursTitle: string;
      servicesTitle: string;
      tagline: string;
    };
    menuPage: {
      docTitle: string;
      docDesc: string;
      heading: string;
      tagline: string;
      searchLabel: string;
      searchPlaceholder: string;
      clearSearch: string;
      resultsFound: (n: number) => string;
      noResultsTitle: string;
      noResultsHint: string;
      itemsCount: (n: number) => string;
      /** Fiyatı basılı menüde yazmayan kalemlerde gösterilir */
      askPrice: string;
      /** Fiyatı güne göre değişen kategorilerde (balıklar) ekran okuyucu metni */
      priceOnRequest: string;
      /** Ölçü kimliği → görünen ad (rakı fiyat listesi); eşi yoksa ham gösterilir */
      servings: Record<string, string>;
      menuNoteExtra: string;
      categoriesAria: string;
      tags: { chef: string; popular: string; fresh: string; local: string };
      view3d: string;
      m3dEyebrow: string;
      m3dPreparing: string;
      m3dArButton: string;
      m3dHint: string;
      m3dQrHint: string;
      m3dQrAria: string;
    };
    gallery: {
      docTitle: string;
      docDesc: string;
      eyebrow: string;
      title: string;
      lead: string;
      filterAll: string;
      filterPlace: string;
      filterEmber: string;
      filterTable: string;
      filterAria: string;
      representative: string;
      disclaimer: string;
      prev: string;
      next: string;
      enlarge: (caption: string) => string;
    };
    contact: {
      docTitle: string;
      docDesc: string;
      eyebrow: string;
      title: string;
      lead: string;
      phoneTitle: string;
      phoneNote: string;
      addressTitle: string;
      hoursTitle: string;
      hoursNote: string;
      socialTitle: string;
      reviewsWord: string;
      parkingNote: string;
      mapTitle: string;
    };
    reservation: {
      docTitle: string;
      docDesc: string;
      eyebrow: string;
      title: string;
      lead: string;
      steps: ReadonlyArray<ReservationStep>;
      /** "Haftanın 7 günü, " — ardından saat aralığı basılır */
      hoursLine: (days: string) => string;
      planTitle: string;
      planText: string;
      planStrong: string;
      nameLabel: string;
      namePlaceholder: string;
      dateLabel: string;
      timeLabel: string;
      guestsLabel: string;
      guestsOption: (n: string) => string;
      guestsMany: string;
      submit: string;
      callAndTell: string;
      copy: string;
      copied: string;
      pickDate: string;
      summary: (name: string, dateText: string, time: string, guests: string) => string;
    };
    storyPage: {
      docTitle: string;
      docDesc: string;
      eyebrow: string;
      title: string;
      captionShop: string;
      captionUsta: string;
      quoteSub: string;
      closing: string;
      ctaPlace: string;
    };
    placePage: {
      docTitle: string;
      docDesc: string;
      eyebrow: string;
      title: string;
      salonHeading: string;
      openWord: string;
      perDay: string;
      hoursWord: string;
      sinceWord: string;
      captionSalon: string;
      captionOcak: string;
      ocakHeading: string;
      orgEyebrow: string;
      captionOrg: string;
      servicesEyebrow: string;
      servicesTitle: string;
      ctaGallery: string;
    };
    langBox: { label: string };
  };
  manifesto: { eyebrow: string; title: string; text: string };
  story: { pullQuote: string; chapters: ReadonlyArray<Chapter> };
  storyPage: { lead: string; chapters: ReadonlyArray<StoryPageChapter> };
  placePage: {
    lead: string;
    salon: { title: string; text: string };
    ocak: { title: string; text: string };
    organizasyon: { title: string; text: string };
    services: ReadonlyArray<ServiceCard>;
  };
  features: ReadonlyArray<Feature>;
  /** Ana sayfa "Hakkımızda" bölümü */
  about: AboutContent;
  /** Ana sayfa "Neden Biz" şeridi */
  whyUs: WhyUsContent;
  /**
   * TripAdvisor'daki gerçek yorumlar, `tripadvisorReviews` id'leriyle eşleşir.
   * Özgün dil Türkçedir; diğer diller çeviridir.
   */
  tripadvisorReviews: Record<string, RealReview>;
  /**
   * Google'daki gerçek yorumların metni, `googleReviews` id'leriyle eşleşir.
   * Özgün dil Türkçedir; diğer diller çeviridir.
   */
  googleReviews: Record<string, { quote: string }>;
  hoursDays: string;
  servicesList: ReadonlyArray<string>;
  menuNote: string;
  /** id-anahtarlı çeviri katmanı; tr için boş bırakılır (özgün veri kullanılır) */
  menu: {
    categories: Record<
      string,
      {
        title: string;
        note?: string;
        /** Kategori içi alt başlıklar: grup id'si → çevrilmiş başlık */
        groups?: Record<string, string>;
        /** Alt başlıkların altındaki küçük not: grup id'si → çevrilmiş not */
        groupNotes?: Record<string, string>;
      }
    >;
    items: Record<string, { unit?: string; description?: string }>;
  };
  gallery: Record<string, { caption: string }>;
}
