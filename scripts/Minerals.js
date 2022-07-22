//Responsible for: data of minerals and the radio buttons for user to make an order of minerals

//where do we tell the radio button text how much qty of a mineral is left? is that facilities or here?

//this module generates html
import { getMinerals, setMineral, getFacilityMinerals, getCurrentState } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
            
        let foundMineral = getCurrentState()
            

        document.querySelector(".ton").innerHTML = `1 Ton ${foundMineral.mineralId.name} from ${foundMineral.facilityId.name}` 
        }
    }
)

