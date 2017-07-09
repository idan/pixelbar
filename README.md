# pixelbar

A better way to generate bars, using the power of unicode.

## Install

`yarn add pixelbar`

## Usage

```
import pixelBar from 'pixelbar'
```

### Simple bars with no options
```
const barText = pixelBar(0, 10) // '[          ]'
const barText = pixelBar(1, 10) // '[█         ]'
const barText = pixelBar(5, 10) // '[█████     ]'
```

### Fancier bars with options
```
const barText = pixelBar(1, 10, {caps: false}) // '█         '
const barText = pixelBar(1, 10, {width: 20}) // '[██                  ]'
```

### Style the color of the bar

You can supply any [chalk](https://github.com/chalk/chalk#colors) function(s) to spruce up the coloring. No colorful previews below because markdown doesn't support the styling, but you get the idea:

```
// red bar
const barText = pixelBar(1, 10, {style: chalk.red})

// red bar on white bg
const barText = pixelBar(1, 10, {style: chalk.red.bgWhite})
```

# Created by

[Idan Gazit](https://github.com/idan)

# License

MIT © [Idan Gazit](https://twitter.com/idangazit)