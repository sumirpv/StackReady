module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parser: '@babel/eslint-parser',  // Add Babel ESLint parser for better handling of JSX
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    babelOptions: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',  // Handles React JSX syntax
        '@babel/preset-typescript', // If using TypeScript
      ],
    },
  },
  plugins: ["react"],
  rules: {
    "no-console": "warn",
    "react/react-in-jsx-scope": "off", // No need for React in scope in React 17+
    "react/jsx-uses-react": "off",     // No need to import React in files
  },
};
