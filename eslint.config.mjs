import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extiende las configuraciones básicas y específicas de Next.js y TypeScript
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "next/core-web-vitals",
    "prettier"
  ),
  {
    // Configuración específica
    files: ["**/*.ts", "**/*.tsx"],
    plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
    rules: {
      // Mejora la robustez y evita errores comunes
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      // Buenas prácticas en React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // Mejoras de accesibilidad
      "jsx-a11y/no-noninteractive-element-interactions": "warn",

      // Evita errores molestos
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",

      // Estilo de código claro y legible
      "semi": ["error", "always"],
      "quotes": ["error", "single", { avoidEscape: true }],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "eol-last": ["error", "always"],
      "indent": ["error", 2],
      "space-before-function-paren": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],

      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
  },
];

export default eslintConfig;
