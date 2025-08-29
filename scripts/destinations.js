// Define function to create HTMl for destination cards 
import { getDestinations, getGuests } from "./database.js";

const guests = getGuests()

//define the order I want my destinations to appear in
const desiredDestinationOrder = [
    "Chamfort River",
    "Lost Wolf Hiking Trail",
    "Lodge",
    "Gander River",
    "Campgrounds",
    "Pine Bluffs Trails"
]

//function to create HTML for destination cards
export const destinationCards = () => {

    //get the structured cloned destinations from database.js
    const destinations = getDestinations();

    //use map method to loop through the desiredDestinationOrder array and build a new array
    const orderedDestinations = desiredDestinationOrder.map(
        //use find method to get the destination object that matches the name from the desiredDestinationOrder array
        //filter out any destinations that may not have a "name" property
        (name) => destinations.find((dest) => dest.name === name).filter(Boolean)
    );

    //initialize the empty HTML string
    let cardHTML = "";

    //start building the destination cards by looping through the orderedDestinations array
    for (const destination of orderedDestinations) {

        // Build the HTML for each destination card
        // Use template literals to create the card structure
        // Each Section has a Title and has a List of the activities
        // Included optional elements (as commented HTML) for description and image that a can be added later for future improvements
        cardHTML += `
            <section class="destination-card">
                <h2 class="destination-card__name"
                data-type="destination">${destination.name}</h2>
                <!-- Optional Additions for Future Enhancements -->
                <!-- <p class="destination-card__description">${destination.description}</p> -->
                <!--<img class="destination-card__image" src="${destination.image}" alt="${destination.name}"> -->
                <ol class="destination-card__activities">
        `;

        // Loop through the activities array to build the list items for activities supported by each destination
        for (const activity of destination.activities) {
            cardHTML += `
                    <li>
                        ${activity.name}
                    </li>
            `;
        }

        // Close the ordered list for activities and the destination-card section
        cardHTML += `
                </ol>
            </section>
        `;
    }

    return cardHTML;
};

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "destination"){

        const guestId = parseInt(itemClicked.dataset.id)

        let guestCount = 0

            for (const guest of guests) {
                if (guest.destinationId === guestId) {}
                    guestCount++ 
            }
         }
        window.alert(`There are ${guestCount} guests in this destination`)

    }
)