module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:vue/recommended',
    'prettier/@typescript-eslint',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier'
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
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'ts': 'never',
        'vue': 'never'
      }
    ],
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.test.ts'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        'exceptAfterSingleLine': true
      }
    ],
    'no-await-in-loop': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off'
  }
};
