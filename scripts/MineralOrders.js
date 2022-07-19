import { getMineralOrders, getMinerals, getFacilities } from "./database.js"

//we think we might be doing the math to decrease facility mineral quantity in this module, but not certain

//this module sends information to Colony that informs it of what html to display-- note: the colony mineral counts will either appear for the first time or increment by one ton

//this module sends information to Facilities that will help Facilities update mineral count for display in the radio buttons. These amounts will always decrease by one ton
