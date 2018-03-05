module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier', 'flowtype', 'react', 'jest'],
  extends: [
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    'jest/globals': true
  },
  globals: {
    chrome: false
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        semi: false
      }
    ],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'no-console': [1],
    'no-alert': [2],
    'no-labels': [2],
    'no-void': [2],
    'no-eval': [2],
    'no-implied-eval': [2],
    'no-script-url': [2],
    'no-native-reassign': [2],
    'no-new-wrappers': [2],
    'no-new': [2],
    'no-new-func': [2],
    'no-param-reassign': [2],
    'no-sequences': [2],
    'no-throw-literal': [2],
    'no-unused-expressions': [2],
    'no-useless-concat': [2],
    'no-extend-native': [2],
    'no-redeclare': [2],
    'no-fallthrough': [2],
    'no-implicit-coercion': [2],
    'no-loop-func': [2],
    'no-return-assign': [2, 'always'],
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    'no-else-return': [2],
    'no-process-env': [1],
    'default-case': [2],
    radix: [2],
    yoda: [2, 'never'],
    'wrap-iife': ['error', 'inside'],
    'dot-notation': [2]
  }
}
