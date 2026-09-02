<h1 align="center">🛍️ ShopEase — E-Commerce Shopping Cart (React)</h1>

<p align="center">
  A colorful product-grid storefront built with React + Vite, as a shopping-cart UI practice
  project.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&labelColor=20232A" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img alt="Status" src="https://img.shields.io/badge/status-work--in--progress-orange" />
  <img alt="License" src="https://img.shields.io/badge/license-unlicensed-lightgrey" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Current Status & Known Issues](#current-status--known-issues)
- [Roadmap](#roadmap)

## Overview

ShopEase renders a responsive grid of 20 sample products (name, price, image) from a static data
file. It's a front-end practice project focused on component structure and styling — the
cart/checkout flow is scaffolded but not yet wired up (see [Current Status](#current-status--known-issues)
below).

## Screenshots

<!--
  Add a screenshot of the product grid here once available, e.g.:
  ![Product grid](docs/screenshots/product-grid.png)
-->

> Screenshots coming soon — drop images into a `docs/screenshots/` folder and reference them here.

## Tech Stack

| Layer     | Technology            |
| --------- | ---------------------- |
| Frontend  | React 19, Vite 7        |
| Icons     | Lucide React            |
| Linting   | ESLint                  |

> `framer-motion`, `react-router-dom`, and `react-icons` are listed in `package.json` but aren't
> used in the code yet — safe to remove until they're needed, or leave them if you're planning to
> add routing/animation next.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top nav with cart icon (not yet rendered in App.jsx)
│   ├── Hero.jsx           # Landing banner (not yet rendered in App.jsx)
│   ├── ProductList.jsx    # Renders the product grid — active in App.jsx
│   ├── ProductCard.jsx    # Single product card ("Add to Cart" button has no handler yet)
│   ├── Cart.jsx            # Cart summary UI (not yet connected to any state)
│   └── Footer.jsx          # Site footer (not yet rendered in App.jsx)
├── data.js                 # Static product list (20 items, id/name/price/image)
├── App.jsx                 # Currently renders only the header + ProductList
├── main.jsx
├── App.css
└── index.css
```

## Current Status & Known Issues

This project is mid-build. Being upfront about where it stands:

- **`App.jsx` only renders the header and product grid.** `Navbar`, `Hero`, `Cart`, and `Footer`
  exist as components but aren't imported or rendered yet.
- **"Add to Cart" doesn't do anything yet** — `ProductCard.jsx`'s button has no `onClick`, and
  there's no cart state (e.g. `useState`) in `App.jsx` to add items to.
- **`Cart.jsx` and `Navbar.jsx` use Tailwind CSS classes, but Tailwind isn't installed or
  configured** in this project (no `tailwind.config.js`, no Tailwind in `package.json`). Until
  it's added, those components will render unstyled if/when they're wired in.
- Styling that *is* live comes from plain CSS in `src/index.css` and `src/App.css`.

## Roadmap

- [ ] Add cart state (`useState`/context) in `App.jsx` and connect `ProductCard`'s "Add to Cart" button
- [ ] Render `Navbar`, `Hero`, `Cart`, and `Footer` in `App.jsx`
- [ ] Install and configure Tailwind CSS (or rewrite `Cart`/`Navbar` in plain CSS to match the rest of the app)
- [ ] Wire up quantity controls and persist cart (e.g. `localStorage`)
- [ ] Remove unused dependencies (`framer-motion`, `react-router-dom`, `react-icons`) or start using them
