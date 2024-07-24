import path from "path"

export default {
  layout: "base",
  permalink: ({ page }) => `${path.relative("/pages", page.filePathStem)}/`
}
