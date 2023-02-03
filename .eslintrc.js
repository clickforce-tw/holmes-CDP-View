module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['prettier', 'vue', '@typescript-eslint'],
  rules: {
    'no-unused-expressions': 'off',
    'vue/no-v-html': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-unexpected-multiline': 'error',
  },
}
