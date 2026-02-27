// src/i18n/en.ts
export default {
  header: [
    { title: "Projects", section: "proyectos", url: "#proyectos" },
    { title: "Services", section: "servicios", url: "#servicios" },
    { title: "Experience", section: "experiencia", url: "#experiencia" },
    { title: "About Me", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Contact", section: "contacto", url: "#contacto" },
    {
      title: "Resume",
      url: "/Nicolás_Piovano_Sr_Fullstack.pdf",
      download: true,
    },
  ],
  personal: {
    title: "Developer",
    subtitle: "Freelance for SaaS, startups, and digital businesses.",
    badge: "Available for work",
  },
  hero: {
    headline1: "You have a project.",
    headline2: "I'll turn it into a product.",
    subheadline:
      "7 years of end-to-end experience. I work with startups, companies, and local businesses that want to grow online.",
    ctaSecondary: "LinkedIn",
    ctaSecondaryHref: "https://linkedin.com/in/nmpiovano",
    ctaPrimary: "See projects",
    ctaPrimaryHref: "#proyectos",
  },
  projects: {
    title: "Projects",
    code: "Code",
    preview: "Preview",
    labels: {
      problem: "Business problem",
      solution: "Solution",
      impact: "Impact",
      stack: "Stack",
    },
    items: [
      {
        title: "Investment Management",
        problem:
          "Manual and fragmented tracking of stocks, ADRs/CEDEARs, bonds, and USD purchases leads to errors, delays, and lack of clarity on real performance.",
        solution:
          "Unified dashboard with transaction history, profit/loss tracking, and visualization by asset and time period.",
        impact:
          "Immediate visibility into portfolio performance, faster decision-making, and a scalable base without reworking logic or UI.",
      },
      {
        title: "Authentication Panel",
        problem:
          "Systems without solid access control create security risks and increase support overhead.",
        solution:
          "Custom login panel across all systems, using secure cookie-based authentication (Sanctum), protected routes, and consistent session management.",
        impact:
          "Controlled access from day one, reduced attack surface, and a foundation ready for real users.",
      },
      {
        title: "Raffle Ecommerce",
        problem:
          "Raffle sales without availability control or integrated payments lead to overselling, friction, and lost conversions.",
        solution:
          "Ecommerce integrated with Mercado Pago, including temporary raffle reservation: quantity selection, automatic 10-minute lock, and a 15-minute payment window.",
        impact:
          "Zero overselling, real-time stock control, and a clear purchase flow that maximizes conversion.",
      },
      {
        title: "Romina Fiorentino Portfolio",
        problem:
          "CV and LinkedIn were not enough to fully communicate the HR professional’s experience.",
        solution:
          "Custom portfolio development allowing the client to present experience and skills clearly and professionally.",
        impact:
          "A new asset to strengthen market presence and improve job opportunities.",
      },
      {
        title: "Multilingual Professional Portfolio with AI",
        problem:
          "A basic, single-language portfolio limits reach, credibility, and international lead generation.",
        solution:
          "Multilingual website with language-based routing, SEO-optimized content, and integrated AI chat for visitor assistance and lead qualification.",
        impact:
          "Stronger professional brand, higher lead capture across markets, and better conversion with USD-based clients.",
      },
      {
        title: "Technical Decision Simulator",
        problem:
          "Stack decisions driven by trends or intuition generate extra costs, technical debt, and delays.",
        solution:
          "Rules engine that evaluates project context (scale, team, budget, timelines) and delivers justified technical recommendations.",
        impact:
          "Faster, defensible decisions, early team alignment, and a reusable technical criteria for future projects.",
      },
      {
        title: "AI ChatBox",
        problem:
          "Users with purchase intent and no immediate response lead to friction and lost opportunities.",
        solution:
          "24/7 AI-powered chat trained on the business, with guided responses and flows focused on lead qualification and action.",
        impact:
          "More relevant conversations, better pre-qualified leads, and increased sales conversion.",
      },
    ],
  },
  experience: {
    title: "Experience (summary)",
    learning: "Learnings:",
    items: [
      {
        date: "Aug. 2024 - Currently..",
        title: "Fullstack Web Developer",
        company: "Servicios Computables S.A.",
        usos: ["Vue", "Laravel", "Docker", "MySQL"],
        description:
          "Critical systems for multiple organizations; stability, incremental delivery, continuous improvements.",
        aprendizajes:
          "Scope clarity, iterative delivery, and risk reduction in production.",
      },
      {
        date: "Jun. 2021 - Apr. 2023",
        title: "Fullstack Web Developer",
        company: "Servicios Computables S.A.",
        usos: ["React", "Laravel", "Docker", "MySQL"],
        description:
          "Product evolution with focus on performance, UX, and maintainability.",
        aprendizajes: "Outcome-driven delivery and measurable improvements.",
      },
      {
        date: "Nov. 2020 - May. 2021",
        title: "Backend Web Developer",
        company: "Creative Coefficient",
        usos: ["Prestashop", "React", "Docker"],
        description:
          "International e-commerce with standards, deadlines, and English communication.",
        aprendizajes: "Shipping under pressure while keeping quality high.",
      },
      {
        date: "Dec. 2018 - Nov. 2020",
        title: "Fullstack Web Developer",
        company: "CNRT (Ministry of Transport)",
        usos: ["Symfony", "AngularJS", "Angular", "MySQL"],
        description:
          "High-demand systems with sensitive data: quality, security, and performance.",
        aprendizajes:
          "Strong foundations in architecture, data, and optimization.",
      },
    ],
  },
  aboutMe: {
    title: "About me 😉",
    text: [
      "I work with founders and teams who need a web product that sells today and scales tomorrow.",
      "I move fast without cutting corners: clear scope, business-first priorities, short iterations, and maintainable delivery. Straight communication and predictable execution.",
    ],
    paragraphs: [
      {
        before: "I've been programming since 2016, ",
        strong: "solving concrete problems and learning along the way.",
        after: "",
      },
      {
        before:
          "I adapt quickly to new technologies and projects, and I always seek ",
        strong: "practical solutions",
        after:
          " that allow effective progress, even in challenging environments.",
      },
      {
        before:
          "I traveled and lived in several Latin American countries while working in hostels, which strengthened my ",
        strong: "people skills, adaptability, and teamwork",
        after: " with very diverse profiles.",
      },
      {
        before: "Today I'm looking to grow in the ",
        strong: "freelance world",
        after: " and deliver clear results on every project.",
      },
    ],
  },
  footer: {
    developed: "Developed with",
    downloadCV: "Download CV 2026",
  },
  introLoader: {
    durationMs: 6000,
    messages: [
      // "I build scalable web platforms for digital businesses.",
      "I build systems that generate revenue",
      "with focus on performance, UX, and maintainability.",
    ],
  },
  services: {
    title: "Services",
    subtitle:
      "Services proven in real projects. Clear, complete, and ready to use.",
    items: [
      {
        title: "Admin panels",
        description:
          "A simple dashboard to manage sales, users, inventory, content, or orders—without relying on anyone.",
      },
      {
        title: "Online stores",
        description:
          "Catalog, products, variants, payments, and shipping. A store ready to sell and scale.",
      },
      {
        title: "Personal websites",
        description:
          "Porfolio, professional page, or personal landing: clear, fast, and premium-looking.",
      },
      {
        title: "Finance tracking",
        description:
          "Dashboards for income/expenses, metrics, and reports to make decisions with clear numbers.",
      },
      {
        title: "Your online showroom",
        description:
          "Designed to make the one who enters, buys, reserves or contacts you.",
      },
      {
        title: "Your web in autopilot",
        description:
          "Turns, payments, consultations, and notifications in automatic.",
      },
    ],
  },
  finalCta: {
    divs: [
      {
        title: "Want to ship or improve your product?",
        text: "Tell me what you need and I’ll reply with a proposal + estimate in 24h.",
        primaryLabel: "Request proposal",
        primaryHref: "https://linkedin.com/in/nmpiovano",
        hint: "I work in USD with international and national clients.",
      },
      {
        title: "Looking to add a developer to your team?",
        text: "You can review my full background or contact me directly.",
        primaryLabel: "Download CV",
        primaryHref: "/Nicolás_Piovano_Sr_Fullstack.pdf",
        secondaryLabel: "Contact",
        secondaryHref: "https://linkedin.com/in/nmpiovano",
      },
    ],
  },
  seo: {
    title: "Nico Piovano Porfolio - Web Developer with +7 years of experience",
    description:
      "Hire Nico to create your web or mobile application. Web Developer.",
  },
  chat: {
    title: "Professional Assistant",
    subtitle: "Choose a question to continue",
    greeting: "Hi 👋 I'm Nico. What would you like to know?",
    initialBadges: [
      "What's your experience?",
      "What technologies do you work with?",
      "Are you available for projects?",
      "Have you worked with AI?",
    ],
  },
  modeSelector: {
    title: "What are you looking for?",
    subtitle:
      "Choose an option to see the most relevant version of my porfolio.",
    employment: "Fixed-term contract",
    freelance: "Freelance / Contractor",
  },
  modeToggle: {
    ariaLabel: "Switch site mode",
    toEmployment: "Switch to Fixed-term contract",
    toFreelance: "Switch to Freelance / Contractor",
  },
  employment: {
    header: [
      { title: "Experience", section: "experiencia", url: "#experiencia" },
      { title: "Projects", section: "proyectos", url: "#proyectos" },
      { title: "About Me", section: "sobre-mi", url: "#sobre-mi" },
      {
        title: "Resume",
        url: "/Nicolás_Piovano_Sr_Fullstack.pdf",
        download: true,
      },
    ],
    personal: {
      title: "End-to-End Developer",
      subtitle: "+7 years of experience.",
      badge: "Available for work",
    },
    projects: {
      title: "Projects",
      code: "Code",
      preview: "Preview",
      items: [
        {
          title: "Login Panel",
          description:
            "Cookie-based authentication with Laravel Sanctum for enhanced security, avoiding token storage in localStorage. SPA frontend consumes the API with Axios configured automatically. Protected routes managed with ProtectedRoute component.",
        },
        {
          title: "Market Dashboard",
          description:
            "Financial dashboard using mocked data to simulate market information. Data visualization system with interactive charts and key metrics.",
        },
        {
          title: "Tech Decision Simulator",
          description:
            "Simulator using a decision engine (decisionEngine) to evaluate and recommend technologies. Analyzes availability, complexity, and project requirements, generating recommendations based on programmed rules.",
        },
        {
          title: "Gran Rifa",
          description:
            "100% frontend raffle app: prize carousel, number grid (1–1000) to pick, floating cart and checkout modal with form. React, Vite, Motion, Tailwind and Radix UI. Argentine price format ($1,000).",
        },
        {
          title: "Multi-language Porfolio",
          description:
            "Porfolio with multi-language support (ES, EN, PT) using custom i18n system. Language routes (/es, /en, /pt) for SEO, centralized translations, and automatic detection from URL.",
        },
        {
          title: "Programmable Chat",
          description:
            "Assistant chat with programmable responses based on intents. Matcher detects user intent and returns contextual responses with dynamic follow-ups. Works completely on the client side without backend.",
        },
      ],
    },
    experience: {
      title: "Work Experience",
      learning: "Learnings:",
      items: [
        {
          date: "Aug. 2024 - Currently..",
          title: "Fullstack Web Developer",
          company: "Servicios Computables S.A.",
          usos: ["Vue", "Laravel", "Docker", "MySQL"],
          description:
            "Development of computer systems for different Municipalities of the Argentine Republic.",
          aprendizajes:
            "Frontend technology improvement. Vue component and state reuse. Improved Docker usage.",
        },
        {
          date: "Jun. 2021 - Apr. 2023",
          title: "Fullstack Web Developer",
          company: "Servicios Computables S.A.",
          usos: ["React", "Laravel", "Docker", "MySQL"],
          description:
            "Development of computer systems for different Municipalities of the Argentine Republic.",
          aprendizajes:
            "Personal and professional frontend development. React state and hooks management. Unit test development.",
        },
        {
          date: "Nov. 2020 - May. 2021",
          title: "Backend Web Developer",
          company: "Creative Coefficient",
          usos: ["Prestashop", "React", "Docker"],
          description:
            "Joint development of administrative panel for an internationally recognized mileage system (Smiles).",
          aprendizajes:
            "CMS management, direct communication with US clients through daily meetings in English.",
        },
        {
          date: "Dec. 2018 - Nov. 2020",
          title: "Fullstack Web Developer",
          company: "CNRT (Ministry of Transport)",
          usos: ["Symfony", "AngularJS", "Angular", "MySQL"],
          description:
            "Maintenance and development of internal and external systems for short and long distance public transport.",
          aprendizajes:
            "Started as Trainee. From pure language to Frameworks. Solid foundation in security, data architecture and SQL query optimization.",
        },
      ],
    },
    aboutMe: {
      title: "About me 😉",
      paragraphs: [
        {
          before: "I've been programming since 2016, ",
          strong: "solving concrete problems and learning along the way.",
          after: "",
        },
        {
          before:
            "I adapt quickly to new technologies and projects, and I always seek ",
          strong: "practical solutions",
          after:
            " that allow effective progress, even in challenging environments.",
        },
        {
          before:
            "I traveled and lived in several Latin American countries while working in hostels, which strengthened my ",
          strong: "people skills, adaptability, and teamwork",
          after: " with very diverse profiles.",
        },
        {
          before: "Today I'm looking to grow in the ",
          strong: "freelance world",
          after: " and deliver clear results on every project.",
        },
      ],
    },
  },
};
