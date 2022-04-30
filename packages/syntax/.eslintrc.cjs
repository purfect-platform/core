module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/all',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended'
  ],
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
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-multi-spaces': 'error',
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['return', 'if'] },
      { blankLine: 'always', prev: ['if', 'import'], next: '*' }
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function'
      }
    ],
    // 'react/jsx-wrap-multilines': [
    //   'error',
    //   {
    //     declaration: 'parens-new-line',
    //     condition: 'parens-new-line',
    //     logical: 'parens-new-line'
    //   }
    // ],
    'react/require-default-props': 'off',
    'react/jsx-no-bind': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-no-literals': 'off',
    'react/jsx-indent': ['error', 2, { checkAttributes: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
