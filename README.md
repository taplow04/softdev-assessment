# FloraVision 🌿 — Product Listing Page

A **pixel-perfect, fully responsive** recreation of the **FloraVision** plant-store
product listing page from the provided Figma design, built with **React** and
**Tailwind CSS** (Vite).

Every section, image, color, font and piece of copy was extracted directly from
the Figma source file (`Front-end test.fig`), so the result matches the design as
closely as possible across desktop, tablet and mobile.

**▶️ View it live: [softdev-assessment.vercel.app](https://softdev-assessment.vercel.app/)**

> **🔗 Live demo:** https://softdev-assessment.vercel.app/
> **📦 Repository:** https://github.com/taplow04/softdev-assessment

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How This Project Was Built (Step by Step)](#-how-this-project-was-built-step-by-step)
- [Component Overview](#-component-overview)
- [Design Tokens](#-design-tokens-from-figma)
- [Responsiveness](#-responsiveness)
- [Accessibility & Performance](#-accessibility--performance)
- [Deployment](#-deployment)

---

## ✨ Features

- **Navbar** — logo, script-font navigation links, search / cart / user icons and
  a fully working responsive hamburger drawer for mobile.
- **Hero Section** — "Earth's Exhale" banner over the topiary background image,
  subtext, CTA buttons (Buy Now / Live Demo), a floating customer testimonial and
  the featured product card.
- **Trending Plants** — "Our Trendy plants" alternating feature cards
  (image / text swap) with price and Explore CTA.
- **Top Selling Plants** — responsive product grid (3 → 2 → 1 columns) of reusable
  `PlantCard`s with hover lift + image-zoom effects.
- **Customer Reviews** — testimonial cards with avatar, name, star rating and quote.
- **O₂ Plants** — featured plant card with descriptive copy, CTA, pagination dots
  and navigation arrows.
- **Footer** — brand info, social links, quick links and a working newsletter
  subscribe form.
- Semantic HTML, keyboard-accessible navigation, visible focus states, `alt` text
  on all images, and smooth hover / transition animations.

## 🛠️ Tech Stack

| Purpose            | Tool                                |
| ------------------ | ----------------------------------- |
| UI library         | React 18                            |
| Styling            | Tailwind CSS 3                      |
| Build tool / dev   | Vite 5                              |
| Fonts              | Inter + Indie Flower (Google Fonts) |
| Version control    | Git & GitHub                        |
| Deployment         | Vercel                              |

## 📁 Project Structure

```
softdev-assessment/
├── public/
│   └── assets/               # All images exported from the Figma file
│       ├── logo.png  search.png  cart.png  arrow.png
│       ├── hero-bg.jpg       # Hero topiary background
│       ├── aglaonema.png  plantain-lilies.png  cactus.png
│       ├── swiss-cheese.png  sansevieria.png  agave.png  desk-decoration.png
│       └── avatar-*.png/.jpg # Reviewer avatars
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Reusable outlined pill button
│   │   ├── Navbar.jsx           # Nav + mobile drawer
│   │   ├── HeroBanner.jsx
│   │   ├── SectionTitle.jsx     # Heading with decorative swashes
│   │   ├── TrendingSection.jsx
│   │   ├── PlantCard.jsx        # Reusable product card
│   │   ├── TopSellingSection.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── StarRating.jsx
│   │   ├── O2Section.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.js           # All copy / prices / asset references
│   ├── App.jsx                  # Page composition + shared plant background
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind layers + custom component classes
├── index.html                   # HTML shell + Google Fonts
├── tailwind.config.js           # Custom colors, fonts, animations, tokens
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** and npm

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/taplow04/softdev-assessment.git
cd softdev-assessment

# 2. Install dependencies
npm install

# 3. Start the dev server → http://localhost:5173
npm run dev

# 4. Create an optimized production build (outputs to /dist)
npm run build

# 5. Preview the production build locally
npm run preview
```

## 🧱 How This Project Was Built (Step by Step)

This section documents the full workflow used to recreate the design, so the
process is reproducible.

### 1. Extract the design from the `.fig` file
- A Figma `.fig` file is a ZIP archive. It was unzipped to reveal `canvas.fig`
  (the binary design data) and an `images/` folder of raw assets.
- `canvas.fig` uses Figma's **Kiwi** binary schema, compressed in two blocks
  (a zlib schema block + a Zstandard data block). Both blocks were decompressed
  and the Kiwi message was decoded into a full node tree.
- From that tree, the **exact** values were read for every node: absolute
  x/y positions, width/height, fill colors, fonts, font sizes, line-heights,
  corner radii, and text content — rather than eyeballing a screenshot.

### 2. Collect the assets
- Each image node was mapped to its underlying asset hash, then the images were
  exported and renamed meaningfully (e.g. `aglaonema.png`, `hero-bg.jpg`,
  `avatar-shelly.png`) into `public/assets/`.

### 3. Scaffold the project
- Initialized a **Vite + React** project and added **Tailwind CSS** with
  `postcss` and `autoprefixer`.
- Configured `tailwind.config.js` with design tokens pulled from Figma
  (background color, star color, fonts, the 1728px artboard width, shadows and a
  fade-up animation).
- Loaded **Inter** and **Indie Flower** via Google Fonts in `index.html`.

### 4. Translate the design into components
- Broke the page into small, reusable components (see
  [Component Overview](#-component-overview)), each driven by **configurable
  props**.
- Centralized all text, prices and asset paths in `src/data/content.js` so the
  markup stays clean and the content is easy to edit.
- Recreated the frosted "glass" cards, outlined pill buttons, gradient section
  swashes and star ratings as shared classes/components.

### 5. Make it responsive
- Used Tailwind's mobile-first breakpoints so grids collapse
  **3 → 2 → 1 columns**, the hero switches from two columns to stacked, and the
  navbar swaps its link row for a hamburger drawer.
- Verified layouts at **375px, 768px, 1280px and 1512px**.

### 6. Polish & fixes
- Layered the topiary hero background at the **page level** (`z-0`) with all
  content above it (`z-10`) so the plant stays visible behind the hero and the
  "Our Trendy plants" title — matching the Figma intent — while headings remain
  readable.
- Tuned card opacity, image alignment inside product cards, and hover/focus
  states.

### 7. Version control & deployment
- Committed the work to Git and pushed to GitHub.
- Deployed the static build to Vercel (framework preset **Vite**, output `dist`).

## 🧩 Component Overview

| Component          | Responsibility                                                        |
| ------------------ | --------------------------------------------------------------------- |
| `Navbar`           | Logo, links, icons, and a state-driven mobile hamburger drawer.       |
| `HeroBanner`       | Headline, subtext, CTAs, floating testimonial, featured plant card.   |
| `SectionTitle`     | Centered heading flanked by the two decorative gradient swashes.      |
| `TrendingSection`  | Alternating "For Your Desks Decorations" feature cards.               |
| `PlantCard`        | Reusable product card — image, title, description, price, add-to-cart.|
| `TopSellingSection`| Responsive product grid built from `PlantCard`.                       |
| `TestimonialCard`  | Avatar, name, `StarRating` and quote.                                 |
| `ReviewsSection`   | Grid of testimonials.                                                 |
| `StarRating`       | Configurable star rating (supports half stars).                       |
| `O2Section`        | Featured O₂ plant card with copy, CTA, pagination and arrows.         |
| `Footer`           | Brand, socials, quick links, working newsletter form.                 |
| `Button`           | Reusable outlined pill button (renders as `<button>` or `<a>`).       |

## 🎨 Design Tokens (from Figma)

- Page background: `#1B2316` (dark forest green)
- Frosted cards: `rgba(255,255,255,0.07)` with a subtle white border, plus a
  stronger `forest/70` variant for cards over the hero image
- Rating stars: `#FFF84E`
- Headings: **Inter** (Black / SemiBold / Medium) · Nav links: **Indie Flower**
- Desktop artboard width: **1728px**

## 📱 Responsiveness

Designed mobile-first and validated from **320px up to 1440px+**:

- **Mobile** — single-column layout, hamburger navigation drawer.
- **Tablet** — 2-column product grids, stacked hero.
- **Desktop** — 2-column hero and 3-column product grids, full nav bar.

## ♿ Accessibility & Performance

- Semantic landmarks (`header`, `main`, `nav`, `footer`, `section`, `article`).
- Descriptive `alt` text on all images (decorative images are `aria-hidden`).
- Keyboard-navigable menus and buttons with visible `:focus-visible` outlines.
- Optimized responsive images and a code-split production build via Vite.

## 🌐 Deployment

The app is a static Vite build and deploys with zero configuration.
It is deployed live on Vercel at **https://softdev-assessment.vercel.app/**.

**Vercel**

1. Push the repo to GitHub.
2. Import it at [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Framework preset **Vite** · Build command `npm run build` · Output directory
   `dist`.
4. **Deploy**.

**Netlify** (alternative)

- Build command: `npm run build`
- Publish directory: `dist`
