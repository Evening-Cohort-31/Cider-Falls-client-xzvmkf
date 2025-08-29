// Define function to create HTMl for list of guests
import { getGuests } from "./database.js";

export const guestList = () => {
  const guests = getGuests();

  let guestHTML = "";
  guestHTML += `<ul class="guest-list">`;

  for (const guest of guests) {
    guestHTML += `<li class="guest-item">
        ${guest.firstName} ${guest.lastName}
      </li>`;
  }

  guestHTML += `</ul>`;
  return guestHTML;
};
