console.log("Welcome to the main module")

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

// const yearlyPlan = createPlan()
// console.log(yearlyPlan)

// TESING "create" functions
const thing = createCorn()
// console.log(thing)

import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

// TESING
addPlant(thing)
const planted = usePlants()
console.log(planted)