module.exports = config => {
  config.setDataFileSuffixes(['.data', ''])

  config.addWatchTarget(`src/assets/`)
  config.addPassthroughCopy({ [`src/assets/public/`]: '/' })

  config.addPlugin(require(`./src/plugins`))

  return {
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'src/input',
      includes: '../includes',
      layouts: '../layouts',
      data: '../data',
      output: 'build'
    }
  }
}
