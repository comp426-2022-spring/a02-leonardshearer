import * as coinFlipper from "./modules/coin.mjs"
import minimist from "minimist"

const args = minimist(process.argv.slice(2))

const call = args['call'] || "invalid"
if (!(call === "heads" || call === "tails")) {
    console.log("Error: no input")
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    console.log(coinFlipper.flipACoin(call))
}