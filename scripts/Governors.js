//Responsible for generating a select/dropdown listing all active governors (not inactive)
//Also responsible for making sure the correct colony html displays (if gov x, then colony y)
//Also responsible for facility dropdown being disabled until governor is chosen
//this will possibly be a custom Event Listener? Get clarification with instructors on this part. If governor selected, then activate facility select.
//this module generates html

import { getGovernors, setGovernor, getColonies, getCurrentState, getMineralOrders, getMinerals, setColony } from "./database.js"
const govs = getGovernors();
const colony = getColonies();


// build and export a function to generate a select element that has child elements representing each object in the governor array as html
export const Governors = () => {
    let html = ""
    let currentState = getCurrentState()
    html += `<select id="govern">`
    html += `<option value="0">Select a Governor</option>`
console.log(currentState)
    const options = govs.map((gov) => {
        if (gov.activeStatus === true) {
            if (gov.colonyId === currentState.colonyId && gov.id === currentState.governorId){
                return `<option value="${gov.id}-${gov.colonyId}" selected >${gov.name}</option>`
            } else {
                return `<option value="${gov.id}-${gov.colonyId}">${gov.name}</option>`

            }
            // value should be colonyId since that is what you reference later to match to colony
        }
    })
        html += options.join("")
        html += "</select>"
        return html

};
export const nameColony = () => {
    let currentState = getCurrentState()
    if (currentState.colonyId) {

        for (const col of colony) {
            if (currentState.colonyId === col.id) {
                return col.name
            } 
        }
} else {
    return "Colony"
}
}

// Listener for choosing governor from dropdown that sets off chain of events that lists associated colony
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "govern") {
            setGovernor(parseInt(event.target.value.split("-")[0]))
            setColony(parseInt(event.target.value.split("-")[1]))
        
            // get the current state of governor (you need the colonyId)

        };
      
                // Broadcast a notification that permanent state has changed
                document.dispatchEvent(new CustomEvent("stateChanged"))
});


export const makeMineralList = () => {
    let minerals = getMinerals()
    let mineralOrds = getMineralOrders()
    let mineralState = getCurrentState()
    //tommy code
        const filteredForColony = mineralOrds.filter(x => x.colonyId === mineralState.colonyId)
        console.log(filteredForColony)
        const findMinerals = filteredForColony.map( filteredObj => minerals.find(singleMineral => singleMineral.id === filteredObj.mineralId))
        console.log(findMinerals)
    // pretty much same as below
    
    // below here is keeping track of what mineral, but not how many
        let html = ""
        for (const item of mineralOrds) {
            
            if (mineralState.colonyId === item.colonyId) {

                for (const min of minerals) {
                    if (min.id === item.mineralId) {
                                                
                        // change the p tags if you wish
                html += `<p> tons of ${min.name}</p>`
            }
        }
        }
        }
        
        return html
    
}