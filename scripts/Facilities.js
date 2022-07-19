//Responsible for generating a dropdown listing all active facilities

// It populates radio-button inventory list after choice is made

// When mineral is chosen, message of “1 ton of {mineral} from {facility}” will display in the Space Cart area (refer to wireframe)

//this module generates html

//this module receives information from MineralOrders about how much remaining qty of mineral to display
//import { getInfoFunctionNameHere } from "./MineralOrders.js" obv rename

import { getFacilities, setFacility } from "./database.js";