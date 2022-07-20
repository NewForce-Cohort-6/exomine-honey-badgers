//This module is responsible for basic HTML format and importing/calling functions from all modules that create html

//imports
import { Governors } from "./Governors.js"
import { Colony } from "./Colonies.js"
import { Facility } from "./Facilities.js"
import { Minerals } from "./Minerals.js"
import { Orders } from "./MineralOrders.js"

//when customer clicks "Purchase Mineral," we need to store their choices permanently. Use customOrder state and addCustomOrder to click event
document.addEventListener(
    "click",
    (event) => {
        const itemclicked = event.target
        if (itemclicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const ExomineHTML = () => {
    return `
        <h1>Solar System Mining Market Place</h1>

        <article id="upper">
            <section class="governors">
                <h2>Choose a governor</h2>
                <section>${Governors()}</section>
            </section>
            <section class="colonies">
                <section>${Colony()}</section>
            </section>
        </article>
        <article id="lower">
            <section class="facilities">
                <h2>Choose a facility</h2>
                <section>${Facility()}</section>
            </section>
            <section class="minerals">
                <section>${Minerals()}</section>
            </section>
            <section class="spaceCart">
                <h2>Space Cart</h2>
                <button id="orderButton">Purchase Mineral</button>
                <section>${Orders()}</section>
            </section>
        </article>
    `
}
