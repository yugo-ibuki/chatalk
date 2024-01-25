module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'first'],
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    quotes: ['error', 'single'],
    // @typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      tsx: true,
    },
  },
}
