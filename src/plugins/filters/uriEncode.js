module.exports = config => {
  config.addFilter('uri_encode', data => encodeURIComponent(data))
}
