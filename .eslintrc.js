module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    quotes: "off",
    eqeqeq: "off",
    "space-before-function-paren": "off",
    "no-trailing-spaces": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/require-prop-types": "off",
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "comma-dangle": ["off"],
    semi: ["off"],
    "vue/multi-word-component-names": [
      "off",
      {
        ignores: ["index", "about", "contacts"],
      },
    ],

    "linebreak-style": 0,
  },
};
