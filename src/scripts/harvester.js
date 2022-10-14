import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { usePlants } from "./field.js"
import { addPlant } from "./field.js"
import { createPlan } from "./plan.js"


//  let plan = createPlan()

//  const growArray = []

// In this module, define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input. - need to import usePlants which gives us the plantsArray
// The function will return an array of seed objects. - Need empty array to begin
// Iterate the array of growing plants. On each plant, get the value of the output property.
// Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
// 
// let growArray = []

export const harvestPlants = (anyArray) =>{
    let growArray = []
    for (const seedObj of anyArray){
        for (let i = 0; i < seedObj.output; i++){
            if ((Array.isArray(seedObj)) === true ){
                for(seed of seedObj){
                (seedObj.output.value)
                }
            } else {
                (seedObj.output.value)
            }
            growArray.push(seedObj)
            }
        }
    return growArray
}

// pushing into new growArray
// for every seedObj in whatever array is passed in, start at index 0 and stop at index equal to seedObj.output (#) incrementing one at a time
// if it's an array of arrays, only push in 1/2 of the value of object.output. (For corn)
// Otherwise, push in the value of of object.output.