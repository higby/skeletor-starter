import dayjs from "dayjs"

export default (eleventyConfig) => {
  eleventyConfig.addFilter("encodeURI", (data) => encodeURIComponent(data))

  eleventyConfig.addFilter("formatDate", async (date, format) =>
    dayjs(date).format(format)
  )
}
