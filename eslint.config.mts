// import css from "@eslint/css"
import js from "@eslint/js"
import json from "@eslint/json"
import markdown from "@eslint/markdown"
import type { ESLint } from "eslint"
import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { importX } from "eslint-plugin-import-x"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import pluginReact from "eslint-plugin-react"
import globals from "globals"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "error",
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json: json as unknown as ESLint.Plugin },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.jsonc", "**/tsconfig.json"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  // {
  //   files: ["**/*.css"],
  //   plugins: { css },
  //   language: "css/css",
  //   extends: ["css/recommended"],
  //   rules: {
  //     "css/no-invalid-at-rules": "off", // Tailwind
  //   },
  // },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { "import-x": importX as unknown as ESLint.Plugin },
    extends: ["import-x/flat/recommended"],
    settings: {
      "import-x/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "import-x/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,mts,cts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    ...eslintPluginPrettierRecommended,
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/components/ui/**",
    "src/lib/supabase/database.types.ts",
  ]),
])
