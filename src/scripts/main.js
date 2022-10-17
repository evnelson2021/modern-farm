console.log("Welcome to the main module")
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalogHTML } from "./catalog.js"
// import { addPlant } from "./field.js"

// import createPlan function 
import {createPlan} from "./plan.js"
// import corn here
import {createCorn} from "./seeds/corn.js"
// import asparagus here
import {createAsparagus} from "./seeds/asparagus.js"
// import potato here
import {createPotato} from "./seeds/potato.js"
// import soybean here
import {createSoybean} from "./seeds/soybean.js"
// import sunflower here
import {createSunflower} from "./seeds/sunflower.js"
// import wheat here
import {createWheat} from "./seeds/wheat.js"


const yearlyPlan = createPlan()
// console.log(yearlyPlan)

// TESTING "create" functions
// const thing = createCorn()
// console.log(thing)


// TESTING adding seeds to field
// addPlant(thing)
// const using = usePlants()
// console.log(using)

// TESTING planting all seeds and checking array
const planted = plantSeeds(yearlyPlan)
// console.log(planted)

// const added = addPlant()
// console.log(added)

const used = usePlants()
console.log(used)

const toSell = harvestPlants(used)
console.log(toSell)

// const harvested = catalogHTML(toSell)
// console.log(harvested)

const catalogged = catalogHTML(toSell)

// const cropHTML = () => {
//     let html = `<div class="flexbox">`
//     html += catalogged
//     html += `</div>`
//     return html
// }


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalogged

// export const functionHere = () => {
//     return database.plant.map(plant => ({...plant}))
// }