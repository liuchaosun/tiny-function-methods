module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    eqeqeq: [2, 'always'],
    'no-eq-null': 2,
    'no-debugger': 1,
    'no-console': 1,
    'comma-dangle': [2, 'only-multiline'],
    'prettier/prettier': 2,
  },
};
