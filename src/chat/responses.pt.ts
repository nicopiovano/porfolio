import type { ChatResponse } from "./responses"

export const RESPONSES_PT: Record<string, ChatResponse> = {
  greeting: {
    text: "Olá 👋 Sou o Nico. Sobre o que você gostaria de saber?",
    followUps: [
      "Qual é sua experiência?",
      "Com quais tecnologias você trabalha?",
      "Em quais projetos você trabalhou?",
      "Você está disponível para projetos?",
      "Você já trabalhou com IA?"
    ]
  },

  experience: {
    text:
      "Tenho mais de 7 anos de experiência desenvolvendo produtos web reais, tanto em equipes quanto de forma independente.",
    followUps: [
      "Em que tipo de projetos você trabalhou?",
      "Você trabalha remoto?",
      "Quantos anos de experiência você tem?",
      "⬅ Voltar ao início"
    ]
  },

  stack: {
    text:
      "Trabalho principalmente com Vue, Astro e Tailwind no frontend, e Laravel com MySQL no backend. Também uso Docker e APIs e trabalhei com React.js.",
    followUps: [
      "Você usa Vue ou React?",
      "Você tem experiência fullstack?",
      "Quais tecnologias você usa no backend?",
      "⬅ Voltar ao início"
    ]
  },

  projects: {
    text:
      "Trabalhei em projetos variados: sistemas de gestão, e-commerce, dashboards administrativos e aplicações web complexas. Alguns projetos estão no meu porfólio.",
    followUps: [
      "Você pode me mostrar alguns projetos?",
      "Você trabalhou em e-commerce?",
      "Que tipo de sistemas você desenvolveu?",
      "⬅ Voltar ao início"
    ]
  },

  way_of_working: {
    text:
      "Trabalho de forma pragmática: soluções simples, boa comunicação e foco em entregar valor real.",
    followUps: [
      "Você trabalha em equipe?",
      "Você usa metodologias ágeis?",
      "Você trabalha como freelancer?",
      "Como é seu processo de trabalho?",
      "⬅ Voltar ao início"
    ]
  },

  availability: {
    text:
      "Sim, estou disponível para projetos freelance e colaborações remotas.",
    followUps: [
      "Full time ou part time?",
      "Em que horários você trabalha?",
      "Você trabalha como freelancer?",
      "⬅ Voltar ao início"
    ]
  },

  // Respostas de segundo nível
  "experience.projects": {
    text:
      "Trabalhei em sistemas de gestão, e-commerce, dashboards administrativos e aplicações web complexas para diferentes indústrias.",
    followUps: [
      "Você pode me mostrar alguns projetos?",
      "Você trabalhou em e-commerce?",
      "⬅ Voltar ao início"
    ]
  },

  "experience.remote": {
    text:
      "Sim, trabalho principalmente de forma remota. Tenho experiência trabalhando com equipes distribuídas e gerenciando meu tempo de forma autônoma.",
    followUps: [
      "Como é sua forma de trabalho remoto?",
      "Você trabalha em equipe?",
      "⬅ Voltar ao início"
    ]
  },

  "experience.years": {
    text:
      "Tenho mais de 7 anos de experiência profissional desenvolvendo aplicações web. Comecei em 2016 e desde então trabalhei em diversos projetos e tecnologias.",
    followUps: [
      "Com quais tecnologias você trabalha?",
      "Em que tipo de projetos você trabalhou?",
      "⬅ Voltar ao início"
    ]
  },

  "stack.vue_react": {
    text:
      "Trabalho principalmente com Vue.js. Prefiro Vue por sua sintaxe clara, curva de aprendizado suave e ecossistema bem estruturado. Também tenho experiência com React.",
    followUps: [
      "Quais tecnologias você usa no frontend?",
      "Você tem experiência fullstack?",
      "⬅ Voltar ao início"
    ]
  },

  "stack.fullstack": {
    text:
      "Sim, sou fullstack. Trabalho com Vue/TypeScript no frontend e Laravel/PHP com MySQL no backend. Também trabalho com Docker, APIs REST e tenho experiência com integrações de terceiros.",
    followUps: [
      "Quais tecnologias você usa no backend?",
      "Você trabalha com Docker?",
      "⬅ Voltar ao início"
    ]
  },

  "stack.backend": {
    text:
      "No backend trabalho principalmente com Laravel (PHP), MySQL para bancos de dados, e Docker para contêineres. Também desenvolvo APIs REST e trabalho com integrações de serviços externos.",
    followUps: [
      "Você tem experiência fullstack?",
      "Você trabalha com APIs?",
      "⬅ Voltar ao início"
    ]
  },

  "projects.show": {
    text:
      "Você pode ver alguns dos meus projetos na seção de projetos do meu porfólio. Incluem sistemas de gestão, e-commerce e aplicações web complexas.",
    followUps: [
      "Que tipo de sistemas você desenvolveu?",
      "Você trabalhou em e-commerce?",
      "⬅ Voltar ao início"
    ]
  },

  "projects.ecommerce": {
    text:
      "Sim, trabalhei em projetos de e-commerce, desenvolvendo tanto o frontend quanto o backend, incluindo sistemas de pagamento, gestão de inventário e painéis administrativos.",
    followUps: [
      "Com quais tecnologias você trabalhou em e-commerce?",
      "Você pode me mostrar alguns projetos?",
      "⬅ Voltar ao início"
    ]
  },

  "projects.ecommerce.tech": {
    text:
      "Em e-commerce principalmente com Prestashop, fazendo sites web complexos como Smiles.",
    followUps: [
      "Você pode me mostrar alguns projetos?",
      "Você trabalhou em e-commerce?",
      "⬅ Voltar ao início"
    ]
  },

  "projects.systems": {
    text:
      "Desenvolvi sistemas de gestão para diferentes indústrias: administração de recursos, dashboards com métricas em tempo real, sistemas de faturamento e gestão de inventários.",
    followUps: [
      "Você pode me mostrar alguns projetos?",
      "Você trabalhou em e-commerce?",
      "⬅ Voltar ao início"
    ]
  },

  "way_of_working.team": {
    text:
      "Sim, trabalho bem em equipe. Tenho experiência colaborando com designers, outros desenvolvedores e clientes. Valorizo a comunicação clara e feedback construtivo.",
    followUps: [
      "Você usa metodologias ágeis?",
      "Você trabalha como freelancer?",
      "Como é seu processo de trabalho?",
      "⬅ Voltar ao início"
    ]
  },

  "way_of_working.agile": {
    text:
      "Sim, trabalho com metodologias ágeis. Uso sprints, reuniões de acompanhamento e priorizo entregas incrementais de valor. Me adapto bem a diferentes fluxos de trabalho dependendo do projeto.",
    followUps: [
      "Você trabalha em equipe?",
      "Como é seu processo de trabalho?",
      "⬅ Voltar ao início"
    ]
  },

  "way_of_working.process": {
    text:
      "Meu processo: primeiro entendo bem o problema, depois proponho soluções simples e pragmáticas, desenvolvo de forma iterativa e mantenho comunicação constante com a equipe ou cliente.",
    followUps: [
      "Você trabalha em equipe?",
      "Você usa metodologias ágeis?",
      "⬅ Voltar ao início"
    ]
  },

  "availability.fulltime": {
    text:
      "Posso trabalhar tanto full time quanto part time, dependendo do projeto. Estou aberto a discutir a modalidade que melhor se adapte às necessidades do projeto.",
    followUps: [
      "Em que horários você trabalha?",
      "⬅ Voltar ao início"
    ]
  },

  "availability.hours": {
    text:
      "Trabalho principalmente por objetivos. Posso trabalhar em horário comercial (9-18hs), mas prefiro trabalhar com flexibilidade horária. Posso me adaptar a diferentes fusos horários se necessário.",
    followUps: [
      "Full time ou part time?",
      "Você trabalha como freelancer?",
      "⬅ Voltar ao início"
    ]
  },

  "availability.freelance": {
    text:
      "Sim, trabalho como freelancer. Tenho experiência gerenciando projetos do início ao fim, desde o planejamento até a entrega, trabalhando diretamente com clientes.",
    followUps: [
      "Full time ou part time?",
      "Em que horários você trabalha?",
      "⬅ Voltar ao início"
    ]
  },

  ai: {
    text: "Uso bastante, lado a lado. Principalmente para acelerar o desenvolvimento: geração de código, refatoração, debugging e documentação. Também uso para explorar novas tecnologias e encontrar soluções para problemas complexos. É mais uma ferramenta no meu stack que me ajuda a ser mais produtivo e eficiente.",
    followUps: [
      "⬅ Voltar ao início"
    ]
  },

  unknown: {
    text:
      "Posso responder perguntas sobre minha experiência, stack, projetos e forma de trabalho. Sobre o que você gostaria de saber?",
    followUps: [
      "Qual é sua experiência?",
      "Com quais tecnologias você trabalha?",
      "Em quais projetos você trabalhou?",
      "⬅ Voltar ao início"
    ]
  }
}
