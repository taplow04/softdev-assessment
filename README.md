# FloraVision 🌿 — Product Listing Page

A pixel-perfect, fully responsive recreation of the **FloraVision** plant-store
product listing page from the provided Figma design, built with **React** and
**Tailwind CSS**.

Every section, image, color, font and piece of copy was extracted directly from
the Figma source file (`Front-end test.fig`) so the result matches the design as
closely as possible across desktop, tablet and mobile.

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
  `PlantCard`s with hover lift + image zoom effects.
- **Customer Reviews** — testimonial cards with avatar, name, star rating and quote.
- **O₂ Plants** — featured plant card with descriptive copy, CTA, pagination dots
  and navigation arrows.
- **Footer** — brand info, social links, quick links and a working newsletter
  subscribe form.
- Semantic HTML, keyboard-accessible navigation, visible focus states, `alt` text
  on all images and smooth hover / transition animations.

## 🛠️ Tech Stack

| Purpose            | Tool                    |
| ------------------ | ----------------------- |
| UI library         | React 18                |
| Styling            | Tailwind CSS 3          |
| Build tool / dev   | Vite 5                  |
| Fonts              | Inter + Indie Flower (Google Fonts) |
| Deployment         | Vercel / Netlify        |

## 📁 Project Structure

```
├── public/assets/          # All images exported from the Figma file
├── src/
│   ├── components/
│   │   ├── Button.jsx         # Reusable outlined pill button
│   │   ├── Navbar.jsx         # Nav + mobile drawer
│   │   ├── HeroBanner.jsx
│   │   ├── SectionTitle.jsx   # Heading with decorative swashes
│   │   ├── TrendingSection.jsx
│   │   ├── PlantCard.jsx      # Reusable product card
│   │   ├── TopSellingSection.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── ReviewsSection.jsx
│   │   ├── StarRating.jsx
│   │   ├── O2Section.jsx
│   │   └── Footer.jsx
│   ├── data/content.js       # All copy / prices / asset references
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Tailwind layers + design tokens
├── tailwind.config.js        # Custom colors, fonts, animations
└── vite.config.js
```

Components are broken into small, reusable pieces and driven by **configurable
props** (e.g. `<PlantCard plant={...} />`, `<Button label icon href />`,
`<TestimonialCard review={...} />`).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** and npm

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create an optimized production build
npm run build

# 4. Preview the production build locally
npm run preview
```

## 🌐 Deployment

The app is a static Vite build and deploys with zero configuration.

**Vercel**

1. Push this repo to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. Framework preset **Vite** → Build command `npm run build` → Output `dist`.

**Netlify**

- Build command: `npm run build`
- Publish directory: `dist`

> A live deployment URL will be added here after publishing.

## 🎨 Design Tokens (from Figma)

- Page background: `#1B2316` (dark forest green)
- Frosted cards: `rgba(255,255,255,0.05)` with subtle white border
- Rating stars: `#FFF84E`
- Headings: **Inter** (Black / SemiBold / Medium) · Nav links: **Indie Flower**

## ♿ Accessibility & Performance

- Semantic landmarks (`header`, `main`, `nav`, `footer`, `section`, `article`).
- All images include descriptive `alt` text (decorative images are `aria-hidden`).
- Keyboard-navigable menus and buttons with visible `:focus-visible` outlines.
- Optimized responsive images and code-split production build via Vite.
