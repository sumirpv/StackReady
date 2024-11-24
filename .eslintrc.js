module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    babelOptions: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    },
  },
  plugins: ["react"],
  rules: {
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "no-useless-escape": "off",
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
};
