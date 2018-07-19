const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

// Configuration Webpack de resolve alias
const { resolve: resolveConfig } = require('./webpack.resolve.config.js')

module.exports = function override(config = {}, env) {
  // WEBPACK CONFIG
  //
  // (Configuration Resolve) : Alias Import Resolve
  config.resolve = resolveConfig

  // BABEL RC
  //
  // Import CSS / LESS AntD
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  )

  // LESS Loader
  //
  // AntDesign
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#30A4F5'
    },
    javascriptEnabled: true
  })(config, env)

  return config
}
