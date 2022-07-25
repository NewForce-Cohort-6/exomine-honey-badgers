import { getMineralOrders, getMinerals, getFacilities, getColonies, getCurrentState, getFacilityMinerals, setCurrentState } from "./database.js"


//we think we might be doing the math to decrease facility mineral quantity in this module, but not certain

//this module sends information to Colony that informs it of what html to display-- note: the colony mineral counts will either appear for the first time or increment by one ton

//this module sends information to Facilities that will help Facilities update mineral count for display in the radio buttons. These amounts will always decrease by one ton

const colonies = getColonies()
const facilities = getFacilities()
const minerals = getMinerals()
const mineralFacilities = getFacilityMinerals()


export const buildOrderListItem = (Orders) => {
    const Order = getCurrentState()
    getMineralOrders()
}

export const Orders = () => {
    
    const orders = getMineralOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

// export const buildOrderListItem = () => {
//     //get currentState
//    const Order = getCurrentState()
//    const chosenColony = filteredColony(Order.colonyId)
//    const chosenFacility = filteredFacility(Order.facilityId)
//    const chosenMineral = filteredMineral(Order.mineralId)

//     getMineralOrders()
     
    const filteredMineral = (mineralId) => {
        for (min of minerals) {
            if(mineralId === min.id) {
                return min
            }
        }
    }

    
    const filteredFacility = (facilityId) => {
        for (const facility of facilities) {
            if(facilityId === facility.id) {
                return facility
            }
        }
    }
    
    const filteredColony = (colonyId) => {
        for (const colony of colonies) {
            if (colonyId === colony.id) {
                return colony
            }
        }
    }
//I need to export this to Facility Minerals??
    

// numbers change in 2 places.  Do I need to write both math and html here and export to??


const subtractMineral = (mineralId, facilityId) => {
    for (const item of mineralFacilities) {
        if(item.mineralId === mineralId && item.facilityId === facilityId) {
            if(item.quantity > 0) {
               setCurrentState("amount", item.quantity -1)
               const transState = getCurrentState()

            } else {
                return null
            }
        }
    }
}


// transient state will be needed to update facility mineral quantity
// export const totalQuantity = foundMineral.quantity - 1
//         return `<li>
//         ${totalQuantity} of ${foundMineral.name}
//         </li>`

// need to add facilityid
//we can then add how many times the facilityid match the id... to add to colony quantity

