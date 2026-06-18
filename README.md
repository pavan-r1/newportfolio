# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Pavan R Portfolio

Premium AI-themed React portfolio built with Vite, Tailwind CSS, Framer Motion, and React Icons.

## Production Assets

All deployable assets are served from `public/` using absolute paths:

- `/intro.mp4`
- `/intro.mp3`
- `/profile.jpg`
- `/certificates/*`

## Vercel Deployment

The repo includes `vercel.json` with SPA rewrites so deep links resolve correctly on Vercel.

Build locally with:

```bash
npm install
npm run build
```

If you deploy under a custom domain, update the absolute URLs used in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## SEO

The site includes canonical metadata, Open Graph tags, Twitter Card tags, JSON-LD Person schema, `robots.txt`, and `sitemap.xml` for indexing support.
