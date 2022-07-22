//Responsible for generating a dropdown listing all active facilities
// It populates radio-button inventory list after choice is made
// When mineral is chosen, message of “1 ton of {mineral} from {facility}” will display in the Space Cart area (refer to wireframe)
//this module generates html
//this module receives information from MineralOrders about how much remaining qty of mineral to display
//import { getInfoFunctionNameHere } from "./MineralOrders.js" obv rename

import { getFacilities,   } from "./database.js";

const facilities = getFacilities()









export const Facility = () => {
    //    let currentState = getCurrentState()
    // with just if(currentState) we have all dropdown all the time
        // if (currentState.colonyId) {
        let html = ""
        
        html += `<select id="facilityChoices">`
        html += `<option value="0">Select a Facility</option>`
        const listFacilities = facilities.map( (facility) => {
            if (facility.activeStatus === true) {
                return `<option value="${facility.id}">${facility.name}</option>`
            }
        })
                html += listFacilities.join("")
                html += `</select>`
                return html
        //}
    }