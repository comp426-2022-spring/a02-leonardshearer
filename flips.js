import * as coinFlipper from "./modules/coin.mjs"
import minimist from "minimist"

const args = minimist(process.argv.slice(2))

const number = args['number'] || 1
const flips = coinFlipper.coinFlips(number)

console.log(flips)
console.log(coinFlipper.countFlips(flips))