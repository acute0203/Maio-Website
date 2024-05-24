module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "eslint-config-prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    semi: ["error", "never"],
    quotes: [2, "double", { avoidEscape: true }],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: ["ApiExecutor"],
      },
    ],
  },
}
