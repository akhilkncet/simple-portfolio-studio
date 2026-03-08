# AKHIL R - Portfolio (Next.js 15)

**Modern Neo-Brutalist Portfolio with SSG for Perfect SEO + Performance Optimizations**

> **✨ Migration Complete!** This portfolio has been migrated from Vite to Next.js 15 with Static Site Generation for optimal SEO.
> 🚀 **Performance Optimized!** Code-splitting, lazy loading, PWA support, and Web Vitals monitoring.
> See [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) and [PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md) for full details.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production Build (generates static files)
npm run build

# Preview Production
npm run start
```

Visit: http://localhost:3000

## 📋 What's New (Latest Updates)

### ✨ Performance Optimizations (March 2026)
✅ **Code Splitting** - GSAP and EmailJS lazy-loaded (-70KB initial bundle)
✅ **Image Optimization** - Custom OptimizedImage component with lazy loading
✅ **PWA Support** - Service worker with offline caching
✅ **Web Vitals Monitoring** - Vercel Analytics + Speed Insights
✅ **LCP Optimization** - Preloaded hero image, faster splash screen
✅ **GitHub Stats** - Client-side fetch with loading states

### 🏗️ Architecture (Next.js Migration)
✅ **Next.js 15** with App Router
✅ **Static Site Generation (SSG)** - Perfect for SEO
✅ **Multiple Routes** - Dedicated pages for each section
✅ **Server-Side API** - GitHub stats with caching
✅ **Full SEO Optimization** - Sitemap, robots.txt, meta tags
✅ **100% Crawlable** - All content visible to search engines

## 🌐 Routes

- `/` - Home/Hero
- `/about` - About Me
- `/skills` - Tech Stack
- `/experience` - Work History
- `/projects` - Portfolio Projects
- `/achievements` - Certificates & Awards
- `/contact` - Contact Form

## 👨‍💻 About

This portfolio showcases the work of **Akhil R**, a Computer Science student specializing in:
- 🔐 Cybersecurity & Penetration Testing
- 🚀 Backend Development (Python, Django, Flask)
- 🤖 Machine Learning & AI
- 💻 Full Stack Development

## 🎯 SEO Features

- ✅ Static HTML generation (not client-side rendering)
- ✅ Proper meta tags on every page
- ✅ XML sitemap at `/sitemap.xml`
- ✅ robots.txt at `/robots.txt`
- ✅ Open Graph tags for social media
- ✅ Server-side GitHub API with caching
- ✅ Google & social media crawlable

## 🌐 Deploy

### Vercel (Recommended)
```bash
npx vercel
```

### Other Platforms (Netlify, GitHub Pages, etc.)
- Build command: `npm run build`
- Output directory: `out/`

## 📁 Project Structure

```
src/app/
├── layout.tsx              # Root layout with metadata
├── ClientLayout.tsx        # Client-side hooks wrapper
├── page.tsx               # Home page (/)
├── about/page.tsx         # About route
├── skills/page.tsx        # Skills route
├── experience/page.tsx    # Experience route
├── projects/page.tsx      # Projects route
├── achievements/page.tsx  # Achievements route
├── contact/page.tsx       # Contact route
├── api/
│   └── github-stats/      # Server-side GitHub API
│       └── route.ts
├── components/            # Shared components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Marquee.tsx
│   └── SplashScreen.tsx
├── hooks/                 # Client-side hooks
│   ├── useCursor.ts
│   ├── useScrollReveal.ts
│   └── useScrollProgress.ts
├── data/                  # Static data
│   └── index.ts
├── types/                 # TypeScript interfaces
│   └── index.ts
├── sitemap.ts            # XML sitemap generator
├── robots.ts             # robots.txt generator
└── globals.css           # Global styles
```

## 🎨 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **GSAP** - Animation library
- **Remix Icons** - Icon library

## 🌟 Customization

### Update Personal Info

Edit the data in [src/app/data/index.ts](src/app/data/index.ts):
- Skills
- Experience
- Projects
- Achievements
- Testimonials

### Change Colors

Modify Tailwind config in [tailwind.config.js](tailwind.config.js):
```js
colors: {
  'neo-yellow': '#FBFF48',
  'neo-pink': '#FF70A6',
  // ... add your colors
}
```

### GitHub Username

Update the `.env.local` file:
```
GITHUB_USERNAME=your-username
```

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Portfolio of Akhil R - Cybersecurity Enthusiast & Backend Developer
