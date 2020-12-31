const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseErrorsRules } = require('eslint-config-airbnb-base/rules/errors');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');

module.exports = {
  // replace Airbnb 'brace-style' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
  'brace-style': 'off',
  '@typescript-eslint/brace-style': baseStyleRules['brace-style'],

  // replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
  camelcase: 'off',
  // the `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
  '@typescript-eslint/naming-convention': [
    'error',
    // allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    // allow camelCase functions (23.2), and PascalCase functions (23.8)
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    // airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],

  // replace Airbnb 'comma-dangle' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
  // the TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': [baseStyleRules['comma-dangle'][0], {
    ...baseStyleRules['comma-dangle'][1],
    enums: baseStyleRules['comma-dangle'][1].arrays,
    generics: baseStyleRules['comma-dangle'][1].arrays,
    tuples: baseStyleRules['comma-dangle'][1].arrays,
  }],

  // replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],

  // replace Airbnb 'dot-notation' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

  // replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

  // replace Airbnb 'indent' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  indent: 'off',
  '@typescript-eslint/indent': baseStyleRules.indent,

  // replace Airbnb 'keyword-spacing' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': baseStyleRules['keyword-spacing'],

  // replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': baseStyleRules['lines-between-class-members'],

  // replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

  // replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

  // replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

  // replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

  // replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

  // replace Airbnb 'no-implied-eval' and 'no-new-func' rules with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
  'no-implied-eval': 'off',
  'no-new-func': 'off',
  '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

  // replace Airbnb 'no-loop-func' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

  // replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

  // replace Airbnb 'no-redeclare' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

  // replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

  // replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': baseBestPracticesRules['no-throw-literal'],

  // replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

  // replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

  // replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

  // replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

  // replace Airbnb 'quotes' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  quotes: 'off',
  '@typescript-eslint/quotes': baseStyleRules.quotes,

  // replace Airbnb 'semi' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  semi: 'off',
  '@typescript-eslint/semi': baseStyleRules.semi,

  // replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],
}
