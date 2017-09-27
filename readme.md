# SkySvg
Dynamically inline svgs using vue-svg-loader

### Usage
Automatically imports svgs from path: `svgs/${name}.svg` and creates components from each.

```html
<svg-filename></svg-filename>

Eg.
<svg-arrow></svg-arrow>
<svg-burger></svg-burger>
etc.
```

### Dependencies
- vue-svg-loader (temporarily using forked version by @matpeder allowing for svgo options until submitted pull request is merged)
- vue-template-compiler
