export default {
  header: [
    { title: "Experiência", section: "experiencia", url: "#experiencia" },
    { title: "Projetos", section: "proyectos", url: "#proyectos" },
    { title: "Sobre mim", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Currículo", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
  ],
  personal: {
    title: "Desenvolvedor Fullstack",
    subtitle: "+7 anos de experiência.",
    badge: "Disponível para trabalhar",
  },
  projects: {
    title: "Projetos",
    code: "Código",
    preview: "Preview",
    items: [
      {
        title: "Painel de Login",
        description: "Autenticação baseada em cookies com Laravel Sanctum para maior segurança, evitando tokens no localStorage. Frontend SPA consome a API com Axios configurado automaticamente. Rotas protegidas gerenciadas com componente ProtectedRoute."
      },
      {
        title: "Market Dashboard",
        description: "Dashboard financeiro com dados mockados para simular informações de mercado. Sistema de visualização com gráficos interativos e métricas-chave."
      },
      {
        title: "Simulador de Decisões Técnicas",
        description: "Simulador que utiliza um motor de decisões (decisionEngine) para avaliar e recomendar tecnologias. Analisa disponibilidade, complexidade e requisitos do projeto, gerando recomendações baseadas em regras programadas."
      },
      {
        title: "Gran Rifa",
        description: "App de rifas 100% frontend: carrossel de prêmios, grade de números (1–1000) para escolher, carrinho flutuante e modal de checkout com formulário. React, Vite, Motion, Tailwind e Radix UI. Formato de preços Argentina ($1.000)."
      },
      {
        title: "Portfólio Multiidioma",
        description: "Portfólio com suporte multiidioma (ES, EN, PT) usando i18n personalizado. Rotas por idioma (/es, /en, /pt) para SEO, traduções centralizadas e detecção automática a partir da URL."
      },
      {
        title: "Chat Programável",
        description: "Chat assistente com respostas programáveis baseadas em intents. Matcher detecta a intenção do usuário e retorna respostas contextuais com follow-ups dinâmicos. Funciona completamente no cliente sem backend."
      },
    ]
  },
  experience: {
    title: "Experiência profissional",
    learning: "Aprendizados:",
    items: [
      {
        date: "Ago. 2024 - Atual",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Desenvolvimento de sistemas para diferentes municípios da República Argentina.",
        aprendizajes: "Aprimoramento de tecnologias frontend. Reutilização de componentes e estados no Vue. Melhoria no uso de Docker."
      },
      {
        date: "Jun. 2021 - Abr. 2023",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Desenvolvimento de sistemas para diferentes municípios da República Argentina.",
        aprendizajes: "Desenvolvimento pessoal e profissional em frontend. Gerenciamento de estados e hooks do React. Desenvolvimento de testes unitários."
      },
      {
        date: "Nov. 2020 - Mai. 2021",
        title: "Desenvolvedor Web Backend",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "Desenvolvimento conjunto de painel administrativo de um sistema de milhas reconhecido internacionalmente (Smiles).",
        aprendizajes: "Gerenciamento de CMS, comunicação direta com clientes dos Estados Unidos através de reuniões diárias em inglês."
      },
      {
        date: "Dez. 2018 - Nov. 2020",
        title: "Desenvolvedor Web Fullstack",
        company: "CNRT (Ministério de Transporte)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "Manutenção e desenvolvimento de sistemas internos e externos para transportes públicos de curta e longa distância.",
        aprendizajes: "Início como Trainee. De linguagem pura a Frameworks. Base sólida em segurança, arquitetura de dados e otimização de consultas SQL."
      }
    ]
  },
  aboutMe: {
    title: "Sobre mim 😉",
    paragraphs: [
      {
        before: "Programo desde 2016, ",
        strong: "resolvendo problemas concretos e aprendendo no caminho.",
        after: ""
      },
      {
        before: "Adapto-me rapidamente a novas tecnologias e projetos e sempre busco ",
        strong: "soluções práticas",
        after: " que permitam avançar de forma eficaz, inclusive em ambientes complicados."
      },
      {
        before: "Viajei e vivi em vários países da América Latina enquanto trabalhava em hostels, o que fortaleceu meu ",
        strong: "trato com pessoas, a adaptabilidade e o trabalho em equipe",
        after: " com perfis muito diversos."
      },
      {
        before: "Hoje busco crescer no ",
        strong: "mundo freelance",
        after: " e aportar resultados claros em cada projeto."
      }
    ]
  },

  footer: {
    developed: "Desenvolvido com",
    downloadCV: "Baixar CV 2026"
  },
  browserModal: {
    title: "Recomendação de Navegador",
    message: "Esta página contém efeitos visuais 3D que funcionam melhor no Mozilla Firefox.",
    recommendation: "Para uma experiência ideal, recomendo usar o Firefox.",
    downloadFirefox: "Baixar Firefox",
    continue: "Continuar"
  },
  seo: {
    title: "Portfólio de Nico Piovano - Desenvolvedor Web com +7 anos de experiência",
    description: "Contrate Nico para criar sua aplicação web ou mobile."
  },
  chat: {
    title: "Assistente profissional",
    subtitle: "Escolha uma pergunta para continuar",
    greeting: "Olá 👋 Sou o Nico. O que você gostaria de saber?",
    initialBadges: [
      "Qual é sua experiência?",
      "Com quais tecnologias você trabalha?",
      "Você está disponível para projetos?",
      "Você já trabalhou com IA?"
    ]
  }
}
