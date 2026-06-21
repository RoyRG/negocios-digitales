/* ==========================================================================
   DATOS EDITABLES — Mi Dulce Elote (negocio local · antojitos)
   Todo el contenido visible vive aquí; la página se actualiza sola
   (o desde panel.html). [EDITAR] = poner datos reales del cliente.
   ========================================================================== */
window.NEGOCIO = {

  /* WhatsApp en formato internacional (México = 521 + 10 dígitos). [EDITAR] */
  whatsapp: "5216670000000",

  textos: {
    marca: "Mi Dulce Elote",
    heroTag: "Elotes & antojitos preparados al momento · Culiacán",
    heroLema: "El antojo que <em>te abraza</em>",
    heroIntro: "Elotes, esquites, fresas con crema y los antojitos más consentidos — recién hechos, justo como te laten.",
    heroCta: "Pídelo por WhatsApp",
    heroNota: "Pedido mínimo: ninguno · Pagas en efectivo o transferencia",

    menuTitulo: "El antojo",
    menuIntro: "Todo recién preparado. Pídelo como más te guste.",
    menuCta: "Armar mi pedido",

    pasosTitulo: "Pedir es facilísimo",
    pasosIntro: "En tres pasos y a disfrutar.",

    extrasTitulo: "Ponle de todo",
    extrasIntro: "Personaliza tu antojo con los extras de la casa.",

    ubicTitulo: "¿Dónde nos <em>encuentras</em>?",
    ubicLabel: "El puesto",
    ubicTexto: "Av. Siempre Antojo 123, Col. Centro, Culiacán.<br>Junto al parque. [EDITAR dirección real]",
    horarioLabel: "Horario",
    horarioTexto: "Martes a Domingo · 5:00 PM a 11:00 PM",
    waLabel: "WhatsApp",
    waTexto: "667 000 0000",
    ubicCta: "Cómo llegar",

    footLema: "Hecho con antojo en Culiacán.",
    footLegal: "© 2026 Mi Dulce Elote. Todos los antojos reservados."
  },

  /* ---- MENÚ ---- (icono: elote | vaso | fresa | mango | dulce | agua) */
  productos: [
    { nombre: "Elote preparado", desc: "Mayonesa, queso, chile y limón. El clásico que nunca falla.", precio: "$35", icono: "elote", estrella: true },
    { nombre: "Esquites",        desc: "En vaso, con todo. Para comer caminando.",                      precio: "$40", icono: "vaso" },
    { nombre: "Fresas con crema",desc: "Fresa fresca, crema y un toque de leche condensada.",           precio: "$55", icono: "fresa", estrella: true },
    { nombre: "Mango loco",      desc: "Mango con chile, limón y chamoy.",                               precio: "$45", icono: "mango" },
    { nombre: "Dulces enchilados",desc: "Gomitas, tamarindo y más, bien enchilados.",                    precio: "$30", icono: "dulce" },
    { nombre: "Aguas frescas",   desc: "De temporada. Pregunta por la del día.",                         precio: "$25", icono: "agua" }
  ],

  /* ---- CÓMO PEDIR ---- */
  pasos: [
    { n: "1", titulo: "Elige tu antojo", texto: "Arma tu pedido con lo que se te antoje del menú." },
    { n: "2", titulo: "Escríbenos",      texto: "Mándanos tu pedido por WhatsApp en un mensaje." },
    { n: "3", titulo: "Recoge o te lo llevamos", texto: "Pasa al puesto o pídelo a domicilio en la zona." }
  ],

  /* ---- EXTRAS / TOPPINGS ---- */
  extras: ["Chamoy", "Tajín", "Queso extra", "Crema", "Chile en polvo", "Limón", "Tamarindo", "Miguelito"]
};
