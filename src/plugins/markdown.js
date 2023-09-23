module.exports = config => {
  config.setLibrary(
    'md',
    require('markdown-it')({
      html: true,
      breaks: true,
      typographer: true
    }).use(require('markdown-it-anchor'))
  )
}
