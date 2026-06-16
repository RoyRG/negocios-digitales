/* ==========================================================================
   DATOS EDITABLES — Neuróticos Anónimos A.C. (Culiacán)
   --------------------------------------------------------------------------
   Contenido que cambia con el tiempo (horarios, eventos, cuestionario).
   La página se actualiza sola al modificar este archivo.
   ========================================================================== */
window.SITE = {

  /* WhatsApp en formato internacional. México = 521 + 10 dígitos. */
  whatsapp: "5216671323318",

  /* ---- HORARIOS DE LAS SESIONES ---- */
  horarios: [
    { dia: "Lunes a Viernes", hora: "6:00 a 7:30 PM" }
  ],

  /* ---- CUESTIONARIO DE AUTOEVALUACIÓN ----
     umbral = si marca este número de casillas (o más) => "candidato a asistir". */
  umbral: 3,
  preguntas: [
    "Siento ansiedad o angustia sin una razón clara.",
    "Me enojo o irrito con facilidad y después me arrepiento.",
    "El miedo o el temor me impiden hacer cosas que quisiera.",
    "Me preocupo en exceso por cosas que todavía no pasan.",
    "Los celos o la desconfianza me hacen sufrir.",
    "Guardo resentimientos que no logro soltar.",
    "Me siento solo(a) aunque esté acompañado(a).",
    "Me cuesta dormir por pensamientos que no se detienen.",
    "Siento tristeza o un vacío la mayor parte del tiempo.",
    "Siento que mis emociones controlan mi vida más de lo que quisiera."
  ],

  /* ---- EVENTOS PRÓXIMOS ----
     Lista vacía  eventos: []  => la página muestra un mensaje de "próximamente". */
  eventos: [
    { dia: "25", mes: "JUN", titulo: "Sesión temática: la autoestima",
      hora: "6:00 a 7:30 PM", lugar: "Sede Col. Morelos",
      texto: "Junta abierta para hablar sobre cómo reconstruir la autoestima, un día a la vez. Entrada libre y gratuita; familiares y nuevos compañeros son bienvenidos." }
  ]
};
