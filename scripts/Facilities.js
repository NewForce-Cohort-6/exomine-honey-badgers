//Responsible for generating a dropdown listing all active facilities
// It populates radio-button inventory list after choice is made
// When mineral is chosen, message of “1 ton of {mineral} from {facility}” will display in the Space Cart area (refer to wireframe)
//this module generates html
//this module receives information from MineralOrders about how much remaining qty of mineral to display
//import { getInfoFunctionNameHere } from "./MineralOrders.js" obv rename

import { getFacilities, setFacility } from "./database.js";

const facilities = getFacilities()

// Given the user wants to purchase minerals for a colony
// When that colony's governor has been chosen
// Then the mining facility dropdown should be enabled
//check with Tabatha about Governors.js to see what "proof" I can use that governor has been selected. And/or export a function to Governors that can go in... the Event Listener?

//this generates <select> element with child <option> for facilities

export const Facility = () => {
    let html = `<select id="facilityChoices">`
    html = `<option value="0">Choose a Facility</option>`
    const listFacilities = facilities.map( (facility) => {
        if (facility.activeStatus === true) {
        return `<option value="${facility.id}">${facility.name}</option>`
        }
    })
    html += listFacilities.join("")
    html += `</select>`
}



// Given the user wants to purchase from a specific facility
// When the user chooses a facility
// Then the list of available minerals should appear
// And the available amount should be displayed next to the name of the mineral, if there are more than 0 of that mineral available



// Given the user wants to purchase from another facility
// When the user chooses a different facility
// Then the last chosen facility's minerals should not be rendered
// And the list of available minerals should appear for the currently chosen facility

// Hint: You need to filter the array of facility minerals on the facilityId foreign key as the first step. It should match the id of the facility chosen by the user. Where do you store which facility was chosen by the user?