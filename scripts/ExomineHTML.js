//This module is responsible for basic HTML format and importing/calling functions from all modules that create html

//imports
//import { Governors } from "./Governors.js"
//import { Colony } from "./Colonies.js"
import { Facility } from "./Facilities.js"
<<<<<<< HEAD
//import { Minerals } from "./Minerals.js"
//import { Orders } from "./MineralOrders.js"
=======
import { Minerals } from "./Minerals.js"
import { Orders } from "./MineralOrders.js"
import { addMineralOrder } from "./database.js"
>>>>>>> main

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
    return `
        <h1>Solar System Mining Market Place</h1>

        <article id="upper">
            <section class="governors">
                <h2>Choose a governor</h2>
                <section>${Governors()}</section>
                    </section>
                    <section class="colonies">
                        <h2 id="taco">Colonies</h2>
                        <section id="colonyMineral"></section>
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
//go and fix all functions before PR

