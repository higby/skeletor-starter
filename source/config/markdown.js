import md from "markdown-it"
import mdAttrs from "markdown-it-attrs"
import mdImplicitFigures from "markdown-it-implicit-figures"

const markdown = md({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
  .use(mdAttrs)
  .use(mdImplicitFigures)

export default (eleventyConfig) => eleventyConfig.setLibrary("md", markdown)
