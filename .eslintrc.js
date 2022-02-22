module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    "vue/multi-word-component-names": [
      "error",
      {
        "ignores": ["index"]
      }
    ],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "any",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }],
    "linebreak-style": 0,
  }
}
