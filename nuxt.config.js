const siteData = {
  title: 'Lucas Maia - Blog',
  description: 'Este blog foi criado, com o intuito de ajudar Devs iniciando sua carreira com Desenvolvimento Web.',
  author: 'Lucas Maia e Silva'
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: siteData.title,
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: siteData.description },
      { name: 'author', content: siteData.author },
      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@lucasmaiaesilva' },
      { name: 'twitter:title', content: siteData.title },
      { name: 'twitter:description', content: siteData.description },
      // facebook
      { property: 'fb:admins', content: '1669015710009212' },
      { property: 'og:url', content: '/' },
      { property: 'og:title', content: siteData.title },
      { property: 'og:image', content: '/blog-image.png' },
      { name: 'theme-color', content: '#1d1d1d' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },

      // Favico
      { rel: 'shortcut icon', href: '/icons/favicon.ico', type: 'image/x-icon' },

      // Apple Touch Icons
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-touch-icon-152x152.png' }

    ]
  },
  // router: { base: '/blog/' },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f38181' },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/css/highlightjs.min.css',
    '~/assets/css/buttons.css'
  ],
  plugins: [
    '~/plugins/vue-highlightjs'
  ],
  modules: [
    // '@nuxtjs/font-awesome',
    ['@nuxtjs/google-analytics', { ua: 'UA-53810517-1' }],
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true }]
  ]
}
