//Responsible for generating a select/dropdown listing all active governors (not inactive)

//Also responsible for making sure the correct colony html displays (if gov x, then colony y)

//Also responsible for facility dropdown being disabled until governor is chosen

//this will possibly be a custom Event Listener? Get clarification with instructors on this part. If governor selected, then activate facility select.

//this module generates html

import { getGovernors, setGovernor, getColonies, getCurrentState, getMineralOrders, getMinerals } from "./database.js"
const govs = getGovernors();
const colony = getColonies();


// build and export a function to generate a select element that has child elements representing each object in the governor array as html
export const Governors = () => {
    let html = ""

    html += `<select id="govern">`
    html += `<option value="0">Select a governor</option>`

    const options = govs.map((gov) => {
        if (gov.activeStatus === true) {
            // value should be colonyId since that is what you reference later to match to colony
        return `<option value="${gov.colonyId}">${gov.name}</option>`
        }
    })
        html += options.join("")
        html += "</select>"
        return html

};



// Listener for choosing governor from dropdown that sets off chain of events that lists associated colony
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "govern") {
            setGovernor(parseInt(event.target.value))
            
            // get the current state of governor (you need the colonyId)
            let currentState = getCurrentState()
                for (const col of colony) {
                    if (currentState.colonyId === col.id) {
            document.querySelector("#taco").innerHTML = col.name
        }
        };
            let minerals = getMinerals()
            let mineralOrds = getMineralOrders()
            let mineralState = getCurrentState()
                for (const item of mineralOrds) {
                    if (mineralState.colonyId === item.colonyId) {
                        for (const min of minerals) {
                            if (min.id === item.mineralId) {
                        
                        document.querySelector("#colonyMineral").innerHTML = min.name
                    }
                }
                }
                }
        }

    });
