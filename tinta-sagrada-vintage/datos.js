/* ==========================================================================
   DATOS EDITABLES — Tinta Sagrada (edición VINTAGE / grimorio)
   Mismo negocio e info que la demo original, otro estilo. Todo el contenido
   visible vive aquí; la página se actualiza sola (o desde panel.html).
   [EDITAR] WhatsApp real: cambiar "5213312345678".
   ========================================================================== */
window.TINTA = {

  whatsapp: "5213312345678",
  instagram: "https://instagram.com/tintasagrada.gdl",

  /* ---- TEXTOS ---- */
  textos: {
    marca: "Tinta Sagrada",
    heroTag: "Estudio privado de tatuaje · Guadalajara · Est. 2015",
    heroLema: "Tu piel merece algo <em>sagrado</em>",
    heroIntro: "Blackwork, fine line y realismo en negro y gris. Diseños únicos creados desde cero — nada de catálogo, nada repetido.",
    heroFirma: "— Dante Vargas, maestro tatuador",
    heroCta: "Agenda tu cita",

    servEyebrow: "I · El ritual",
    servTitulo: "La carta",
    servIntro: "Cada pieza se cotiza por tamaño, zona y detalle. Los precios son punto de partida; tu diseño es único y su precio también.",

    galEyebrow: "II · El grimorio",
    galTitulo: "Obra grabada",
    galIntro: "Una muestra del trazo. El cuaderno completo vive en Instagram.",
    galIg: "Ver todo en @tintasagrada.gdl",

    testEyebrow: "III · Voces",
    testTitulo: "Marcados de por vida",

    evEyebrow: "IV · Peregrinaje",
    evTitulo: "Dónde nos verás",
    evIntro: "Expos, convenciones y eventos donde estaremos tatuando.",

    contEyebrow: "V · El santuario",
    contTitulo: "Empecemos tu <em>pieza</em>",
    contEstudioLabel: "Estudio",
    contEstudio: "Col. Americana, Guadalajara.<br>Dirección exacta al confirmar tu cita.",
    contHorarioLabel: "Horario",
    contHorario: "Martes a Sábado · 11:00 — 20:00<br>Solo con cita",
    contWaLabel: "WhatsApp",
    contWa: "+52 33 1234 5678",
    formNombre: "Tu nombre",
    formServicio: "¿Qué buscas?",
    formIdea: "Cuéntame tu idea",
    formIdeaPlaceholder: "Zona del cuerpo, tamaño, referencias…",
    formCta: "Enviar por WhatsApp",

    footLema: "Tinta que perdura, como el rito.",
    footLegal: "© 2026 Tinta Sagrada · Dante Vargas. Estudio certificado en bioseguridad. Mayores de 18 años o con consentimiento de tutor."
  },

  /* ---- SERVICIOS (carta) ---- */
  servicios: [
    { num: "I",   nombre: "Blackwork",     desc: "Negro sólido, geometría y contraste brutal. Envejece mejor que cualquier color.", precio: "desde $1,800" },
    { num: "II",  nombre: "Fine line",     desc: "Trazos finos y precisos. Ideal para primeras piezas y diseños minimalistas.",     precio: "desde $1,200" },
    { num: "III", nombre: "Realismo B/G",  desc: "Retratos y texturas con profundidad fotográfica. Sesiones largas, resultado que respira.", precio: "desde $3,500" },
    { num: "IV",  nombre: "Cover-ups",     desc: "Ese tatuaje del que te arrepientes tiene arreglo. Valoración gratuita.",          precio: "cotización" }
  ],

  /* ---- GALERÍA (mismas fotos que la demo) ---- */
  galeria: [
    { img: "img/tatuaje-1.jpg", titulo: "Cráneo, reloj & rosa", zona: "Antebrazo", alt: "Tatuaje realista de cráneo con reloj de números romanos y rosa" },
    { img: "img/tatuaje-2.jpg", titulo: "Catrina realista",     zona: "Antebrazo", alt: "Tatuaje realista de catrina" },
    { img: "img/tatuaje-3.jpg", titulo: "Valquiria & dragón",   zona: "Hombro",    alt: "Tatuaje de valquiria con dragón en blackwork" },
    { img: "img/tatuaje-4.jpg", titulo: "Guerrera nórdica",     zona: "Pierna",    alt: "Tatuaje de guerrera nórdica con dragón y runas" }
  ],

  /* ---- TESTIMONIOS ---- */
  testimonios: [
    { texto: "Me cubrió un tatuaje que odiaba desde hace años. Nadie cree que abajo había otro.", autor: "Carlos M.",   servicio: "Cover-up" },
    { texto: "Llegué con una idea vaga y Dante la convirtió en la pieza más comentada de mi vida.", autor: "Mariana R.", servicio: "Fine line" },
    { texto: "El retrato de mi padre quedó idéntico. Lloré al verlo terminado.", autor: "Fernanda L.", servicio: "Realismo" }
  ],

  /* opciones del <select> del formulario */
  servicioOpciones: ["Blackwork", "Fine line", "Realismo negro y gris", "Cover-up", "Aún no sé — quiero asesoría"],

  /* ---- EVENTOS (expos / convenciones). Lista vacía => mensaje "próximamente". ---- */
  eventos: [
    { dia: "15—17", mes: "AGO", titulo: "Guadalajara Tattoo Expo", lugar: "Expo Guadalajara", hora: "Stand 42",
      texto: "Tres días tatuando en vivo. Agenda tu sesión con anticipación, los cupos vuelan." }
  ]
};
