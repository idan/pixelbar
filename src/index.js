import chalk from 'chalk'
import { scaleThreshold } from 'd3-scale'

const defaultOpts = {
  style: chalk.blue, // a chalk function for styling the bar.
  width: 10, // the width of the bar in full characters
  caps: true // wraps the bar in square brackets like [...]
}

const partialScale = scaleThreshold()
  .domain([1/8, 2/8, 3/8, 4/8, 5/8, 6/8, 7/8]) // eslint-disable-line space-infix-ops
  .range([' ', '▏', '▎', '▍', '▌', '▋', '▊', '▉'])

export default function pixelBar (current, total, options = {}) {
  const opts = Object.assign({}, defaultOpts, options)
  let percentage = current / total
  // clamp to 0..1
  if (percentage > 1.0) {
    percentage = 1.0
  } else if (percentage < 0) {
    percentage = 0
  }

  const precise = percentage * opts.width
  const filled = Math.floor(precise)
  const partial = precise - filled

  let output = '█'.repeat(filled)
  if (filled !== opts.width) {
    output += partialScale(partial)
  }
  const open = opts.width - output.length
  if (open > 0) {
    output += ' '.repeat(open)
  }
  output = opts.style(output)
  if (opts.caps) {
    output = `[${output}]`
  }
  return output
}
