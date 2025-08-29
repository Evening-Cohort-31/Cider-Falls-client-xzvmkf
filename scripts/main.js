// invoking functions imported from destinations and guests that will inject HTML into the DOM
import { guestList } from "./guests.js";
import { destinationCards } from "./destinations.js";

const guestHTML = guestList();
const destinationHTML = destinationCards();

document.querySelector(".destinations").innerHTML = destinationHTML;
document.querySelector(".guests").innerHTML = guestHTML;
