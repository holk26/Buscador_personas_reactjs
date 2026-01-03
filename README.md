# Buscador de Personas - React + TypeScript + Vite

A modern React application built with TypeScript and Vite for fast development and optimal performance.

## 🚀 Features

- ⚡️ Vite 6 - Lightning fast build tool
- ⚛️ React 18.3 - Latest React features
- 🔷 TypeScript - Type safety and better DX
- 🧪 Vitest - Fast unit testing
- 🎨 ESLint - Code quality and consistency
- 📦 Modern tooling and latest dependencies

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm 10+

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will open automatically at [http://localhost:3000](http://localhost:3000)

### Build

Build for production:

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview

Preview the production build:

```bash
npm run preview
```

### Testing

Run tests:

```bash
npm run test
```

### Linting

Check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
.
├── public/          # Static assets
├── src/
│   ├── App.tsx      # Main App component
│   ├── App.css      # App styles
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
└── tsconfig.json    # TypeScript configuration
```

## 🚀 Deployment

This project is configured to deploy automatically to GitHub Pages.

### Automatic Deployment

Every push to the `main` branch triggers an automatic deployment to GitHub Pages via GitHub Actions.

The site will be available at: [https://holk26.github.io/Buscador_personas_reactjs/](https://holk26.github.io/Buscador_personas_reactjs/)

### Manual Deployment

To deploy manually using gh-pages:

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.

**Note:** Make sure GitHub Pages is enabled in your repository settings and set to deploy from the `gh-pages` branch (for manual deployment) or GitHub Actions (for automatic deployment).

## 🔧 Technologies

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vite.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework
- [ESLint](https://eslint.org/) - Linting

## 📝 License

This project is private.

