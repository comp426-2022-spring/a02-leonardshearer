import * as coinFlipper from "./modules/coin.mjs"
import minimist from "minimist"

const args = minimist(process.argv.slice(2))

const call = args['call'] || "invalid"
if (call === "invalid") {
    console.log("Error: no input")
} else {
    console.log(coinFlipper.flipACoin(call))
}