import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import type { StorybookConfig } from '@storybook/react-vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': resolve(__dirname, '../src'),
        '@/components': resolve(__dirname, '../src/components'),
        '@/features': resolve(__dirname, '../src/features'),
        '@/lib': resolve(__dirname, '../src/lib'),
        '@/styles': resolve(__dirname, '../src/styles'),
        '@/mocks': resolve(__dirname, '../src/mocks'),
      },
    }
    return config
  },
}

export default config
