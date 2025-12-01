# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # SHC — Clinic Website (React + TypeScript + Vite)

  A responsive clinic website built with React, TypeScript, Vite and Tailwind CSS. The project includes pages for services, blog, appointments, and doctor profiles. It's set up for local development with Vite and is deployable to platforms like Vercel.

  ## Key features

  - React 19 + TypeScript
  - Vite for fast development and builds
  - Tailwind CSS for styling
  - React Router for client routing
  - Forms with react-hook-form and validation via zod
  - SEO helpers (react-helmet-async)
  - Image utilities

  ## Tech stack

  - react, react-dom
  - typescript, vite
  - tailwindcss, postcss, autoprefixer
  - react-router-dom, framer-motion
  - react-hook-form, zod

  Check `package.json` for exact versions and available npm scripts.

  ## Prerequisites

  - Node.js 18+ (or a modern LTS)
  - npm (or yarn/pnpm)

  ## Quick start

  Open a terminal at the project root and run:

  ```powershell
  npm install
  npm run dev
  ```

  This starts the Vite dev server and opens the app in your browser.

  Other useful scripts (see `package.json`):

  - `npm run build` — build the production bundle (runs `tsc -b && vite build`)
  - `npm run preview` — preview the production build locally
  - `npm run lint` — run ESLint across the repo
  - (no placeholder-generator script included)

  ## Project structure (high level)

  - `src/` — application source
    - `pages/` — top-level routes (Home, About, Services, Blog, Contact, Appointment)
    - `components/` — UI components and shared pieces
    - `layouts/` — page layouts (e.g. `MainLayout`)
    - `assets/`, `styles/` — static styles and assets
  - `public/` — static public assets served as-is
  - `scripts/` — helper scripts
  - `vite.config.ts`, `tsconfig*.json`, `postcss.config.js`, `tailwind.config.js`

  ## Deployment

  Vercel is a good fit (there's a `vercel.json` included). Build uses Vite; the `build` script runs `tsc -b && vite build`.

  ## Notes & tips

  - If you see TypeScript project references errors when running `npm run build`, ensure `typescript` is installed (it's in `devDependencies`) and run `npm install` first.
  - To add images, put them under `public/assets/images` or update the components that reference `public/` assets.

  ## Contributing

  1. Fork the repo or create a branch.
  2. Install deps: `npm install`
  3. Make changes and run `npm run dev` to test.
  4. Open a PR describing your changes.

  ## License

  No license specified in this repository. Add a `LICENSE` file if you want to open-source this project under a specific license.

  ---

  If you'd like, I can also:

  - run a quick lint/build check in a terminal (requires installing deps), or
  - add a short CONTRIBUTING.md or a basic LICENSE file.

  Tell me which follow-up you'd like next.
