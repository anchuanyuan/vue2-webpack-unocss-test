const UnoCSS = require('@unocss/webpack').default
const path = require('path')
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    configureWebpack: {
        name: "test",
        resolve: {
          alias: {
            '@':path.resolve(__dirname,'src'),
          },
        },
        plugins: [
          UnoCSS({}),
        ],
      },
}