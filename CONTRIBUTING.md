# Contributing Guide

Thank you for contributing to this project.

## Development Setup

### Prerequisites
- Node.js 20.x, 22.x, or 23.x
- pnpm 8.x or 9.x

### Setup Steps

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Create a branch: `git checkout -b feature/your-feature`
4. Make your changes
5. Run tests: `pnpm test:run`
6. Run E2E tests: `pnpm test:e2e`
7. Commit with conventional commits
8. Push and open a PR

## Code Standards

### TypeScript
- Use strict type checking
- Avoid `any` type
- Export types when shared

### Components
- Use functional components with hooks
- Implement proper prop types
- Add JSDoc comments for complex logic

### Testing
- Write tests for new features
- Maintain 60% coverage minimum
- Test user interactions, not implementation

### Styling
- Use Tailwind utility classes
- Follow existing design patterns
- Ensure responsive design

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add tests
chore: maintenance tasks
perf: performance improvements
ci: CI/CD changes
```

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass locally
4. Update CHANGELOG if applicable
5. Request review from maintainers
6. Address review feedback

## Code Review Guidelines

- Be respectful and constructive
- Focus on code quality and maintainability
- Suggest improvements with examples
- Approve when satisfied with changes

## Questions

Open an issue for questions or discussions.
