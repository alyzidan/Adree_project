#!/bin/bash

set -e

echo "🔍 Running full project verification..."
echo ""

echo "📦 Cleaning..."
rm -rf node_modules/.cache dist coverage cypress/videos cypress/screenshots
echo "✅ Clean complete"
echo ""

echo "🔧 Installing dependencies..."
pnpm install --frozen-lockfile
echo "✅ Install complete"
echo ""

echo "🎨 Linting..."
pnpm lint
echo "✅ Lint complete"
echo ""

echo "🔍 Type checking..."
pnpm type-check
echo "✅ Type check complete"
echo ""

echo "🧪 Running unit tests..."
pnpm test:run
echo "✅ Tests complete"
echo ""

echo "📊 Generating coverage..."
pnpm test:coverage
echo "✅ Coverage complete"
echo ""

echo "🏗️  Building..."
pnpm build
echo "✅ Build complete"
echo ""

echo "🎭 Running E2E tests..."
pnpm test:e2e
echo "✅ E2E tests complete"
echo ""

echo "✅ All verifications passed!"
echo ""
echo "📦 Build artifacts in: dist/"
echo "📊 Coverage report in: coverage/index.html"
echo ""