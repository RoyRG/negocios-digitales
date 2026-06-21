/* ==========================================================================
   DATOS EDITABLES — Tinta Sagrada (edición VINTAGE / ritual de tinta)
   Mismo negocio e info que la demo original, dirección de diseño distinta.
   Todo el contenido visible vive aquí (panel.html lo edita sin tocar el HTML).
   [EDITAR] WhatsApp real: cambiar "5213312345678".
   ========================================================================== */
window.TINTA = {

  whatsapp: "5213312345678",
  instagram: "https://instagram.com/tintasagrada.gdl",

  /* imagen protagonista del hero (obra real del estudio) */
  heroImg: "img/tatuaje-1.jpg",

  textos: {
    marca: "Tinta Sagrada",
    heroTag: "Estudio privado · Guadalajara · desde 2015",
    heroLema: "Tu piel merece algo <em>sagrado</em>",
    heroIntro: "Blackwork, fine line y realismo en negro y gris. Cada pieza nace de tu historia, no de un catálogo.",
    heroFirma: "Dante Vargas — maestro tatuador",
    heroCta: "Reservar mi sesión",
    heroImgAlt: "Tatuaje realista de cráneo con reloj de números romanos y rosa, hecho en Tinta Sagrada",

    manifiesto: "No tatúo catálogos. Escucho tu historia, la dibujo desde cero y la grabo una sola vez — para que dure tanto como tú.",
    manifiestoFirma: "El oficio antes que la moda.",

    servTitulo: "La carta",
    servIntro: "Cada pieza se cotiza por tamaño, zona y detalle. Los precios son punto de partida; tu diseño es único y su precio también.",

    galTitulo: "Obra reciente",
    galIntro: "Una muestra del trazo. El cuaderno completo vive en Instagram.",
    galIg: "Ver las +200 piezas en @tintasagrada.gdl",

    testTitulo: "Lo que dejan dicho",

    evTitulo: "Dónde nos verás",
    evIntro: "Expos, convenciones y eventos donde estaremos tatuando.",

    pactoTitulo: "Sellemos el <em>pacto</em>",
    pactoIntro: "Cuéntame qué quieres grabarte. Reviso tu idea, te propongo el diseño y reservamos la fecha. Sin compromiso hasta que el boceto te enamore.",
    contEstudioLabel: "El santuario",
    contEstudio: "Col. Americana, Guadalajara. Dirección exacta al confirmar tu cita.",
    contHorarioLabel: "Atendemos",
    contHorario: "Martes a Sábado · 11:00 a 20:00 · solo con cita",
    contWaLabel: "Directo",
    contWa: "+52 33 1234 5678",
    formNombre: "¿Cómo te llamas?",
    formServicio: "¿Qué estilo buscas?",
    formIdea: "Cuéntame tu idea",
    formIdeaPlaceholder: "Zona del cuerpo, tamaño, referencias…",
    formCta: "Estampar y enviar",

    footLema: "Tinta que perdura, como el rito.",
    footLegal: "© 2026 Tinta Sagrada · Dante Vargas. Estudio certificado en bioseguridad. Mayores de 18 años o con consentimiento de tutor."
  },

  servicios: [
    { num: "01", nombre: "Blackwork",    desc: "Negro sólido, geometría y contraste brutal. Envejece mejor que cualquier color.",            precio: "desde $1,800" },
    { num: "02", nombre: "Fine line",    desc: "Trazos finos y precisos. Ideal para primeras piezas y diseños minimalistas.",                precio: "desde $1,200" },
    { num: "03", nombre: "Realismo B/G", desc: "Retratos y texturas con profundidad fotográfica. Sesiones largas, resultado que respira.",     precio: "desde $3,500" },
    { num: "04", nombre: "Cover-ups",    desc: "Ese tatuaje del que te arrepientes tiene arreglo. Valoración gratuita.",                     precio: "cotización"   }
  ],

  galeria: [
    { img: "img/tatuaje-1.jpg", titulo: "Cráneo, reloj & rosa", zona: "Antebrazo", alt: "Tatuaje realista de cráneo con reloj y rosa" },
    { img: "img/tatuaje-2.jpg", titulo: "Catrina realista",     zona: "Antebrazo", alt: "Tatuaje realista de catrina" },
    { img: "img/tatuaje-3.jpg", titulo: "Valquiria & dragón",   zona: "Hombro",    alt: "Tatuaje de valquiria con dragón en blackwork" },
    { img: "img/tatuaje-4.jpg", titulo: "Guerrera nórdica",     zona: "Pierna",    alt: "Tatuaje de guerrera nórdica con dragón y runas" }
  ],

  testimonios: [
    { texto: "El retrato de mi padre quedó idéntico. Lloré al verlo terminado.", autor: "Fernanda L.", servicio: "Realismo", destacado: true },
    { texto: "Me cubrió un tatuaje que odiaba desde hace años. Nadie cree que abajo había otro.", autor: "Carlos M.", servicio: "Cover-up" },
    { texto: "Llegué con una idea vaga y Dante la convirtió en la pieza más comentada de mi vida.", autor: "Mariana R.", servicio: "Fine line" }
  ],

  servicioOpciones: ["Blackwork", "Fine line", "Realismo negro y gris", "Cover-up", "Aún no sé — quiero asesoría"],

  eventos: [
    { dia: "15—17", mes: "AGO", titulo: "Guadalajara Tattoo Expo", lugar: "Expo Guadalajara", hora: "Stand 42",
      texto: "Tres días tatuando en vivo. Agenda tu sesión con anticipación, los cupos vuelan." }
  ]
};
