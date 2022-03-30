module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ['prettier'],
  rules: {
    'no-template-curly-in-string': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    camelcase: 'off',
    'prefer-const': 'off',
    'prettier/prettier': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
