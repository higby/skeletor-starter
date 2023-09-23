module.exports = config => {
  config.setDataFileSuffixes(['.data', ''])

  config.addWatchTarget(`src/assets/`)
  config.addPassthroughCopy({ [`src/assets/static/`]: '/' })

  config.addPlugin(require(`./src/plugins`))

  return {
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'src/pages',
      includes: '../templates/includes',
      layouts: '../templates/layouts',
      data: '../data',
      output: 'build'
    }
  }
}
