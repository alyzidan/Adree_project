import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // ✅ إصلاح المسارات (aliases) تلقائياً بناءً على tsconfig
    config.plugins = [...(config.plugins || []), tsconfigPaths()]

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': resolve(__dirname, '../src'),
      },
    }

    // ✅ أهم خطوة: خلي esbuild يعرف يقرأ TypeScript Generics داخل JSX
    config.esbuild = {
      ...config.esbuild,
      loader: 'tsx',
      jsx: 'automatic',
      tsconfigRaw: {
        compilerOptions: {
          jsx: 'react-jsx',
          target: 'ESNext',
        },
      },
    }

    return config
  },
}

export default config
