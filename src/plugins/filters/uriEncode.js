export default eleventyConfig => {
  eleventyConfig.addFilter('uri_encode', data => encodeURIComponent(data))
}
