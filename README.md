# Arjuna Gustrinator — Developer Portfolio

Personal portfolio website showcasing my projects and capabilities across **Mobile App Development (Flutter)**, **Full-Stack Web & Backend Systems (PHP/Laravel, NestJS, Next.js, PostgreSQL, MySQL, MongoDB NoSQL)**, and **AI Agents & Automation (LangGraph, Node.js, Python)**.

## Featured Projects

- **[AttendFlow](https://github.com/Junaa48/AttendFlow)** — GPS employee attendance platform uniting a **Flutter** Android app, **Next.js + Leaflet** web admin dashboard, and **NestJS + Prisma + PostgreSQL** REST API with server-side validation and Docker + Caddy deployment.
- **[Kafka WhatsApp Bot](https://github.com/Junaa48/whatsapp-bot)** — WhatsApp AI assistant built with **Node.js (Baileys)** and **LangGraph** featuring 47 guarded tools, role-based confirmation flows, multi-format document export (PDF/DOCX/PPTX/XLSX), Satori/Sharp image cards, and **Python** claim-verification suites.
- **[Aruma Coffee](https://github.com/Junaa48/Aruma-Coffee)** — Editorial landing page for a Makassar specialty cafe built with **HTML5, Tailwind CSS, JavaScript, and GSAP** (`ScrollTrigger`), interactive menu tabs, and WebP-optimized assets.

## Skills Highlighted

- **Languages & Frameworks:** Flutter, Dart, PHP, Laravel, Python, JavaScript, TypeScript
- **Web, Backend & Databases:** NestJS, Next.js, React, Node.js & Express, Tailwind CSS, PostgreSQL, MySQL, MongoDB (NoSQL), Prisma ORM
- **AI, Motion & Infrastructure:** LangGraph AI Agents, GSAP & ScrollTrigger, Docker & Caddy, Git & GitHub, Figma, VS Code

## Portfolio Features & Tech Stack

- **HTML5 & CSS3:** Semantic structure, custom properties, responsive Grid/Flexbox layouts, mobile drawer navigation, `<noscript>` fallback, and `prefers-reduced-motion` support.
- **Vanilla JavaScript ([`scripts/main.js`](scripts/main.js)):** Sticky navbar scroll spy, interactive `developer-stack.json` console tabs, category project filtering, and a keyboard-accessible Case Study gallery modal (`Escape` to close).
- **Contact Form:** Integrated with Formspree (`POST`).

## Project Structure

```text
Arjuna-Portofolio/
├── index.html
├── README.md
├── scripts/
│   └── main.js
├── styles/
│   ├── style.css
│   └── responsive.css
└── images/
    ├── logo.jpg
    └── projects/
        ├── attendflow-dashboard.png
        ├── attendflow-mobile.png
        ├── attendflow-workplaces.png
        ├── kafka-bot-mockup.svg
        ├── aruma-coffee-hero.webp
        └── aruma-coffee-craft.webp
```

## Preview Locally

You can open `index.html` directly in a browser, or run a lightweight static server from the project root:

```powershell
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

---

> Originally started from Dimas Abimanyu's HTML/CSS portfolio tutorial and redesigned into a custom portfolio.
