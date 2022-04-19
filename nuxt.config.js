export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Full Stack Web Template",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyA3bQv1qNwAbjNngR6vc_5LbGIm20gmUJ8",
      authDomain: "ztmburger-5529e.firebaseapp.com",
      projectId: "ztmburger-5529e",
      storageBucket: "ztmburger-5529e.appspot.com",
      messagingSenderId: "444968648643",
      appId: "1:444968648643:web:304d104d5f9487ed29c776",
      measurementId: "G-XH479Z73QR",
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      Oswald: true,
      "Lilita+One": true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
};
