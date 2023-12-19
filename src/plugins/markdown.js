import md from 'markdown-it'
import mdAnchor from 'markdown-it-anchor'

const markdown = md({
  html: true,
  breaks: true,
  linkify: true
}).use(mdAnchor)

export default eleventyConfig => {
  eleventyConfig.setLibrary('md', markdown)
}
