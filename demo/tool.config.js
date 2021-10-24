const cleanPlugins = require('./plugin/clean.plugin')

module.exports = {
  plugins: {
    commands: [cleanPlugins('just a test')],
    webpack: {},
    bable: {}
  }
}
