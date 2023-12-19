import dayjs from 'dayjs'

export default eleventyConfig => {
  eleventyConfig.addFilter('date_format', async (date, format) => {
    return dayjs(date).format(format)
  })
}
