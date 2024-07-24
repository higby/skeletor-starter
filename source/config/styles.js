import browserslist from "browserslist"
import { bundle, browserslistToTargets } from "lightningcss"
import path from "path"

let targets = browserslistToTargets(browserslist("> 0.2% and not dead"))

export default (eleventyConfig) => {
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    useLayouts: false,
    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath)
      if (parsed.name.startsWith("_")) return

      return async () =>
        bundle({
          filename: inputPath,
          minify: true,
          targets
        }).code
    },
    compileOptions: {
      permalink: (contents, inputPath) =>
        // TODO - change this from a predefined variable
        path.relative("./source/styles/", inputPath)
    }
  })

  eleventyConfig.addTemplateFormats("css")
}
