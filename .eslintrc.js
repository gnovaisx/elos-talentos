module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'react-app/jest'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'import',
    'unused-imports'
  ],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'no-param-reassign': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'warn',
    camelcase: 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_',
        varsIgnorePattern: '^React$|^_'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-no-bind': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'import/no-cycle': 'off',
    'no-nested-ternary': 'warn',
    'array-callback-return': 'warn',
    'no-case-declarations': 'warn',
    'prefer-destructuring': 'off',
    'no-return-assign': 'warn',
    'react/no-array-index-key': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      // { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] }
      { devDependencies: true }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src/src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      },
      typescript: {}
    },
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
};
