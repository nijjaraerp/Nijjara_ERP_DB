export default [
  {
    files: ["src/**/*.{js,gs}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        global: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "no-undef": "off", // Google Apps Script globals
    },
  },
  {
    ignores: ["**/*.test.js", "node_modules/**"],
  },
];
