module.exports = {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' }, singleline: { delimiter: 'comma', requireLast: false }, }],
  '@typescript-eslint/semi': ['error', 'never'],
  'babel/no-unused-expressions': 'error',
  'class-methods-use-this': 'off',
  'curly': ['error', 'multi-line'],
  'default-case': 'off',
  'global-require': 'off',
  'import/extensions': ['error', 'ignorePackages', { js: 'never', mjs: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
  'import/no-cycle': 'off', // TODO: Remove cycle import
  'import/no-extraneous-dependencies': 'off', // package.json directory hierarchy problem
  'import/order': ['error', { groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index'] }],
  'import/prefer-default-export': 'off',
  'max-len': ['error', 130],
  'new-cap': 'off',
  'no-console': 'error',
  'no-constant-condition': ['error', { checkLoops: false }],
  'no-empty-function': 'error',
  'no-empty': 'error',
  'no-mixed-operators': ['error', { allowSamePrecedence: true }],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-param-reassign': ['error', { props: false }],
  'no-restricted-imports': ['error', { paths: ['src'], patterns: ['../*'], }],
  'no-restricted-modules': ['error', { paths: ['src'], patterns: ['../*'], }],
  'no-underscore-dangle': 'off',
  'no-unused-expressions': 'off', // use babel/no-unused-expressions
  'no-unused-vars': ['error', { ignoreRestSiblings: true }],
  'no-useless-constructor': 'error',
  'semi': ['error', 'never'],
  'sort-keys': 'off',
}
