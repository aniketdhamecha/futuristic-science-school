# 🌌 A Success School: Futuristic Residential Science Academy Portal

Welcome to the official repository of **A Success School** — a premium, high-fidelity, futuristic residential science school web portal. Designed with cutting-edge visual aesthetics, smooth cinematic animations, glassmorphism UI/UX cards, and advanced SEO/routing architecture.

---

## 🚀 Technology Stack

This application is engineered with a modern high-performance web stack:
*   **Core Framework**: [React 19](https://react.dev/)
*   **Build Tool & Bundler**: [Vite 8](https://vite.dev/) (yielding sub-second production compiles)
*   **Style Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (configured via modern CSS `@theme` variables)
*   **Animation System**: [Framer Motion](https://www.framer.com/motion/) (powering layout transitions, floating components, and interactive accordions)
*   **Routing**: [React Router DOM v6](https://reactrouter.com/) (layered within layout viewports)

---

## 💎 Key Features Built

1. **Cyber-Dark Theme System**: Customized dark gradients (`#020617` / `#090D1A`), glowing outlines (`#06B6D4`), blueprint grid backgrounds, and Outfit & Inter typography pairings.
2. **Dynamic Navigation & Mobile Drawer**: 
   * **Desktop**: Multi-tier nested navigation structure.
   * **Mobile**: Tap-to-expand collapsible accordion drawer with spring-easing height transitions.
3. **AI Chatbot Companion**: Floating responsive assistant featuring simulated AI typing indicators, auto-scroll anchors, and a list of structured quick-replies.
4. **Premium Bento-Grid Layouts**: Multi-dimensional showcase sections for hostels, routines, safety protocols, and daily campus timelines.
5. **SEO & Crawl Assets**: Complete crawler-ready structural assets (`sitemap.xml` and `robots.txt` prioritizing 14 pages), fully registered Google Search Console meta verifications, and custom table of contents layouts.
6. **"Quantum Anomaly" 404 Page**: A customized error viewport with an orbiting spinning atom vector (`FaAtom`), and active dynamic `<meta name="robots" content="noindex, nofollow">` script injection to protect search engine indexes from bloat.

---

## 📂 Project Structure

Here is a simplified directory map of key components in this repository:

```text
├── public/                 # Static crawler assets (sitemap.xml, robots.txt, icons)
└── src/
    ├── animations/         # Framer Motion spring presets and keyframe variations
    ├── assets/             # Vector icons and optimized static mock assets
    ├── components/
    │   ├── chatbot/        # UI components and hooks driving the AI Chatbot
    │   ├── footer/         # Modular legal navigation linkages
    │   ├── navbar/         # Nested desktop menus and collapsible mobile accordions
    │   └── ui/             # Reusable core styles (Buttons, Headers)
    ├── constants/          # Structured static data grids (Nav lines, Faculty, Gallery)
    ├── data/               # Dynamic dataset sources (Events, Protocols, Chat FAQs)
    ├── hooks/              # Global custom hooks (useChatbot, useNavbarScroll)
    ├── layouts/            # Page-transition layout shells (MainLayout with AnimatePresence)
    ├── pages/              # Primary viewports (Home, Hostel, Protocols, Legal Pages, 404)
    ├── routes/             # Client-side Route paths mapping
    └── styles/
        └── globals.css     # Tailwind v4 custom theme definitions and utilities
```

---

## 🛠️ Getting Started for Developers

To run this application locally, follow these simple setup steps:

### 1. Prerequisite Installations
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher is highly recommended).

### 2. Clone the Repository & Install Dependencies
Open your command terminal inside the project directory and run:
```bash
# Install npm dependencies
npm install
```

### 3. Run the Development Server
Launch the local dev server using Vite:
```bash
npm run dev
```
Open your browser and navigate to the local address displayed (typically `http://localhost:5173`).

### 4. Build and Compile for Production
To package and bundle the application for production deployment:
```bash
npm run build
```
This generates a highly optimized static `dist/` bundle in less than a second.

### 5. Local Production Preview
To inspect and test the compiled production build locally before actual deployment:
```bash
npm run preview
```

---

## ⚠️ Important Developer Guidelines (Things to Care About)

To maintain code health and preserve the premium UI/UX quality, all engineers must respect these key conventions:

### 🎨 1. Styling & Theme Colors
*   **Do NOT hardcode raw hex values**: Avoid raw tailwind classes like `bg-red-500` or `text-blue-600`.
*   **Utilize Tailwind Theme mappings**: Use the custom variables declared in `src/styles/globals.css` inside the `@theme` block:
    *   **Backgrounds**: `bg-neutral-bg` (cyber dark) or `bg-cyber-dark`.
    *   **Gradients**: Use `.cyan-gradient-text`, `.gold-gradient-text`, `.cyan-bg-gradient`, or `.dark-gradient`.
    *   **Outlines & Glows**: Use `.glass-card`, `.glow-cyan` (shadow-cyan-glow), and `.bento-hover` classes to ensure cards match the core design tokens.

### 🎬 2. Animation Protocols
*   Avoid adding sudden jerky transitions.
*   **Standardize Animation Springs**: Wrap interactive elements with `<motion.div>` and import reusable keyframes and transition sets from `src/animations/motionVariants.js`.
*   **Mobile Accordion Drawer**: Collapsible items on mobile navbar require `<AnimatePresence>` paired with explicit height styles (`height: 0` to `height: 'auto'`) to prevent immediate text clipping during spring sequences.

### 🔍 3. SEO & Head Updates
*   Every newly created page component MUST include a custom `useEffect` or React Helmet block updating `document.title` to standard format: `[Page Name] | A Success School`.
*   Verify that any error, admin, or staging pages explicitly block indexing by dynamically injecting `noindex, nofollow` into the robots meta tag, and cleanup correctly on unmount (refer to `src/pages/NotFound.jsx` for implementation).

### 📐 4. Navigation Integrity
*   Any changes to navigation layout should be updated inside `src/constants/navLinks.js`.
*   Nested menus on mobile must always use the accordion component logic inside `Navbar.jsx` to prevent overflow layout shifts.
