const Image = require('@11ty/eleventy-img')

module.exports = config => {
  config.addShortcode('image', async (src, alt, className) => {
    if (alt === undefined) throw new Error(`Missing \`alt\` on image from: ${src}`)

    if (!src.startsWith('http')) src = `./src/assets/images${src}`

    let metadata = await Image(src, {
      formats: ['avif', 'webp', 'jpeg'],
      urlPath: '/images',
      outputDir: './build/images/'
    })

    return `<picture>
      <source
        type="${metadata['avif'][0].sourceType}"
        srcset="${metadata['avif'][0].srcset}">
      <source
        type="${metadata['webp'][0].sourceType}"
        srcset="${metadata['webp'][0].srcset}">
      <img
        src="${metadata['jpeg'][0].url}"
        width="${metadata['jpeg'][0].width}"
        height="${metadata['jpeg'][0].height}"
        alt="${alt}"
        loading="lazy"
        decoding="async"
        ${className ? `class="${className}">` : '>'}
    </picture>`
  })
}
