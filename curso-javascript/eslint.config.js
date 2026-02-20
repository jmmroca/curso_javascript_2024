// eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Archivos a ignorar globalmente
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    // Configs recomendados de ESLint y plugins
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended, // React Hooks
      reactRefresh.configs.vite,           // React Refresh (Vite)
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      // Ignorar variables no usadas que empiecen por mayúscula o _
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);
