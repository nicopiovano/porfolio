import type { ChatResponse } from "./responses"

export const RESPONSES_ES: Record<string, ChatResponse> = {
  greeting: {
    text: "Hola 👋 Soy Nico. ¿Sobre qué te gustaría saber?",
    followUps: [
      "¿Cuál es tu experiencia?",
      "¿En qué tecnologías trabajás?",
      "¿En qué proyectos trabajaste?",
      "¿Estás disponible para proyectos?",
      "¿Has trabajado con IA?"
    ]
  },

  experience: {
    text:
      "Tengo más de 7 años de experiencia desarrollando productos web reales, tanto en equipos como de forma independiente.",
    followUps: [
      "¿En qué tipo de proyectos trabajaste?",
      "¿Trabajás remoto?",
      "¿Cuántos años de experiencia tenés?",
      "⬅ Volver al inicio"
    ]
  },

  stack: {
    text:
      "Trabajo principalmente con Vue, Astro y Tailwind en frontend, y Laravel con MySQL en backend. También uso Docker y APIs y he trabajado con React.js.",
    followUps: [
      "¿Usás Vue o React?",
      "¿Tenés experiencia fullstack?",
      "¿Qué tecnologías usás en backend?",
      "⬅ Volver al inicio"
    ]
  },

  projects: {
    text:
      "He trabajado en proyectos variados: sistemas de gestión, e-commerce, dashboards administrativos y aplicaciones web complejas. Algunos proyectos están en mi porfolio.",
    followUps: [
      "¿Podés mostrarme algunos proyectos?",
      "¿Trabajaste en e-commerce?",
      "¿Qué tipo de sistemas desarrollaste?",
      "⬅ Volver al inicio"
    ]
  },

  way_of_working: {
    text:
      "Trabajo de forma pragmática: soluciones simples, buena comunicación y foco en entregar valor real.",
    followUps: [
      "¿Trabajás en equipo?",
      "¿Usás metodologías ágiles?",
      "¿Trabajás como freelance?",
      "¿Cómo es tu proceso de trabajo?",
      "⬅ Volver al inicio"
    ]
  },

  availability: {
    text:
      "Sí, estoy disponible para proyectos freelance y colaboraciones remotas.",
    followUps: [
      "¿Full time o part time?",
      "¿En qué horarios trabajás?",
      "¿Trabajás como freelance?",
      "⬅ Volver al inicio"
    ]
  },

  // Respuestas de segundo nivel
  "experience.projects": {
    text:
      "He trabajado en sistemas de gestión, e-commerce, dashboards administrativos y aplicaciones web complejas para diferentes industrias.",
    followUps: [
      "¿Podés mostrarme algunos proyectos?",
      "¿Trabajaste en e-commerce?",
      "⬅ Volver al inicio"
    ]
  },

  "experience.remote": {
    text:
      "Sí, trabajo remoto. Me adapto bien a equipos distribuidos (comunicación async + reuniones cuando suman), organizo el trabajo por objetivos y hago entregas incrementales para que siempre haya visibilidad del progreso.",
    followUps: [
      "¿Cómo es tu proceso de trabajo?",
      "¿En qué horarios trabajás?",
      "¿Trabajás en equipo?",
      "⬅ Volver al inicio"
    ]
  },

  "experience.years": {
    text:
      "Tengo más de 7 años de experiencia profesional desarrollando aplicaciones web. Empecé en 2016 y desde entonces he trabajado en diversos proyectos y tecnologías.",
    followUps: [
      "¿En qué tecnologías trabajás?",
      "¿En qué tipo de proyectos trabajaste?",
      "⬅ Volver al inicio"
    ]
  },

  "stack.vue_react": {
    text:
      "Trabajo principalmente con Vue.js. Prefiero Vue por su sintaxis clara, su curva de aprendizaje suave y su ecosistema bien estructurado. También tengo experiencia con React.",
    followUps: [
      "¿Qué tecnologías usás en frontend?",
      "¿Tenés experiencia fullstack?",
      "⬅ Volver al inicio"
    ]
  },

  "stack.fullstack": {
    text:
      "Sí, soy fullstack. Trabajo con Vue/TypeScript en frontend y Laravel/PHP con MySQL en backend. También manejo Docker, APIs REST y tengo experiencia con integraciones de terceros.",
    followUps: [
      "¿Qué tecnologías usás en backend?",
      "¿Trabajás con Docker?",
      "⬅ Volver al inicio"
    ]
  },

  "stack.backend": {
    text:
      "En backend trabajo principalmente con Laravel (PHP), MySQL para bases de datos, y Docker para contenedores. También desarrollo APIs REST y manejo integraciones con servicios externos.",
    followUps: [
      "¿Tenés experiencia fullstack?",
      "¿Trabajás con APIs?",
      "⬅ Volver al inicio"
    ]
  },

  "projects.show": {
    text:
      "Podés ver algunos de mis proyectos en la sección de proyectos de mi porfolio. Incluyen sistemas de gestión, e-commerce y aplicaciones web complejas.",
    followUps: [
      "¿Qué tipo de sistemas desarrollaste?",
      "¿Trabajaste en e-commerce?",
      "⬅ Volver al inicio"
    ]
  },

  "projects.ecommerce": {
    text:
      "Sí, he trabajado en proyectos de e-commerce, desarrollando tanto el frontend como el backend, incluyendo sistemas de pago, gestión de inventario y paneles administrativos.",
    followUps: [
      "¿En qué tecnologías trabajaste en e-commerce?",
      "¿Podés mostrarme algunos proyectos?",
      "⬅ Volver al inicio"
    ]
  },

  "projects.ecommerce.tech": {
    text:
      "En e-commerce sobretodo con Prestashop, haciendo sitios web complejos como Smiles.",
    followUps: [
      "¿Podés mostrarme algunos proyectos?",
      "¿Trabajaste en e-commerce?",
      "⬅ Volver al inicio"
    ]
  },

  "projects.systems": {
    text:
      "He desarrollado sistemas de gestión para diferentes industrias: administración de recursos, dashboards con métricas en tiempo real, sistemas de facturación y gestión de inventarios.",
    followUps: [
      "¿Podés mostrarme algunos proyectos?",
      "¿Trabajaste en e-commerce?",
      "⬅ Volver al inicio"
    ]
  },

  "way_of_working.team": {
    text:
      "Sí, trabajo bien en equipo. Tengo experiencia colaborando con diseñadores, otros desarrolladores y clientes. Valoro la comunicación clara y el feedback constructivo.",
    followUps: [
      "¿Usás metodologías ágiles?",
      "¿Trabajás como freelance?",
      "¿Cómo es tu proceso de trabajo?",
      "⬅ Volver al inicio"
    ]
  },

  "way_of_working.agile": {
    text:
      "Sí, trabajo con metodologías ágiles. Uso sprints, reuniones de seguimiento y priorizo entregas incrementales de valor. Me adapto bien a diferentes flujos de trabajo según el proyecto.",
    followUps: [
      "¿Trabajás en equipo?",
      "¿Cómo es tu proceso de trabajo?",
      "⬅ Volver al inicio"
    ]
  },

  "way_of_working.process": {
    text:
      "Mi proceso: primero entiendo bien el problema, luego propongo soluciones simples y pragmáticas, desarrollo de forma iterativa y mantengo comunicación constante con el equipo o cliente.",
    followUps: [
      "¿Trabajás en equipo?",
      "¿Usás metodologías ágiles?",
      "⬅ Volver al inicio"
    ]
  },

  "availability.fulltime": {
    text:
      "Puedo trabajar tanto full time como part time, dependiendo del proyecto. Estoy abierto a discutir la modalidad que mejor se adapte a las necesidades del proyecto.",
    followUps: [
      "¿En qué horarios trabajás?",
      "⬅ Volver al inicio"
    ]
  },

  "availability.hours": {
    text:
      "Trabajo principalmente por objetivos. Puedo trabajar en horario de oficina (9-18hs), pero prefiero trabajar con flexibilidad horaria. Puedo adaptarme a diferentes zonas horarias si es necesario.",
    followUps: [
      "¿Full time o part time?",
      "¿Trabajás como freelance?",
      "⬅ Volver al inicio"
    ]
  },

  "availability.freelance": {
    text:
      "Sí, trabajo como freelance. Tengo experiencia gestionando proyectos de principio a fin, desde la planificación hasta la entrega, trabajando directamente con clientes.",
    followUps: [
      "¿Full time o part time?",
      "¿En qué horarios trabajás?",
      "⬅ Volver al inicio"
    ]
  },

  ai: {
    text: "La uso bastante, codo a codo. Principalmente para acelerar el desarrollo: generación de código, refactoring, debugging y documentación. También la uso para explorar nuevas tecnologías y encontrar soluciones a problemas complejos. Es una herramienta más en mi stack que me ayuda a ser más productivo y eficiente.",
    followUps: [
      "⬅ Volver al inicio"
    ]
  },

  unknown: {
    text:
      "Puedo responder preguntas sobre mi experiencia, stack, proyectos y forma de trabajo. ¿Sobre qué te gustaría saber?",
    followUps: [
      "¿Cuál es tu experiencia?",
      "¿En qué tecnologías trabajás?",
      "¿En qué proyectos trabajaste?",
      "⬅ Volver al inicio"
    ]
  }
}
