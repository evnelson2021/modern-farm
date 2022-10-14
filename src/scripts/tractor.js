import { createAsparagus } from "./seeds/asparagus.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import {createPlan} from "./plan.js"
// import { usePlants } from "./field.js"

// Define and export a plantSeeds function
// The year's planting plan is parameter for plantSeeds
// The plan is an array containing 4 arrays representing the rows in the field to be plants. Iterate both the parent array and the children arrays.
// Invoke the corresponding factory function to match food type (e.g. if the food type is "Asparagus", invoke createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.

export const plantSeeds = (planForYear) => {
    for (const row of planForYear){
        for (const col of row)
            if (col === "Corn"){
                addPlant(createCorn())
            } else if (col === "Asparagus"){
                addPlant(createAsparagus())
            } else if (col === "Potato"){
                addPlant(createPotato())
            } else if (col === "Soybean"){
                addPlant(createSoybean())
            } else if (col === "Sunflower"){
                addPlant(createSunflower())
            } else if (col === "Wheat"){
                addPlant(createWheat())
            } 

    }
}
