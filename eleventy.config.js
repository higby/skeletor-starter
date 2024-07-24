import filters from "./source/config/filters.js"
import markdown from "./source/config/markdown.js"
import plugins from "./source/config/plugins.js"
import styles from "./source/config/styles.js"
import transforms from "./source/config/transforms.js"

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ [`source/static/`]: "/" })

  eleventyConfig.addPlugin(filters)
  eleventyConfig.addPlugin(markdown)
  eleventyConfig.addPlugin(plugins)
  eleventyConfig.addPlugin(styles)
  eleventyConfig.addPlugin(transforms)
}

export const config = {
  htmlTemplateEngine: "liquid",
  markdownTemplateEngine: "liquid",

  dir: {
    input: "source",
    includes: "templates/partials",
    layouts: "templates/layouts",
    data: "data",
    output: "build"
  }
}
