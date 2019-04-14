module.exports = {
  linters: {
    '**/*.+(js|jsx|md|css|yml|yaml|scss)': [
      './node_modules/.bin/eslint --fix',
      './node_modules/.bin/stylelint *.css --fix',
      './node_modules/.bin/prettier --write',
      'git add',
    ],
  },
  ignore: ['node_modules', 'package.json', 'package-lock.json'],
};
