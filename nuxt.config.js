import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    script: [
      {
        src: "https://cdn.plot.ly/plotly-2.12.1.min.js"
      }
    ],
    titleTemplate: '%s - Learning',
    title: 'Learning',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~plugins/vue-plotly', mode: 'client' }
    // {
    //   // src: '~plugins/vue-plotly', mode: 'client'
    // }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    "/api/": {
      // target: "https://wfkacl.deta.dev/",
      target: "http://localhost:8000/",
      pathRewrite: { "^/api/": ""}
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  publicRuntimeConfig: {
    // axios: {
    //   baseURL: 'http://127.0.0.1:8000'
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
