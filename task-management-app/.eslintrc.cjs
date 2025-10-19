module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  overrides: [
    {
      //Allowing Storybook files
      files: ['**/*.stories.@(ts|tsx|js|jsx)'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
    {
      //Allowing Cypress files
      files: ['cypress/**/*.ts', 'cypress/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // Allowing dev files
      files: [
        'src/lib/devTools.ts',
        'src/test/**/*.ts',
        'src/test/**/*.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
}
