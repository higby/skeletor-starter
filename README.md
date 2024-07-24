# Skeletor Starter

Opinionated Eleventy Starter

## Run Locally

1. Install dependencies `npm install`
2. Start server `npm run serve`

## Config

- Contents of directory `source/static/` gets [passed](https://www.11ty.dev/docs/copy/) to the root during build
- Both the HTML & Markdown [template engines](https://www.11ty.dev/docs/languages/#overriding-the-template-language) are set to `liquid`

### Directory Structure

| Directory                                                                       | Value                |
| ------------------------------------------------------------------------------- | -------------------- |
| [Input](https://www.11ty.dev/docs/config/#input-directory)                      | `source`             |
| [Includes](https://www.11ty.dev/docs/config/#directory-for-includes)            | `templates/partials` |
| [Layouts](<https://www.11ty.dev/docs/config/#directory-for-layouts-(optional)>) | `templates/layouts`  |
| [Data](https://www.11ty.dev/docs/config/#directory-for-global-data-files)       | `data`               |
| [Output](https://www.11ty.dev/docs/config/#output-directory)                    | `build`              |
| [Image](#image)                                                                 | `source/images`      |
| Static                                                                          | `source/static`      |
| Styles                                                                          | `source/styles`      |

### Filters

#### Date Format

For formatting dates on the fly. Takes [Day.js](https://day.js.org/en/)'s [formatting tokens](https://day.js.org/docs/en/display/format) as input.

Inspired by [Max Böck](https://mxb.dev/)'s [`dateToFormat`](https://github.com/maxboeck/mxb/blob/master/utils/filters.js) filter from their [personal site](https://github.com/maxboeck/mxb).

```liquid
{{ page.date | formatDate: "MMM D, YYYY" }}
```

#### URI Encode

Liquid filter implementation of [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). Mostly just for inlining SVG favicons.

```liquid
{% capture favicon %}{% include 'favicon.svg' %}{% endcapture %}
<link rel='icon' href='data:image/svg+xml,{{ favicon | encodeURI }}' type='image/svg+xml'>
```

## Attributions & Inspirations

This Eleventy starter was inspired by:

- The official [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)
- [Stephanie Eckles](https://thinkdobecreate.com/)' [11ty Sass Skeleton](https://github.com/5t3ph/11ty-sass-skeleton/)
- [Lene Saile](https://www.lenesaile.com/)'s [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent)

The `formatDate` filter was inspired by [Max Böck](https://mxb.dev/)'s [`dateToFormat`](https://github.com/maxboeck/mxb/blob/master/utils/filters.js) filter from their [personal site](https://github.com/maxboeck/mxb).

The plugins and configuration files were organized based on Lene Saile's [methodology](https://www.lenesaile.com/en/blog/organizing-the-eleventy-config-file/).

The directory structure was inspired by [Elly Loel](https://www.ellyloel.com/)'s [personal site](https://github.com/EllyLoel/ellyloel.com).
