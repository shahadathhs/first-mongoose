import { defineConfig } from 'eslint-define-config';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';

export default defineConfig({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2021, 
      sourceType: 'module',
    },
    globals: {
      process: 'readonly',
      __dirname: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': eslintPluginTypescript,
  },
  rules: {
    // TypeScript rules
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error', 
    // JavaScript rules
    'no-console': 'warn',
    'eqeqeq': 'error', 
    'prefer-const': 'error',
  },
});
