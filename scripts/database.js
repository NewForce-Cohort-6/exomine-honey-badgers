const database = {
    colonies: [
        {id:  1, name: "Earth"},
        {id:  2, name: "Mars"},
        {id:  3, name: "Europa"},
        {id:  4, name: "Pluto"}
    ],
    governors: [
        {id: 1, name: "Mary Smith", activeStatus: true, colonyId: 1},
        {id: 2, name: "Arnold Schwarzenegger", activeStatus: true, colonyId: 1},
        {id: 3, name: "Gal Gadot", activeStatus: true, colonyId: 1},
        {id: 4, name: "Marvin Martian", activeStatus: true, colonyId: 2},
        {id: 5, name: "Matt Damon", activeStatus: true, colonyId: 2},
        {id: 6, name: "Cheif Hopper", activeStatus: true, colonyId: 3},
        {id: 7, name: "Freya Goldie", activeStatus: true, colonyId: 3},
        {id: 8, name: "Paul Rudd", activeStatus: true, colonyId: 3},
        {id: 9, name: "Jim Justice", activeStatus: false, colonyId: 4}

    ],
    facilities: [
        {id:  1, name: "Minerals 'R' Us", activeStatus:  true},
        {id:  2, name: "Rock Mart", activeStatus:  false},
        {id:  3, name: "Elements", activeStatus:  true},
        {id:  4, name: "Lil' Martian", activeStatus:  true}
    ],
    minerals: [
        {id:  1, name: "Lead"},
        {id:  2, name: "Tin"},
        {id:  3, name: "Aluminum"},
        {id:  4, name: "Platinum"},
        {id:  5, name: "Silver"},
        {id:  6, name: "Iron"},
        {id:  7, name: "Gold"}
    ],
    mineralOrders: [
        {id:  1, colonyId:  1, mineralId: 1}
    ],
    facilityMinerals: [
        {id:  1, facilityId:  1, mineralId:  1, quantity: 54},
        {id:  2, facilityId:  1, mineralId:  3, quantity: 75},
        {id:  3, facilityId:  1, mineralId:  4, quantity: 49},
        {id:  4, facilityId:  2, mineralId:  7, quantity: 35},
        {id:  5, facilityId:  3, mineralId:  3, quantity: 59},
        {id:  6, facilityId:  3, mineralId:  6, quantity: 71},
        {id:  7, facilityId:  3, mineralId:  5, quantity: 88},
        {id:  8, facilityId:  4, mineralId:  2, quantity: 58},
        {id:  9, facilityId:  4, mineralId:  6, quantity: 68}
    ],
    transientState: {} 
    
}

// export const setFacility = (facilityId) => {
//     database.transientState.selectedFacility = facilityId
//     document.dispatchEvent( new CustomEvent("stateChanged") )
// }

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getMinerals = () => {
    return database.minerals.map(m => ({...m}))
}

export const getColonies = () => {
    return database.colonies.map( c=> ({...c}))
}
export const getGovernors = () => {
    return database.governors.map( g=> ({...g}))
}
export const getMineralOrders = () => {
    return database.mineralOrders.map(order => ({...order}))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(fm => ({...fm}))
}

export const setMineral = (id) => {
    database.transientState.mineralId = id
}
 
export const setFacility = (id) => {
    database.transientState.facilityId = id
}
 
export const addMineralOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.transientState}
 
    // Add a new primary key to the object
    const lastIndex = database.mineralOrders.length - 1
    newOrder.id = database.mineralOrders[lastIndex].id + 1
 
    // Add a timestamp to the order
    newOrder.timestamp = Date.now()
 
    // Add the new order object to custom orders state
    database.mineralOrders.push(newOrder)
 
    // Reset the temporary state for user choices
    database.transientState = {}
 
    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
};


export const setGovernor = (id) => {
    database.transientState.governorId = id
};
export const setColony = (id) => {
    database.transientState.colonyId = id
};

export const getCurrentState = () => {
    return database.transientState
};


