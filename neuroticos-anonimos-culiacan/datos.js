/* ==========================================================================
   DATOS EDITABLES — Neuróticos Anónimos A.C. (Culiacán)
   --------------------------------------------------------------------------
   TODO el contenido visible de la página vive aquí. La página se actualiza
   sola al modificar este archivo (o desde panel.html). No hace falta tocar
   el index.html.
   · textos      = textos sueltos (títulos, intros, botones, footer…).
                   Los que llevan <span class="trazo">…</span> se ven subrayados;
                   <em> = cursiva, <br> = salto de línea.
   · sentimientos = las 7 máscaras (su dibujo SVG queda fijo en el HTML).
   · pilares / reunion / pasos / horarios / preguntas / eventos = listas.
   ========================================================================== */
window.SITE = {

  /* WhatsApp en formato internacional. México = 521 + 10 dígitos. */
  whatsapp: "5216671323318",

  /* ---- TEXTOS EDITABLES DE LA PÁGINA ---- */
  textos: {
    /* Hero */
    heroEyebrow: "Grupo de autoayuda · Gratuito y anónimo",
    heroTitulo: 'Aprende a vivir <em>en paz</em><br>contigo mismo',
    heroLead: "Si la ansiedad, la ira o el miedo influyen en tu vida, no estás solo. En Neuróticos Anónimos encontramos la calma a través de los Doce Pasos, un día a la vez.",
    heroCta1: "Asiste a una sesión",
    heroCta2: "¿Esto es para mí?",
    heroNota: "Confidencial · Sin costo · No necesitas cita para tu primera vez",

    /* ¿Te identificas? */
    feelEyebrow: "¿Te identificas?",
    feelTitulo: 'Cuando las emociones <span class="trazo">toman el control</span>',
    feelIntro: "Todos cargamos con sentimientos que, sin darnos cuenta, empiezan a gobernar nuestras decisiones y nuestra paz. Reconocerlos es el primer paso.",
    feelDef: "“Neurótico es cualquier persona cuyas emociones interfieren con su funcionamiento, en cualquier forma y en cualquier grado, siempre y cuando ella lo reconozca.”",

    /* Autoevaluación */
    quizEyebrow: "Autoevaluación · Confidencial",
    quizTitulo: '¿Esto es <span class="trazo">para mí</span>?',
    quizIntro: "Responde con honestidad. Nadie verá tus respuestas: este test es solo para ti y se queda en tu navegador.",
    quizLead: "Marca las situaciones con las que te identificas en tu día a día:",
    quizBtn: "Ver mi resultado",
    quizDisc: "Este cuestionario es orientativo y no constituye un diagnóstico médico. Si atraviesas una crisis, busca también ayuda de un profesional de la salud.",

    /* Qué es NA */
    queesEyebrow: "No estás solo",
    queesTitulo: 'Qué es <span class="trazo">Neuróticos Anónimos</span>',
    queesIntro: "Una comunidad de personas que, compartiendo su experiencia, fuerza y esperanza, se ayudan mutuamente a recuperarse de su malestar emocional. Sin juicios, sin etiquetas.",
    stat1: "Pasos de recuperación",
    stat2: "Tradiciones que nos guían",
    stat3: "Sentimientos que aprendemos a manejar",
    stat4: "A la vez: solo por hoy",

    /* 12 Pasos */
    pasosEyebrow: "El programa",
    pasosTitulo: '<span class="trazo">Doce Pasos</span> sugeridos',
    pasosIntro: "Una guía sencilla y probada para cambiar nuestra forma de pensar y de actuar. No se trata de perfección, sino de progreso.",

    /* Sesiones */
    sesEyebrow: "Las sesiones",
    sesTitulo: 'Tu <span class="trazo">primera vez</span>, sin miedo',
    sesIntro: "Llegar puede dar nervios, y está bien. Esto es lo que vas a encontrar cuando cruces la puerta.",
    reunionTitulo: "¿Cómo es una reunión?",
    horarioBadge: "◆ Horario de reuniones",
    horarioTitulo: "¿Cuándo nos reunimos?",
    horarioNota: "¿Quieres confirmar el horario de hoy? Escríbenos por WhatsApp y con gusto te decimos.",
    horarioBtn: "Preguntar horario de hoy",

    /* Eventos */
    evEyebrow: "Eventos próximos",
    evTitulo: 'Aniversarios, <span class="trazo">talleres y juntas</span> abiertas',
    evIntro: "Celebramos juntos cada logro. Aquí anunciamos los eventos abiertos a quien quiera acompañarnos.",

    /* Contacto */
    contEyebrow: "Visítanos",
    contTitulo: 'Estamos aquí para ti, <span class="trazo">hoy mismo</span>',
    contIntro: "Las puertas están abiertas. Llega, escucha y date la oportunidad de empezar de nuevo.",
    contDirLabel: "Dónde estamos",
    contDir: "Juan de Dios Bátiz 1351b, Col. Morelos,<br>80170 Culiacán Rosales, Sinaloa",
    contTelLabel: "Llámanos",
    contTel: "667 132 3318",
    contWaLabel: "WhatsApp",
    contWaText: "Escríbenos ahora →",
    contFbLabel: "Facebook",
    contFbText: "Síguenos en Facebook →",
    ctaAsistir: "Quiero asistir",
    ctaComoLlegar: "Cómo llegar",

    /* Footer / flotante */
    footSerenidad: "“Dios, concédeme serenidad para aceptar las cosas que no puedo cambiar, valor para cambiar las que puedo y sabiduría para reconocer la diferencia.” <small>Oración de la serenidad · Solo por hoy</small>",
    footAnon: "Tu anonimato y confidencialidad están protegidos.",
    footCopy: "Neuróticos Anónimos A.C. · Culiacán, Sinaloa",
    floatHelp: "Hablar ahora"
  },

  /* ---- LOS 7 SENTIMIENTOS (máscaras) ----
     El dibujo de cada máscara queda fijo en el HTML; aquí editas el texto.
     Se asignan por orden (1ª máscara = 1er elemento). */
  sentimientos: [
    { nombre: "Ansiedad", desc: "Sensación constante de que algo malo va a pasar, aunque todo esté en calma.", ejemplo: "el pecho apretado y la mente acelerada antes de una llamada normal." },
    { nombre: "Ira", desc: "Un enojo que estalla más fuerte de lo que la situación merece y cuesta frenar.", ejemplo: "gritas o azotas la puerta por algo pequeño y luego te arrepientes." },
    { nombre: "Temor", desc: "Un miedo que paraliza y te impide hacer cosas cotidianas.", ejemplo: "evitas salir o intentar algo nuevo “por si sale mal”." },
    { nombre: "Preocupación", desc: "Dar vueltas una y otra vez a problemas que todavía no ocurren.", ejemplo: "no puedes dormir imaginando todo lo que podría salir mal mañana." },
    { nombre: "Celos", desc: "Una desconfianza que duele y te lleva a vigilar o controlar al otro.", ejemplo: "revisas el teléfono de tu pareja o te molesta que hable con alguien." },
    { nombre: "Resentimiento", desc: "Rencor guardado por algo que te hicieron y no logras soltar.", ejemplo: "sigues enojado por algo de hace meses y te amarga el presente." },
    { nombre: "Conmiseración", desc: "Sentir lástima de uno mismo y quedarse en el papel de víctima.", ejemplo: "piensas “todo me pasa a mí” y sientes que nadie te entiende." }
  ],

  /* ---- PILARES (Qué es NA) — se asignan por orden a las 3 tarjetas con ícono ---- */
  pilares: [
    { titulo: "Ayuda mutua", texto: "Nadie te dice qué hacer. Compañeros que pasaron por lo mismo comparten cómo encontraron su tranquilidad." },
    { titulo: "Totalmente anónimo", texto: "Lo que dices y quién eres se queda entre nosotros. El anonimato es la base de nuestra confianza." },
    { titulo: "Siempre gratuito", texto: "No hay cuotas ni inscripciones. NA se sostiene a sí mismo con las aportaciones voluntarias de sus miembros." }
  ],

  /* ---- "¿Cómo es una reunión?" (lista con palomita) ---- */
  reunion: [
    "En tu primera visita solo escuchas. Nadie te obliga a hablar ni a dar tu nombre.",
    "Compañeros comparten su experiencia: cómo llegaron y cómo se sienten hoy.",
    "Abrimos y cerramos con la Oración de la Serenidad. Hay charla, mesa redonda y participación libre.",
    "Todo lo que se dice ahí, se queda ahí. Confidencialidad absoluta."
  ],

  /* ---- LOS 12 PASOS ---- */
  pasos: [
    "Admitimos que éramos impotentes ante la neurosis, que nuestras vidas se habían vuelto ingobernables.",
    "Llegamos a creer que un Poder superior a nosotros mismos podría devolvernos el sano juicio.",
    "Decidimos poner nuestras voluntades y nuestras vidas al cuidado de Dios, como nosotros lo concebimos.",
    "Sin miedo hicimos un minucioso inventario moral de nosotros mismos.",
    "Admitimos ante Dios, ante nosotros mismos y ante otro ser humano, la naturaleza exacta de nuestros defectos.",
    "Estuvimos enteramente dispuestos a dejar que Dios nos liberase de nuestros defectos.",
    "Humildemente le pedimos que nos liberase de nuestros defectos.",
    "Hicimos una lista de todas aquellas personas a quienes habíamos ofendido y estuvimos dispuestos a reparar el daño.",
    "Reparamos directamente a cuantos nos fue posible el daño causado, excepto cuando hacerlo implicaba perjuicio para ellos o para otros.",
    "Continuamos haciendo nuestro inventario personal y, cuando nos equivocábamos, lo admitíamos inmediatamente.",
    "Buscamos, a través de la oración y la meditación, mejorar nuestro contacto consciente con Dios, como nosotros lo concebimos.",
    "Habiendo obtenido un despertar espiritual, tratamos de llevar el mensaje a otros neuróticos y de practicar estos principios en todos nuestros asuntos."
  ],

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
    { dia: "26", mes: "JUN", titulo: "Sesión temática: la autoestima",
      hora: "6:00 a 7:30 PM", lugar: "Sede Col. Morelos",
      texto: "Junta abierta para hablar sobre cómo reconstruir la autoestima, un día a la vez. Entrada libre y gratuita; familiares y nuevos compañeros son bienvenidos." }
  ]
};
