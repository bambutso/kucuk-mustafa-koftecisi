/** English translation. Dish names stay Turkish (brand identity); descriptions are translated. */
import type { SiteContent } from "./types";

export const en: SiteContent = {
  ui: {
    common: {
      reserve: "Book a Table",
      callUs: "Call Us",
      directions: "Get Directions",
      close: "Close",
      callNow: "Call Now",
    },
    nav: {
      home: "Home",
      story: "Our Story",
      place: "The Place",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
      reservation: "Reservation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNav: "Main navigation",
      mobileNav: "Mobile navigation",
      footerNav: "Footer navigation",
      skipToContent: "Skip to content",
      admin: "Admin",
    },
    home: {
      docTitle: "Küçük Mustafa Köftecisi — Since 1939 | Kırklareli",
      docDesc:
        "A living legend since 1939. Kırklareli meatballs grilled over oak-charcoal embers, made the same way for four generations.",
    },
    hero: {
      title: "Since 1939",
      srSuffix: "Kırklareli Köfte",
      tagline: "Over oak-charcoal embers, the same köfte for four generations.",
      ctaMenu: "See the Menu",
      reviewGoogle: "Review on Google",
      reviewTripadvisor: "Review on TripAdvisor",
    },
    stats: {
      years: "years at the same grill",
      generations: "generations, one method",
      portion: "per portion · 8 meatballs",
    },
    homeStory: {
      eyebrow: "Our Story",
      title: "It began with a street cart; it became a city's memory.",
      captionShop: "The shop at Kasaplar Arası",
      captionUsta: "The master at the embers",
      quoteSub: "A sentence shared by many in Kırklareli",
    },
    why: {
      eyebrow: "The Method",
      title: "What makes Kırklareli köfte different?",
      lead: "Four simple answers: the right meat, a plain mix, patient embers and a plate that never changes.",
    },
    signature: {
      eyebrow: "Signature Dishes",
      title: "The best-known plates from our grill",
      lead: "Prices are taken from the restaurant's own menu; please ask for the current list.",
      imageCaption: "225 grams, 8 meatballs — the same plate since 1939.",
      seeAll: "See the full menu",
    },
    instagram: {
      title: "Diary of the embers",
      lead: "Fresh shots from the shop — plates, the dining room and everyday life around the embers.",
      follow: "Follow on Instagram",
      openPost: "Open post",
    },
    reviews: {
      eyebrow: "What Our Guests Say",
      reviewsWord: "reviews",
      rankLine: (_rank, total) => `among ${total} restaurants in Kırklareli`,
      ourPage: (source) => `Our ${source} page`,
      starsAria: (score, outOf) => `${score} out of ${outOf} stars`,
      googleEyebrow: "Google Reviews",
      googleLine: "Our real rating on Google Maps",
      writeReview: "Leave a review",
    },
    location: {
      eyebrow: "Find Us",
      title: "In Kasaplar Arası — just follow the smell of the embers.",
      mapTitle: "Map: Küçük Mustafa Köftecisi location",
    },
    footer: {
      addressTitle: "Address",
      hoursTitle: "Opening Hours",
      servicesTitle: "Services",
      tagline: "Since 1939, over the same embers.",
    },
    menuPage: {
      docTitle: "Menu — Küçük Mustafa Köftecisi | Kırklareli",
      docDesc:
        "Kırklareli meatballs, grills, soups, regional specialities and desserts. Over oak-charcoal embers since 1939.",
      heading: "Menu",
      tagline: "Everything the embers give us; from soup to dessert, Thracian style.",
      searchLabel: "Search the menu",
      searchPlaceholder: "Search: köfte, piyaz, hardaliye…",
      clearSearch: "Clear search",
      resultsFound: (n) => `${n} result${n === 1 ? "" : "s"} found`,
      noResultsTitle: "We couldn't find that on the embers.",
      noResultsHint: "Try another word — e.g. “köfte”, “piyaz”, “hardaliye”.",
      itemsCount: (n) => `${n} item${n === 1 ? "" : "s"}`,
      askPrice: "Ask for price",
      priceOnRequest: "Please ask our staff for the price",
      servings: {
        tek: "Single",
        duble: "Double",
        "20cl": "20 cl",
        "35cl": "35 cl",
        "50cl": "50 cl",
        "70cl": "70 cl",
        "100cl": "100 cl",
      },
      menuNoteExtra: "VAT included in prices.",
      categoriesAria: "Menu categories",
      tags: {
        chef: "Chef's Pick",
        popular: "Most Popular",
        fresh: "New",
        local: "Regional",
      },
      view3d: "View in 3D · Place on Your Table",
      m3dEyebrow: "3D View",
      m3dPreparing: "Preparing the 3D model…",
      m3dArButton: "Place on Your Table with Camera",
      m3dHint:
        "Drag to rotate the model. On your phone, tap “Place on Your Table with Camera” and the köfte plate appears on your table at real size.",
      m3dQrHint: "Scan with your phone to try AR at your table.",
      m3dQrAria: "QR code to open on your phone",
    },
    gallery: {
      docTitle: "Gallery — Küçük Mustafa Köftecisi | Kırklareli",
      docDesc: "The shop, the embers and the table: scenes from Küçük Mustafa Köftecisi.",
      eyebrow: "Gallery",
      title: "Scenes from the embers and the table",
      lead: "All real shots: from our own archive and from what our guests share on Google.",
      filterAll: "All",
      filterPlace: "The Place",
      filterEmber: "The Embers",
      filterTable: "The Table",
      filterAria: "Gallery filter",
      representative: "Illustrative",
      disclaimer:
        "Images marked “Illustrative” are stock photos chosen to convey the atmosphere; the archive will grow with the restaurant's own photos over time.",
      prev: "Previous image",
      next: "Next image",
      enlarge: (caption) => `Enlarge: ${caption}`,
    },
    contact: {
      docTitle: "Contact — Küçük Mustafa Köftecisi | +90 288 212 76 12",
      docDesc:
        "Karacaibrahim Mah. Şükrü Naili Geçidi No:1, Kasaplar Arası, Kırklareli. Open 7 days, 10:00–02:00. Phone: +90 288 212 76 12.",
      eyebrow: "Contact",
      title: "As close as a phone call",
      lead: "Call us for reservations and any questions; there's always someone by the phone.",
      phoneTitle: "Phone",
      phoneNote: "Reservations are taken by phone.",
      addressTitle: "Address",
      hoursTitle: "Opening Hours",
      hoursNote: "The grill stays lit past midnight; the soup pot simmers until morning.",
      socialTitle: "Social",
      reviewsWord: "reviews",
      parkingNote:
        "Kasaplar Arası is inside the bazaar; if you come by car, the nearest parking is around Şevket Dingiloğlu Park.",
      mapTitle: "Map: Küçük Mustafa Köftecisi location",
    },
    reservation: {
      docTitle: "Reservation — Küçük Mustafa Köftecisi | +90 288 212 76 12",
      docDesc:
        "Book your table by phone: +90 288 212 76 12. Open 7 days, 10:00–02:00.",
      eyebrow: "Reservation",
      title: "Let your table wait by the embers",
      lead: "Reservations are taken by phone — one call, thirty seconds. The little plan below helps you prepare what to say.",
      steps: [
        {
          no: "1",
          title: "Call us",
          text: "+90 288 212 76 12 — there's always someone by the phone.",
        },
        {
          no: "2",
          title: "Day, time, party size",
          text: "Just say them; for large groups we recommend calling a day ahead.",
        },
        {
          no: "3",
          title: "Your table is ready",
          text: "Give your name when you arrive; one of the tables with the best view of the embers is yours.",
        },
      ],
      hoursLine: (days) => `${days}, `,
      planTitle: "A Little Plan Before You Call",
      planText: "Fill it in, then read the summary on the phone or copy it.",
      planStrong: "Reservations are only confirmed by phone.",
      nameLabel: "Full Name",
      namePlaceholder: "Your name",
      dateLabel: "Date",
      timeLabel: "Time",
      guestsLabel: "Party Size",
      guestsOption: (n) => `${n} ${n === "1" ? "person" : "people"}`,
      guestsMany: "More than 8",
      submit: "Prepare the Summary",
      callAndTell: "Call and Tell Us",
      copy: "Copy Summary",
      copied: "Copied",
      pickDate: "Pick a date for the summary.",
      summary: (name, dateText, time, guests) => {
        const who = name ? `for ${name}` : "in my name";
        const party = guests === "8+" ? "more than 8 people" : `${guests} ${guests === "1" ? "person" : "people"}`;
        return `Reservation ${who}: ${dateText}, at ${time}, ${party}.`;
      },
    },
    storyPage: {
      docTitle: "Our Story — Küçük Mustafa Köftecisi | From 1935 to Today",
      docDesc:
        "From Mustafa Akkul's street cart in 1935 to today: the Kayacan masters, Ergin Kalınoğlu and embers that never went out. The köfte memory of Kırklareli.",
      eyebrow: "Our Story",
      title: "An ember's watch of more than eighty years",
      captionShop: "Same door, same sign — Kasaplar Arası",
      captionUsta: "The master at the embers",
      quoteSub: "A sentence shared by many in Kırklareli",
      closing:
        "The rest of the story doesn't fit on pages; it's told by the embers. Your place at the table is ready.",
      ctaPlace: "See the Place",
    },
    placePage: {
      docTitle: "The Place — Küçük Mustafa Köftecisi | Kasaplar Arası, Kırklareli",
      docDesc:
        "An oak-charcoal grill and a warm wooden room. Opposite Şevket Dingiloğlu Park, open 7 days, 10:00–02:00.",
      eyebrow: "The Place",
      title: "A grocer's up front, a köfte grill in the back — always",
      salonHeading: "Wood, warmth and tables close together",
      openWord: "Open",
      hoursWord: "Hours",
      sinceWord: "Founded",
      perDay: "/week",
      captionSalon: "Our renewed dining room",
      captionOcak: "Oak charcoal, cast-iron grill",
      ocakHeading: "The heart of the room beats in the back",
      orgEyebrow: "Events",
      captionOrg: "A table set for a group dinner",
      servicesEyebrow: "Services",
      servicesTitle: "However you like",
      ctaGallery: "See the Gallery",
    },
    langBox: { label: "Choose language" },
  },
  manifesto: {
    eyebrow: "Kırklareli Köfte",
    title: "The recipe hasn't changed since 1939; we never considered changing it.",
    text: "Beef is joined by Kırklareli's PGI-certified Kıvırcık lamb; kneaded with onion and day-old bread, then seared over oak-charcoal embers. Spices are few — so what lingers is the meat. On the side: fresh onion piyaz, ember-roasted green peppers and homemade hot sauce. The table is set.",
  },
  story: {
    pullQuote: "The köfte place my father first took me to.",
    chapters: [
      {
        year: "1935",
        title: "A cart in front of the Arasta Bazaar",
        text: "Mustafa Akkul was short; everyone called him “Küçük Mustafa” — Little Mustafa. In 1935 he set up a small street cart in front of the Arasta Bazaar. His capital was small, but his scales were honest and his embers patient. Kırklareli first met köfte from his hands.",
      },
      {
        year: "1939",
        title: "A grocer's up front, a köfte grill in the back",
        text: "In the 15th year of Kırklareli's liberation, Küçük Mustafa got a roof of his own: a shop opposite Şevket Dingiloğlu Park. A grocer's counter at the front, embers at the back. You'd walk in for bread and walk out smelling of köfte.",
      },
      {
        year: "Today",
        title: "From master to apprentice, generation to generation",
        text: "The grill was never left unattended. The business passed to Ergin Kalınoğlu in 2008, and today it is entrusted to his nephew, Doruk Kalınoğlu. The names changed; the mix, the fire and the welcome at the door never did.",
      },
    ],
  },
  storyPage: {
    lead: "This story is bigger than a shop. It is made of a man's nickname, a city's memory of taste, and embers that haven't gone out in more than eighty years.",
    chapters: [
      {
        id: "1935",
        year: "1935",
        title: "A cart in front of the Arasta Bazaar",
        paragraphs: [
          "Mustafa Akkul was short. In the Kırklareli bazaar everyone called him “Küçük Mustafa” — Little Mustafa — and he carried the name not as a flaw but as a signature.",
          "In 1935 he set up a small street cart in front of the Arasta Bazaar. His capital was a pair of tongs, a grill and honest scales. Tradesmen heading to the market in the morning, clerks heading home in the evening; everyone stopped at that cart at least once.",
          "Köfte existed in those years, of course. But Kırklareli learned at Küçük Mustafa's cart what köfte becomes in the hands of a master.",
        ],
      },
      {
        id: "1939",
        year: "1939",
        title: "A grocer's up front, a köfte grill in the back",
        paragraphs: [
          "1939 was the 15th anniversary of Kırklareli's liberation. While the city celebrated, Küçük Mustafa had a celebration of his own: a shop with its own roof, opposite Şevket Dingiloğlu Park.",
          "The shop had two faces: a grocer's counter at the front — bread, cheese, olives. And at the back, the embers. Whoever came in for bread couldn't resist the smell drifting from the back, and left with a portion of köfte.",
          "The sign hung that day still stands in the same place: Karacaibrahim Mahallesi, Kasaplar Arası. The address never changed — and nobody ever dreamed of moving the door elsewhere.",
        ],
      },
      {
        id: "kusaklar",
        year: "Generations",
        title: "From master to apprentice: the Kayacans",
        paragraphs: [
          "If opening a shop is a skill, handing it on is a greater one. Küçük Mustafa's grill passed to his apprentices: first İbrahim Kayacan, then Necdet Kayacan, then Cüneyt Kayacan.",
          "Each passed through the hardships of his own era; years of scarcity, years of migration, the changing face of the bazaar. The one thing that never changed was the measure behind the counter: few spices, plenty of meat, patient embers.",
          "There is a saying in Kırklareli: the recipe belongs not to the shop but to the grill. Whoever keeps the grill keeps the recipe — and this grill never went out.",
        ],
      },
      {
        id: "bugun",
        year: "Today",
        title: "The Kalınoğlu family takes over",
        paragraphs: [
          "The business was taken over by Ergin Kalınoğlu in 2008. Today it is run by his nephew, Doruk Kalınoğlu.",
          "The keeper may change, but the method does not: beef with PGI-certified Kıvırcık lamb, onion, day-old bread. Not a single köfte touches the grill before the oak charcoal has ashed over into embers.",
          "And still, every day, someone walks through the door saying “I used to come here with my father.” That sentence is the only true reward for more than eighty years of labour.",
        ],
      },
    ],
    doruk: {
      title: "Who is Doruk Kalınoğlu?",
      paragraphs: [
        "Doruk Kalınoğlu is the name running Küçük Mustafa Köftecisi today. He carries on the deep-rooted tradition of flavour inherited from his family with the same care and diligence.",
        "His aim is to carry the legacy stretching from 1939 to the present into the future, preserving unchanging quality and guest satisfaction.",
      ],
    },
  },
  placePage: {
    lead: "Opposite Şevket Dingiloğlu Park, in Kasaplar Arası; the shop whose front was once a grocer's and whose back was always a köfte grill.",
    salon: {
      title: "The Dining Room",
      text: "Sixteen tables, seventy-five seats. Neither a grand hall nor a showy décor — wood instead of formica, memories instead of posters. The tables sit close together, because here chatting with the next table is an unofficial part of the menu.",
    },
    ocak: {
      title: "The Grill",
      text: "The heart of the room is the grill at the back. We wait until the oak charcoal ashes over into embers; no köfte that has seen flame leaves this counter. The tongs at the embers turn hundreds of times a day — always with the same patience.",
    },
    organizasyon: {
      title: "Private Events & Group Dinners",
      text: "For seminars, trainings, family dinners or crowded celebrations, our room is arranged to suit. For group meals and private events, booking ahead is all it takes.",
    },
    services: [
      {
        id: "yerinde",
        title: "Dine In",
        text: "7 days a week, 10:00–02:00. Tradesmen at noon, families in the evening, night-shift workers after midnight; the room is never empty.",
      },
      {
        id: "alkollu",
        title: "Licensed Service",
        text: "Rakı and local beer are served in the dining room. Köfte off the embers with rakı is an old Thracian custom.",
      },
    ],
  },
  features: [
    {
      id: "et",
      kicker: "Meat",
      title: "PGI-certified Kıvırcık",
      text: "Beef is joined by Kırklareli's PGI-certified Kıvırcık lamb. The secret is in the ratio; its measure, a hand-held scale of more than eighty years.",
    },
    {
      id: "harc",
      kicker: "The Mix",
      title: "Few spices, plenty of meat",
      text: "Onion, day-old bread, salt. Spices are kept waiting at the door so they never overtake the meat; what lingers on the palate is not seasoning but meat.",
    },
    {
      id: "ates",
      kicker: "Fire",
      title: "Oak-charcoal embers",
      text: "Not flame — embers. Only when the oak charcoal ashes over does the köfte reach the grill; the outside sears, the inside stays juicy.",
    },
    {
      id: "sunum",
      kicker: "Serving",
      title: "The plate that never changes",
      text: "Fresh onion piyaz, ember-roasted green pepper, homemade hot sauce. Eight meatballs in a 225-gram portion — the same since 1939.",
    },
  ],
  about: {
    eyebrow: "About Us",
    title: "Unchanging flavour, unchanging care",
    paragraphs: [
      "Küçük Mustafa Köftecisi aims to give its guests the very best experience, with an unchanging understanding of flavour and a high standard of quality. Every detail is considered with the same care, from the first moment to the last bite.",
      "Every product we use in our kitchen is chosen with care. We cook only with natural extra-virgin olive oil and sunflower oil; palm oil and similar processed fats are never used. Because we make it a principle to serve the healthiest, most trustworthy ingredients to every guest at our table.",
      "For flavour to last, trust is essential. That is why cleanliness and hygiene are held to the highest standard in our kitchen, and every step of preparation and service is carried out with great care.",
      "At Küçük Mustafa Köftecisi the goal is not merely to serve food; it is to offer a quality, trustworthy and enjoyable experience.",
    ],
    cards: [
      { id: "icerik", title: "Natural, Select Ingredients", text: "Additive-free, carefully chosen products." },
      { id: "hijyen", title: "High Hygiene Standards", text: "Care and control at every step." },
      { id: "memnuniyet", title: "Guest Satisfaction", text: "The same quality, the same care, always." },
    ],
  },
  whyUs: {
    eyebrow: "Why Us",
    items: [
      { id: "yag", text: "Only natural extra-virgin olive oil and sunflower oil" },
      { id: "palm", text: "No palm oil or processed fats" },
      { id: "hijyen", text: "Top-level hygiene standards" },
      { id: "secki", text: "Carefully selected, additive-free products" },
    ],
  },
  ataturk: {
    kirklareliQuote:
      "I will keep the memory of the time I spent with dear friends at the Kırklareli Türk Ocağı, with undying feelings.",
    hardaliyeEyebrow: "Our National Drink — Hardaliye",
    hardaliyeQuote: "Make this our national drink.",
    hardaliyeText:
      "Hardaliye, Thrace's centuries-old grape drink, is one of the regional treasures of our table — and it has its place on our menu.",
    seeMenu: "See on the menu",
  },
  /* Real reviews from TripAdvisor; punctuation tidied and lightly shortened. */
  tripadvisorReviews: {
    "kucuk-sehir": {
      title: "Big flavour in a small city",
      quote:
        "The köfte is genuinely delicious, the portions are filling and the service is warm and sincere. The smiling staff make you feel like a guest rather than a customer. I'd recommend it without hesitation to anyone whose road passes through Kırklareli.",
    },
    nefis: {
      title: "Delicious",
      quote:
        "The köfte here was truly delicious — lightly seared on the outside, juicy and tender inside. Warm room, quick and friendly service.",
    },
    "izgara-lezzeti": {
      title: "Grilled flavour in Kırklareli",
      quote:
        "The place itself, the range of dishes and the flavours were all wonderful. The smiling staff, the way the tables were laid and the cleanliness all caught our eye.",
    },
  },
  googleReviews: {
    yesim: {
      quote:
        "It looks like a small tradesmen's eatery, yet its delicious köfte, superb sheep's yoghurt and crisp salad stayed with us. The toasted bread they offered was a lovely touch. Nice room, enjoyable meal.",
    },
    oznur: {
      quote:
        "We had köfte, piyaz and ayran. Generous portion, and the taste was excellent. The price is fair too.",
    },
  },
  hoursDays: "7 days a week",
  servicesList: ["Dine In", "Licensed Service"],
  menuNote:
    "Dishes and prices are taken from the restaurant's own menu; please ask the restaurant for the current list.",
  menu: {
    categories: {
      "imza-kofteler": {
        title: "Signature Köfte",
        note: "Beef + PGI-certified Kıvırcık lamb; over oak-charcoal embers.",
      },
      baslangiclar: {
        title: "Starters",
        groups: {
          salatalar: "Salads",
          "ara-sicaklar": "Hot Starters",
          mezeler: "Mezes",
          "soguk-mezeler": "Cold Mezes",
        },
        groupNotes: {
          "soguk-mezeler": "Portions average 150–175 g.",
        },
      },
      izgaralar: {
        title: "Grills",
        note: "All over oak-charcoal embers, on a cast-iron grill.",
      },
      baliklar: {
        title: "Our Fish",
        note: "Fish prices follow the daily market price. Please ask our staff for details.",
        groups: {
          "izgara-balik": "Grilled Fish",
          "kizartma-balik": "Fried Fish",
        },
      },
      tatlilar: {
        title: "Desserts",
        note: "Dessert after köfte, the Thracian way.",
      },
      icecekler: {
        title: "Drinks",
        groups: {
          "soguk-icecekler": "Cold Drinks",
          "sicak-icecekler": "Hot Drinks",
        },
      },
      "alkollu-icecekler": {
        title: "Alcoholic Drinks",
        note: "Licensed service applies in the dining room.",
        groups: {
          rakilar: "Rakı",
          saraplar: "Wines",
          "kadeh-sarap": "Wine by the Glass",
          biralar: "Beers",
          "yabanci-alkoller": "Imported Spirits",
        },
        groupNotes: {
          saraplar: "Price per bottle.",
          "yabanci-alkoller": "Price per double.",
        },
      },
    },
    items: {
      "kucuk-mustafa-koftesi": {
        unit: "225 g · 8 pieces",
        description: "The köfte that carries the shop's name. Kneaded with onion and day-old bread, seared over oak embers; served with village bread dipped in bone broth.",
      },
      "acili-kofte": {
        unit: "230 g · 2 pieces",
        description: "The same mix, with the chilli kneaded right in.",
      },
      "kasarli-kofte": {
        unit: "240 g · 2 pieces",
        description: "Filled with kaşar cheese; it melts over the embers.",
      },
      "pastirmali-kofte": {
        unit: "240 g · 2 pieces",
        description: "Pastırma folded into the mix; its aroma fills the room over the embers.",
      },
      "sefin-koftesi": {
        unit: "250 g · 2 pieces",
        description: "The grill master's own recipe.",
      },
      piyaz: {
        description: "White beans, plenty of onion, vinegar and olive oil. Köfte's constant companion.",
      },
      "coban-salatasi": {
        description: "Tomato, cucumber, pepper and onion; finely chopped.",
      },
      "akdeniz-salata": {
        description: "Seasonal greens with olives and olive oil.",
      },
      "sopska-salatasi": {
        description: "A Balkan classic, topped with grated white cheese.",
      },
      "mercimek-corbasi": {
        description: "Buttery, just the right thickness. With lemon if you like.",
      },
      "patates-kizartmasi": { description: "Hand-cut, served hot." },
      "sogus-tabagi": {
        description: "Coarsely cut fresh cucumber, salt on the side.",
      },
      cerez: { description: "A plate of nuts, for the conversation." },
      "eski-kasar": { description: "Thrace's matured kaşar cheese, sliced." },
      "lux-cerez": { description: "A generous plate, heavy on pistachios." },
      "tek-peynir": { description: "White cheese, sliced." },
      atom: { description: "Yoghurt with hot peppers." },
      "sirkeli-kapya": {
        description: "Roasted red peppers in a vinegar dressing.",
      },
      semizotu: { description: "Purslane with yoghurt and garlic." },
      haydari: { description: "Strained yoghurt, dill and garlic." },
      "havuc-tarator": { description: "Grated carrot with yoghurt." },
      "rus-salatasi": { description: "The classic, with mayonnaise." },
      "acili-ezme": {
        description: "Finely chopped tomato, pepper and onion; house style.",
      },
      cacik: { description: "With cucumber, ice-cold." },
      "karisik-kizartma": {
        description: "Aubergine, pepper and courgette; with yoghurt and tomato sauce.",
      },
      kopeoglu: {
        description: "Roasted aubergine with yoghurt and tomato sauce.",
      },
      "soslu-patlican": { description: "Fried aubergine in tomato sauce." },
      manca: {
        description: "A meze of Thrace's Balkan settlers; yoghurt and garlic.",
      },
      "koyun-yogurdu": {
        description: "Sheep's yoghurt set in season; thick enough to stand a spoon in.",
      },
      girit: { description: "White cheese mashed with walnuts and herbs." },
      soka: { description: "From Balkan tables: a meze of roasted peppers." },
      "tavuk-izgara": {
        description: "Lightly spiced, over the embers. For those who'd rather skip red meat.",
      },
      "kasap-sucuk": {
        unit: "200 g",
        description: "Sucuk from Kasaplar Arası, grilled until crisp.",
      },
      "tava-ciger": {
        unit: "225 g",
        description: "Finely diced liver in a hot pan; with sliced onion.",
      },
      "ciger-sis": {
        unit: "225 g · 3 skewers",
        description: "Threaded onto skewers with tail fat, turned over the embers.",
      },
      hamburger: { description: "A beef patty from the embers, in a bun." },
      antrikot: {
        unit: "200 g",
        description: "A thick cut, seared then rested.",
      },
      "istranca-kuzu-sis": {
        unit: "260 g · 3 skewers",
        description: "Cubed lamb from the Istranca Mountains; seared over embers, with sliced onion and roasted pepper.",
      },
      kulbasti: {
        unit: "270 g · 3 skewers",
        description: "Thinly pounded meat, straight over the ashes.",
      },
      kusleme: {
        unit: "180–200 g · 1 piece",
        description: "The most prized cut of lamb; it melts in the mouth.",
      },
      bonfile: {
        unit: "200 g",
        description: "Lean and tender; cooked to your liking.",
      },
      "istranca-kuzu-pirzola": {
        unit: "240 g · 3 pieces",
        description: "Thracian lamb, juicy enough to eat off the bone.",
      },
      "istranca-kuzu-lokum": {
        unit: "240 g · 4 pieces",
        description: "The lamb cut that melts like lokum; salt and embers, nothing else.",
      },
      "karisik-izgara": {
        unit: "1 lamb lokum · 1 lamb chop · 2 köfte · 1 külbastı",
        description: "The grill in summary, for the undecided; five items on one plate.",
      },
      "karisik-kofte": {
        unit: "serves 2 · 4 plain köfte · 1 spicy · 1 cheese · 1 pastırma · 1 chef's",
        description: "All five köfte on one plate; made for sharing.",
      },
      cupra: { description: "Whole, over the embers." },
      levrek: { description: "Whole, over the embers." },
      lufer: { description: "In season, the Bosphorus's prized fish." },
      somon: { description: "A thick fillet, over the embers." },
      sardalya: { description: "Dusted in cornmeal, fried in hot oil." },
      hamsi: { description: "In season, pan-fried." },
      istavrit: { description: "Dusted in cornmeal, fried in hot oil." },
      mezgit: { description: "Boneless, pan-fried." },
      "kabak-tatlisi": { description: "Served with tahini and walnuts." },
      profiterol: { description: "With chocolate sauce, served cold." },
      sutlac: { description: "Oven-baked, browned on top." },
      dondurma: {
        unit: "3 scoops",
        description: "Your choice from the day's flavours.",
      },
      "kaymakli-hayrabolu": {
        description: "Thrace's cheese dessert in syrup; served with tahini and walnuts.",
      },
      "antep-fistikli-baklava": { description: "Served with clotted cream." },
      "meyve-tabagi": { description: "Seasonal fruit, on ice." },
      peja: { unit: "Alcohol-free" },
    },
  },
  gallery: {
    "ig-kofte": { caption: "Köfte on bread — today's plate" },
    "ig-salon-bordo": { caption: "Our renewed dining room" },
    "ig-guvec": { caption: "Mushroom casserole with kaşar — new dish" },
    "ig-menu-foyu": { caption: "Our menu folder, by lamplight" },
    "ig-organizasyon": { caption: "A table set for group dinners" },
    "ig-masa-detay": { caption: "A table awaiting its guests" },
    "ig-salon-ici": { caption: "A noon hour in the dining room" },
    "ig-gece": { caption: "At night, when the room settles" },
    "ig-lamba": { caption: "The brass lamp on the table" },
    cephe: {
      caption: "The shop at Kasaplar Arası — the sign reads: a living legend since 1939",
    },
    usta: { caption: "The master at the embers — the tongs never rest" },
    porsiyon: {
      caption: "A portion: 225 grams, eight meatballs — the same plate since 1939",
    },
    ates: { caption: "We wait until the oak charcoal turns to embers" },
    dokum: { caption: "Off the embers, served hot" },
    sis: { caption: "A skewer never goes without onion piyaz" },
    "sofra-kurulumu": { caption: "Köfte, piyaz, hot sauce: the table is set" },
    cay: { caption: "Always a tea before the bill" },
  },
};
