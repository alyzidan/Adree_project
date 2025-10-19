# Task Management Application

A modern, production-ready task management application built with React, TypeScript, and Vite. Features comprehensive CRUD operations, advanced filtering, real-time search, and responsive design.

## Features

- Task Management: Create, read, update, and delete tasks with full validation
- Advanced Filtering: Filter by status, category, and priority with debounced search
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Dashboard Analytics: Visual charts and metrics using Chart.js
- Type Safety: Full TypeScript coverage with Zod schema validation
- State Management: Zustand store with optimistic updates
- Component Library: Radix UI primitives with custom styling
- Testing: Comprehensive unit, integration, and E2E tests
- Accessibility: WCAG compliant with proper ARIA labels

## Tech Stack

### Core

- React 18.3
- TypeScript 5.6
- Vite 6.0
- Tailwind CSS 3.4

### State & Data

- Zustand 5.0 (state management)
- React Hook Form 7.53 (forms)
- Zod 3.23 (validation)
- MSW 2.6 (API mocking)

### UI Components

- Radix UI (primitives)
- Lucide React (icons)
- Chart.js (analytics)

### Testing

- Vitest 2.1 (unit/integration)
- React Testing Library 16.1
- Cypress 13.17 (E2E)

### Development

- ESLint 9 & Prettier
- Husky 9 (git hooks)
- Storybook 8

## Requirements

- Node.js 23.x
- pnpm 8.x

## Getting Started

### Installation

```bash
# Clone repository
git clone [<repository-url>](https://github.com/alyzidan/Adree_project)

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Application runs at `http://localhost:5173`

## Available Scripts

### Development

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm type-check   # TypeScript check
```

### Testing

```bash
pnpm test              # Run unit tests (watch mode)
pnpm test:run          # Run tests once
pnpm test:coverage     # Generate coverage report
pnpm test:e2e          # Run E2E tests (headless)
pnpm test:e2e:open     # Open Cypress UI
```

### Code Quality

```bash
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
pnpm format       # Format with Prettier
```

### Storybook

```bash
pnpm storybook         # Start Storybook
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components
│   ├── shared/          # Shared components
│   └── ui/              # UI component library
├── features/
│   ├── dashboard/       # Dashboard feature
│   └── tasks/           # Tasks feature
│       ├── components/  # Task components
│       ├── hooks/       # Custom hooks
│       ├── api.ts       # API service
│       ├── store.ts     # Zustand store
│       └── types.ts     # TypeScript types
├── lib/                 # Utilities and constants
├── mocks/               # MSW handlers
├── styles/              # Global styles
└── test/                # Test utilities
```

## Testing

### Coverage Targets

- Lines: 30%
- Functions: 30%
- Branches: 30%
- Statements: 30%

### Test Types

- unit test
- e2e tests with cypress

### verfiy script - plus

- chmod +x scripts/verify.sh
- ./scripts/verify.sh

- Unit Tests: Utility functions and hooks
- Component Tests: UI components with React Testing Library
- Integration Tests: Feature workflows and forms
- E2E Tests: Complete user journeys with Cypress

View detailed testing documentation in [TESTING.md](./TESTING.md)

## CI/CD

GitHub Actions workflows automatically run on push and pull requests:

- Lint checking
- Type checking
- Unit and integration tests
- E2E tests
- Build verification
- Coverage reporting

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

Production build optimization:

- Code splitting by route and vendor
- Tree shaking
- Minification with Terser
- Gzip compression
- Asset caching

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

## License

MIT License - see [LICENSE](./LICENSE) file for details.

# Test CI
