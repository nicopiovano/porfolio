// src/i18n/es.ts
export default {
  header: [
    { title: "Proyectos", section: "proyectos", url: "#proyectos" },
    { title: "Servicios", section: "servicios", url: "#servicios" },
    { title: "Experiencia", section: "experiencia", url: "#experiencia" },
    { title: "Sobre mí", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Contacto", section: "contacto", url: "#contacto" },
    { title: "Curriculum", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
  ],
  personal: {
    title: "Desarrollador",
    subtitle: "Freelancer para SaaS, startups y negocios digitales.",
    badge: "Disponible para trabajar",
  },
  hero: {
    headline: "Vos sabés lo que necesitás, yo sé cómo construirlo.",
    subheadline: "7 años de experiencia end-to-end. Trabajo con startups, empresas y comercios que quieren crecer online. Sin vueltas.",
    ctaSecondary: "LinkedIn",
    ctaSecondaryHref: "https://linkedin.com/in/nmpiovano",
    ctaPrimary: "Ver proyectos",
    ctaPrimaryHref: "#proyectos"
  },
  projects: {
    title: "Proyectos",
    code: "Código",
    preview: "Ver",
    labels: {
      problem: "Problema",
      solution: "Solución",
      impact: "Impacto",
      stack: "Stack",
    },
    items: [
      {
        title: "Login & Dashboard seguro (auth sin fricción)",
        problem: "Sesiones inestables y logins inseguros terminan en soporte y riesgo.",
        solution: "Autenticación con cookies seguras (Sanctum), rutas protegidas y flujo de sesión consistente.",
        impact: "Menos superficie de ataque y una base lista con usuarios reales.",
      },
      {
        title: "Porfolio de Romina Fiorentino",
        problem: "CV y Linkedin no permitían explicar toda la experiencia de la Licenciada en RRHH.",
        solution: "Desarrollo de un porfolio personalizado para que el cliente pueda mostrar su experiencia y habilidades de manera clara y profesional.",
        impact: "Recurso nuevo para una cliente que quería mejorar su presencia en el mercado laboral.",
      },
      {
        title: "Market Dashboard para decisiones rápidas",
        problem: "Datos difíciles de leer → decisiones lentas y baja claridad operativa.",
        solution: "Panel con componentes reutilizables, vistas por categoría y gráficos comparativos.",
        impact: "Lectura inmediata de KPIs y UI lista para enchufar datos reales sin rehacer la app.",
      },
      {
        title: "Simulador de decisiones (elegir bien y ahorrar tiempo)",
        problem: "Elegir stack “por moda” termina en costos extra y retrasos.",
        solution: "Motor de reglas que evalúa contexto y devuelve recomendaciones justificadas.",
        impact: "Acelera alineación y deja un criterio repetible para decisiones futuras.",
      },
      {
        title: "Checkout rápido para rifas / preventa",
        problem: "Flujos confusos → caída de conversiones y carritos abandonados.",
        solution: "Selección clara, carrito persistente, checkout modal y feedback inmediato.",
        impact: "Experiencia simple para comprar en pocos pasos.",
      },
      {
        title: "Porfolio multi‑idioma para captar clientes globales",
        problem: "Un solo idioma limita alcance y SEO → menos leads internacionales.",
        solution: "Rutas por idioma, traducciones centralizadas y estructura optimizada para indexación.",
        impact: "Mejor alcance internacional y presentación sólida para vender en USD.",
      },
      {
        title: "Chat guiado para calificar leads",
        problem: "Preguntas repetidas sin un flujo claro → pérdida de tiempo y leads fríos.",
        solution: "Sistema de intents + respuestas guiadas con follow-ups para llevar a la info clave.",
        impact: "Conversación más enfocada y derivación directa a contacto.",
      },
    ]
  },
  experience: {
    title: "Experiencia (resumen)",
    learning: "Aprendizajes:",
    items: [
      {
        date: "Ago. 2024 - Actualmente..",
        title: "Desarrollador Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Sistemas críticos para múltiples organizaciones, foco en estabilidad, entregas incrementales y mejoras continuas.",
        aprendizajes: "Claridad de alcance, entregas iterativas y reducción de riesgos en producción."
      },
      {
        date: "Jun. 2021 - Abr. 2023",
        title: "Desarrollador Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Evolución de producto y features con foco en performance, UX y mantenibilidad.",
        aprendizajes: "Trabajo por objetivos y entregas que se pueden medir."
      },
      {
        date: "Nov. 2020 - May. 2021",
        title: "Desarrollador Web Backend",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "E-commerce internacional con estándares, deadlines y comunicación en inglés.",
        aprendizajes: "Entrega bajo presión con calidad y alineación constante."
      },
      {
        date: "Dic. 2018 - Nov. 2020",
        title: "Desarrollador Web Fullstack",
        company: "CNRT (Ministerio de Transporte)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "Sistemas con alta demanda y datos sensibles: foco en calidad, seguridad y performance.",
        aprendizajes: "Base fuerte en arquitectura, datos y optimización."
      }
    ]
  },
  aboutMe: {
    title: "Sobre mí 😉",
    text: [
      "Soy Nico. Trabajo con founders y equipos que necesitan un producto web que venda y que se pueda escalar.",
      "Me muevo rápido sin sacrificar calidad: defino alcance, priorizo impacto, entrego en iteraciones cortas y dejo todo mantenible. Comunicación clara, expectativas por escrito y foco en resultados."
    ],
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
  introLoader: {
    durationMs: 6000,
    messages: [
      // "Construyo plataformas web escalables para negocios digitales.",
      "Construyo sistemas que generan ingresos",
      "con foco en performance, UX y mantenibilidad.",
    ]
  },
  services: {
    title: "Servicios",
    subtitle: "Servicios probados en proyectos reales. Nada experimental, nada a medias. Entrás, pedís, funciona.",
    items: [
      { title: "Paneles de administración", description: "Un panel simple para gestionar ventas, usuarios, stock, contenidos o pedidos sin depender de nadie." },
      { title: "Tiendas online", description: "Catálogo, productos, pagos y checkout optimizado. Una tienda lista para vender, con flujo de compra que reduce el abandono." },
      { title: "Sitios web personales", description: "Porfolio, página profesional o landing personal: clara, rápida y que se vea premium." },
      { title: "Control de finanzas", description: "Tableros para ingresos/gastos, métricas y reportes para tomar decisiones con números claros." },
      { title: "Tu vidriera online", description: "Diseñada para que el que entra, compre, reserve o te contacte." },
      { title: "Tu web en piloto automático", description: "Turnos, pagos, consultas y notificaciones en automático." },
    ]
  },
  finalCta: {
    divs: [
      {
        title: "¿Querés lanzar o mejorar tu producto este mes?",
        text: "Contame qué querés lanzar, para quién y tu timeline; te respondo con propuesta + estimación en 24h.",
        primaryLabel: "Contactar por LinkedIn",
        primaryHref: "https://linkedin.com/in/nmpiovano",
        hint: "Trabajo en USD con clientes internacionales y nacionales."
      },
      {
        title: "¿Buscás sumar un desarrollador a tu equipo?",
        text: "Podés ver mi trayectoria completa o contactarme directamente.",
        primaryLabel: "Descargar CV",
        primaryHref: "/Nicolás_Piovano_Sr_Fullstack.pdf",
        secondaryLabel: "Contactar",
        secondaryHref: "https://linkedin.com/in/nmpiovano",
      }
    ]
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
  ,
  modeSelector: {
    title: "¿Qué estás buscando?",
    subtitle: "Elegí una opción para ver la versión del porfolio más relevante.",
    employment: "Contrato Fijo",
    freelance: "Freelance / Contractor"
  },
  modeToggle: {
    ariaLabel: "Cambiar modo del sitio",
    toEmployment: "Cambiar a Contrato Fijo",
    toFreelance: "Cambiar a Freelance / Contractor"
  },
  employment: {
    header: [
      { title: "Experiencia", section: "experiencia", url: "#experiencia" },
      { title: "Proyectos", section: "proyectos", url: "#proyectos" },
      { title: "Sobre mí", section: "sobre-mi", url: "#sobre-mi" },
      { title: "Curriculum", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
    ],
    personal: {
      title: "Desarrollador End-to-End",
      subtitle: "+7 años de experiencia.",
      badge: "Disponible para trabajar"
    },
    projects: {
      title: "Proyectos",
      code: "Código",
      preview: "Ver",
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
          title: "Gran Rifa",
          description: "App de rifas 100% frontend: carrusel de premios, grilla de números (1–1000) para elegir, carrito flotante y modal de checkout con formulario. React, Vite, Motion, Tailwind y Radix UI. Formato de precios Argentina ($1.000)."
        },
        {
          title: "Porfolio Multiidioma",
          description: "Porfolio con soporte multiidioma (ES, EN, PT) usando i18n personalizado. Rutas por idioma (/es, /en, /pt) para SEO, traducciones centralizadas y detección automática desde la URL."
        },
        {
          title: "Chat Programable",
          description: "Chat asistente con respuestas programables basadas en intents. Matcher detecta la intención del usuario y devuelve respuestas contextuales con follow-ups dinámicos. Funciona completamente en el cliente sin backend."
        },
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
    }
  }
}