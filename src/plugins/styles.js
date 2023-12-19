import { glob } from 'glob'
import fs from 'fs'
import * as sass from 'sass'

var styleDirectory = 'src/assets/styles'
var styles = {}

export default eleventyConfig => {
  eleventyConfig.addGlobalData('site.styles', async () => {
    let files = await glob(`./${styleDirectory}/**/[^_]*.scss`)

    files.forEach(async file => {
      let compiled = sass.compileString(fs.readFileSync(`./${file}`, 'utf8'), {
        style: 'compressed',
        loadPaths: [`./${styleDirectory}`, 'node_modules']
      }).css

      file = file.substr(styleDirectory.length + 1)
      file = file.slice(0, -5)

      // https://github.com/sass/dart-sass/issues/472
      if (compiled.startsWith('\uFEFF')) compiled = compiled.substring(1)
      styles[file] = compiled
    })

    return styles
  })
}
