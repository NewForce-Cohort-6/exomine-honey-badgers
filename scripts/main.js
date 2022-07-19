import { ExomineHTML } from "./ExomineHTML.js"
 
 
const mainContainer = document.querySelector("#container")
 
const renderAllHTML = () => {
    mainContainer.innerHTML = ExomineHTML()
}
 
renderAllHTML()
 
//_______Custom Event Listener
 
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
});
