A [PostCSS](https://github.com/postcss/postcss) plugin to prefix selectors that use :hover pseudoelements.

Useful to not letting hover effects on apps when browsing from a mobile device

__Example input__

```css
.Component { /* ... */ }
.Component--modifier:hover { /* ... */ }
.Component-descendent { /* ... */ }
```

__Example output__
`classPrefix('pfx')`
```css
.Component { /* ... */ }
.pfx .Component--modifier { /* ... */ }
.Component-descendent { /* ... */ }
```


## Usage

```javascript
var fs        = require('fs');
var postcss   = require('postcss');
var hoverPrfx = require('postcss-hover-prefix');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = postcss()
          .use(hoverPrfx('.my-prefix'))
          .process(css);
```

## License

MIT

## Acknowledgements

* Based on [postcss-class-prefix](https://github.com/thompsongl/postcss-class-prefix)
