// src/i18n/en.ts
export default {
  header: [
    { title: "Experience", section: "experiencia", url: "#experiencia" },
    { title: "Projects", section: "proyectos", url: "#proyectos" },
    { title: "About Me", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Resume", url: "/CV_NICO_PIOVANO_2026.pdf", download: true }
  ],
  personal: {
    title: "Fullstack Developer",
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
        description: "Cookie-based authentication with Laravel Sanctum for enhanced security, avoiding token storage in localStorage. SPA frontend consumes the API with Axios configured automatically. Protected routes managed with ProtectedRoute component."
      },
      {
        title: "Market Dashboard",
        description: "Financial dashboard using mocked data to simulate market information. Data visualization system with interactive charts and key metrics. Mocks allow development without depending on external APIs."
      },
      {
        title: "Tech Decision Simulator",
        description: "Simulator using a decision engine (decisionEngine) to evaluate and recommend technologies. Analyzes availability, complexity, and project requirements, generating recommendations based on programmed rules."
      },
      {
        title: "Programmable Chat",
        description: "Assistant chat with programmable responses based on intents. Matcher detects user intent and returns contextual responses with dynamic follow-ups. Works completely on the client side without backend."
      },
      {
        title: "Multi-language Portfolio",
        description: "Portfolio with multi-language support (ES, EN, PT) using custom i18n system. Language routes (/es, /en, /pt) for SEO, centralized translations, and automatic detection from URL."
      }
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
        date: "Dec. 2018 - Jan. 2021",
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
        before: "I started my programming career in 2016 ",
        strong: "developing with patience, confidence, and a resolute approach",
        after: " to the challenges presented."
      },
      {
        before: "I quickly adapt to new technologies and projects, and I always seek ",
        strong: "pragmatic solutions",
        after: " that allow effective progress, even in challenging environments."
      },
      {
        before: "Additionally, I have traveled and lived in several Latin American countries while working in hostels, which strengthened my ",
        strong: "social skills, adaptability, and ability to collaborate",
        after: " with diverse teams."
      },
      {
        before: "My current goals include expanding into the freelance field and applying my ",
        strong: "adaptable and results-driven approach",
        after: " to generate concrete outcomes in each project."
      }
    ]
  },
  footer: {
    developed: "Developed with",
    downloadCV: "Download CV 2026"
  },
  browserModal: {
    title: "Browser Recommendation",
    message: "This page contains 3D visual effects that work better in Mozilla Firefox.",
    recommendation: "For an optimal experience, I recommend using Firefox.",
    downloadFirefox: "Download Firefox",
    continue: "Continue"
  },
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
}