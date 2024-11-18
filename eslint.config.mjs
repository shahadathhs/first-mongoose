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
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Ensure return types are defined
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused vars starting with "_"
    '@typescript-eslint/no-explicit-any': 'error', // Avoid the usage of 'any' type
    '@typescript-eslint/no-inferrable-types': 'warn', // Warn if type is inferred but explicitly declared
    '@typescript-eslint/explicit-function-return-type': 'error', // Require return types to be explicitly declared
    
    // Express-related rules
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused function arguments like Express middleware
    'no-console': 'warn', // Warn on console logs (use a proper logging library)
    'prefer-const': 'error', // Prefer const over let when variables are not reassigned
    'eqeqeq': 'error', // Enforce strict equality (===)
    'no-magic-numbers': ['warn', { ignoreArrayIndexes: true }], // Avoid magic numbers in code
    'no-duplicate-imports': 'error', // Ensure no duplicate imports in files
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="eval"]',
        message: 'Avoid using eval()',
      },
    ], // Avoid dangerous `eval` calls
    'consistent-return': 'error', // Ensure return statements are consistent in functions

    // Express-specific (ensure middleware and variables are used correctly)
    'no-unused-expressions': 'warn', // Warn on unused expressions (common in Express middleware)
    'no-undef': 'error', // Ensure all variables are defined (useful in Express setup)

    // General Best Practices
    'no-else-return': 'error', // Avoid unnecessary `else` after return
    'no-void': 'error', // Avoid usage of `void` operator
    'no-unneeded-ternary': 'error', // Avoid unnecessary ternary operators
  },
});
