// Fishmonger - The fishmonger purchases fresh fish off the boat, and head chefs around the city visit every morning to get fish for their daily menus.

import {boatInventory} from "/fishingBoat.js"

const fishArray = boatInventory()
// console.log(fish)

// ALGORITHM:
// 1.) Create/Define an exported function named mongerInventory
// 2.) For Of Loop to iterate the fish array.
// 3.) For each fish object if the fish amount is greater than(>) 10 &&(AND) the price is less(<) than $7.50, do buy.


export const mongerInventory = () => {
    const mongerInventoryArray = []

    for (const fish of fishArray) {
        if (fish.amount > 10 && fish.price < 7.50) {
        // Each fish object provided by the fish monger should have a amount of 10 instead of the original amount from the fishing boat.

        fish.amount = 10

            mongerInventoryArray.push(fish)
        }

    }

    return mongerInventoryArray
}

// 4.) Create/Define a new function for the chefInventory.
// 5.) 

export const chefInventory = (chefBudget) => {
    const chefInventoryArray = []

    for (chefBudget of fishArray) {
        if (chefBudget.price < 5.00) {

            chefBudget.price = 5.00
            chefInventoryArray.push(chefBudget)
        }

    }

    return chefInventoryArray
}