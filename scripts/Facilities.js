//Responsible for generating a dropdown listing all active facilities
// It populates radio-button inventory list after choice is made
// When mineral is chosen, message of “1 ton of {mineral} from {facility}” will display in the Space Cart area (refer to wireframe)
//this module generates html
//this module receives information from MineralOrders about how much remaining qty of mineral to display
//import { getInfoFunctionNameHere } from "./MineralOrders.js" obv rename

import { getFacilities, setFacility, getMinerals, getFacilityMinerals, getCurrentState } from "./database.js";

const facilities = getFacilities()

// Given the user wants to purchase minerals for a colony
// When that colony's governor has been chosen
// Then the mining facility dropdown should be enabled
//check with Tabatha about Governors.js to see what "proof" I can use that governor has been selected. And/or export a function to Governors that can go in... the Event Listener?

//this generates <select> element with child <option> for facilities


export const Facility = () => {
   let currentState = getCurrentState()
// with just if(currentState) we have all dropdown all the time
    // if (currentState.colonyId) {
    let html = `<select id="facilityChoices">`
    html += `<option value="0">Select a Facility</option>`
    
    const listFacilities = facilities.map( (facility) => {
        if (facility.activeStatus === true) {
            if(facility.id === currentState.facilityId){}

            return `<option value="${facility.id}" selected>${facility.name}</option>`
        }else {
            return `<option value="${facility.id}">${facility.name}</option>`
        }
        
        }
        
    })
            html += listFacilities.join("")
            html += `</select>`
            return html
    //}
}

// Given the user wants to purchase from a specific facility
// When the user chooses a facility
// Then the list of available minerals should appear
// And the available amount should be displayed next to the name of the mineral, if there are more than 0 of that mineral available

document.addEventListener(
    "change",
    (e) => {
        if (e.target.id === 'facilityChoices') {
            setFacility(parseInt(e.target.value))
        // call a function? from what i'm doing line 50 /radiobuttons?

        }
    }
)

//write function that if (facility is chosen) {display radio buttons}
// export const Minerals = () => {
    
// }


export const Minerals = () => {
    const minerals = getMinerals()
    let html = "<ul>"
    // Use .map() for converting objects to <li> elements
    let facilityState = getCurrentState()
    const items = facilityMinerals.filter(singleFacility => singleFacility.facilityId === facilityState.facilityId) 
    // console.log(items, facilityState.mineralId)
    debugger
   
    const mineralButtons = items.map(item => minerals.filter(singleMineral => singleMineral.id === item.mineralId ))
            return singleMineral.name
    //     return `<li> 
    //         <input type="radio" name="mineral" value="${mineral.id}" />${mineral.quantity} tons of ${mineral.name}
    //     </li>`
    //     }
    html += items.join("")
    html += "</ul>"
    return html
}
 
// Given the user wants to purchase from another facility
// When the user chooses a different facility
// Then the last chosen facility's minerals should not be rendered
// And the list of available minerals should appear for the currently chosen facility

// Hint: You need to filter the array of facility minerals on the facilityId foreign key as the first step. It should match the id of the facility chosen by the user. Where do you store which facility was chosen by the user?


// export const Facility = () => {
//     let html = `<select id="facilityChoices">`
//     html += `<option value="0">Choose a facility</option>`

//     const listFacilities = facilities.map( (facility) => {
//         return `<option value="${facility.id}">${facility.name}</option>`
//     })
//     html += listFacilities.join("")
//     html += `</select>`
//     return html
// }
//const minerals = getMinerals()
//const facilityMinerals = getFacilityMinerals()
