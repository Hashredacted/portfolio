# Mohammad Afnan Mirza — AI & Full-Stack Developer Portfolio

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![GSAP](https://img.shields.io/badge/GSAP-Animation-green?style=for-the-badge&logo=greensock)
![WebGL 2](https://img.shields.io/badge/WebGL-2.0%203D-990000?style=for-the-badge&logo=webgl)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

<br />

**A state-of-the-art, client-converting Upwork freelance portfolio featuring interactive WebGL shaders, 3D physics stacks, and modern interactive UI animations.**

<br />

### 🌐 Live Demo: [portfolio-henna-tau-91.vercel.app](https://portfolio-henna-tau-91.vercel.app/)

<br />

[🚀 Live Demo (Vercel)](https://portfolio-henna-tau-91.vercel.app/) • [GitHub (@Hashredacted)](https://github.com/Hashredacted) • [Services](#-core-services) • [Featured Projects](#-featured-projects)

</div>

---

## 🌟 Overview

This portfolio is engineered for high-ticket client conversion on Upwork, positioning **Mohammad Afnan Mirza** as a specialized **AI & Full-Stack Developer** who builds real-world production systems — not an academic theorist or template developer.

The interface combines a dark obsidian glassmorphism aesthetic (`#07070d`) with GPU-accelerated WebGL shaders, fluid GSAP physics, and interactive 3D menus.

---

## 🌐 Live Demo & Deployment

- **Vercel Production URL**: [https://portfolio-henna-tau-91.vercel.app/](https://portfolio-henna-tau-91.vercel.app/)
- **GitHub Repository**: [https://github.com/Hashredacted/portfolio](https://github.com/Hashredacted/portfolio)
- **Local Preview**: `http://localhost:3000`

---

## ✨ Interactive Components & Shaders

The application integrates production-grade components and dynamic visual effects:

| Component / Effect | Where It's Used | Technology | Interactive Behavior |
|---|---|---|---|
| 🌐 **InfiniteMenu (3D Orbital Sphere)** | **Featured Projects** | WebGL 2, `gl-matrix` | Interactive 3D icosahedron sphere displaying Featured Projects as rotating discs. Features Arcball inertia drag physics, dynamic texture atlas generation, title/description reveals, and one-click case study modal triggers. Includes an instant switcher to **Grid View**. |
| 🎴 **BounceCards (GSAP Elastic Stack)** | **Services** | GSAP, Vanilla CSS | Fan of 6 bespoke 3D cyberpunk tech cards matching all 6 services with elastic bounce entrance (`elastic.out(1, 0.6)`), z-index elevation, and interactive hover physics (`pushSiblings` with `back.out(1.4)` easing, rotation flattening, and adjacent cards pushed outward). Housed in its own dedicated **Interactive Cards** tab. |
| 🎴 **CardSwap (3D Stack)** | **Project Deck** | GSAP, 3D CSS | 3D layered card stack with snappy spring easing (`back.out(1.2)`), depth perspective, skew physics, pause on hover, and direct click-to-case-study triggers. |
| 🌌 **Aurora (WebGL Shader)** | **Hero** & **Contact** | WebGL GLSL, Canvas | GPU-accelerated smooth wavy mesh gradient blending deep indigo (`#1e0a4a`), electric blue (`#4f46e5`), and violet (`#7c3aed`). |
| ✨ **Particles (Interactive Canvas)** | **Hero** | HTML5 Canvas | 220 floating ambient particles that dynamically repel and react to cursor movement on hover with fluid return physics. |
| 🔦 **SpotlightCard** | **Services Grid** & **Projects Grid** | React, CSS | Dynamic radial cursor spotlight effect (`rgba(99, 102, 241, 0.15)`) tracking mouse coordinates across glassmorphic cards. |
| 🔐 **DecryptedText** | **Hero**, **Services**, **Deck**, **Projects**, **About** | React, RAF | Cyberpunk-style character scrambling resolving in ~500ms with early viewport detection and sequential unmasking. |
| 💨 **BlurText** | **Hero Headline** & **About Bio** | Framer Motion | Fluid word-by-word blur-to-sharp animated reveal (`filter: blur(10px)` → `blur(0px)`). |
| ✦ **ShinyText** | **Hero Badge**, **Deck Badge**, **Contact Heading** | CSS Keyframes | Sweeping light shimmer gradient running continuously across text tokens. |

---

## 🛠️ Portfolio Architecture

```
portfolio/
├── PORTFOLIO_README_UPWORK.md    # Upwork freelance client-focused build specification
├── README.md                     # Repository documentation
└── app/                          # Next.js 16 Web Application
    ├── public/
    │   └── services/             # 6 Bespoke 3D cyberpunk domain visuals
    │       ├── ai-automation.jpg     # Neural brain holographic network
    │       ├── computer-vision.jpg   # Cybernetic optical sensor & HUD
    │       ├── backend-api.jpg       # Obsidian server room & database blocks
    │       ├── fullstack-web.jpg     # Holographic web UI panels & code
    │       ├── saas-erp.jpg          # Isometric SaaS cloud core & metrics
    │       └── ai-tools.jpg          # Autonomous AI robotic assistant orb
    ├── src/
    │   ├── app/
    │   │   ├── globals.css       # Obsidian tokens, glassmorphic utilities, glow borders
    │   │   ├── layout.tsx        # SEO meta, OpenGraph tags, Google Inter typography
    │   │   └── page.tsx          # Master page assembling all sections
    │   ├── components/
    │   │   ├── Navbar.tsx        # Sticky glass navigation with mobile drawer
    │   │   ├── Hero.tsx          # Aurora + Particles + DecryptedText + CTAs
    │   │   ├── Services.tsx      # Dual-tab view: Interactive BounceCards vs Services Grid
    │   │   ├── BounceCards.tsx   # GSAP elastic card fan with push physics
    │   │   ├── BounceCards.css   # Responsive card stacking geometry & hover glow
    │   │   ├── ProjectDeck.tsx   # Interactive 3D GSAP card deck section
    │   │   ├── CardSwap.tsx      # Interactive 3D GSAP card swap component
    │   │   ├── CardSwap.css      # 3D perspective & geometry styles
    │   │   ├── Projects.tsx      # Dual-tab view: WebGL 3D Orbital Sphere vs Grid View
    │   │   ├── InfiniteMenu.tsx  # WebGL 2 3D orbital sphere menu
    │   │   ├── InfiniteMenu.css  # Canvas styling & responsive text overlays
    │   │   ├── CaseStudyModal.tsx# Comprehensive Problem / Solution / Metrics modal
    │   │   ├── SpotlightCard.tsx # Cursor-tracking radial gradient spotlight card
    │   │   ├── Aurora.tsx        # WebGL shader wavy gradient canvas
    │   │   ├── Particles.tsx     # Canvas interactive particle system
    │   │   ├── DecryptedText.tsx # Fast character-scrambling decipher animation
    │   │   ├── BlurText.tsx      # Word-by-word blur-to-sharp reveal
    │   │   ├── ShinyText.tsx     # Continuous gradient light shimmer
    │   │   ├── Skills.tsx        # Categorized technical capabilities matrix
    │   │   ├── Contact.tsx       # Aurora backdrop + 1-click email copy & Upwork CTA
    │   │   └── Footer.tsx        # Sleek footer with GitHub and quick navigation
    │   └── data/
    │       └── projects.ts       # Strongly typed project case studies & metrics
    ├── package.json
    ├── tsconfig.json
    └── next.config.ts
```

---

## 💼 Core Services

1. **AI & Agentic Automation**: LLM integrations, autonomous agentic workflows, function calling, custom prompt pipelines with Gemini API & OpenAI.
2. **Computer Vision & Deep Learning**: Custom model training and inference pipelines (U-Net, OpenCV, TensorFlow, Keras), object detection, and segmentation.
3. **High-Performance Backend APIs**: Production REST & streaming APIs with FastAPI, Node.js/Express, JWT authentication, RBAC, MongoDB, and Redis.
4. **Full-Stack Web Applications**: Modern reactive web apps built with Next.js 16, React 19, TypeScript, and Tailwind CSS.
5. **Multi-Tenant SaaS / ERP Systems**: Complex business software featuring multi-tenant data isolation, billing, inventory, invoicing, and reporting.
6. **AI Business Tools**: Intelligent copilots, clinical symptom diagnostic assistants, smart recommendation engines, and automation bots.

---

## 🚀 Featured Projects & Case Studies

Each featured project includes an interactive case study modal outlining the **Problem**, **Solution**, **Key Metrics**, and **Engineering Work**:

- **WorkSpace — Multi-Tenant SaaS & Inventory ERP**: Multi-tenant platform with RBAC, invoicing, inventory tracking, payments, and automated financial reporting.
- **Healthcare Symptom Checker & AI Triage**: AI clinical decision support system integrating symptom parsing, triage level categorization, and doctor consultation workflows.
- **Agentic AI Automation & LLM Workflows**: Autonomous task runner utilizing function calling, tool use, and multi-step reasoning pipelines.
- **Deep Learning Oil Spill Segmentation**: Satellite imagery semantic segmentation using custom U-Net architectures for environmental monitoring.
- **Face Emotion Recognition & Biometrics**: Real-time webcam facial expression analysis using CNNs and OpenCV.
- **FastAPI Production Microservices**: High-throughput asynchronous backend service with JWT authentication, rate limiting, and Docker deployment.

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.18.0 or newer
- **npm**: v9.0.0 or newer

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hashredacted/portfolio.git
   cd portfolio/app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To test and build the production bundle:
```bash
npm run build
npm run start
```

---

## ⚙️ Tech Stack & Key Libraries

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Runtime**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [GSAP 3](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics & Shaders**: [WebGL 2.0](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext), [gl-matrix](https://glmatrix.net/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Modern Vanilla CSS Design Tokens
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📬 Contact & Hire

- **Name**: Mohammad Afnan Mirza
- **Role**: AI & Full-Stack Developer
- **GitHub**: [@Hashredacted](https://github.com/Hashredacted)
- **Email**: Direct 1-click copy available on the portfolio
- **Upwork**: Open for contracts, AI integrations, MVP development, and full-stack engineering.
