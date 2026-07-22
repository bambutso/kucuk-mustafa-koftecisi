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
      lead: "Call us for reservations, takeaway and any questions; there's always someone by the phone.",
      phoneTitle: "Phone",
      phoneNote: "Reservations and takeaway orders are taken by phone.",
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
        title: "From master to apprentice, four generations",
        text: "The grill was never left unattended: İbrahim Kayacan, Necdet Kayacan, Cüneyt Kayacan… Today Ergin Kalınoğlu stands before the embers. The names changed; the mix, the fire and the welcome at the door never did.",
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
        title: "At the embers: Ergin Kalınoğlu",
        paragraphs: [
          "Today Ergin Kalınoğlu stands before the embers. The shutters open at nine in the morning; the last tea comes off the stove at three in the night; seven days a week.",
          "The method inherited from the elders is the same: beef with PGI-certified Kıvırcık lamb, onion, day-old bread. Not a single köfte touches the grill before the oak charcoal has ashed over into embers.",
          "And still, every day, someone walks through the door saying “I used to come here with my father.” That sentence is the only true reward for more than eighty years of labour.",
        ],
      },
    ],
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
        id: "paket",
        title: "Takeaway Delivery",
        text: "Order by phone and it arrives at your door straight off the embers: +90 288 212 76 12.",
      },
      {
        id: "gelal",
        title: "Pick Up",
        text: "Straight from the counter. Packed hot off the embers, the park across the street — the rest is up to you.",
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
  servicesList: ["Dine In", "Takeaway Delivery", "Pick Up", "Licensed Service"],
  menuNote:
    "Dishes and prices are taken from the restaurant's own menu; please ask the restaurant for the current list.",
  menu: {
    categories: {
      "imza-kofteler": {
        title: "Signature Köfte",
        note: "Beef + PGI-certified Kıvırcık lamb; over oak-charcoal embers.",
      },
      izgaralar: {
        title: "Grills",
        note: "All over oak-charcoal embers, on a cast-iron grill.",
      },
      "ara-sicaklar": { title: "Hot Starters" },
      mezeler: {
        title: "Mezes",
        note: "Prepared fresh each day; they come to the table plate by plate.",
      },
      salatalar: { title: "Salads" },
      tatlilar: {
        title: "Desserts",
        note: "Dessert after köfte, the Thracian way.",
      },
      "soguk-icecekler": { title: "Cold Drinks" },
      "sicak-icecekler": { title: "Hot Drinks" },
      "alkollu-icecekler": {
        title: "Alcoholic Drinks",
        note: "Licensed service applies in the dining room. Beer is a 50 cl bottle; rakı, whisky and wine are priced per glass. Prices in this section are ESTIMATES — please ask our team for the exact price.",
        groups: {
          biralar: "Beers",
          rakilar: "Rakı",
          viskiler: "Whisky",
          saraplar: "Wines",
        },
      },
    },
    items: {
      /* İmza Köfteler */
      "kucuk-mustafa-koftesi": {
        unit: "225 g · 8 pieces",
        description:
          "The köfte that carries the shop's name. A mix kneaded with onion and day-old bread, seared over oak embers; served with village bread dipped in bone broth.",
      },
      "acili-kofte": {
        unit: "225 g · 8 pieces",
        description: "The same mix, with the heat kneaded straight into it.",
      },
      "kasarli-kofte": {
        unit: "225 g · 8 pieces",
        description: "The köfte is filled with kaşar cheese; it melts over the embers.",
      },
      "pastirmali-kofte": {
        unit: "225 g · 8 pieces",
        description:
          "Pastırma goes into the mix; over the embers its scent drifts through the room.",
      },
      "sefin-koftesi": {
        unit: "225 g · 8 pieces",
        description: "The recipe of the master who stands at the grill.",
      },
      /* Izgaralar */
      "tavuk-izgara": {
        description: "Lightly spiced, over the embers. So no one goes without.",
      },
      "kasap-sucuk": {
        description: "Sucuk from Kasaplar Arası, grilled until the edges turn crisp.",
      },
      "tava-ciger": {
        description: "Finely chopped liver in a searing-hot pan; with fresh onion salad.",
      },
      "ciger-sis": {
        description: "Threaded onto skewers with tail fat and turned over the embers.",
      },
      antrikot: {
        description: "A thick cut, seared and then rested.",
      },
      "istranca-kuzu-sis": {
        description:
          "Cubed lamb from the Istranca Mountains; seared over the embers and served with fresh onion salad and roasted pepper.",
      },
      kulbasti: {
        description: "Thinly beaten meat, laid straight over the ashes.",
      },
      kusleme: {
        description: "The most prized cut of the lamb; it falls apart on the tongue.",
      },
      bonfile: {
        description: "A lean, tender cut, cooked exactly as you like it.",
      },
      "istranca-kuzu-pirzola": {
        description: "Thracian lamb, juicy enough to pick up by the bone.",
      },
      "istranca-kuzu-lokum": {
        description: "The lamb's most melting cut; nothing but salt and embers.",
      },
      "karisik-izgara": {
        unit: "1 Kuzu Lokum · 1 Kuzu Pirzola · 2 Köfte · 1 Külbastı",
        description:
          "The grill summed up for the undecided: five items on a single plate.",
      },
      /* Ara Sıcaklar */
      "mercimek-corbasi": {
        description: "With butter, just the right thickness. Lemon on the side, if you like.",
      },
      "pacanga-boregi": {
        description: "Pastırma and kaşar cheese, fried crisp in thin yufka pastry.",
      },
      "patates-kizartmasi": {
        description: "Hand-cut, served hot.",
      },
      "guvec-kasarli-mantar": {
        description:
          "In a clay pot, capped with kaşar cheese and browned over the embers. Served straight from the fire, still bubbling.",
      },
      /* Mezeler */
      "sogus-tabagi": {
        description: "Seasonal vegetables, coarsely cut, with lemon.",
      },
      cerez: {
        description: "A plate of nuts, to keep the rakı company.",
      },
      "eski-kasar": {
        description: "Thrace's matured kaşar cheese, sliced.",
      },
      atom: { description: "Yoghurt with hot peppers." },
      "sirkeli-kapya": {
        description: "Ember-roasted kapya peppers in a vinegar dressing.",
      },
      semizotu: { description: "Purslane with yoghurt and garlic." },
      haydari: { description: "Strained yoghurt with dill and garlic." },
      "havuc-tarator": { description: "Grated carrot with yoghurt." },
      "rus-salatasi": { description: "The classic, with mayonnaise." },
      "kuru-domates": { description: "Rested in olive oil." },
      "acili-ezme": {
        description: "Finely chopped tomato, pepper and onion; house style.",
      },
      cacik: { description: "With cucumber, served ice cold." },
      "koyun-yogurdu": {
        description:
          "Sheep's yoghurt set in season; thick enough to hold a spoon upright.",
      },
      "karisik-kizartma": {
        description: "Aubergine, pepper and courgette; with yoghurt and tomato sauce.",
      },
      kopeoglu: {
        description: "Ember-roasted aubergine with yoghurt and tomato sauce.",
      },
      "soslu-patlican": {
        description: "Fried aubergine in tomato sauce.",
      },
      manca: {
        description: "The migrants' meze of Thrace; with yoghurt and garlic.",
      },
      girit: {
        description: "White cheese mashed with walnuts and fresh herbs.",
      },
      "lux-cerez": {
        description: "A generous plate, heavy on pistachios.",
      },
      soka: {
        description: "From Balkan tables: a meze of ember-roasted peppers.",
      },
      "buzlu-badem": {
        description: "On ice, crisp to the bite.",
      },
      /* Salatalar */
      "coban-salatasi": {
        description: "Tomato, cucumber, pepper and onion; finely chopped.",
      },
      piyaz: {
        description:
          "White beans, plenty of onion, vinegar and olive oil. The köfte's inseparable companion.",
      },
      "yesil-salata": {
        description: "Seasonal greens with lemon and olive oil.",
      },
      "sopska-salatasi": {
        description: "A Balkan classic, finished with grated white cheese.",
      },
      /* Tatlılar */
      "kaymakli-baklava": {
        description: "Cut in carrot-slice wedges, topped with clotted cream.",
      },
      "kaymakli-peynir-tatlisi": {
        description: "Cheese dessert in syrup, with clotted cream.",
      },
      "kaymakli-hayrabolu": {
        description:
          "Thrace's cheese dessert in syrup; made with fresh cheese, served warm.",
      },
      tralice: {
        unit: "Homemade, our own recipe",
        description: "A gift of the Balkan migrants; milky, with caramel.",
      },
      sutlac: {
        description: "Baked in the oven, caramelised on top.",
      },
      "meyve-tabagi": {
        description: "Seasonal fruit, on ice.",
      },
      /* Soğuk İçecekler */
      su: { description: "Half a litre." },
      ayran: { description: "Foamy, in a copper tankard." },
      soda: { description: "Plain or fruit-flavoured." },
      salgam: { description: "Spicy or mild." },
      kola: { description: "Ice cold, from the cooler." },
      fanta: { description: "Ice cold, from the cooler." },
      sprite: { description: "Ice cold, from the cooler." },
      hardaliye: {
        description:
          "Kırklareli's centuries-old drink: grape must fermented with mustard seeds. Bottled by Kırk Kimse.",
      },
      /* Sıcak İçecekler */
      cay: { description: "In a tulip glass, well brewed." },
      "turk-kahvesi": {
        description: "Brewed on the embers, with Turkish delight on the side.",
      },
      /* Biralar */
      "efes-pilsen": { description: "Served cold, by the bottle." },
      "tuborg-gold": { description: "Served cold, by the bottle." },
      /* Rakılar */
      "yeni-raki": {
        unit: "New Series",
        description: "The classic. With white cheese and melon.",
      },
      "tekirdag-altin-seri": {
        description: "Rested in oak casks; Thrace's own rakı.",
      },
      "tekirdag-sir-kavrulmus": {
        description: "Full-bodied, with roasted aniseed.",
      },
      "izmir-gobek": {
        description: "From the heart of the distillate; smooth on the palate.",
      },
      "kulup-rakisi": {
        description: "Old style, firm in character.",
      },
      "efe-gold": {
        description: "Lightly aniseed, well balanced.",
      },
      /* Viskiler */
      "chivas-regal-12": {
        unit: "12 years old",
        description: "A blended Scotch whisky with a smooth finish.",
      },
      "jack-daniels": {
        unit: "Tennessee",
        description: "Mellowed through sugar-maple charcoal; softly sweet.",
      },
      /* Şaraplar */
      saranta: {
        description:
          "A boutique wine from the Kırklareli vineyards; a local choice to go with the köfte.",
      },
      "vino-dessera": {
        description: "A Thracian wine made in Vize; in red and white.",
      },
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
