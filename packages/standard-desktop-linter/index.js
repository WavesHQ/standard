module.exports = {
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  ignorePatterns: ['/*.config.js', '*.json', 'jest.setup.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
};
