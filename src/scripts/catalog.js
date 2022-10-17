// import { harvestPlants } from "./harvester.js"

// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
// As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.

// export const catalogHTML = (growArray) => {
// const array = growArray
// let html1 = ""
//     for (seedObj of growArray){
//         html1 += `<section class="plant">${seedObj.type}</section>`
//     }
//     return html1
// }


// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.

// const crop = harvestPlants()

export const catalogHTML = (foodArray) => {
    let html = ""
    for (const seedObj of foodArray){
        html += `<section class="plant">${seedObj.type}</section>`
    }
    return html
}

