//Responsible for: data of minerals and the radio buttons for user to make an order of minerals

//where do we tell the radio button text how much qty of a mineral is left? is that facilities or here?

//this module generates html
import { getMinerals, setMineral, getFacilityMinerals } from "./database.js"
const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral(parseInt(event.target.value))
            const targetMineral = event.target.value
             document.querySelector(".ton").innerHTML = `1 Ton ${targetMineral.mineralId.name} from ${targetMineral.facilityId.name}`      
        }
    }
)


export const Minerals = () => {
    let html = "<ul>"
    // Use .map() for converting objects to <li> elements
    const items = facilityMinerals.map(mineral => {
        return `<li>
            <input type="radio" name="mineral" value="${mineral.id}" />${mineral.quantity} tons of ${mineral.name}
        </li>`
        })
    html += items.join("")
    html += "</ul>"
    return html

}