// import the structured clones of the arrays of services and destinations from the database module.
import { getServices, getDestinations } from "./database.js";
// define a function that displays a HTML list of all of the services offered throughout the different areas of the park.
export const getServicesHTML = () => {
  // insert dataset for each list item in the HTML so that we can call on it later for the event listener.
  const services = getServices();
  // dataset included: data-id, data-type, needs name as string interpolation
  let serviceIdHTML = "";
  serviceIdHTML += `<ul class="services-list">`;

  for (const service of services) {
    serviceIdHTML += `<li class="services-item" data-id= "${service.id}" data-type= "service">
       ${service.name}
      </li>`;
  }

  serviceIdHTML += `</ul>`;
  return serviceIdHTML;
};

// create an event listener that when a service in that list is clicked on, displays which areas of the park that service is offered in.
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const destinations = getDestinations();
  if (itemClicked.dataset.type === "service") {
    const serviceId = parseInt(itemClicked.dataset.id);
    const serviceName = itemClicked.innerHTML;
    let destinationArray = [];
    for (const destination of destinations) {
      if (destination.activitiesId.includes(serviceId)) {
        destinationArray.push(destination.name);
      }
    }

    window.alert(`${serviceName} is available in ${destinationArray}`);
  }
});
// create click event listener

// make a variable that captures click target html element. this will let us access the dataset within each html element list item.

// only display message when they click on an object with the data type "service"

// loop through all destinations seeing if any of the servicesIds of each individual destination contains the id of the service that we have clicked on
// create variable for serviceId that restores the numerical value of the dataset of id

// define a new array to store names of the destinations that have a matching servicesId to the service that was clicked.

// create a window alert that displays
