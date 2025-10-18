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
- [x] Design system components
- [x] State management (Zustand)
- [x] Mock API (MSW)
- [x] Tasks CRUD functionality
- [ ] Dashboard & charts
- [ ] Testing (Vitest + Cypress)
- [ ] Storybook documentation

## State Management

### Zustand Store

- **Location:** `src/features/tasks/store.ts`
- **Features:**
  - Centralized state for tasks
  - CRUD operations
  - Filtering, sorting, pagination
  - Optimistic updates
  - Error handling
  - DevTools integration

### Custom Hooks

- `useTasks()` - Main hook for fetching and managing tasks
- `useTaskFilters()` - Debounced search and filter management
- `useTaskMutations()` - CRUD operations with toast notifications

### Mock API (MSW)

- **Location:** `src/mocks/`
- Mock Service Worker intercepts HTTP requests
- 30 sample tasks with realistic data
- Simulates network delay (500ms)
- Full CRUD support with in-memory storage

## Tasks CRUD Implementation

### Components Structure

```
src/features/tasks/
├── components/
│   ├── TaskList.tsx          # Main list container
│   ├── TaskTable.tsx         # Desktop table view
│   ├── TaskCards.tsx         # Mobile cards view
│   ├── TaskForm.tsx          # Form with validation
│   ├── TaskModal.tsx         # Create/Edit modal
│   ├── TaskSearch.tsx        # Debounced search
│   ├── TaskFilters.tsx       # Status/Category/Priority filters
│   ├── TaskSort.tsx          # Sorting controls
│   ├── TaskPagination.tsx    # Pagination controls
│   └── DeleteTaskDialog.tsx  # Delete confirmation
├── hooks/
│   ├── useTasks.ts           # Main data hook
│   ├── useTaskFilters.ts     # Filter management
│   └── useTaskMutations.ts   # CRUD operations
├── store.ts                  # Zustand state management
├── api.ts                    # API service layer
├── types.ts                  # TypeScript types
└── schema.ts                 # Zod validation schemas
```

### Features Implemented

# CRUD Operations

- **Create**: Modal form with validation
- **Read**: Paginated list with filters
- **Update**: Inline edit via modal
- **Delete**: Confirmation dialog

# Filtering & Search

- Debounced search (300ms)
- Filter by status, category, priority
- Reset filters button
- Active filter indicators

# Sorting

- Sort by: date, title, due date, hours, priority
- Toggle ascending/descending order
- Visual sort indicators

# Pagination

- Configurable page size (5, 10, 20, 50)
- Page navigation controls
- Results counter

# Responsive Design

- **Desktop**: Full table view with all columns
- **Mobile**: Card-based layout
- Collapsible filters on mobile
- Touch-friendly buttons

# Form Validation

- React Hook Form + Zod schemas
- Real-time validation
- Inline error messages
- Required field indicators

# User Feedback

- Toast notifications for all actions
- Loading states during operations
- Empty states with helpful messages
- Error handling with retry options

# Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus management in modals
- Screen reader friendly

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
