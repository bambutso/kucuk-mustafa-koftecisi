/**
 * Çok dilli içerik altyapısının tip sözleşmesi.
 * tr.ts kaynak (kanonik) içeriktir; diğer diller bu arabirimi doldurur.
 * Menü ve galeri çevirileri id-anahtarlı katmandır: çeviri yoksa Türkçesine düşülür
 * (yönetim panelinden eklenen yeni ürünler böylece bozulmaz).
 */

export type Lang = "tr" | "en" | "bg" | "el" | "ar";

export const LANGS: ReadonlyArray<{
  code: Lang;
  /** Dilin kendi adıyla etiketi (dil kutusunda görünür) */
  label: string;
  dir: "ltr" | "rtl";
  /** Tarih biçimlendirme için yerel ayar */
  locale: string;
}> = [
  { code: "tr", label: "Türkçe", dir: "ltr", locale: "tr-TR" },
  { code: "en", label: "English", dir: "ltr", locale: "en-GB" },
  { code: "bg", label: "Български", dir: "ltr", locale: "bg-BG" },
  { code: "el", label: "Ελληνικά", dir: "ltr", locale: "el-GR" },
  { code: "ar", label: "العربية", dir: "rtl", locale: "ar" },
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

export interface ServiceCard {
  id: string;
  title: string;
  text: string;
}

export interface SampleReview {
  quote: string;
  context: string;
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
      tablesChairs: (tables: number, chairs: number) => string;
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
      capacityLine: (tables: number, chairs: number, days: string) => string;
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
      tableWord: string;
      chairWord: string;
      openWord: string;
      perDay: string;
      captionSalon: string;
      captionOcak: string;
      ocakHeading: string;
      orgEyebrow: string;
      captionOrg: string;
      servicesEyebrow: string;
      servicesTitle: string;
      seatsLine: (n: number) => string;
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
  sampleReviews: ReadonlyArray<SampleReview>;
  reviewsDisclaimer: string;
  hoursDays: string;
  servicesList: ReadonlyArray<string>;
  menuNote: string;
  /** id-anahtarlı çeviri katmanı; tr için boş bırakılır (özgün veri kullanılır) */
  menu: {
    categories: Record<string, { title: string; note?: string }>;
    items: Record<string, { unit?: string; description: string }>;
  };
  gallery: Record<string, { caption: string }>;
}
