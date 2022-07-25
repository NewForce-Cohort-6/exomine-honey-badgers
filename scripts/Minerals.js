//Responsible for: data of minerals and the radio buttons for user to make an order of minerals

//where do we tell the radio button text how much qty of a mineral is left? is that facilities or here?

//this module generates html
import { getMinerals, setMineral, getFacilityMinerals, getCurrentState, getFacilities  } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
        }
    
    document.dispatchEvent(new CustomEvent("stateChanged"))
    }
)

export const spaceCartText = () => {
let facilityMinerals = getFacilityMinerals()    
let currentState = getCurrentState()
let facilities = getFacilities()
let minerals = getMinerals()
let html = ""

const items = facilityMinerals.filter(singleObject => singleObject.mineralId === currentState.mineralId && singleObject.facilityId === currentState.facilityId)
console.log(items)

const spaceCard = items.map((item) => {
    const neededMineral = minerals.find(mineral => mineral.id === item.mineralId )
    const neededFacility = facilities.find(facility => facility.id === item.facilityId)
 
// const spaceCard = currentState.filter(card => card.mineralId === minerals.id && card.facilityId === facilities.id)
    return `1 Ton ${neededMineral.name} from ${neededFacility.name}`
})
html += spaceCard.join("")
return html
}       