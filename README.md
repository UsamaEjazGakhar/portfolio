# Usama Ejaz Portfolio

A pixel-perfect application built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
usama-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Global styles, CSS variables, animations
├── components/
│   ├── Navbar.tsx          # Fixed navbar w/ mobile menu
│   ├── SocialSidebar.tsx   # Fixed left social icons
│   ├── Hero.tsx            # Hero section w/ typing effect + stats
│   ├── CountUp.tsx         # Animated number counter
│   ├── Cooperation.tsx     # Infinite marquee of companies
│   ├── Services.tsx        # 9 service cards grid
│   ├── Experience.tsx      # Tabbed experience + education
│   ├── Projects.tsx        # Filterable project grid (22 projects)
│   ├── Skills.tsx          # Animated skill bars + tech cloud
│   ├── Testimonials.tsx    # Dual infinite marquee testimonials
│   ├── Contact.tsx         # Contact form w/ validation
│   └── Footer.tsx          # Footer w/ nav + socials
├── tailwind.config.ts      # Tailwind theme + custom animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0c0c0c` |
| Card | `#111111` |
| Border | `#1e1e1e` |
| Accent Green | `#a8ff3e` |
| Muted Text | `#888888` |
| Font (body) | Inter |
| Font (mono) | JetBrains Mono |

---

## ✨ Features

- **Dark theme** — deep `#0c0c0c` background with lime `#a8ff3e` accent
- **Typing animation** — cycles through developer roles with erase effect
- **CountUp numbers** — triggered by IntersectionObserver on scroll
- **Animated skill bars** — scroll-triggered fill animations
- **Infinite marquee** — CSS-animated company logos + dual-row testimonials
- **Project filters** — AnimatePresence-powered category filtering
- **Framer Motion** — staggered fade-ups, layout animations, hover effects
- **Responsive** — mobile, tablet, desktop breakpoints
- **Contact form** — client-side validation + success state
- **Fixed navbar** — blur backdrop on scroll + mobile hamburger
- **Social sidebar** — fixed left panel (desktop only)

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` | Framework (App Router) |
| `framer-motion` | Animations & transitions |
| `react-icons` | Icon library (Fi, Si sets) |
| `clsx` | Conditional classnames |
| `tailwindcss` | Utility CSS |
| `typescript` | Type safety |
