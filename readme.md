# SkySvg
Dynamically inline svgs using vue-svg-loader

### Usage
Automatically imports svgs from path: `svgs/${name}.svg` and creates components from each. Components are prefixed with `Svg` (or `svg-` if you prefer kebab-case).

```html
<SvgFilename />

Eg.
<SvgArrow />
<SvgBurger />
etc.
```

### Dependencies
- [vue-svg-loader](https://github.com/visualfanatic/vue-svg-loader)
- [vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler) (peer dependency of vue-svg-loader)
