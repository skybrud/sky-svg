# sky-svg


## What is this
Sky-svg uses angulars templating-system to inject svg's. It is meant to be used in conjunction with the build-in `$templatecache`, but could also work without it. We've added a step to our `grunt` build-job ([grunt-angular-templates](https://www.npmjs.com/package/grunt-angular-templates)) that takes a folder of svg's and puts them in the $templateCache directly so the extra requests are saved. 


##Usage
Look in the dist-folder for a ready build with typescript-definitions on the side. The source-files are in the root folder along with a ts-config file. 

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
Sky-svg can be used as an attribute. This will either append or prepend the svg to the element tag. NOTE that the name is stringified.
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
Sky-svg can also be used an element. This directive does not support expressions - for that you should use the attribute directive above. 
```html
<sky-svg>hamburger</sky-svg>

<!-- Result -->
<sky-svg>
    <!-- svg goes here -->
</sky-svg>
```


### Credits
This module is made by the Frontenders at [skybrud.dk](http://www.skybrud.dk/). Feel free to use it in any way you want. Feedback, questions and bugreports should be posted as issues. Pull-requests appreciated!

