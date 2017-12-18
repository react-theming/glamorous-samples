const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  root: true,
  extends: ['eslint-config-airbnb', 'prettier'],
  plugins: ['prettier', 'react'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    // 'jest/globals': true,
  },
  rules: {
    strict: [error, 'never'],
    'no-console': ignore,
    'prettier/prettier': [
      warn,
      {
        printWidth: 100,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    quotes: [warn, 'single', { avoidEscape: true }],
    'class-methods-use-this': ignore,
    'arrow-parens': [warn, 'as-needed'],
    'space-before-function-paren': ignore,
    'import/no-unresolved': warn,
    'import/extensions': [
      // because of highlight.js and fuse.js
      warn,
      {
        js: 'never',
        json: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      error,
      {
        devDependencies: [
          'examples/**',
          '**/example/**',
          '*.js',
          '**/*.test.js',
          '**/scripts/*.js',
          '**/stories/*.js',
          '**/__tests__/*.js',
        ],
        peerDependencies: true,
      },
    ],
    'import/prefer-default-export': ignore,
    'react/prop-types': ignore,
    'react/jsx-wrap-multilines': ignore,
    'react/jsx-indent': ignore,
    'react/jsx-indent-props': ignore,
    'react/jsx-closing-bracket-location': ignore,
    'react/jsx-uses-react': error,
    'react/jsx-uses-vars': error,
    'react/react-in-jsx-scope': error,
    'react/jsx-filename-extension': [
      warn,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-a11y/accessible-emoji': ignore,
    'jsx-a11y/href-no-hash': ignore,
    'jsx-a11y/label-has-for': ignore,
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'react/no-unescaped-entities': ignore,
  },
};
