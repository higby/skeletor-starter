import plugins from './src/plugins/index.js'

export default eleventyConfig => {
  eleventyConfig.setDataFileSuffixes(['.data', ''])

  eleventyConfig.addWatchTarget(`src/assets/`)
  eleventyConfig.addPassthroughCopy({ [`src/assets/static/`]: '/' })

  eleventyConfig.addPlugin(plugins)

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
