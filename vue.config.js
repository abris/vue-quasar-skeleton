const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  chainWebpack: config => {
    config
      .plugin('eslint')
      .tap(args => {
        args[0].fix = true
        return args
      })
  }
})
