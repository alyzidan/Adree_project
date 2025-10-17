import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    // Remove addon-essentials temporarily to avoid version conflicts
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@/components': path.resolve(__dirname, '../src/components'),
        '@/features': path.resolve(__dirname, '../src/features'),
        '@/lib': path.resolve(__dirname, '../src/lib'),
        '@/styles': path.resolve(__dirname, '../src/styles'),
        '@/mocks': path.resolve(__dirname, '../src/mocks'),
      }
    }
    return config
  },
}

export default config