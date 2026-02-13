// src/i18n/es.ts
export default {
  header: [
    { title: "Experiencia", section: "experiencia", url: "#experiencia" },
    { title: "Proyectos", section: "proyectos", url: "#proyectos" },
    { title: "Sobre mí", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Curriculum", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
  ],
  personal: {
    title: "Desarrollador Fullstack",
    subtitle: "+7 años de experiencia.",
    badge: "Disponible para trabajar",
  },
  projects: {
    title: "Proyectos",
    code: "Code",
    preview: "Preview",
    items: [
      {
        title: "Panel de Logueo",
        description: "Autenticación basada en cookies con Laravel Sanctum para mayor seguridad, evitando tokens en localStorage. Frontend SPA consume la API con Axios configurado automáticamente. Rutas protegidas gestionadas con ProtectedRoute."
      },
      {
        title: "Market Dashboard",
        description: "Dashboard financiero con datos mockeados para simular información de mercado. Sistema de visualización con gráficos interactivos y métricas clave."
      },
      {
        title: "Tech Decision Simulator",
        description: "Simulador que utiliza un motor de decisiones (decisionEngine) para evaluar y recomendar tecnologías. Analiza disponibilidad, complejidad y requisitos del proyecto, generando recomendaciones basadas en reglas programadas."
      },
      {
        title: "Chat Programable",
        description: "Chat asistente con respuestas programables basadas en intents. Matcher detecta la intención del usuario y devuelve respuestas contextuales con follow-ups dinámicos. Funciona completamente en el cliente sin backend."
      },
      {
        title: "Portfolio Multiidioma",
        description: "Portfolio con soporte multiidioma (ES, EN, PT) usando i18n personalizado. Rutas por idioma (/es, /en, /pt) para SEO, traducciones centralizadas y detección automática desde la URL."
      }
    ]
  },
  experience: {
    title: "Experiencia laboral",
    learning: "Aprendizajes:",
    items: [
      {
        date: "Ago. 2024 - Actualmente..",
        title: "Desarrollador Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Desarrollo de sistemas informáticos para las distintas Municipalidades de la República Argentina.",
        aprendizajes: "Perfeccionamiento de tecnologías frontend. Reutilización de componentes y estados de Vue. Mejora en el uso de Docker."
      },
      {
        date: "Jun. 2021 - Abr. 2023",
        title: "Desarrollador Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Desarrollo de sistemas informáticos para las distintas Municipalidades de la República Argentina.",
        aprendizajes: "Desarrollo personal y laboral en frontend. Manejo de estados y hooks de React. Desarrollo de test unitarios."
      },
      {
        date: "Nov. 2020 - May. 2021",
        title: "Desarrollador Web Backend",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "Desarrollo en conjunto de panel administrativo de un sistema de millas reconocido internacionalmente (Smiles).",
        aprendizajes: "Manejo de CMS, comunicación directa con clientes de Estados Unidos mediante dailies en inglés."
      },
      {
        date: "Dic. 2018 - Nov. 2020",
        title: "Desarrollador Web Fullstack",
        company: "CNRT (Ministerio de Transporte)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "Mantenimiento y desarrollo de sistemas internos y externos para transportes públicos de corta y larga distancia.",
        aprendizajes: "Inicio como Trainee. Lenguaje puro a Frameworks. Sólida base en seguridad, arquitectura de datos y optimización de consultas SQL."
      }
    ]
  },
  aboutMe: {
    title: "Sobre mí 😉",
    paragraphs: [
      {
        before: "Programo desde 2016, ",
        strong: "resolviendo problemas concretos y aprendiendo en el camino.",
        after: ""
      },
      {
        before: "Me adapto rápidamente a nuevas tecnologías y proyectos, y siempre busco ",
        strong: "soluciones prácticas",
        after: " que permitan avanzar de manera efectiva, incluso en entornos complicados."
      },
      {
        before: "Viajé y viví en varios países de Latinoamérica mientras trabajaba en hostels, lo que fortaleció mi ",
        strong: "trato con personas, la adaptabilidad y el trabajo en equipo",
        after: " con perfiles muy diversos."
      },
      {
        before: "Hoy busco crecer en el ",
        strong: "mundo freelance",
        after: " y aportar resultados claros en cada proyecto."
      }
    ]
  },
  footer: {
    developed: "Desarrollado con",
    downloadCV: "Descarga CV 2026"
  },
  browserModal: {
    title: "Recomendación de Navegador",
    message: "Esta página contiene efectos visuales 3D que funcionan mejor en Mozilla Firefox.",
    recommendation: "Para una experiencia óptima, te recomiendo usar Firefox.",
    downloadFirefox: "Descargar Firefox",
    continue: "Continuar"
  },
  seo: {
    title: "Porfolio de Nico Piovano - Desarrollador Web con +7 años de experiencia",
    description: "Contrata a Nico para crear tu aplicación web o móvil. Desarrollador Web."
  },
  chat: {
    title: "Asistente profesional",
    subtitle: "Elegí una pregunta para continuar",
    greeting: "Hola 👋 Soy Nico. ¿Qué te gustaría saber?",
    initialBadges: [
      "¿Cuál es tu experiencia?",
      "¿En qué tecnologías trabajás?",
      "¿Estás disponible para proyectos?",
      "¿Has trabajado con IA?"
    ]
  }
}