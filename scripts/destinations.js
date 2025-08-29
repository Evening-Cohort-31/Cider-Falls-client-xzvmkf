import { getDestinations, getGuests } from "./database.js";

const guests = getGuests();
const destinations = getDestinations();


const desiredDestinationOrder = [
    "Chamfort River",
    "Lost Wolf Hiking Trail",
    "Lodge", 
    "Gander River",
    "Campgrounds", 
    "Pine Bluffs Trails"
];


const getOrderedDestinations = () => {
    const orderedDestinations = [];
    for (const name of desiredDestinationOrder) {
        const found = destinations.find(dest => dest.name === name);
        if (found) {
            orderedDestinations.push(found);
        }
    }
    return orderedDestinations;
}

export const destinationCards = () => {
    const orderedDestinations = getOrderedDestinations();
    let cardHTML = "";

    for (const destination of orderedDestinations) {

        cardHTML += `
            <section class="destination-card">
                <h2 class="destination-card__name"
                    data-type="destination"
                    data-id="${destination.id}">${destination.name}</h2>
                <ol class="destination-card__activities">
        `;

        for (const activity of destination.activities) {

            cardHTML += `
                    <li>
                        ${activity}
                    </li>
            `;
        }

        cardHTML += `
                </ol>
            </section>
        `;
    }

    return cardHTML;
};

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "destination") {
      
        const destinationId = parseInt(itemClicked.dataset.id);
        
        let guestCount = 0;
        
        for (const guest of guests) {
            if (guest.destinationId === destinationId) {
                guestCount++;
            }
        }
        
        window.alert(`There are ${guestCount} guests at this destination`);
    }
});