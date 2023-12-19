import dateFormat from './filters/dateFormat.js'
import uriEncode from './filters/uriEncode.js'

import image from './shortcodes/image.js'

import markdown from './markdown.js'
import styles from './styles.js'

export default eleventyConfig => {
  // Filters
  eleventyConfig.addPlugin(dateFormat)
  eleventyConfig.addPlugin(uriEncode)

  // Shortcodes
  eleventyConfig.addPlugin(image)

  eleventyConfig.addPlugin(markdown)
  eleventyConfig.addPlugin(styles)
}
