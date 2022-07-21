import { getMineralOrders, getMinerals, getFacilities } from "./database.js"

//we think we might be doing the math to decrease facility mineral quantity in this module, but not certain

//this module sends information to Colony that informs it of what html to display-- note: the colony mineral counts will either appear for the first time or increment by one ton

//this module sends information to Facilities that will help Facilities update mineral count for display in the radio buttons. These amounts will always decrease by one ton
const buildOrderListItem = (order) => {
    

    const minerals = getMinerals()
    
    // Remember that the function you pass to find() must return true/false
    const foundMineral = minerals.find(
        (mineral) => {
            return mineral.id === order.mineralId
        }
    )

    const facilities = getFacilities()


    const foundFacility = facilities.find(
        (facility) => {
            return facility.id === order.facilityId
        }
    )
    

//I need to export this to Facility Minerals??
    

// numbers change in 2 places.  Do I need to write both math and html here and export to??
    
    
   
}


export const Orders = () => {
    
    const orders = getMineralOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

// export const totalQuantity = foundMineral.quantity - 1
//         return `<li>
//         ${totalQuantity} of ${foundMineral.name}
//         </li>`