# om29dev.github.io

Personal developer portfolio and technical project showcase for Om Rajendra Bharambe.

Hosted live on GitHub Pages: [https://om29dev.github.io](https://om29dev.github.io)

## Overview

A modern, fast, component-driven developer portfolio built with React 19, TypeScript, Vite, and Tailwind CSS. Showcases hackathon victories, technical research grants, filterable software projects, skills, education, and direct contact channels.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 + @tailwindcss/vite
- **Styling**: Tailwind CSS v4 + custom 3D perspective animations
- **Icons**: Lucide React + custom inline vector assets
- **Deployment**: GitHub Actions workflow to GitHub Pages

## Architecture

```
om29dev.github.io/
|-- .github/workflows/
|   `-- deploy.yml       # Automated GitHub Pages build & deployment
|-- public/
|   |-- assets/
|   |   `-- om-portrait.webp # High-performance WebP photo cutout
|   `-- favicon.svg      # Vector favicon
|-- src/
|   |-- components/
|   |   |-- Navbar.tsx   # Glassmorphic header with theme switcher
|   |   |-- Hero.tsx     # 3D perspective photo cutout & live badges
|   |   |-- Milestones.tsx # Hackathon victories with expansion toggle
|   |   |-- Projects.tsx # Filterable projects with expansion toggle
|   |   |-- Skills.tsx   # Categorized technical capabilities
|   |   |-- Education.tsx # PCCOE B.Tech IT background
|   |   |-- Certifications.tsx # Credentials with expansion toggle
|   |   |-- Contact.tsx  # Direct channels with one-click copy & mailer
|   |   |-- Footer.tsx   # Clean footer & back-to-top
|   |   `-- Icons.tsx    # Pixel-perfect GitHub & LinkedIn vector components
|   |-- data/
|   |   `-- portfolioData.ts # Centralized portfolio content
|   |-- App.tsx          # Root application container
|   |-- main.tsx         # React root mounting
|   |-- index.css        # Tailwind imports & 3D card transforms
|   `-- types.ts         # TypeScript data interfaces
|-- index.html           # Vite root HTML template
|-- vite.config.ts       # Vite bundler configuration
|-- tsconfig.json        # TypeScript configuration
`-- package.json         # Dependencies & scripts
```

## Features

- **3D Perspective Portrait**: Full-body transparent WebP cutout with mouse-tracking 3D tilt, realistic drop shadows, and floating achievement badges without rounded circular cropping.
- **Progressive Disclosure**: Built-in "View More" and "Show Fewer" expansion buttons keep the site concise and scannable without overwhelming the visitor.
- **Light Theme by Default**: Clean, high-contrast light theme with an optional dark mode toggle that respects user preference.
- **Interactive Filtering**: Filter projects smoothly across Full-Stack, AI / Vision, and IoT / Edge categories.
- **Direct Contact Integrations**: One-click copy for mobile (+91 8421936775) and email (ombharambe901@gmail.com) with toast confirmations.
- **Strict Code Standards**: Zero emojis, zero en/em dashes, and standard ASCII typography.

## Local Development

Install dependencies and start the Vite development server:

```powershell
npm install
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build:

```powershell
npm run preview
```