const webpack = require('webpack');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** CSS
  */
  css: [
    { src: '~assets/styles/vendor/vendor.styl', lang: 'stylus' },
    { src: '~assets/styles/common/typography.styl', lang: 'stylus' },
    { src: '~assets/styles/common/container.styl', lang: 'stylus' },
    { src: '~assets/styles/common/menu.styl', lang: 'stylus' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     });
    //   }
    // },
    /*
    ** Babel
    */
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ['syntax-async-functions', 'transform-regenerator'],
    },
    /*
    ** Vendor
    */
    vendor: [
      'axios',
      'jquery',
      '~assets/js/vendor/semantic/checkbox.js',
      '~assets/js/vendor/semantic/dimmer.js',
      '~assets/js/vendor/semantic/dropdown.js',
      '~assets/js/vendor/semantic/form.js',
      '~assets/js/vendor/semantic/sidebar.js',
      '~assets/js/vendor/semantic/site.js',
      '~assets/js/vendor/semantic/tab.js',
      '~assets/js/vendor/semantic/transition.js',
    ],
    /*
    ** Plugins
    */
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            preferPathResolver: 'webpack',
            import: [
              '~assets/styles/lib/variables.styl',
              '~assets/styles/lib/mediaQueries.styl',
              '~assets/styles/lib/extendables.styl',
              '~assets/styles/lib/mixins.styl',
            ],
          },
          context: '/',
        },
      }),
    ],
  },
};
