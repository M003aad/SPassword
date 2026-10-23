module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        browser: 'readonly',
        chrome: 'readonly',
        crypto: 'readonly',
        document: 'readonly',
        module: 'readonly',
        Uint8Array: 'readonly',
      },
    },
    rules: {
      'constructor-super': 'error',
      eqeqeq: ['error', 'always'],
      'no-const-assign': 'error',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-unreachable': 'error',
      'no-undef': 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-var': 'error',
    },
  },
];
