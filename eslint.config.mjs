import withNuxt from "./.nuxt/eslint.config.mjs";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-mutating-props": "off",
    "vue/no-required-prop-with-default": "off",
    "vue/require-default-prop": "off",
    "import/no-named-default": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }]
  }
});
