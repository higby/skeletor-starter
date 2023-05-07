const dayjs = require('dayjs')

module.exports = config => {
  config.addFilter('date_format', async (date, format) => {
    return dayjs(date).format(format)
  })
}
