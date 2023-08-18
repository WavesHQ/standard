module.exports = {
  extends: ["next/core-web-vitals", "airbnb", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["simple-import-sort", "prettier"],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "react/prop-types": "off",
    "import/extensions": "off",
    "no-undef": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    curly: ["error", "all"],
  },
};
