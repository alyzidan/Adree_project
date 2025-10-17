# Task Management App

A modern, production-ready task management application built with React, TypeScript, and TailwindCSS.
presented to Adree.corb

## 🚀 Features

- **Tasks CRUD** - Create, read, update, and delete tasks
- **Dashboard** - Visual metrics and analytics
- **Design System** - Reusable component library with Storybook
- **Search & Filter** - Find tasks quickly
- **Responsive** - Mobile-first design
- **Accessible** - WCAG 2.1 compliant
- **Modern Stack** - React 18, TypeScript, Vite, pnpm

## 🛠️ Tech Stack

### Core

- **Framework:** React 18.3
- **Language:** TypeScript 5.3 (strict mode)
- **Build Tool:** Vite 5.1
- **Package Manager:** pnpm 8+
- **Routing:** React Router v6

### Styling

- **CSS Framework:** TailwindCSS 3.4
- **Icons:** Lucide React

### Development

- **Linting:** ESLint 8
- **Formatting:** Prettier 3
- **CI/CD:** GitHub Actions

## 📦 Getting Started

### Prerequisites

- **Node.js** 18+ or 20+
- **pnpm** 8+ (install: `npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd task-management-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start dev server with hot reload
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors automatically
pnpm format       # Format code with Prettier
pnpm format:check # Check if code is formatted
```

# Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Design system primitives (Button, Input, etc.)
│   ├── layout/         # Layout components (Header, Container, etc.)
│   └── shared/         # Shared components (Loading, Error, etc.)
├── features/           # Feature-based modules
│   ├── tasks/          # Task management
│   │   ├── components/ # Task-specific components
│   │   └── hooks/      # Task-related hooks
│   └── dashboard/      # Dashboard & analytics
│       ├── components/ # Dashboard components
│       └── hooks/      # Dashboard hooks
├── lib/                # Utilities & helpers
│   ├── constants.ts    # App constants
│   └── utils.ts        # Utility functions
├── mocks/              # Mock API (MSW)
├── styles/             # Global styles & Tailwind config
│   └── index.css       # Main CSS file
├── routes.tsx          # Route configuration
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎯 Development Roadmap

- [x] Project setup & configuration
- [x] TailwindCSS v3.4 integration
- [x] Routing with lazy loading
- [x] Layout components
- [x] CI/CD pipeline
- [ ] Design system components
- [ ] State management (Zustand)
- [ ] Mock API (MSW)
- [ ] Tasks CRUD functionality
- [ ] Dashboard & charts
- [ ] Testing (Vitest + Cypress)
- [ ] Storybook documentation

# Code Quality

This project enforces strict code quality standards:

- **TypeScript strict mode** enabled
- **ESLint** with React, TypeScript, and a11y rules
- **Prettier** with Tailwind class sorting
- **Pre-commit hooks** (coming soon)
- **CI/CD** checks on every push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'feat: add feature'`)
4. Push to the branch (`git push origin feature/new-feature`)

## 📝 License

MIT

## 👤 Author

Frontend Lead Assessment Project presented to Aly Zidan.
