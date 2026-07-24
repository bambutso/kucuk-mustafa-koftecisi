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
      priceOnRequest: "Consulte el precio a nuestro personal",
      servings: {
        tek: "Simple",
        duble: "Doble",
        "20cl": "20 cl",
        "35cl": "35 cl",
        "50cl": "50 cl",
        "70cl": "70 cl",
        "100cl": "100 cl",
      },
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
      lead: "Llámanos para reservas y cualquier duda; siempre hay alguien junto al teléfono.",
      phoneTitle: "Teléfono",
      phoneNote: "Las reservas se atienden por teléfono.",
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
        title: "De maestro a aprendiz, de generación en generación",
        text: "La parrilla nunca quedó desatendida. El negocio pasó a Ergin Kalınoğlu en 2008 y hoy está en manos de su sobrino, Doruk Kalınoğlu. Los nombres cambiaron; la masa, el fuego y la bienvenida en la puerta, jamás.",
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
        title: "La familia Kalınoğlu toma el relevo",
        paragraphs: [
          "El negocio pasó a manos de Ergin Kalınoğlu en 2008. Hoy lo lleva su sobrino, Doruk Kalınoğlu.",
          "Puede cambiar quien lo cuida, pero el método no: ternera con cordero Kıvırcık de Indicación Geográfica Protegida, cebolla y pan del día anterior. Ninguna köfte toca la parrilla antes de que el carbón de roble se haya cubierto de ceniza y se haya hecho brasa.",
          "Y aún hoy, cada día, alguien cruza la puerta diciendo: «Yo venía aquí con mi padre». Esa frase es la única recompensa verdadera para más de ochenta años de trabajo.",
        ],
      },
    ],
    doruk: {
      title: "¿Quién es Doruk Kalınoğlu?",
      paragraphs: [
        "Doruk Kalınoğlu es el nombre que hoy está al frente de Küçük Mustafa Köftecisi. Continúa con el mismo esmero y dedicación la arraigada tradición de sabor heredada de su familia.",
        "Su objetivo es llevar hacia el futuro el legado que se extiende desde 1939 hasta hoy, preservando una calidad inalterable y la satisfacción de los huéspedes.",
      ],
    },
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
  about: {
    eyebrow: "Sobre nosotros",
    title: "Sabor que no cambia, cuidado que no cambia",
    paragraphs: [
      "Küçük Mustafa Köftecisi aspira a ofrecer siempre a sus huéspedes la mejor experiencia, con una idea del sabor que no cambia y un alto estándar de calidad. Cada detalle se piensa con el mismo esmero, desde el primer momento hasta el último bocado.",
      "Todos los productos que usamos en nuestra cocina se eligen con cuidado. En nuestros platos empleamos únicamente aceite de oliva virgen extra natural y aceite de girasol; el aceite de palma y otras grasas procesadas no tienen cabida. Porque hacemos un principio de servir a cada huésped de nuestra mesa los productos más sanos y fiables.",
      "Para que el sabor perdure, la confianza es imprescindible. Por eso las normas de limpieza e higiene se aplican al más alto nivel en nuestra cocina, y todos los procesos de preparación y servicio se llevan a cabo con el mayor esmero.",
      "En Küçük Mustafa Köftecisi el objetivo no es solo servir comida, sino brindar una experiencia de calidad, fiable y placentera.",
    ],
    cards: [
      { id: "icerik", title: "Ingredientes naturales y selectos", text: "Productos sin aditivos, elegidos con esmero." },
      { id: "hijyen", title: "Altos estándares de higiene", text: "Esmero y control en cada paso." },
      { id: "memnuniyet", title: "Satisfacción del huésped", text: "Siempre la misma calidad, el mismo esmero." },
    ],
  },
  whyUs: {
    eyebrow: "Por qué nosotros",
    items: [
      { id: "yag", text: "Solo aceite de oliva virgen extra natural y de girasol" },
      { id: "palm", text: "Sin aceite de palma ni grasas procesadas" },
      { id: "hijyen", text: "Higiene del más alto nivel" },
      { id: "secki", text: "Productos seleccionados con cuidado y sin aditivos" },
    ],
  },
  ataturk: {
    kirklareliQuote: "Guardaré con sentimientos imperecederos el recuerdo del tiempo que pasé con queridos amigos en el Türk Ocağı de Kırklareli.",
    hardaliyeEyebrow: "Nuestra bebida nacional — Hardaliye",
    hardaliyeQuote: "Convertidla en nuestra bebida nacional.",
    hardaliyeText: "La hardaliye, la bebida de uva centenaria de Tracia, es uno de los tesoros regionales de nuestra mesa; y también tiene su lugar en nuestra carta.",
    seeMenu: "Ver en la carta",
  },
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
  servicesList: ["En el Local", "Servicio con Alcohol"],
  menuNote:
    "Los productos y los precios están tomados del menú propio del restaurante; consulta la lista actual en el local.",
  menu: {
    categories: {
      "imza-kofteler": {
        title: "Köfte de la Casa",
        note: "Ternera y cordero Kıvırcık con indicación geográfica protegida; sobre brasas de carbón de encina.",
      },
      baslangiclar: {
        title: "Entrantes",
        groups: {
          salatalar: "Ensaladas",
          "ara-sicaklar": "Entrantes Calientes",
          mezeler: "Mezes",
          "soguk-mezeler": "Mezes Fríos",
        },
        groupNotes: {
          "soguk-mezeler": "Las raciones son de 150–175 g de media.",
        },
      },
      izgaralar: {
        title: "A la Parrilla",
        note: "Todo sobre brasas de carbón de encina, en parrilla de hierro fundido.",
      },
      baliklar: {
        title: "Nuestros Pescados",
        note: "Los precios de estos productos se determinan según el precio de compra del día. Por favor, consulte a nuestro personal.",
        groups: {
          "izgara-balik": "Pescados a la Parrilla",
          "kizartma-balik": "Pescados Fritos",
        },
      },
      tatlilar: {
        title: "Postres",
        note: "Postre después del köfte, al estilo de Tracia.",
      },
      icecekler: {
        title: "Bebidas",
        groups: {
          "soguk-icecekler": "Bebidas Frías",
          "sicak-icecekler": "Bebidas Calientes",
        },
      },
      "alkollu-icecekler": {
        title: "Bebidas Alcohólicas",
        note: "El servicio de alcohol solo se ofrece en el salón.",
        groups: {
          rakilar: "Rakı",
          saraplar: "Vinos",
          "kadeh-sarap": "Vino por Copa",
          biralar: "Cervezas",
          "yabanci-alkoller": "Licores Importados",
        },
        groupNotes: {
          saraplar: "Precio por botella.",
          "yabanci-alkoller": "Precio por doble.",
        },
      },
    },
    items: {
      "kucuk-mustafa-koftesi": {
        unit: "225 g · 8 piezas",
        description: "El köfte que lleva el nombre de la casa. La masa, amasada con cebolla y pan duro, se sella sobre brasas de encina; se sirve acompañado de pan de aldea mojado en caldo de hueso.",
      },
      "acili-kofte": {
        unit: "230 g · 2 piezas",
        description: "La misma mezcla, con el picante amasado en su interior.",
      },
      "kasarli-kofte": {
        unit: "240 g · 2 piezas",
        description: "El köfte se rellena de kaşar; se funde sobre las brasas.",
      },
      "pastirmali-kofte": {
        unit: "240 g · 2 piezas",
        description: "Se añade pastırma a la masa; su aroma se extiende por el salón sobre las brasas.",
      },
      "sefin-koftesi": {
        unit: "250 g · 2 piezas",
        description: "La receta propia del maestro parrillero.",
      },
      piyaz: {
        description: "Alubias blancas, abundante cebolla, vinagre y aceite de oliva. El compañero inseparable del köfte.",
      },
      "coban-salatasi": {
        description: "Tomate, pepino, pimiento y cebolla; picados finos.",
      },
      "akdeniz-salata": {
        description: "Verduras de temporada, con aceitunas y aceite de oliva.",
      },
      "sopska-salatasi": {
        description: "Un clásico balcánico; cubierto con queso blanco rallado.",
      },
      "mercimek-corbasi": {
        description: "Con mantequilla, con el espesor justo. Con limón si lo prefiere.",
      },
      "patates-kizartmasi": {
        description: "Cortadas a mano, servidas calientes.",
      },
      "sogus-tabagi": {
        description: "Pepino fresco cortado en trozos grandes, con sal aparte.",
      },
      cerez: {
        description: "Plato de frutos secos, para acompañar la charla.",
      },
      "eski-kasar": { description: "Kaşar curado de Tracia, en lonchas." },
      "lux-cerez": {
        description: "Plato generoso, con predominio de pistacho.",
      },
      "tek-peynir": { description: "Queso blanco, en lonchas." },
      atom: { description: "Con yogur y guindilla picante." },
      "sirkeli-kapya": {
        description: "Pimiento rojo asado, en salsa de vinagre.",
      },
      semizotu: { description: "Con yogur y ajo." },
      haydari: { description: "Yogur colado, eneldo y ajo." },
      "havuc-tarator": { description: "Zanahoria rallada con yogur." },
      "rus-salatasi": { description: "La clásica, con mayonesa." },
      "acili-ezme": {
        description: "Tomate, pimiento y cebolla picados finos; al estilo de la casa.",
      },
      cacik: { description: "Con pepino, frío como el hielo." },
      "karisik-kizartma": {
        description: "Berenjena, pimiento y calabacín; con salsa de yogur y tomate.",
      },
      kopeoglu: {
        description: "Berenjena asada, con salsa de yogur y tomate.",
      },
      "soslu-patlican": {
        description: "Berenjena frita, con salsa de tomate.",
      },
      manca: {
        description: "El meze de los inmigrantes de Tracia; con yogur y ajo.",
      },
      "koyun-yogurdu": {
        description: "Yogur de oveja cuajado de temporada; tan espeso que la cuchara se mantiene de pie.",
      },
      girit: { description: "Queso blanco machacado con nueces y hierbas." },
      soka: { description: "De las mesas balcánicas, meze de pimiento asado." },
      "tavuk-izgara": {
        description: "Poco especiado, a las brasas. Para que quien no come carne roja no se quede sin plato.",
      },
      "kasap-sucuk": {
        unit: "200 g",
        description: "Sucuk de Kasaplar Arası, a las brasas hasta quedar crujiente.",
      },
      "tava-ciger": {
        unit: "225 g",
        description: "Hígado cortado fino, en sartén bien caliente; con cebolla en juliana.",
      },
      "ciger-sis": {
        unit: "225 g · 3 brochetas",
        description: "Ensartado en la brocheta con grasa de cola, se voltea sobre las brasas.",
      },
      hamburger: {
        description: "Köfte de ternera a las brasas, dentro de un panecillo.",
      },
      antrikot: {
        unit: "200 g",
        description: "Corte grueso, sellado y reposado.",
      },
      "istranca-kuzu-sis": {
        unit: "260 g · 3 brochetas",
        description: "Cordero en dados de los montes de Istranca; sellado sobre las brasas, con cebolla en juliana y pimiento asado.",
      },
      kulbasti: {
        unit: "270 g · 3 brochetas",
        description: "Carne finamente aplanada, directamente sobre las cenizas.",
      },
      kusleme: {
        unit: "180–200 g · 1 pieza",
        description: "El corte más apreciado del cordero; se deshace en la boca.",
      },
      bonfile: {
        unit: "200 g",
        description: "Corte magro y tierno; en el punto que usted prefiera.",
      },
      "istranca-kuzu-pirzola": {
        unit: "240 g · 3 piezas",
        description: "Cordero de Tracia, tan jugoso que se come sujetando el hueso.",
      },
      "istranca-kuzu-lokum": {
        unit: "240 g · 4 piezas",
        description: "El corte de cordero que se deshace como lokum; solo sal y brasas.",
      },
      "karisik-izgara": {
        unit: "1 Lokum de Cordero · 1 Chuleta de Cordero · 2 Köfte · 1 Külbastı",
        description: "Un resumen de la parrilla para los indecisos; cinco piezas en un solo plato.",
      },
      "karisik-kofte": {
        unit: "Para 2 · 4 Köfte Sencillo · 1 Picante · 1 Con Kaşar · 1 Con Pastırma · 1 Köfte del Chef",
        description: "Los cinco köfte, todos en un solo plato; para compartir.",
      },
      cupra: { description: "Entera, a las brasas." },
      levrek: { description: "Entera, a las brasas." },
      lufer: {
        description: "De temporada, el pescado más apreciado del Bósforo.",
      },
      somon: { description: "Un filete grueso, a las brasas." },
      sardalya: {
        description: "Rebozada en harina de maíz, frita en aceite bien caliente.",
      },
      hamsi: { description: "De temporada, frita en sartén." },
      istavrit: {
        description: "Rebozado en harina de maíz, frito en aceite bien caliente.",
      },
      mezgit: { description: "Sin espinas, frito en sartén." },
      "kabak-tatlisi": { description: "Se sirve con tahini y nueces." },
      profiterol: { description: "Con salsa de chocolate, servido frío." },
      sutlac: { description: "Gratinado por encima, horneado." },
      dondurma: {
        unit: "3 bolas",
        description: "A su elección, entre los sabores del día.",
      },
      "kaymakli-hayrabolu": {
        description: "El postre de queso en almíbar de Tracia; se sirve con tahini y nueces.",
      },
      "antep-fistikli-baklava": { description: "Se sirve con kaymak." },
      "meyve-tabagi": { description: "Fruta de temporada, sobre hielo." },
      peja: { unit: "Sin alcohol" },
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
