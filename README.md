# 🌐 Website — Portfolio Nico Piovano

Portfolio personal desarrollado con **Astro**, multiidioma (ES / EN / PT), chat asistente y efectos visuales.

---

## 🛠 Stack

| Tecnología | Uso |
|------------|-----|
| **Astro** | Framework estático y SSR |
| **Tailwind CSS** | Estilos |
| **TypeScript** | Tipado |
| **Three.js** | Escena 3D (opcional) |
| **i18n** | Español, inglés y portugués |

---

## 📋 Requisitos

- **Node.js** 18+ (recomendado 20+)
- **npm** o **pnpm**

---

## 🚀 Cómo levantar el proyecto

### 1. Instalar dependencias

```bash
cd website
npm install
```

### 2. Modo desarrollo

```bash
npm run dev
```

La app estará en **http://localhost:4321**.

### 3. Build para producción

```bash
npm run build
```

### 4. Preview del build

```bash
npm run preview
```

Sirve la versión compilada para probar antes de desplegar.

---

## 📁 Estructura principal

```
website/
├── src/
│   ├── pages/          # Rutas: /es, /en, /pt, index
│   ├── modules/        # Componentes (Header, Chat, Experience, etc.)
│   ├── i18n/           # Traducciones (es, en, pt)
│   ├── chat/           # Lógica del chat y respuestas
│   └── layouts/        # Layout principal
├── public/             # Assets estáticos
└── astro.config.mjs
```

---

## 🌍 Idiomas

Las rutas por idioma son:

- **Español:** `/es` (también `/` redirige según configuración)
- **Inglés:** `/en`
- **Portugués:** `/pt`

El chat y los textos se adaptan al idioma de la URL.

---

## 📜 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Compila y valida (Astro check + build) |
| `npm run preview` | Sirve la carpeta de build localmente |

---

## 💡 Notas

- En **Firefox** se habilitan efectos extra (scroll suave, escena 3D).
- El chat usa respuestas estáticas por intent; no requiere backend externo para el contenido.
