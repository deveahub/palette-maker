module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  globals: {
    "NodeJS": true
  },
  extends: [
    'plugin:jest/recommended',
    'next/core-web-vitals',
    'airbnb-typescript',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: [2, 'single', { avoidEscape: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'no-restricted-exports': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': 'off',
    "arrow-body-style": ["error", "as-needed"],
    "import/extensions": "off"
    
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
