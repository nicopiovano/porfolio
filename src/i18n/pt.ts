export default {
  header: [
    { title: "Projetos", section: "proyectos", url: "#proyectos" },
    { title: "Serviços", section: "servicios", url: "#servicios" },
    { title: "Experiência", section: "experiencia", url: "#experiencia" },
    { title: "Sobre mim", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Contato", section: "contacto", url: "#contacto" },
    { title: "Currículo", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
  ],
  personal: {
    title: "Desenvolvedor",
    subtitle: "Freelancer para SaaS, startups e negócios digitais.",
    badge: "Disponível para trabalhar",
  },
  hero: {
    headline: "Você entende seu projeto. Eu transformo em produto.",
    subheadline: "7 anos de experiência end-to-end. Trabalho com startups, empresas e negócios locais que querem crescer online.",
    ctaSecondary: "LinkedIn",
    ctaSecondaryHref: "https://linkedin.com/in/nmpiovano",
    ctaPrimary: "Ver projetos",
    ctaPrimaryHref: "#proyectos"
  },
  projects: {
    title: "Projetos",
    code: "Código",
    preview: "Ver",
    labels: {
      problem: "Problema",
      solution: "Solução",
      impact: "Impacto",
      stack: "Stack",
    },
    items: [
      {
        title: "Market Dashboard",
        problem: "Dados difíceis de ler → decisões mais lentas e pouca clareza operacional.",
        solution: "Painel com UI reutilizável, visões por categoria e gráficos comparativos.",
        impact: "KPIs mais claros e UI pronta para conectar dados reais.",
      },
      {
        title: "Login & Dashboard seguro (auth sem fricção)",
        problem: "Sessões instáveis e logins inseguros geram suporte, abandono e risco.",
        solution: "Autenticação por cookie seguro (Sanctum), rotas protegidas e fluxo consistente.",
        impact: "Menos superfície de ataque e base sólida pronta para usuários reais.",
      },
      {
        title: "Checkout rápido para rifas / preventa",
        problem: "Fluxos confusos derrubam conversão e aumentam abandono.",
        solution: "Seleção clara, carrinho persistente, checkout modal e feedback imediato.",
        impact: "Compra mais simples e rápida, pensada para finalizar em poucos passos.",
      },
      {
        title: "porfólio de Romina Fiorentino",
        problem: "CV e LinkedIn não conseguiam explicar toda a experiência da Licenciada em Recursos Humanos.",
        solution: "Desenvolvimento de um porfolio personalizado para que o cliente possa mostrar sua experiência e habilidades de forma clara e profissional.",
        impact: "Recurso novo para um cliente que queria melhorar sua presença no mercado de trabalho.",
      },
      {
        title: "porfólio multi‑idioma para clientes globais",
        problem: "Um único idioma limita alcance e SEO → menos leads internacionais.",
        solution: "Rotas por idioma, traduções centralizadas e estrutura amigável para SEO.",
        impact: "Presença internacional mais forte e posicionamento mais claro em USD.",
      },
      {
        title: "Simulador de decisões (escolher bem e economizar tempo)",
        problem: "Escolher tecnologia “pela moda” vira custo extra e atrasos.",
        solution: "Motor de regras que avalia contexto e recomenda com justificativa.",
        impact: "Alinha mais rápido e cria um critério repetível para decisões futuras.",
      },
      {
        title: "ChatBox",
        problem: "Clientes com intenção de compra sem resposta imediata → vendas perdidas.",
        solution: "Chatbox 24/7 com respostas guiadas que levam à ação.",
        impact: "Conversas mais focadas e encaminhamento direto para contato.",
      },
    ]
  },
  experience: {
    title: "Experiência (resumo)",
    learning: "Aprendizados:",
    items: [
      {
        date: "Ago. 2024 - Atual",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Sistemas críticos para múltiplas organizações; estabilidade, entregas incrementais e melhorias contínuas.",
        aprendizajes: "Escopo claro, entregas iterativas e redução de risco em produção."
      },
      {
        date: "Jun. 2021 - Abr. 2023",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Evolução de produto com foco em performance, UX e manutenibilidade.",
        aprendizajes: "Entrega por objetivos e melhorias que dá para medir."
      },
      {
        date: "Nov. 2020 - Mai. 2021",
        title: "Desenvolvedor Web Backend",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "E-commerce internacional com padrões, prazos e comunicação em inglês.",
        aprendizajes: "Entregar sob pressão mantendo qualidade."
      },
      {
        date: "Dez. 2018 - Nov. 2020",
        title: "Desenvolvedor Web Fullstack",
        company: "CNRT (Ministério de Transporte)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "Sistemas de alta demanda e dados sensíveis: qualidade, segurança e performance.",
        aprendizajes: "Base forte em arquitetura, dados e otimização."
      }
    ]
  },
  aboutMe: {
    title: "Sobre mim 😉",
    text: [
      "Trabalho com founders e equipes que precisam de um produto web que venda hoje e escale amanhã.",
      "Eu ando rápido sem cortar caminho: escopo claro, prioridades de negócio, iterações curtas e entrega manutenível. Comunicação direta e execução previsível."
    ],
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
  introLoader: {
    durationMs: 6000,
    messages: [
      // "Construo plataformas web escaláveis para negócios digitais.",
      "Construo sistemas que geram receita",
      "com foco em performance, UX e manutenibilidade.",
    ]
  },
  services: {
    title: "Serviços",
    subtitle: "Serviços testados em projetos reais. Claros, completos e prontos para usar.",
    items: [
      { title: "Painéis administrativos", description: "Um painel simples para gerenciar vendas, usuários, estoque, conteúdos ou pedidos sem depender de ninguém." },
      { title: "Lojas online", description: "Catálogo, produtos, variações, pagamentos e entrega. Uma loja pronta para vender e escalar." },
      { title: "Sites pessoais", description: "porfólio, página profissional ou landing pessoal: clara, rápida e com visual premium." },
      { title: "Controle financeiro", description: "Dashboards de receitas/despesas, métricas e relatórios para decidir com números claros." },
      { title: "Tu vidriera online", description: "Diseñada para que el que entra, compre, reserve o te contacte." },
      { title: "Tu web en piloto automático", description: "Turnos, pagos, consultas y notificaciones en automático." },
    ]
  },
  finalCta: {
    divs: [
      {
        title: "Quer lançar ou melhorar seu produto?",
        text: "Me conte o que você precisa e eu respondo com uma proposta + estimativa em 24h.",
        primaryLabel: "Solicitar proposta",
        primaryHref: "https://linkedin.com/in/nmpiovano",
        hint: "Trabalho em USD com clientes internacionais e nacionais."
      },
      {
        title: "Quer adicionar um desenvolvedor ao seu time?",
        text: "Você pode ver minha trajetória completa ou falar comigo diretamente.",
        primaryLabel: "Baixar CV",
        primaryHref: "/Nicolás_Piovano_Sr_Fullstack.pdf",
        secondaryLabel: "Contato",
        secondaryHref: "https://linkedin.com/in/nmpiovano",
      }
    ]
  },
  seo: {
    title: "porfólio de Nico Piovano - Desenvolvedor Web com +7 anos de experiência",
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
  ,
  modeSelector: {
    title: "O que você está buscando?",
    subtitle: "Escolha uma opção para ver a versão mais relevante do meu porfólio.",
    employment: "Contrato Fijo",
    freelance: "Freelance / Contractor"
  },
  modeToggle: {
    ariaLabel: "Trocar modo do site",
    toEmployment: "Trocar para Contrato fixo",
    toFreelance: "Trocar para Freelance / Contractor"
  },
  employment: {
    header: [
      { title: "Experiência", section: "experiencia", url: "#experiencia" },
      { title: "Projetos", section: "proyectos", url: "#proyectos" },
      { title: "Sobre mim", section: "sobre-mi", url: "#sobre-mi" },
      { title: "Currículo", url: "/Nicolás_Piovano_Sr_Fullstack.pdf", download: true }
    ],
    personal: {
      title: "Desenvolvedor End-to-End",
      subtitle: "+7 anos de experiência.",
      badge: "Disponível para trabalhar"
    },
    projects: {
      title: "Projetos",
      code: "Código",
      preview: "Ver",
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
          title: "porfólio Multiidioma",
          description: "porfólio com suporte multiidioma (ES, EN, PT) usando i18n personalizado. Rotas por idioma (/es, /en, /pt) para SEO, traduções centralizadas e detecção automática a partir da URL."
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
    }
  }
}
