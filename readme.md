# sky-svg

_Please refer to the code-files for usage and documentation!_

## Usage
Sky-svg uses the `$templaceCache` to find svg's. All svgs should therefore be places in a javaScript file that is excuted. We've added a step to our `grunt` buld job - [grunt-angular-templates](https://www.npmjs.com/package/grunt-angular-templates)

### skySvgProvider
##### .setPath(path)
Default: `/`
Update the base path for the svg folder.

### skySvg
##### .getPath()
Returns the base path

##### .getSvg(name)
Returns the svg as a html string

### Directives
#### [sky-svg] / [sky-svg-prepend]
Sky-svg can be used as an attribute. This will either append or prepend the svg to the element tag. NOTE that the name is stringyfied
```html
<!-- SVG as string [appends]-->
<div sky-svg="'svg-file-name'">
    <!-- svg goes here -->
    <span>Svg will appear before this span</span>
</div>

<!-- SVG as string [prepends]-->
<div sky-svg-prepend="'svg-file-name'">
    <span>Svg will appear after this span</span>
    <!-- svg goes here -->
</div>

<!-- SVG as expression -->
<div sky-svg="item.icon"></div>
```

#### sky-svg
Sky-svg can also be used an element tag. Note that the that this directive does not support expressions - you should therefore use the attribute directive
```html
<sky-svg>hamburger</sky-svg>
<!-- Result -->
<sky-svg>
    <!-- svg goes here -->
</sky-svg>
```


### Credits

This module is made by the Frontenders at [skybrud.dk](http://www.skybrud.dk/). Feel free to use it in any way you want. Feedback, questions and bugreports should be posted as issues. Pull-requests appreciated!

