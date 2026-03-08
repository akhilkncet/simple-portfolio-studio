

## Analysis

This is a **single-page portfolio site** with no client-side routing (no React Router). All content lives on one page (`/`) with anchor sections (`#home`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`). All data is static and hardcoded in `src/lib/data/index.ts`.

There are no routes like `/projects`, `/blog`, `/about` -- those don't exist. So the request for generating multiple static HTML files is not applicable here.

**Important constraint**: Lovable cannot run headless Chrome/Puppeteer, so tools like `react-snap` or `prerender-spa-plugin` will not work in this environment. However, since all content is static data, we can achieve the same SEO result through a different approach.

## Plan

### 1. Inject static HTML content into `index.html`

Instead of an empty `<div id="root"></div>`, populate it with the full semantic HTML of the page content. React will hydrate over this on load via `hydrateRoot` instead of `createRoot`. This gives crawlers real content immediately.

The static HTML will include:
- Navigation links
- Hero section with name, title, and tagline
- About section with bio text
- Skills list
- Experience entries (all 3 roles with company, period, responsibilities)
- Project cards (all 8 projects with titles, descriptions, tech stacks)
- Contact information
- Footer

### 2. Switch from `createRoot` to `hydrateRoot` in `main.tsx`

Change `src/main.tsx` to use `hydrateRoot` so React attaches to the pre-existing HTML instead of replacing it. This preserves the SEO content and avoids a flash.

### 3. Move structured data (JSON-LD) into `index.html`

Currently the `StructuredData` component renders JSON-LD via `dangerouslySetInnerHTML` at runtime. Move all four schemas (Person, ProfilePage, WebSite, BreadcrumbList) as static `<script type="application/ld+json">` tags directly into the `<head>` of `index.html`. Remove or simplify the React component.

### 4. Enhance `<head>` meta tags

Add missing SEO tags to `index.html`:
- `og:image` tag (using the profile image)
- `twitter:title`, `twitter:description`, `twitter:image`
- `robots` meta tag

### 5. Add `<noscript>` fallback

Add a `<noscript>` block with a message and key content for users/crawlers with JS disabled.

### 6. Remove the splash screen blocking pattern

The `SplashScreen` component with `showSplash` state hides all content until an animation completes. For SEO, the static HTML in `#root` is visible immediately. The splash overlay can remain as a visual effect but should not conditionally prevent content from rendering. Change it from `{showSplash && <SplashScreen>}` gating content to an overlay that sits on top.

### 7. Clean up `StructuredData` component

Since JSON-LD moves to `index.html`, simplify or remove the `StructuredData` component to avoid duplicate schema markup.

---

### Technical notes

- **No multi-page generation needed**: The site has zero routes beyond `/`. The requested paths (`/projects`, `/blog`, `/about`, `/contact`) don't exist as separate pages.
- **`react-snap` is not viable** in the Lovable build environment (no headless browser). The static HTML injection approach achieves the same SEO outcome.
- **`hydrateRoot`** requires the server-rendered HTML to match the React output. We'll ensure the static HTML structure matches what the components render.
- The `dateModified` field in the ProfilePage schema will be set to a fixed date in the static version (since `new Date().toISOString()` can't run at build time in HTML).

