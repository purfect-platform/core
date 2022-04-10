module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/all', 'standard', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-no-literals': 'off'
  }
}
