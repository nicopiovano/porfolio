export default {
  header: [
    { title: "Projetos", section: "proyectos", url: "#proyectos" },
    { title: "Serviços", section: "servicios", url: "#servicios" },
    { title: "Experiência", section: "experiencia", url: "#experiencia" },
    { title: "Sobre mim", section: "sobre-mi", url: "#sobre-mi" },
    { title: "Contato", section: "contacto", url: "#contacto" },
    {
      title: "Currículo",
      url: "/Nicolás_Piovano_Sr_Fullstack.pdf",
      download: true,
    },
  ],
  personal: {
    title: "Desenvolvedor",
    subtitle: "Freelancer para SaaS, startups e negócios digitais.",
    badge: "Disponível para trabalhar",
  },
  hero: {
    headline1: "Você tem um projeto.",
    headline2: "Eu transformo em produto.",
    subheadline:
      "7 anos de experiência end-to-end. Trabalho com startups, empresas e negócios locais que querem crescer online.",
    ctaSecondary: "LinkedIn",
    ctaSecondaryHref: "https://linkedin.com/in/nmpiovano",
    ctaPrimary: "Ver projetos",
    ctaPrimaryHref: "#proyectos",
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
        title: "Gestão de Investimentos",
        problem:
          "Acompanhamento manual e disperso de ações, CEDEARs, títulos e compras de dólares gera erros, atrasos e pouca clareza sobre os resultados reais.",
        solution:
          "Dashboard unificado com histórico de operações, controle de ganhos/perdas e visualização por ativo e período.",
        impact:
          "Visibilidade imediata do desempenho da carteira, decisões mais rápidas e uma base escalável sem refazer lógica ou UI.",
      },
      {
        title: "Painel de Autenticação",
        problem:
          "Sistemas sem controle de acesso sólido geram riscos de segurança e aumentam a demanda por suporte.",
        solution:
          "Painel de login personalizado em todos os sistemas, com autenticação via cookies seguros (Sanctum), rotas protegidas e gestão consistente de sessões.",
        impact:
          "Acesso controlado desde o primeiro dia, menor superfície de ataque e base pronta para usuários reais.",
      },
      {
        title: "Ecommerce de Rifas",
        problem:
          "Venda de rifas sem controle de disponibilidade ou pagamentos integrados causa sobrevenda, fricção e perda de conversões.",
        solution:
          "Ecommerce integrado ao Mercado Pago com reserva temporária de rifas: seleção de quantidade, bloqueio automático por 10 minutos e 15 minutos para completar o pagamento.",
        impact:
          "Zero sobrevenda, controle de estoque em tempo real e um fluxo de compra claro que maximiza a conversão.",
      },
      {
        title: "Portfólio de Romina Fiorentino",
        problem:
          "Currículo e LinkedIn não eram suficientes para comunicar toda a experiência da profissional de RH.",
        solution:
          "Desenvolvimento de um portfólio personalizado para apresentar experiência e habilidades de forma clara e profissional.",
        impact:
          "Novo recurso para fortalecer a presença no mercado e melhorar oportunidades profissionais.",
      },
      {
        title: "Portfólio Profissional Multilíngue com IA",
        problem:
          "Um portfólio básico e em apenas um idioma limita alcance, credibilidade e geração de leads internacionais.",
        solution:
          "Site multilíngue com rotas por idioma, conteúdo otimizado para SEO e chat com IA integrado para atendimento e qualificação de visitantes.",
        impact:
          "Marca profissional mais forte, maior captação de leads em diferentes mercados e melhor conversão com clientes que operam em USD.",
      },
      {
        title: "Simulador de Decisões Técnicas",
        problem:
          "Decisões de stack baseadas em tendências ou intuição geram custos extras, dívida técnica e atrasos.",
        solution:
          "Motor de regras que avalia o contexto do projeto (escala, equipe, orçamento, prazos) e retorna recomendações técnicas justificadas.",
        impact:
          "Decisões mais rápidas e defensáveis, alinhamento antecipado do time e critérios técnicos reutilizáveis para projetos futuros.",
      },
      {
        title: "ChatBox com IA",
        problem:
          "Usuários com intenção de compra sem resposta imediata geram fricção e perda de oportunidades.",
        solution:
          "Chat 24/7 com IA treinada no negócio, respostas guiadas e fluxos focados em qualificação de leads e conversão.",
        impact:
          "Conversas mais relevantes, leads melhor qualificados e aumento na conversão de vendas.",
      },
    ],
  },
  experience: {
    title: "Experiência (resumo)",
    learning: "Aprendizados:",
    items: [
      {
        date: "Ago. 2024 - Atual",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ["Vue", "Laravel", "Docker", "MySQL"],
        description:
          "Sistemas críticos para múltiplas organizações; estabilidade, entregas incrementais e melhorias contínuas.",
        aprendizajes:
          "Escopo claro, entregas iterativas e redução de risco em produção.",
      },
      {
        date: "Jun. 2021 - Abr. 2023",
        title: "Desenvolvedor Web Fullstack",
        company: "Servicios Computables S.A.",
        usos: ["React", "Laravel", "Docker", "MySQL"],
        description:
          "Evolução de produto com foco em performance, UX e manutenibilidade.",
        aprendizajes: "Entrega por objetivos e melhorias que dá para medir.",
      },
      {
        date: "Nov. 2020 - Mai. 2021",
        title: "Desenvolvedor Web Backend",
        company: "Creative Coefficient",
        usos: ["Prestashop", "React", "Docker"],
        description:
          "E-commerce internacional com padrões, prazos e comunicação em inglês.",
        aprendizajes: "Entregar sob pressão mantendo qualidade.",
      },
      {
        date: "Dez. 2018 - Nov. 2020",
        title: "Desenvolvedor Web Fullstack",
        company: "CNRT (Ministério de Transporte)",
        usos: ["Symfony", "AngularJS", "Angular", "MySQL"],
        description:
          "Sistemas de alta demanda e dados sensíveis: qualidade, segurança e performance.",
        aprendizajes: "Base forte em arquitetura, dados e otimização.",
      },
    ],
  },
  aboutMe: {
    title: "Sobre mim 😉",
    text: [
      "Trabalho com founders e equipes que precisam de um produto web que venda hoje e escale amanhã.",
      "Eu ando rápido sem cortar caminho: escopo claro, prioridades de negócio, iterações curtas e entrega manutenível. Comunicação direta e execução previsível.",
    ],
    paragraphs: [
      {
        before: "Programo desde 2016, ",
        strong: "resolvendo problemas concretos e aprendendo no caminho.",
        after: "",
      },
      {
        before:
          "Adapto-me rapidamente a novas tecnologias e projetos e sempre busco ",
        strong: "soluções práticas",
        after:
          " que permitam avançar de forma eficaz, inclusive em ambientes complicados.",
      },
      {
        before:
          "Viajei e vivi em vários países da América Latina enquanto trabalhava em hostels, o que fortaleceu meu ",
        strong: "trato com pessoas, a adaptabilidade e o trabalho em equipe",
        after: " com perfis muito diversos.",
      },
      {
        before: "Hoje busco crescer no ",
        strong: "mundo freelance",
        after: " e aportar resultados claros em cada projeto.",
      },
    ],
  },

  footer: {
    developed: "Desenvolvido com",
    downloadCV: "Baixar CV 2026",
  },
  introLoader: {
    durationMs: 6000,
    messages: [
      // "Construo plataformas web escaláveis para negócios digitais.",
      "Construo sistemas que geram receita",
      "com foco em performance, UX e manutenibilidade.",
    ],
  },
  services: {
    title: "Serviços",
    subtitle:
      "Serviços testados em projetos reais. Claros, completos e prontos para usar.",
    items: [
      {
        title: "Painéis administrativos",
        description:
          "Um painel simples para gerenciar vendas, usuários, estoque, conteúdos ou pedidos sem depender de ninguém.",
      },
      {
        title: "Lojas online",
        description:
          "Catálogo, produtos, variações, pagamentos e entrega. Uma loja pronta para vender e escalar.",
      },
      {
        title: "Sites pessoais",
        description:
          "porfólio, página profissional ou landing pessoal: clara, rápida e com visual premium.",
      },
      {
        title: "Controle financeiro",
        description:
          "Dashboards de receitas/despesas, métricas e relatórios para decidir com números claros.",
      },
      {
        title: "Tu vidriera online",
        description:
          "Diseñada para que el que entra, compre, reserve o te contacte.",
      },
      {
        title: "Tu web en piloto automático",
        description: "Turnos, pagos, consultas y notificaciones en automático.",
      },
    ],
  },
  finalCta: {
    divs: [
      {
        title: "Quer lançar ou melhorar seu produto?",
        text: "Me conte o que você precisa e eu respondo com uma proposta + estimativa em 24h.",
        primaryLabel: "Solicitar proposta",
        primaryHref: "https://linkedin.com/in/nmpiovano",
        hint: "Trabalho em USD com clientes internacionais e nacionais.",
      },
      {
        title: "Quer adicionar um desenvolvedor ao seu time?",
        text: "Você pode ver minha trajetória completa ou falar comigo diretamente.",
        primaryLabel: "Baixar CV",
        primaryHref: "/Nicolás_Piovano_Sr_Fullstack.pdf",
        secondaryLabel: "Contato",
        secondaryHref: "https://linkedin.com/in/nmpiovano",
      },
    ],
  },
  seo: {
    title:
      "porfólio de Nico Piovano - Desenvolvedor Web com +7 anos de experiência",
    description: "Contrate Nico para criar sua aplicação web ou mobile.",
  },
  chat: {
    title: "Assistente profissional",
    subtitle: "Escolha uma pergunta para continuar",
    greeting: "Olá 👋 Sou o Nico. O que você gostaria de saber?",
    initialBadges: [
      "Qual é sua experiência?",
      "Com quais tecnologias você trabalha?",
      "Você está disponível para projetos?",
      "Você já trabalhou com IA?",
    ],
  },
  modeSelector: {
    title: "O que você está buscando?",
    subtitle:
      "Escolha uma opção para ver a versão mais relevante do meu porfólio.",
    employment: "Contrato Fijo",
    freelance: "Freelance / Contractor",
  },
  modeToggle: {
    ariaLabel: "Trocar modo do site",
    toEmployment: "Trocar para Contrato fixo",
    toFreelance: "Trocar para Freelance / Contractor",
  },
  employment: {
    header: [
      { title: "Experiência", section: "experiencia", url: "#experiencia" },
      { title: "Projetos", section: "proyectos", url: "#proyectos" },
      { title: "Sobre mim", section: "sobre-mi", url: "#sobre-mi" },
      {
        title: "Currículo",
        url: "/Nicolás_Piovano_Sr_Fullstack.pdf",
        download: true,
      },
    ],
    personal: {
      title: "Desenvolvedor End-to-End",
      subtitle: "+7 anos de experiência.",
      badge: "Disponível para trabalhar",
    },
    projects: {
      title: "Projetos",
      code: "Código",
      preview: "Ver",
      items: [
        {
          title: "Painel de Login",
          description:
            "Autenticação baseada em cookies com Laravel Sanctum para maior segurança, evitando tokens no localStorage. Frontend SPA consome a API com Axios configurado automaticamente. Rotas protegidas gerenciadas com componente ProtectedRoute.",
        },
        {
          title: "Market Dashboard",
          description:
            "Dashboard financeiro com dados mockados para simular informações de mercado. Sistema de visualização com gráficos interativos e métricas-chave.",
        },
        {
          title: "Simulador de Decisões Técnicas",
          description:
            "Simulador que utiliza um motor de decisões (decisionEngine) para avaliar e recomendar tecnologias. Analisa disponibilidade, complexidade e requisitos do projeto, gerando recomendações baseadas em regras programadas.",
        },
        {
          title: "Gran Rifa",
          description:
            "App de rifas 100% frontend: carrossel de prêmios, grade de números (1–1000) para escolher, carrinho flutuante e modal de checkout com formulário. React, Vite, Motion, Tailwind e Radix UI. Formato de preços Argentina ($1.000).",
        },
        {
          title: "porfólio Multiidioma",
          description:
            "porfólio com suporte multiidioma (ES, EN, PT) usando i18n personalizado. Rotas por idioma (/es, /en, /pt) para SEO, traduções centralizadas e detecção automática a partir da URL.",
        },
        {
          title: "Chat Programável",
          description:
            "Chat assistente com respostas programáveis baseadas em intents. Matcher detecta a intenção do usuário e retorna respostas contextuais com follow-ups dinâmicos. Funciona completamente no cliente sem backend.",
        },
      ],
    },
    experience: {
      title: "Experiência profissional",
      learning: "Aprendizados:",
      items: [
        {
          date: "Ago. 2024 - Atual",
          title: "Desenvolvedor Web Fullstack",
          company: "Servicios Computables S.A.",
          usos: ["Vue", "Laravel", "Docker", "MySQL"],
          description:
            "Desenvolvimento de sistemas para diferentes municípios da República Argentina.",
          aprendizajes:
            "Aprimoramento de tecnologias frontend. Reutilização de componentes e estados no Vue. Melhoria no uso de Docker.",
        },
        {
          date: "Jun. 2021 - Abr. 2023",
          title: "Desenvolvedor Web Fullstack",
          company: "Servicios Computables S.A.",
          usos: ["React", "Laravel", "Docker", "MySQL"],
          description:
            "Desenvolvimento de sistemas para diferentes municípios da República Argentina.",
          aprendizajes:
            "Desenvolvimento pessoal e profissional em frontend. Gerenciamento de estados e hooks do React. Desenvolvimento de testes unitários.",
        },
        {
          date: "Nov. 2020 - Mai. 2021",
          title: "Desenvolvedor Web Backend",
          company: "Creative Coefficient",
          usos: ["Prestashop", "React", "Docker"],
          description:
            "Desenvolvimento conjunto de painel administrativo de um sistema de milhas reconhecido internacionalmente (Smiles).",
          aprendizajes:
            "Gerenciamento de CMS, comunicação direta com clientes dos Estados Unidos através de reuniões diárias em inglês.",
        },
        {
          date: "Dez. 2018 - Nov. 2020",
          title: "Desenvolvedor Web Fullstack",
          company: "CNRT (Ministério de Transporte)",
          usos: ["Symfony", "AngularJS", "Angular", "MySQL"],
          description:
            "Manutenção e desenvolvimento de sistemas internos e externos para transportes públicos de curta e longa distância.",
          aprendizajes:
            "Início como Trainee. De linguagem pura a Frameworks. Base sólida em segurança, arquitetura de dados e otimização de consultas SQL.",
        },
      ],
    },
    aboutMe: {
      title: "Sobre mim 😉",
      paragraphs: [
        {
          before: "Programo desde 2016, ",
          strong: "resolvendo problemas concretos e aprendendo no caminho.",
          after: "",
        },
        {
          before:
            "Adapto-me rapidamente a novas tecnologias e projetos e sempre busco ",
          strong: "soluções práticas",
          after:
            " que permitam avançar de forma eficaz, inclusive em ambientes complicados.",
        },
        {
          before:
            "Viajei e vivi em vários países da América Latina enquanto trabalhava em hostels, o que fortaleceu meu ",
          strong: "trato com pessoas, a adaptabilidade e o trabalho em equipe",
          after: " com perfis muito diversos.",
        },
        {
          before: "Hoje busco crescer no ",
          strong: "mundo freelance",
          after: " e aportar resultados claros em cada projeto.",
        },
      ],
    },
  },
};
