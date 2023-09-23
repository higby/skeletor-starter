const fs = require('fs')
const sass = require('sass')

let stylesDirectory = `src/assets/styles/`

async function compileSASS(path) {
  return sass.compileString(fs.readFileSync(`${stylesDirectory}${path}.scss`, 'utf8'), {
    style: 'compressed',
    loadPaths: [stylesDirectory, 'node_modules']
  }).css
}

module.exports = config => {
  config.addGlobalData('styles', async () => compileSASS('main'))

  config.addShortcode('compile_sass', async sheet => compileSASS(sheet))
}
