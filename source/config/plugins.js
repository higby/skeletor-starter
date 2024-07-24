import directoryOutput from "@11ty/eleventy-plugin-directory-output"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"

import { IdAttributePlugin } from "@11ty/eleventy"
import { EleventyHtmlBasePlugin } from "@11ty/eleventy"
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img"

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(directoryOutput)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPlugin(IdAttributePlugin)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    outputDir: `${eleventyConfig.directories.output}images/`,
    urlPath: `/images/`,
    formats: ["avif", "webp", "jpeg"],
    defaultAttributes: {
      loading: "lazy",
      decoding: "async"
    }
  })

  eleventyConfig.addWatchTarget(`source/images/`)
}
