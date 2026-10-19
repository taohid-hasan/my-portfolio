<div align="center">

# ✨ Taohid Hasan Nasim

### Software Developer · Building things for the web

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Visit-8b5cf6?style=for-the-badge)](https://my-portfolio-sigma-livid-17.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/taohid-hasan-nasim/)
[![Email](https://img.shields.io/badge/Email-Say_Hi-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:taohidhasannasim@gmail.com)

![React](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055ff?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)


</div>

---

## 👋 About this project

This is my personal portfolio: a dark, animated, responsive website that shows who I am, what I build and how to reach me.

The twist? **It was built with just 1–2 prompts** using an AI agent in Google Antigravity IDE, then tweaked, debugged and deployed by me. It is proof that a clear prompt plus a clear plan can take you from an empty folder to a live site fast.

---

## 🚀 Featured projects

| Project | Live | Code |
|---|---|---|
| **Bazar Dor** | [Visit](https://bazar-dor-r9ow.vercel.app) | [GitHub](https://github.com/taohid-hasan/bazar-dor) |
| **Fit Log** | [Visit](https://fit-log-snowy.vercel.app) | [GitHub](https://github.com/taohid-hasan/fit-log) |

---

## 🎨 What's inside

- 🌌 Dark theme with a violet-to-cyan accent gradient
- 🎞️ Smooth scroll and page animations with Framer Motion
- 🧭 Multi-page routing: Home, Project Details, Resume
- 📱 Fully responsive, from phones to wide screens
- 🖨️ Printable resume page
- 🔗 Project cards linking to live demos and source code

---

## 🧰 Tech stack

| Area | Tools |
|---|---|
| Framework | React + Vite |
| Routing | React Router |
| Animation | Framer Motion |
| Icons | Lucide React |
| Linting | Oxlint |
| Hosting | Vercel |

---

## 🗂️ Project structure

```
my-portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/          # photo and project screenshots
│   │   ├── components/      # Navbar, Hero, AboutMe, Skills, Projects,
│   │   │                    # Experience, Education, Contact, Footer
│   │   ├── data/
│   │   │   └── projects.js  # project info lives here
│   │   ├── pages/           # Home, ProjectDetails, Resume
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vercel.json
│   └── package.json
├── .gitignore
└── README.md
```

---

## ⚡ Run it locally

```bash
# 1. Clone the repo
git clone https://github.com/taohid-hasan/my-portfolio.git

# 2. Go into the frontend folder
cd my-portfolio/frontend

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

To create a production build:

```bash
npm run build
npm run preview
```

---

## ☁️ Deployment

Deployed on **Vercel** with these settings:

| Setting | Value |
|---|---|
| Root Directory | `frontend` |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

`vercel.json` rewrites every route to `index.html`, so pages like `/resume` still work after a refresh.

---

## 🛠️ Make it yours

Want to use this as a base? Edit these files:

- `src/data/projects.js` to add or change projects
- `src/assets/hero.png` to swap the profile photo
- `src/index.css` to change the theme colors (they are CSS variables)

---

## 📬 Let's connect

<div align="center">

**Taohid Hasan Nasim**

[LinkedIn](https://www.linkedin.com/in/taohid-hasan-nasim/) · [GitHub](https://github.com/taohid-hasan) · [Email](mailto:taohidhasannasim@gmail.com)

⭐ If you like this project, give it a star!

</div>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
