//Responsible for generating a dropdown listing all active facilities
// It populates radio-button inventory list after choice is made
// When mineral is chosen, message of “1 ton of {mineral} from {facility}” will display in the Space Cart area (refer to wireframe)
//this module generates html
//this module receives information from MineralOrders about how much remaining qty of mineral to display
//import { getInfoFunctionNameHere } from "./MineralOrders.js" obv rename

import { getFacilities, setFacility, getMinerals, getFacilityMinerals, getCurrentState } from "./database.js";

const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()

// Given the user wants to purchase minerals for a colony
// When that colony's governor has been chosen
// Then the mining facility dropdown should be enabled
//check with Tabatha about Governors.js to see what "proof" I can use that governor has been selected. And/or export a function to Governors that can go in... the Event Listener?

//this generates <select> element with child <option> for facilities


export const Facility = () => {
    let currentState = getCurrentState()
    let html = `<select id="facilityChoices">`
    html += `<option value="0">Select a Facility</option>`
    
    //do we need a second conditional that has something like (facility.id === currentState.facilityId)
    const listFacilities = facilities.map( (facility) => {
        if (facility.activeStatus === true) {
            if (facility.id === currentState.facilityId) {
            return `<option value="${facility.id}" selected>${facility.name}</option>`
            } else {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        } 
    })
    html += listFacilities.join("")
    html += `</select>`
    return html
}
//two functions? one that builds facilities and one that gets them
//we can't use selected in a .map in this case because it's going to select the last item in the array...
//detritus else {
//     return `<option value="${facility.id}">${facility.name}</option>`
// }
//use the "selected" logic from Governors to make sure the choice persists through any state change/ custom event refreshes.

// Given the user wants to purchase from a specific facility
// When the user chooses a facility
// Then the list of available minerals should appear
// And the available amount should be displayed next to the name of the mineral, if there are more than 0 of that mineral available

document.addEventListener(
    "change",
    (e) => {
        if (e.target.id === 'facilityChoices') {
            setFacility(parseInt(e.target.value))
            
            
        }
        document.dispatchEvent(new CustomEvent("stateChanged"))
        
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
            //        const filteredForColony = mineralOrds.filter(x => x.colonyId === mineralState.colonyId)
            //want to get array back from bridge table and get specific mineral. We have the facility and we can pull the qty of a mineral, but we only have the mineral id. We need to match the mineral id to the mineral name.
            const mineralButtons = items.map((item) =>  {
                const taco = minerals.find((singleMineral) => singleMineral.id === item.mineralId) 
                return `<input type="radio" name="mineral" value="${taco.id}" /> ${item.quantity} tons of ${taco.name}</li>`}) //stopped here 
            
            // (mineral => {
                //     return `<li>
                //         <input type="radio" name="mineral" value="${mineral.id}" />${mineral.quantity} tons of ${mineral.name}
                //     </li>`
                //     })
    html += mineralButtons.join("")
    html += "</ul>"
    return html
}
// Given the user wants to purchase from another facility
// When the user chooses a different facility
// Then the last chosen facility's minerals should not be rendered
// And the list of available minerals should appear for the currently chosen facility

// Hint: You need to filter the array of facility minerals on the facilityId foreign key as the first step. It should match the id of the facility chosen by the user. Where do you store which facility was chosen by the user?
