module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // para que slint detecte la version de react que estamos usando
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    /* configuración para que no salte el error: 'React' must be in scope when using JSX  react/react-in-jsx-scope */
    "plugin:react/jsx-runtime",
    "standard",
    // plugin para que  prettier y eslint no choquen, pone las normas de prettier por encima de las de eslint
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // eslint  va a identificar como warning en vez de como error el tener variables sin usar
    "no-unused-vars": "warn",
  },
};
