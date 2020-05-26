module.exports = {
  extends: [
    'eslint:recommended', // baseline
    'airbnb-base',  // eslint-config-airbnb-base
    'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // @typescript-eslint/eslint-plugin
    'plugin:import/errors', // eslint-plugin-import
    'plugin:import/warnings', // eslint-plugin-import
    'plugin:import/typescript', // eslint-import-resolver-typescript
    'plugin:vue/recommended', // eslint-plugin-vue
    'plugin:jest/recommended', // eslint-plugin-jest
    // 'prettier', // eslint-config-prettier (included in plugin:prettier/recommended)
    'plugin:prettier/recommended', // eslint-plugin-prettier
    'prettier/@typescript-eslint', // eslint-config-prettier
    'prettier/vue' // eslint-config-prettier
  ],
  parser: 'vue-eslint-parser', // eslint-plugin-vue
  parserOptions: {
    parser: '@typescript-eslint/parser', // @typescript-eslint/eslint-plugin
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    // '@typescript-eslint', // @typescript-eslint/eslint-plugin (included in plugin:@typescript-eslint/recommended)
    // 'import', // eslint-plugin-import (included in plugin:import/*)
    // 'prettier', // eslint-plugin-prettier (included in plugin:prettier/recommended)
    // 'vue', // eslint-plugin-vue (included in plugin:vue/recommended)
    // 'jest // eslint-plugin-jest (included in plugin:jest/recommended)
  ],
  ignorePatterns: [
    '.idea/',
    'node_modules/',
    'dist/',
    '.eslintrc.js',
    'jest.config.js'
  ],
  env: {
    es6: true
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public'
        }
      }
    ],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method'
        ]
      }
    ],
    '@typescript-eslint/no-unused-expressions': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        json: 'always',
        vue: 'always'
      }
    ],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.{test,spec}.ts',
          '**/{tests,__tests__}/**/*.ts',
          'webpack.config.ts',
          'jest.config.js',
          'tailwind.config.js'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'no-await-in-loop': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'import/no-default-export': 'off',
      }
    },
    {
      files: [
        '*.js'
      ],
      rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off'
      }
    },
    {
      files: [
        '*.test.ts'
      ],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
};
