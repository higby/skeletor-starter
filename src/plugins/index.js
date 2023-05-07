module.exports = config => {
  config.addPlugin(require(`./filters/dateFormat`))
  config.addPlugin(require(`./filters/uriEncode`))

  config.addPlugin(require(`./shortcodes/image`))

  config.addPlugin(require('./sass'))
}
