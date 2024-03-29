//This module is responsible for basic HTML format and importing/calling functions from all modules that create html

//imports
import { Governors, nameColony, makeMineralList } from "./Governors.js"
//import { Colony } from "./Colonies.js"
import { Facility, Minerals, nameFacility } from "./Facilities.js"
//import { Minerals } from "./Minerals.js"
import { Orders } from "./MineralOrders.js"
import { addMineralOrder, getCurrentState, getFacilities, setFacility } from "./database.js"
import { spaceCartText } from "./Minerals.js"



//when customer clicks "Purchase Mineral," we need to store their choices permanently. Use transientState and addMineralOrder to click event
document.addEventListener(
    "click",
    (event) => {
        const itemclicked = event.target
        if (itemclicked.id === "orderButton") {
            addMineralOrder()
        }
    }
)

export const ExomineHTML = () => {
    let currentState = getCurrentState()
    return `
        <h1>Solar System Mining Market Place</h1>

        <article id="upper">
            
            <section class="governors">
                <h2>Choose a Governor</h2>
                <section>${Governors()}</section>
            </section>
            <section class="colonies">
                <h2 id="taco">${nameColony()}</h2>
                <section id="colonyMineral">${makeMineralList()}</section>
                
            </section>
        </article>
        <article id="chooseFacility">
            <section class="facilities">
                    <h2>Choose a Facility</h2>
                    <section>${currentState.colonyId ? Facility():""}</section>
            </section> <br>
        </article>
        <article id="lower">
            <section class="minerals">
                <h2>Facility Minerals for ${nameFacility()} 
                </h2>
                <section>${Minerals()}</section>
            </section>
            <section class="spaceCart">
                <h2>Space Cart</h2>
                <div class= "ton">${currentState.mineralId ? spaceCartText():""}</div>
                <button id="orderButton">Purchase Mineral</button>
                <section>${Orders()}</section>
            </section>
        </article>
    `
}
//go and fix all functions before PR

