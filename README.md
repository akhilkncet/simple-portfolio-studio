# AKHIL R - Portfolio

**Modern Neo-Brutalist Portfolio built with React, Vite & Tailwind CSS**

> 🚀 Optimized with code-splitting, lazy loading, PWA support, and performance-first architecture.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production Build
npm run build

# Preview Production
npm run preview
```

Visit: http://localhost:5173

## ✨ Features

- ⚡ **Code Splitting** — Lazy-loaded sections with React.lazy & Suspense
- 🖼️ **Image Optimization** — Custom OptimizedImage component with lazy loading
- 📱 **PWA Support** — Service worker with offline caching
- 🎨 **Neo-Brutalist Design** — Bold, distinctive visual identity
- 🎬 **GSAP Animations** — Smooth scroll reveals and splash screen
- ✉️ **Contact Form** — Powered by EmailJS
- 📄 **SEO Optimized** — Meta tags, sitemap, robots.txt, JSON-LD ready
- 🖱️ **Custom Cursor** — Interactive cursor on desktop

## 👨‍💻 About

Portfolio of **Akhil R**, a Computer Science student specializing in:
- 🚀 Backend Development (Python, Django, Flask)
- 🤖 Machine Learning & AI (PyTorch, Scikit-learn)
- 💻 Full Stack Development (React, REST APIs)
- 🐳 DevOps (Docker, Git, Linux)

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SplashScreen.tsx
│   └── OptimizedImage.tsx
├── hooks/               # Custom React hooks
│   ├── useCursor.ts
│   ├── usePWA.ts
│   ├── useScrollProgress.ts
│   └── useScrollReveal.ts
├── lib/
│   ├── data/index.ts    # Portfolio data
│   └── colorMap.ts
├── types/index.ts       # TypeScript interfaces
├── index.css            # Global styles & design tokens
├── App.tsx              # Root component
└── main.tsx             # Entry point
```

## 🎨 Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **GSAP** — Animation library
- **EmailJS** — Contact form emails

## 🌟 Customization

### Update Personal Info

Edit [src/lib/data/index.ts](src/lib/data/index.ts) to update:
- Experience entries
- Projects
- Achievements & Certifications

### Change Colors

Modify [tailwind.config.js](tailwind.config.js):
```js
colors: {
  'neo-yellow': '#FBFF48',
  'neo-pink': '#FF70A6',
  // ... add your colors
}
```

## 🌐 Deploy

Works on any static hosting:
- **Lovable** — One-click publish
- **Vercel / Netlify** — Connect GitHub repo
- **GitHub Pages** — Use `dist/` output

## 📝 License

MIT License — feel free to use for your own portfolio!

---

Portfolio of Akhil R — AI & Backend Developer
