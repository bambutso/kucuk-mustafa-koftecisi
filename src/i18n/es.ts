/** Traducción al español. Los nombres de los platos permanecen en turco (identidad de marca); las descripciones se traducen. */
import type { SiteContent } from "./types";

export const es: SiteContent = {
  ui: {
    common: {
      reserve: "Reservar Mesa",
      callUs: "Llámanos",
      directions: "Cómo Llegar",
      close: "Cerrar",
      callNow: "Llamar Ahora",
    },
    nav: {
      home: "Inicio",
      story: "Nuestra Historia",
      place: "El Local",
      menu: "Menú",
      gallery: "Galería",
      contact: "Contacto",
      reservation: "Reserva",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      mainNav: "Navegación principal",
      mobileNav: "Navegación móvil",
      footerNav: "Navegación del pie de página",
      skipToContent: "Saltar al contenido",
      admin: "Administración",
    },
    home: {
      docTitle: "Küçük Mustafa Köftecisi — Desde 1939 | Kırklareli",
      docDesc:
        "Una leyenda viva desde 1939. La köfte de Kırklareli, asada sobre brasas de carbón de roble con el mismo método desde hace cuatro generaciones.",
    },
    hero: {
      title: "Desde 1939",
      srSuffix: "Köfte de Kırklareli",
      tagline: "Sobre las brasas de carbón de roble, la misma köfte desde hace cuatro generaciones.",
      ctaMenu: "Ver el Menú",
      reviewGoogle: "Opinar en Google",
      reviewTripadvisor: "Opinar en TripAdvisor",
    },
    stats: {
      years: "años en la misma parrilla",
      generations: "generaciones, un solo método",
      portion: "por ración · 8 köfte",
    },
    homeStory: {
      eyebrow: "Nuestra Historia",
      title: "Empezó con un carrito ambulante; se convirtió en la memoria de una ciudad.",
      captionShop: "El local de Kasaplar Arası",
      captionUsta: "El maestro ante las brasas",
      quoteSub: "Una frase que comparte mucha gente en Kırklareli",
    },
    why: {
      eyebrow: "El Método",
      title: "¿Qué hace diferente a la köfte de Kırklareli?",
      lead: "Cuatro respuestas sencillas: la carne justa, una masa sin adornos, brasas pacientes y un plato que nunca cambia.",
    },
    signature: {
      eyebrow: "Platos Emblemáticos",
      title: "Lo más conocido de nuestra parrilla",
      lead: "Los precios proceden del menú propio del restaurante; consulta la lista actual.",
      imageCaption: "225 gramos, 8 köfte — el mismo plato desde 1939.",
      seeAll: "Ver el menú completo",
    },
    instagram: {
      title: "El diario de las brasas",
      lead: "Imágenes recientes del local: los platos, el comedor y la vida diaria alrededor de las brasas.",
      follow: "Síguenos en Instagram",
      openPost: "Abrir publicación",
    },
    reviews: {
      eyebrow: "Lo Que Dicen Nuestros Clientes",
      reviewsWord: "opiniones",
      rankLine: (_rank, total) => `entre ${total} restaurantes de Kırklareli`,
      ourPage: (source) => `Nuestra página de ${source}`,
      starsAria: (score, outOf) => `${score} de ${outOf} estrellas`,
      googleEyebrow: "Opiniones de Google",
      googleLine: "Nuestra valoración real en Google Maps",
      writeReview: "Deja tu opinión",
    },
    location: {
      eyebrow: "Encuéntranos",
      title: "En Kasaplar Arası — solo hay que seguir el olor de las brasas.",
      mapTitle: "Mapa: ubicación de Küçük Mustafa Köftecisi",
    },
    footer: {
      addressTitle: "Dirección",
      hoursTitle: "Horario",
      servicesTitle: "Servicios",
      tagline: "Desde 1939, sobre las mismas brasas.",
    },
    menuPage: {
      docTitle: "Menú — Küçük Mustafa Köftecisi | Kırklareli",
      docDesc:
        "La köfte de Kırklareli, parrilladas, sopas, especialidades de la región y postres. Sobre brasas de carbón de roble desde 1939.",
      heading: "Menú",
      tagline: "Todo lo que dan las brasas; de la sopa al postre, al estilo de Tracia.",
      searchLabel: "Buscar en el menú",
      searchPlaceholder: "Buscar: köfte, piyaz, hardaliye…",
      clearSearch: "Borrar búsqueda",
      resultsFound: (n) => `${n} resultado${n === 1 ? "" : "s"} encontrado${n === 1 ? "" : "s"}`,
      noResultsTitle: "Eso no lo hemos encontrado en las brasas.",
      noResultsHint: "Prueba con otra palabra — p. ej. «köfte», «piyaz», «hardaliye».",
      itemsCount: (n) => `${n} producto${n === 1 ? "" : "s"}`,
      askPrice: "Consulta el precio",
      menuNoteExtra: "IVA incluido en los precios.",
      categoriesAria: "Categorías del menú",
      tags: {
        chef: "Sugerencia del Chef",
        popular: "Los Más Pedidos",
        fresh: "Novedad",
        local: "De la Región",
      },
      view3d: "Ver en 3D · Colócalo en Tu Mesa",
      m3dEyebrow: "Vista 3D",
      m3dPreparing: "Preparando el modelo 3D…",
      m3dArButton: "Colócalo en Tu Mesa con la Cámara",
      m3dHint:
        "Arrastra para girar el modelo. En el móvil, toca «Colócalo en Tu Mesa con la Cámara» y el plato de köfte aparecerá sobre tu mesa a tamaño real.",
      m3dQrHint: "Escanéalo con el móvil y prueba la RA en tu mesa.",
      m3dQrAria: "Código QR para abrir en el móvil",
    },
    gallery: {
      docTitle: "Galería — Küçük Mustafa Köftecisi | Kırklareli",
      docDesc: "El local, las brasas y la mesa: imágenes de Küçük Mustafa Köftecisi.",
      eyebrow: "Galería",
      title: "Escenas de las brasas y de la mesa",
      lead: "Todas son imágenes reales: de nuestro propio archivo y de las que comparten nuestros clientes en Google.",
      filterAll: "Todo",
      filterPlace: "El Local",
      filterEmber: "Las Brasas",
      filterTable: "La Mesa",
      filterAria: "Filtro de la galería",
      representative: "Ilustrativa",
      disclaimer:
        "Las imágenes marcadas como «Ilustrativa» son fotografías de archivo elegidas para transmitir el ambiente; con el tiempo, la colección irá creciendo con fotos propias del restaurante.",
      prev: "Imagen anterior",
      next: "Imagen siguiente",
      enlarge: (caption) => `Ampliar: ${caption}`,
    },
    contact: {
      docTitle: "Contacto — Küçük Mustafa Köftecisi | +90 288 212 76 12",
      docDesc:
        "Karacaibrahim Mah. Şükrü Naili Geçidi No:1, Kasaplar Arası, Kırklareli. Abierto los 7 días, de 10:00 a 02:00. Teléfono: +90 288 212 76 12.",
      eyebrow: "Contacto",
      title: "Estamos a una llamada de distancia",
      lead: "Llámanos para reservas, pedidos para llevar y cualquier duda; siempre hay alguien junto al teléfono.",
      phoneTitle: "Teléfono",
      phoneNote: "Las reservas y los pedidos para llevar se atienden por teléfono.",
      addressTitle: "Dirección",
      hoursTitle: "Horario",
      hoursNote: "La parrilla sigue encendida pasada la medianoche; la olla de la sopa hierve hasta el amanecer.",
      socialTitle: "Redes sociales",
      reviewsWord: "opiniones",
      parkingNote:
        "Kasaplar Arası está dentro del bazar; si vienes en coche, el aparcamiento más cercano está junto al parque Şevket Dingiloğlu.",
      mapTitle: "Mapa: ubicación de Küçük Mustafa Köftecisi",
    },
    reservation: {
      docTitle: "Reserva — Küçük Mustafa Köftecisi | +90 288 212 76 12",
      docDesc:
        "Reserva tu mesa por teléfono: +90 288 212 76 12. Abierto los 7 días, de 10:00 a 02:00.",
      eyebrow: "Reserva",
      title: "Que tu mesa te espere junto a las brasas",
      lead: "Las reservas se hacen por teléfono: una llamada, treinta segundos. El pequeño plan de abajo te ayuda a preparar lo que vas a decir.",
      steps: [
        {
          no: "1",
          title: "Llámanos",
          text: "+90 288 212 76 12 — siempre hay alguien junto al teléfono.",
        },
        {
          no: "2",
          title: "Día, hora y número de personas",
          text: "Basta con decirlo; para grupos numerosos recomendamos llamar con un día de antelación.",
        },
        {
          no: "3",
          title: "Tu mesa está lista",
          text: "Di tu nombre al llegar; una de las mesas con mejores vistas a las brasas será tuya.",
        },
      ],
      hoursLine: (days) => `${days}, `,
      planTitle: "Un Pequeño Plan Antes de Llamar",
      planText: "Rellénalo y luego lee el resumen por teléfono o cópialo.",
      planStrong: "La reserva solo queda confirmada por teléfono.",
      nameLabel: "Nombre y Apellidos",
      namePlaceholder: "Tu nombre",
      dateLabel: "Fecha",
      timeLabel: "Hora",
      guestsLabel: "Número de Personas",
      guestsOption: (n) => `${n} persona${n === "1" ? "" : "s"}`,
      guestsMany: "Más de 8",
      submit: "Preparar el Resumen",
      callAndTell: "Llamar y Decírselo",
      copy: "Copiar Resumen",
      copied: "Copiado",
      pickDate: "Elige una fecha para el resumen.",
      summary: (name, dateText, time, guests) => {
        const who = name ? `a nombre de ${name}` : "a mi nombre";
        const party = guests === "8+" ? "más de 8 personas" : `${guests} persona${guests === "1" ? "" : "s"}`;
        return `Reserva ${who}: ${dateText}, a las ${time}, ${party}.`;
      },
    },
    storyPage: {
      docTitle: "Nuestra Historia — Küçük Mustafa Köftecisi | De 1935 a Hoy",
      docDesc:
        "Del carrito ambulante de Mustafa Akkul en 1935 hasta hoy: los maestros Kayacan, Ergin Kalınoğlu y unas brasas que nunca se apagaron. La memoria de la köfte de Kırklareli.",
      eyebrow: "Nuestra Historia",
      title: "Más de ochenta años de guardia junto a las brasas",
      captionShop: "La misma puerta, el mismo rótulo — Kasaplar Arası",
      captionUsta: "El maestro ante las brasas",
      quoteSub: "Una frase que comparte mucha gente en Kırklareli",
      closing:
        "El resto de la historia no cabe en unas páginas; se cuenta junto a las brasas. Tu sitio en la mesa está listo.",
      ctaPlace: "Conoce el Local",
    },
    placePage: {
      docTitle: "El Local — Küçük Mustafa Köftecisi | Kasaplar Arası, Kırklareli",
      docDesc:
        "Una parrilla de carbón de roble y un comedor cálido de madera. Frente al parque Şevket Dingiloğlu, abierto los 7 días, de 10:00 a 02:00.",
      eyebrow: "El Local",
      title: "Comestibles delante, parrilla de köfte al fondo — siempre",
      salonHeading: "Madera, calor y mesas muy juntas",
      openWord: "Abierto",
      hoursWord: "Horario",
      sinceWord: "Fundación",
      perDay: "/semana",
      captionSalon: "Nuestro comedor renovado",
      captionOcak: "Carbón de roble, parrilla de hierro fundido",
      ocakHeading: "El corazón del comedor late al fondo",
      orgEyebrow: "Eventos",
      captionOrg: "Una mesa puesta para una comida de grupo",
      servicesEyebrow: "Servicios",
      servicesTitle: "Como tú prefieras",
      ctaGallery: "Ver la Galería",
    },
    langBox: { label: "Elige idioma" },
  },
  manifesto: {
    eyebrow: "Köfte de Kırklareli",
    title: "La receta no ha cambiado desde 1939; nunca se nos pasó por la cabeza cambiarla.",
    text: "A la ternera se le suma el cordero Kıvırcık de Kırklareli, con Indicación Geográfica Protegida; se amasa con cebolla y pan del día anterior y se sella sobre las brasas de carbón de roble. Las especias son pocas — para que lo que quede sea la carne. Al lado: piyaz de cebolla fresca, pimientos verdes asados a la brasa y salsa picante casera. La mesa está puesta.",
  },
  story: {
    pullQuote: "La köftería a la que me llevó mi padre por primera vez.",
    chapters: [
      {
        year: "1935",
        title: "Un carrito frente al bazar Arasta",
        text: "Mustafa Akkul era bajito; todos lo llamaban «Küçük Mustafa», el Pequeño Mustafa. En 1935 montó un pequeño carrito ambulante frente al bazar Arasta. Su capital era escaso, pero su balanza honrada y sus brasas pacientes. Kırklareli conoció la köfte de sus manos.",
      },
      {
        year: "1939",
        title: "Comestibles delante, parrilla de köfte al fondo",
        text: "En el decimoquinto año de la liberación de Kırklareli, Küçük Mustafa consiguió un techo propio: un local frente al parque Şevket Dingiloğlu. El mostrador de comestibles delante, las brasas al fondo. Entrabas a por pan y salías oliendo a köfte.",
      },
      {
        year: "Hoy",
        title: "De maestro a aprendiz, cuatro generaciones",
        text: "La parrilla nunca quedó desatendida: İbrahim Kayacan, Necdet Kayacan, Cüneyt Kayacan… Hoy es Ergin Kalınoğlu quien está ante las brasas. Los nombres cambiaron; la masa, el fuego y la bienvenida en la puerta, jamás.",
      },
    ],
  },
  storyPage: {
    lead: "Esta historia es más grande que un local. La componen el apodo de un hombre, la memoria del sabor de una ciudad y unas brasas que llevan más de ochenta años sin apagarse.",
    chapters: [
      {
        id: "1935",
        year: "1935",
        title: "Un carrito frente al bazar Arasta",
        paragraphs: [
          "Mustafa Akkul era bajito. En el bazar de Kırklareli todos lo llamaban «Küçük Mustafa» —el Pequeño Mustafa— y él llevaba ese nombre no como un defecto, sino como una firma.",
          "En 1935 montó un pequeño carrito ambulante frente al bazar Arasta. Su capital eran unas tenazas, una parrilla y una balanza honrada. Los comerciantes que iban al mercado por la mañana, los oficinistas que volvían a casa por la tarde; todos se detuvieron alguna vez ante aquel carrito.",
          "Köfte, claro está, ya había en aquellos años. Pero Kırklareli aprendió en el carrito de Küçük Mustafa en qué se convierte la köfte en manos de un maestro.",
        ],
      },
      {
        id: "1939",
        year: "1939",
        title: "Comestibles delante, parrilla de köfte al fondo",
        paragraphs: [
          "1939 fue el decimoquinto aniversario de la liberación de Kırklareli. Mientras la ciudad celebraba, Küçük Mustafa tenía su propia celebración: un local con techo propio, frente al parque Şevket Dingiloğlu.",
          "El local tenía dos caras: delante, el mostrador de comestibles —pan, queso, aceitunas—. Y al fondo, las brasas. Quien entraba a por pan no podía resistirse al olor que llegaba del fondo y salía con una ración de köfte.",
          "El rótulo que se colgó aquel día sigue en el mismo sitio: Karacaibrahim Mahallesi, Kasaplar Arası. La dirección nunca cambió, y a nadie se le pasó jamás por la cabeza mudar aquella puerta a otro lugar.",
        ],
      },
      {
        id: "kusaklar",
        year: "Generaciones",
        title: "De maestro a aprendiz: los Kayacan",
        paragraphs: [
          "Si abrir un local es un arte, transmitirlo lo es todavía más. La parrilla de Küçük Mustafa pasó a sus aprendices: primero a İbrahim Kayacan, después a Necdet Kayacan y luego a Cüneyt Kayacan.",
          "Cada uno atravesó las dificultades de su época: años de escasez, años de emigración, el rostro cambiante del bazar. Lo único que nunca cambió fue la medida detrás del mostrador: pocas especias, mucha carne y brasas pacientes.",
          "En Kırklareli se dice que la receta no pertenece al local, sino a la parrilla. Quien cuida la parrilla guarda la receta — y esta parrilla nunca se apagó.",
        ],
      },
      {
        id: "bugun",
        year: "Hoy",
        title: "Ante las brasas: Ergin Kalınoğlu",
        paragraphs: [
          "Hoy es Ergin Kalınoğlu quien está ante las brasas. La persiana se levanta a las nueve de la mañana; el último té sale del fogón a las tres de la madrugada; los siete días de la semana.",
          "El método heredado de los mayores es el mismo: ternera con cordero Kıvırcık de Indicación Geográfica Protegida, cebolla y pan del día anterior. Ninguna köfte toca la parrilla antes de que el carbón de roble se haya cubierto de ceniza y se haya hecho brasa.",
          "Y aún hoy, cada día, alguien cruza la puerta diciendo: «Yo venía aquí con mi padre». Esa frase es la única recompensa verdadera para más de ochenta años de trabajo.",
        ],
      },
    ],
  },
  placePage: {
    lead: "Frente al parque Şevket Dingiloğlu, en Kasaplar Arası; el local cuya parte delantera fue un día una tienda de comestibles y cuyo fondo fue siempre una parrilla de köfte.",
    salon: {
      title: "El Comedor",
      text: "Dieciséis mesas, setenta y cinco plazas. Ni un gran salón ni una decoración ostentosa: madera en lugar de formica, recuerdos en lugar de carteles. Las mesas están muy juntas, porque aquí charlar con la mesa de al lado es una parte no escrita del menú.",
    },
    ocak: {
      title: "La Parrilla",
      text: "El corazón del comedor es la parrilla del fondo. Esperamos a que el carbón de roble se cubra de ceniza y se haga brasa; de este mostrador no sale ninguna köfte que haya visto la llama. Las tenazas se mueven cientos de veces al día sobre las brasas, siempre con la misma paciencia.",
    },
    organizasyon: {
      title: "Eventos Privados y Comidas de Grupo",
      text: "Para seminarios, cursos, comidas familiares o celebraciones concurridas, adaptamos el comedor a la ocasión. Para comidas de grupo y eventos privados, basta con reservar con antelación.",
    },
    services: [
      {
        id: "yerinde",
        title: "En el Local",
        text: "Los 7 días de la semana, de 10:00 a 02:00. Comerciantes al mediodía, familias por la tarde, trabajadores del turno de noche pasada la medianoche; el comedor nunca está vacío.",
      },
      {
        id: "paket",
        title: "Servicio a Domicilio",
        text: "Haz tu pedido por teléfono y llegará a tu puerta recién salido de las brasas: +90 288 212 76 12.",
      },
      {
        id: "gelal",
        title: "Para Llevar",
        text: "Directo del mostrador. Se empaqueta recién salido de las brasas, el parque al otro lado de la calle — el resto depende de ti.",
      },
      {
        id: "alkollu",
        title: "Servicio con Alcohol",
        text: "En el comedor servimos rakı y cerveza local. Köfte de las brasas con rakı es una vieja costumbre de Tracia.",
      },
    ],
  },
  features: [
    {
      id: "et",
      kicker: "La Carne",
      title: "Kıvırcık con IGP",
      text: "A la ternera se le suma el cordero Kıvırcık de Kırklareli, con Indicación Geográfica Protegida. El secreto está en la proporción; su medida, una balanza de mano de más de ochenta años.",
    },
    {
      id: "harc",
      kicker: "La Masa",
      title: "Pocas especias, mucha carne",
      text: "Cebolla, pan del día anterior, sal. A las especias se las deja esperando en la puerta para que nunca se impongan a la carne; lo que queda en el paladar no es el condimento, sino la carne.",
    },
    {
      id: "ates",
      kicker: "El Fuego",
      title: "Brasas de carbón de roble",
      text: "Llama no: brasa. La köfte solo llega a la parrilla cuando el carbón de roble se ha cubierto de ceniza; por fuera se sella, por dentro se mantiene jugosa.",
    },
    {
      id: "sunum",
      kicker: "El Servicio",
      title: "El plato que nunca cambia",
      text: "Piyaz de cebolla fresca, pimiento verde asado a la brasa, salsa picante casera. Ocho köfte en una ración de 225 gramos — igual que en 1939.",
    },
  ],
  /* Opiniones reales de TripAdvisor; puntuación ajustada y ligeramente abreviadas. */
  tripadvisorReviews: {
    "kucuk-sehir": {
      title: "Gran sabor en una ciudad pequeña",
      quote:
        "La köfte está realmente deliciosa, las raciones llenan y el trato es muy cercano. Con un personal siempre sonriente, te sientes como un invitado y no como un cliente. Se lo recomiendo sin dudarlo a cualquiera cuyo camino pase por Kırklareli.",
    },
    nefis: {
      title: "Exquisito",
      quote:
        "Las köfte del restaurante estaban realmente deliciosas: ligeramente doradas por fuera, jugosas y tiernas por dentro. Ambiente acogedor, servicio rápido y con una sonrisa.",
    },
    "izgara-lezzeti": {
      title: "Sabor a la parrilla en Kırklareli",
      quote:
        "El local, la variedad de platos y sus sabores eran estupendos. Nos llamaron la atención la amabilidad del personal, la disposición de las mesas y la limpieza.",
    },
  },
  googleReviews: {
    yesim: {
      quote:
        "Parece un pequeño local de comerciantes y, sin embargo, se nos quedaron grabadas sus köfte deliciosas, su magnífico yogur de oveja y su ensalada fresquísima. El pan tostado que nos ofrecieron fue un detalle precioso. Buen ambiente, comida agradable.",
    },
    oznur: {
      quote:
        "Pedimos köfte, piyaz y ayran. La ración es generosa y el sabor, excelente. El precio también es razonable.",
    },
  },
  hoursDays: "Los 7 días de la semana",
  servicesList: ["En el Local", "Servicio a Domicilio", "Para Llevar", "Servicio con Alcohol"],
  menuNote:
    "Los productos y los precios están tomados del menú propio del restaurante; consulta la lista actual en el local.",
  menu: {
    categories: {
      "imza-kofteler": {
        title: "Köfte de la Casa",
        note: "Ternera + cordero Kıvırcık con IGP; sobre las brasas de carbón de roble.",
      },
      izgaralar: {
        title: "A la Parrilla",
        note: "Todo sobre brasas de carbón de roble, en parrilla de hierro fundido.",
      },
      "ara-sicaklar": { title: "Entrantes Calientes" },
      mezeler: {
        title: "Mezes",
        note: "Se preparan cada día; llegan a la mesa plato a plato.",
      },
      salatalar: { title: "Ensaladas" },
      tatlilar: {
        title: "Postres",
        note: "Postre después de la köfte, al estilo de Tracia.",
      },
      "soguk-icecekler": { title: "Bebidas Frías" },
      "sicak-icecekler": { title: "Bebidas Calientes" },
      "alkollu-icecekler": {
        title: "Bebidas Alcohólicas",
        note: "El servicio de alcohol solo es válido en el salón. La cerveza es botella de 50 cl; el rakı, el whisky y el vino se sirven por copa. Los precios de esta sección son ESTIMADOS — consulta el precio exacto a nuestro equipo.",
        groups: {
          biralar: "Cervezas",
          rakilar: "Rakı",
          viskiler: "Whiskies",
          saraplar: "Vinos",
        },
      },
    },
    items: {
      /* İmza Köfteler */
      "kucuk-mustafa-koftesi": {
        unit: "225 g · 8 unidades",
        description:
          "La köfte que lleva el nombre de la casa. Una masa amasada con cebolla y pan del día anterior, sellada sobre las brasas de roble; llega acompañada de pan de pueblo mojado en caldo de huesos.",
      },
      "acili-kofte": {
        unit: "225 g · 8 unidades",
        description: "La misma masa, con el picante amasado dentro.",
      },
      "kasarli-kofte": {
        unit: "225 g · 8 unidades",
        description: "La köfte se rellena con queso kaşar; sobre las brasas se funde.",
      },
      "pastirmali-kofte": {
        unit: "225 g · 8 unidades",
        description:
          "A la masa se le añade pastırma; sobre las brasas su aroma llena el comedor.",
      },
      "sefin-koftesi": {
        unit: "225 g · 8 unidades",
        description: "La receta propia del maestro que está ante las brasas.",
      },
      /* Izgaralar */
      "tavuk-izgara": {
        description: "Poco especiado, a la brasa. Para que nadie se quede sin lo suyo.",
      },
      "kasap-sucuk": {
        description: "Sucuk de Kasaplar Arası, a la brasa hasta que los bordes quedan crujientes.",
      },
      "tava-ciger": {
        description: "Hígado cortado fino en la sartén bien caliente; con ensalada de cebolla.",
      },
      "ciger-sis": {
        description: "Ensartado en brochetas con grasa de cola de cordero y girado sobre las brasas.",
      },
      antrikot: {
        description: "Un corte grueso, sellado y después reposado.",
      },
      "istranca-kuzu-sis": {
        description:
          "Cordero en dados de los montes Istranca; sellado sobre las brasas y servido con ensalada de cebolla y pimiento asado.",
      },
      kulbasti: {
        description: "Carne finamente golpeada, puesta directamente sobre la ceniza.",
      },
      kusleme: {
        description: "La parte más preciada del cordero; se deshace en la boca.",
      },
      bonfile: {
        description: "Un corte magro y tierno, al punto que tú prefieras.",
      },
      "istranca-kuzu-pirzola": {
        description: "De cordero de Tracia, tan jugoso que se coge por el hueso.",
      },
      "istranca-kuzu-lokum": {
        description: "El corte más meloso del cordero; solo sal y brasas.",
      },
      "karisik-izgara": {
        unit: "1 Kuzu Lokum · 1 Kuzu Pirzola · 2 Köfte · 1 Külbastı",
        description:
          "Toda la parrilla resumida para los indecisos: cinco piezas en un solo plato.",
      },
      /* Ara Sıcaklar */
      "mercimek-corbasi": {
        description: "Con mantequilla, en su punto justo de espesor. Con limón, si te apetece.",
      },
      "pacanga-boregi": {
        description: "Pastırma y queso kaşar, fritos en masa fina de yufka.",
      },
      "patates-kizartmasi": {
        description: "Cortadas a mano, servidas calientes.",
      },
      "guvec-kasarli-mantar": {
        description:
          "En cazuela de barro, cubierto de queso kaşar y gratinado sobre las brasas. Se sirve tal como sale del fuego, aún burbujeando.",
      },
      /* Mezeler */
      "sogus-tabagi": {
        description: "Verduras de temporada, cortadas en trozos grandes, con limón.",
      },
      cerez: {
        description: "Un plato de frutos secos, para acompañar el rakı.",
      },
      "eski-kasar": {
        description: "El queso kaşar curado de Tracia, en lonchas.",
      },
      atom: { description: "Con yogur y guindillas picantes." },
      "sirkeli-kapya": {
        description: "Pimiento kapya asado a la brasa, con su aliño de vinagre.",
      },
      semizotu: { description: "Verdolaga con yogur y ajo." },
      haydari: { description: "Yogur escurrido con eneldo y ajo." },
      "havuc-tarator": { description: "Zanahoria rallada con yogur." },
      "rus-salatasi": { description: "El clásico, con mayonesa." },
      "kuru-domates": { description: "Reposados en aceite de oliva." },
      "acili-ezme": {
        description: "Tomate, pimiento y cebolla picados finos; al estilo de la casa.",
      },
      cacik: { description: "Con pepino, bien frío." },
      "koyun-yogurdu": {
        description:
          "Yogur de oveja cuajado en temporada; tan espeso que la cuchara se sostiene de pie.",
      },
      "karisik-kizartma": {
        description: "Berenjena, pimiento y calabacín; con yogur y salsa de tomate.",
      },
      kopeoglu: {
        description: "Berenjena asada a la brasa con yogur y salsa de tomate.",
      },
      "soslu-patlican": {
        description: "Berenjena frita con salsa de tomate.",
      },
      manca: {
        description: "El meze de los emigrantes de Tracia; con yogur y ajo.",
      },
      girit: {
        description: "Queso blanco majado con nueces y hierbas frescas.",
      },
      "lux-cerez": {
        description: "Un plato generoso, con predominio del pistacho.",
      },
      soka: {
        description: "De las mesas balcánicas: un meze de pimientos asados a la brasa.",
      },
      "buzlu-badem": {
        description: "Sobre hielo, crujientes al morderlas.",
      },
      /* Salatalar */
      "coban-salatasi": {
        description: "Tomate, pepino, pimiento y cebolla; picados finos.",
      },
      piyaz: {
        description:
          "Alubias blancas, mucha cebolla, vinagre y aceite de oliva. La compañía inseparable de la köfte.",
      },
      "yesil-salata": {
        description: "Verduras de hoja de temporada, con limón y aceite de oliva.",
      },
      "sopska-salatasi": {
        description: "Un clásico balcánico, coronado con queso blanco rallado.",
      },
      /* Tatlılar */
      "kaymakli-baklava": {
        description: "Cortada en triángulos, con nata cuajada por encima.",
      },
      "kaymakli-peynir-tatlisi": {
        description: "Postre de queso en almíbar, con su nata cuajada.",
      },
      "kaymakli-hayrabolu": {
        description:
          "El postre de queso en almíbar de Tracia; hecho con queso fresco, servido templado.",
      },
      tralice: {
        unit: "Casero, receta propia",
        description: "Un regalo de los emigrantes balcánicos; lácteo, con caramelo.",
      },
      sutlac: {
        description: "Al horno, caramelizado por encima.",
      },
      "meyve-tabagi": {
        description: "Fruta de temporada, sobre hielo.",
      },
      /* Soğuk İçecekler */
      su: { description: "Medio litro." },
      ayran: { description: "Espumoso, en jarra de cobre." },
      soda: { description: "Natural o con sabor a fruta." },
      salgam: { description: "Picante o suave." },
      kola: { description: "Bien fría, del refrigerador." },
      fanta: { description: "Bien fría, del refrigerador." },
      sprite: { description: "Bien fría, del refrigerador." },
      hardaliye: {
        description:
          "La bebida centenaria de Kırklareli: mosto de uva fermentado con semillas de mostaza. Embotellada por Kırk Kimse.",
      },
      /* Sıcak İçecekler */
      cay: { description: "En vaso de tulipán, bien cargado." },
      "turk-kahvesi": {
        description: "Hecho sobre las brasas, con delicia turca al lado.",
      },
      /* Biralar */
      "efes-pilsen": { description: "Servida fría, en botella." },
      "tuborg-gold": { description: "Servida fría, en botella." },
      /* Rakılar */
      "yeni-raki": {
        unit: "Serie Nueva",
        description: "El clásico. Con queso blanco y melón.",
      },
      "tekirdag-altin-seri": {
        description: "Reposado en barricas de roble; el rakı propio de Tracia.",
      },
      "tekirdag-sir-kavrulmus": {
        description: "Con anís tostado, de cuerpo pleno.",
      },
      "izmir-gobek": {
        description: "Del corazón del destilado; suave al paladar.",
      },
      "kulup-rakisi": {
        description: "A la vieja usanza, de carácter firme.",
      },
      "efe-gold": {
        description: "Ligeramente anisado, bien equilibrado.",
      },
      /* Viskiler */
      "chivas-regal-12": {
        unit: "12 años",
        description: "Whisky escocés de mezcla, de final suave.",
      },
      "jack-daniels": {
        unit: "Tennessee",
        description: "Filtrado en carbón de arce; dulzón.",
      },
      /* Şaraplar */
      saranta: {
        description:
          "Vino de autor de los viñedos de Kırklareli; una opción local para acompañar la köfte.",
      },
      "vino-dessera": {
        description: "Vino de Tracia elaborado en Vize; en tinto y en blanco.",
      },
    },
  },
  gallery: {
    "ig-kofte": { caption: "Köfte sobre pan — el plato de hoy" },
    "ig-salon-bordo": { caption: "Nuestro comedor renovado" },
    "ig-guvec": { caption: "Champiñones con kaşar en cazuela — plato nuevo" },
    "ig-menu-foyu": { caption: "Nuestra carta, a la luz de la lámpara" },
    "ig-organizasyon": { caption: "Una mesa puesta para comidas de grupo" },
    "ig-masa-detay": { caption: "Una mesa que espera a sus comensales" },
    "ig-salon-ici": { caption: "Un mediodía en el comedor" },
    "ig-gece": { caption: "De noche, cuando el comedor se serena" },
    "ig-lamba": { caption: "La lámpara de latón sobre la mesa" },
    cephe: {
      caption: "El local de Kasaplar Arası — el rótulo dice: una leyenda viva desde 1939",
    },
    usta: { caption: "El maestro ante las brasas — las tenazas nunca descansan" },
    porsiyon: {
      caption: "Una ración: 225 gramos, ocho köfte — el mismo plato desde 1939",
    },
    ates: { caption: "Esperamos a que el carbón de roble se haga brasa" },
    dokum: { caption: "Recién salido de las brasas, servido caliente" },
    sis: { caption: "A una brocheta nunca le falta el piyaz de cebolla" },
    "sofra-kurulumu": { caption: "Köfte, piyaz, salsa picante: la mesa está puesta" },
    cay: { caption: "Siempre un té antes de la cuenta" },
  },
};
