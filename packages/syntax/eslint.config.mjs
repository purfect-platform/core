import path from 'node:path'
import { fileURLToPath } from 'node:url'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import globals from 'globals'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'plugin:react/all',
      'standard',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@next/next/recommended'
    )
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier: fixupPluginRules(prettier)
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: 'detect'
      }
    },

    rules: {
      'no-multi-spaces': 'error',
      'no-use-before-define': 'off',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'if']
        },
        {
          blankLine: 'always',
          prev: 'import',
          next: '*'
        },
        {
          blankLine: 'never',
          prev: 'import',
          next: 'import'
        },
        {
          blankLine: 'always',
          prev: ['if'],
          next: '*'
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['const', 'let', 'var', 'export']
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var', 'export'],
          next: '*'
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var', 'export'],
          next: ['const', 'let', 'var', 'export']
        }
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

      'react/require-default-props': 'off',
      'react/jsx-no-bind': 'off',
      'react/forbid-component-props': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-max-depth': 'off',
      'react/jsx-no-literals': 'off',
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

      'react/react-in-jsx-scope': 'off',

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          semi: false,
          trailingComma: 'none',
          printWidth: 100
        }
      ],

      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_'
        }
      ],

      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false
        }
      ],

      'import/no-duplicates': 'error',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'object',
            'type'
          ],

          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before'
            },
            {
              pattern: 'react-**',
              group: 'external',
              position: 'before'
            },
            {
              pattern: '@app/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@**/**',
              group: 'external',
              position: 'after'
            },
            {
              pattern: '**/*.css',
              group: 'type',
              position: 'after'
            }
          ],

          pathGroupsExcludedImportTypes: ['react', 'react-**'],

          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          }
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports'
        }
      ]
    }
  }
]
