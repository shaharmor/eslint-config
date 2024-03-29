module.exports = {
  root: true, // this config should be the only eslint config loaded to make things easier to follow
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
    'plugin:prettier/recommended' // eslint-plugin-prettier
  ],
  parser: 'vue-eslint-parser', // eslint-plugin-vue
  parserOptions: {
    parser: '@typescript-eslint/parser', // @typescript-eslint/eslint-plugin
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2018,
    sourceType: 'module',
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
    'coverage/',
    '.eslintrc.js'
  ],
  env: {
    es6: true
  },
  settings: {
    'import/parsers': {
      //  '@typescript-eslint/parser': ['.ts', '.tsx'] // already configured in parserOptions.parser
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      },
    }
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...require('./airbnb-compatibility'),

    // require types always
    '@typescript-eslint/explicit-function-return-type': 'error',

    // require accessibility definition on all class members except the constructor
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public'
        }
      }
    ],

    // require types always
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // don't add newline between single line class members
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],

    // order class members in public-protected-private order
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
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        'registeredComponentsOnly': false,
      }
    ],
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

    // should prefer named exports unless absolutely required
    'import/no-default-export': 'error',

    // tests/tools might require dev dependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.{test,spec}.ts',
          '**/{tests,__tests__}/**/*.ts',
          'webpack.config.ts',
          'jest.config.ts',
          'nuxt.config.ts',
          'tailwind.config.js'
        ]
      }
    ],

    // order imports alphabetically for easier reading
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        }
      }
    ],

    // should prefer named exports unless absolutely required
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'error',
    'no-continue': 'off',
    'no-debugger': 'error',
    'no-plusplus': [
      'error', {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-restricted-syntax': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true
      }
    ]
  },
  overrides: [
    {
      files: [
        '*.vue',
        'webpack.config.ts',
        'jest.config.ts',
        'nuxt.config.ts'
      ],
      rules: {
        'import/no-default-export': 'off',
      }
    },
    {
      files: [
        '*.js'
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
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
        '@typescript-eslint/unbound-method': 'off'
      }
    }
  ]
};
