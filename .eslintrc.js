module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // Adding these two to skip eslint errors when using CDN
  globals: {
    Chartist: true,
    L: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-new': 'off',
    'prettier/prettier': ['error'],
  },
};
