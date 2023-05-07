const fs = require('fs')
const sass = require('sass')

let stylesDirectory = `src/assets/styles/`

module.exports = config => {
  config.addGlobalData('styles', async () => {
    return sass.compileString(fs.readFileSync(`${stylesDirectory}index.scss`, 'utf8'), {
      style: 'compressed',
      loadPaths: [stylesDirectory]
    }).css
  })
}
