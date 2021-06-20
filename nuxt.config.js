export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testMaketVUe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=408px, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
      },
    ],
    script: [{
      src: 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js'
    },]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-select.js',
    },
  ],

  axios: {
    proxy: true, // Can be also an object with default options
  },
  
  proxy: {
    "/wp-json/wp/v2/": {
      target: "https://renemorozowich.com/wp-json/wp/v2/",
      pathRewrite: { "^/wp-json/wp/v2/": "" }
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
