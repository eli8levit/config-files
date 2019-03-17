module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'cypress'],
  rules: {
    'no-underscore-dangle': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    'no-alert': 0,
    'no-nested-ternary': 0,
    'react/no-array-index-key': 0,
  },
};
