// src/i18n/en.ts
export default {
  header: [
    { title: "Projects", section: "proyectos", url: "#proyectos" },
    { title: "Services", section: "servicios", url: "#servicios" },
    { title: "About Me", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Contact", section: "contacto", url: "#contacto" },
    { title: "Resume", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
  ],
  personal: {
    title: "Developer",
    subtitle: "Freelance for SaaS, startups, and digital businesses.",
    badge: "Available for work",
  },
  hero: {
    headline: "I build web products that turn traffic into revenue.",
    subheadline: "I collaborate with startups, digital businesses, and individuals who want to scale professionally—clear processes, direct communication, and a focus on high-impact outcomes, while maintaining high web quality standards.",
    ctaPrimary: "Contact",
    ctaPrimaryHref: "mailto:nmpiovano@gmail.com",
    ctaSecondary: "See projects",
    ctaSecondaryHref: "#proyectos"
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
        title: "Secure Login & Dashboard (frictionless auth)",
        problem: "Unreliable sessions and insecure logins lead to support, drop-off, and risk.",
        solution: "Secure cookie-based auth (Sanctum), protected routes, and a consistent session flow.",
        impact: "Lower attack surface and a solid base ready for real users.",
      },
      {
        title: "Market Dashboard for faster decisions",
        problem: "Hard-to-read data slows decisions and reduces operational clarity.",
        solution: "Reusable UI, category views, and comparative charts for key metrics.",
        impact: "Instant KPI visibility and a UI ready to plug real data into.",
      },
      {
        title: "Decision Simulator (choose right, save time)",
        problem: "Choosing tech “by hype” causes extra cost and delays.",
        solution: "Rules engine that evaluates context and returns justified recommendations.",
        impact: "Faster alignment and a repeatable decision process for future projects.",
      },
      {
        title: "Fast Checkout for raffles / pre-orders",
        problem: "Confusing flows reduce conversion and increase cart abandonment.",
        solution: "Clear selection UX, persistent cart, modal checkout, and instant feedback.",
        impact: "A smoother purchase experience designed for quick completion.",
      },
      {
        title: "Multi-language portfolio to win global clients",
        problem: "Single-language sites limit reach and SEO → fewer international leads.",
        solution: "Language routes, centralized translations, SEO-friendly structure.",
        impact: "Stronger international presence and clearer positioning for USD clients.",
      },
      {
        title: "Guided chat to qualify leads",
        problem: "Repeated questions without a flow waste time and cool down leads.",
        solution: "Intent-based replies with guided follow-ups to surface the right info.",
        impact: "More focused conversations and better handoff to contact.",
      },
    ]
  },
  experience: {
    title: "Experience (summary)",
    learning: "Learnings:",
    items: [
      {
        date: "Aug. 2024 - Currently..",
        title: "Fullstack Web Developer",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Critical systems for multiple organizations; stability, incremental delivery, continuous improvements.",
        aprendizajes: "Scope clarity, iterative delivery, and risk reduction in production."
      },
      {
        date: "Jun. 2021 - Apr. 2023",
        title: "Fullstack Web Developer",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Product evolution with focus on performance, UX, and maintainability.",
        aprendizajes: "Outcome-driven delivery and measurable improvements."
      },
      {
        date: "Nov. 2020 - May. 2021",
        title: "Backend Web Developer",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "International e-commerce with standards, deadlines, and English communication.",
        aprendizajes: "Shipping under pressure while keeping quality high."
      },
      {
        date: "Dec. 2018 - Nov. 2020",
        title: "Fullstack Web Developer",
        company: "CNRT (Ministry of Transport)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "High-demand systems with sensitive data: quality, security, and performance.",
        aprendizajes: "Strong foundations in architecture, data, and optimization."
      }
    ]
  },
  aboutMe: {
    title: "About me 😉",
    text: [
      "I work with founders and teams who need a web product that sells today and scales tomorrow.",
      "I move fast without cutting corners: clear scope, business-first priorities, short iterations, and maintainable delivery. Straight communication and predictable execution."
    ],
    paragraphs: [
      {
        before: "I've been programming since 2016, ",
        strong: "solving concrete problems and learning along the way.",
        after: ""
      },
      {
        before: "I adapt quickly to new technologies and projects, and I always seek ",
        strong: "practical solutions",
        after: " that allow effective progress, even in challenging environments."
      },
      {
        before: "I traveled and lived in several Latin American countries while working in hostels, which strengthened my ",
        strong: "people skills, adaptability, and teamwork",
        after: " with very diverse profiles."
      },
      {
        before: "Today I'm looking to grow in the ",
        strong: "freelance world",
        after: " and deliver clear results on every project."
      }
    ]
  },
  footer: {
    developed: "Developed with",
    downloadCV: "Download CV 2026"
  },
  introLoader: {
    durationMs: 6000,
    messages: [
      // "I build scalable web platforms for digital businesses.",
      "I build systems that generate revenue",
      "with focus on performance, UX, and maintainability.",
    ]
  },
  services: {
    title: "Services",
    subtitle: "Simple packages to grow your business: fast launch, better conversions, and orderly scale.",
    items: [
      { title: "SaaS MVP (idea → production)", description: "Onboarding, dashboard, and a solid base to iterate fast with clarity." },
      { title: "High-converting landing pages", description: "Structure, copy + UI, performance and tracking for USD campaigns." },
      { title: "Dashboards & admin panels", description: "Clear KPIs, filters, charts, and fast UX for daily operations." },
      { title: "Business integrations", description: "Payments, email, CRMs, webhooks, automation and APIs that unblock growth." },
      { title: "Modernization without downtime", description: "Performance upgrades, fewer bugs, and gradual refactors with minimal risk." },
      { title: "48–72h audit", description: "Diagnosis + prioritized plan to improve conversion, performance, and reliability." },
    ]
  },
  finalCta: {
    title: "Want to ship or improve your product this month?",
    text: "If you have an idea, I’ll turn it into a premium website that converts: clear UX, performance, SEO, and tracking. Send what you want to ship, who it’s for, and your timeline; I’ll reply with a proposal + estimate in 24h.",
    primaryLabel: "Contact by LinkedIn",
    primaryHref: "https://linkedin.com/in/nmpiovano",
    // secondaryLabel: "",
    // secodaryHref: "mailto:nmpiovano@gmail.com",
    hint: "I work in USD with international and national clients."
  },
  // browserModal: {
  //   title: "Browser Recommendation",
  //   message: "This page contains 3D visual effects that work better in Mozilla Firefox.",
  //   recommendation: "For an optimal experience, I recommend using Firefox.",
  //   downloadFirefox: "Download Firefox",
  //   continue: "Continue"
  // },
  seo: {
    title: "Nico Piovano Portfolio - Web Developer with +7 years of experience",
    description: "Hire Nico to create your web or mobile application. Web Developer."
  },
  chat: {
    title: "Professional Assistant",
    subtitle: "Choose a question to continue",
    greeting: "Hi 👋 I'm Nico. What would you like to know?",
    initialBadges: [
      "What's your experience?",
      "What technologies do you work with?",
      "Are you available for projects?",
      "Have you worked with AI?"
    ]
  }
  ,
  modeSelector: {
    title: "What are you looking for?",
    subtitle: "Choose an option to see the most relevant version of my portfolio.",
    employment: "Fixed-term contract",
    freelance: "Freelance / Contractor"
  },
  modeToggle: {
    ariaLabel: "Switch site mode",
    toEmployment: "Switch to Fixed-term contract",
    toFreelance: "Switch to Freelance / Contractor"
  },
  employment: {
    header: [
      { title: "Experience", section: "experiencia", url: "#experiencia" },
      { title: "Projects", section: "proyectos", url: "#proyectos" },
      { title: "About Me", section: "sobre-mi", url: "#sobre-mi" },
      { title: "Resume", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
    ],
    personal: {
      title: "End-to-End Developer",
      subtitle: "+7 years of experience.",
      badge: "Available for work"
    },
    projects: {
      title: "Projects",
      code: "Code",
      preview: "Preview",
      items: [
        {
          title: "Login Panel",
          description: "Cookie-based authentication with Laravel Sanctum for enhanced security, avoiding token storage in localStorage. SPA frontend consumes the API with Axios configured automatically. Protected routes managed with ProtectedRoute component."
        },
        {
          title: "Market Dashboard",
          description: "Financial dashboard using mocked data to simulate market information. Data visualization system with interactive charts and key metrics."
        },
        {
          title: "Tech Decision Simulator",
          description: "Simulator using a decision engine (decisionEngine) to evaluate and recommend technologies. Analyzes availability, complexity, and project requirements, generating recommendations based on programmed rules."
        },
        {
          title: "Gran Rifa",
          description: "100% frontend raffle app: prize carousel, number grid (1–1000) to pick, floating cart and checkout modal with form. React, Vite, Motion, Tailwind and Radix UI. Argentine price format ($1,000)."
        },
        {
          title: "Multi-language Portfolio",
          description: "Portfolio with multi-language support (ES, EN, PT) using custom i18n system. Language routes (/es, /en, /pt) for SEO, centralized translations, and automatic detection from URL."
        },
        {
          title: "Programmable Chat",
          description: "Assistant chat with programmable responses based on intents. Matcher detects user intent and returns contextual responses with dynamic follow-ups. Works completely on the client side without backend."
        },
      ]
    },
    experience: {
      title: "Work Experience",
      learning: "Learnings:",
      items: [
        {
          date: "Aug. 2024 - Currently..",
          title: "Fullstack Web Developer",
          company: "Servicios Computables S.A.",
          usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
          description: "Development of computer systems for different Municipalities of the Argentine Republic.",
          aprendizajes: "Frontend technology improvement. Vue component and state reuse. Improved Docker usage."
        },
        {
          date: "Jun. 2021 - Apr. 2023",
          title: "Fullstack Web Developer",
          company: "Servicios Computables S.A.",
          usos: ['React', 'Laravel', 'Docker', 'MySQL'],
          description: "Development of computer systems for different Municipalities of the Argentine Republic.",
          aprendizajes: "Personal and professional frontend development. React state and hooks management. Unit test development."
        },
        {
          date: "Nov. 2020 - May. 2021",
          title: "Backend Web Developer",
          company: "Creative Coefficient",
          usos: ['Prestashop', 'React', 'Docker'],
          description: "Joint development of administrative panel for an internationally recognized mileage system (Smiles).",
          aprendizajes: "CMS management, direct communication with US clients through daily meetings in English."
        },
        {
          date: "Dec. 2018 - Nov. 2020",
          title: "Fullstack Web Developer",
          company: "CNRT (Ministry of Transport)",
          usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
          description: "Maintenance and development of internal and external systems for short and long distance public transport.",
          aprendizajes: "Started as Trainee. From pure language to Frameworks. Solid foundation in security, data architecture and SQL query optimization."
        }
      ]
    },
    aboutMe: {
      title: "About me 😉",
      paragraphs: [
        {
          before: "I've been programming since 2016, ",
          strong: "solving concrete problems and learning along the way.",
          after: ""
        },
        {
          before: "I adapt quickly to new technologies and projects, and I always seek ",
          strong: "practical solutions",
          after: " that allow effective progress, even in challenging environments."
        },
        {
          before: "I traveled and lived in several Latin American countries while working in hostels, which strengthened my ",
          strong: "people skills, adaptability, and teamwork",
          after: " with very diverse profiles."
        },
        {
          before: "Today I'm looking to grow in the ",
          strong: "freelance world",
          after: " and deliver clear results on every project."
        }
      ]
    }
  }
}