// database containing two arrays of objects, guests and destinations.
const database = {
  guests: [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      destinationId: 1,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      destinationId: 2,
    },
    {
      id: 3,
      firstName: "Peter",
      lastName: "Jones",
      destinationId: 1,
    },
    {
      id: 4,
      firstName: "Mary",
      lastName: "Williams",
      destinationId: 3,
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Brown",
      destinationId: 2,
    },
  ],
  destinations: [
    {
      id: 1,
      name: "Chamfort River",
      activitiesId: [1, 2, 3],
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
      activitiesId: [4, 5, 6],
    },
    {
      id: 3,
      name: "Lodge",
      activitiesId: [7, 8, 9, 5],
    },
    {
      id: 4,
      name: "Gander River",
      activitiesId: [3, 4],
    },
    {
      id: 5,
      name: "Campgrounds",
      activitiesId: [9, 7, 8],
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
      activitiesId: [4, 5, 10],
    },
  ],
  services: [
    {
      name: "rafting",
      id: 1,
    },
    {
      name: "canoeing",
      id: 2,
    },
    {
      name: "fishing",
      id: 3,
    },
    {
      name: "hiking",
      id: 4,
    },
    {
      name: "picnicking",
      id: 5,
    },
    {
      name: "rock climbing",
      id: 6,
    },
    {
      name: "lodging",
      id: 7,
    },
    {
      name: "parking",
      id: 8,
    },
    {
      name: "information",
      id: 9,
    },
    {
      name: "zip lines",
      id: 10,
    },
  ],
};

export const getGuests = () => {
  return structuredClone(database.guests);
};
export const getDestinations = () => {
  return structuredClone(database.destinations);
};
export const getServices = () => {
  return structuredClone(database.services);
};
