# Skeletor Starter

Opinionated Eleventy Starter

## Features

- Built with [Eleventy v3](https://www.11ty.dev/blog/canary-eleventy-v3/)
- Built-in [SASS](https://sass-lang.com/) support
- Modified directory structure
- Accessible `<img>` shortcode

## Run Locally

1. Install dependencies `npm install`
2. Start server `npm run serve`

## Config

- [Data file file suffix](https://www.11ty.dev/docs/config/#change-file-suffix-for-data-files) changed to `.data`
- Directory `src/assets/` added to [watch targets](https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets)
- Contents of directory `src/assets/static/` gets [passed](https://www.11ty.dev/docs/copy/) to the root during build
- Both the HTML & Markdown [template engines](https://www.11ty.dev/docs/languages/#overriding-the-template-language) are set to `liquid`

### Directory Structure

| Directory                                                                       | Value                    |
| ------------------------------------------------------------------------------- | ------------------------ |
| [Input](https://www.11ty.dev/docs/config/#input-directory)                      | `src/pages/`             |
| [Includes](https://www.11ty.dev/docs/config/#directory-for-includes)            | `../templates/includes/` |
| [Layouts](<https://www.11ty.dev/docs/config/#directory-for-layouts-(optional)>) | `../templates/layouts/`  |
| [Data](https://www.11ty.dev/docs/config/#directory-for-global-data-files)       | `../data/`               |
| [Output](https://www.11ty.dev/docs/config/#output-directory)                    | `build/`                 |
| [Image](#image)                                                                 | `src/assets/images/`     |
| Static                                                                          | `src/assets/static/`     |
| Styles                                                                          | `src/assets/styles/`     |

#### Visualized

```
www/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── static/
│   │   └── styles/
│   ├── data/
│   ├── pages/
│   ├── plugins/
│   └── templates/
│       ├── includes/
│       └── layouts/
└── eleventy.config.js
```

### Filters

#### Date Format

For formatting dates on the fly. Takes [Day.js](https://day.js.org/en/)'s [formatting tokens](https://day.js.org/docs/en/display/format) as input.

Inspired by [Max Böck](https://mxb.dev/)'s [`dateToFormat`](https://github.com/maxboeck/mxb/blob/master/utils/filters.js) filter from their [personal site](https://github.com/maxboeck/mxb).

```liquid
{{ page.date | date_format: "MMM D, YYYY" }}
```

#### URI Encode

Liquid filter implementation of [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent). Mostly just for inlining SVG favicons.

```liquid
{% capture favicon %}{% include 'favicon.svg' %}{% endcapture %}
<link rel='icon' href='data:image/svg+xml,{{ favicon | uri_encode }}' type='image/svg+xml'>
```

### Shortcodes

#### Image

Takes an image url or path relative to the [Image directory](#directory-structure) (defaulting to `src/assets/images/`) and returns accesible image markup. Built with [Eleventy Image](https://www.11ty.dev/docs/plugins/image/).

```liquid
{% image "https://shera.gay/random.jpeg" "A screenshot from Dreamwork's She-Ra and The Princesses of Power" %}
```

### Miscellaneous Plugins

#### Markdown

The markdown library has been [amended](https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance) to include the [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor) plugin.

#### Styles

Runs [`compileString()`](https://sass-lang.com/documentation/js-api/functions/compilestring/) on each `scss` file in the [Styles directory](#directory-structure) (defaulting to `src/assets/styles/`) without a leading underscore.

[Global data](https://www.11ty.dev/docs/data-global/) named `site.styles` is then created. This is a JS object with the key being the filename (no extension) and the value being the compiled `css`.

We can then, either [per-page](https://www.11ty.dev/docs/data-frontmatter/) or by [directory](https://www.11ty.dev/docs/data-template-dir/), add the filenames to the `styles` array:

##### Front Matter Data

```yaml
---
styles:
  - main
---
```

##### Directory Data

```js
export default {
  styles: ['main']
}
```

And then add this to the `<head>`:

```liquid
<style>{% for sheet in styles %}{{ site.styles[sheet] }}{% endfor %}</style>
```

This allows us to add the styles to the page as needed.

## Attributions & Inspirations

The idea to make an 11ty starter was inspired by:

- The offical [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog)
- [Stephanie Eckles](https://thinkdobecreate.com/)' [11ty Sass Skeleton](https://github.com/5t3ph/11ty-sass-skeleton/)
- [Lene Saile](https://www.lenesaile.com/)'s [Eleventy Excellent](https://github.com/madrilene/eleventy-excellent)

The `date_format` filter was inspired by [Max Böck](https://mxb.dev/)'s [`dateToFormat`](https://github.com/maxboeck/mxb/blob/master/utils/filters.js) filter from their [personal site](https://github.com/maxboeck/mxb).

The plugins and configuration files were organized based on Lene Saile's [methodology](https://www.lenesaile.com/en/blog/organizing-the-eleventy-config-file/).

The directory structure was inspired by [Elly Loel](https://www.ellyloel.com/)'s [personal site](https://github.com/EllyLoel/ellyloel.com).

The styles directory is formatted from [Kitty Giraudel](https://kittygiraudel.com/)'s [Sass Boilerplate](https://github.com/KittyGiraudel/sass-boilerplate).

`src/assets/styles/base.scss` is the [FrontAid](https://github.com/frontaid) CSS Boilerplate [Natural Selection](https://github.com/frontaid/natural-selection).
