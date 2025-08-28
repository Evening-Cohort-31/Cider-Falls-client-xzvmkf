// database containing two arrays of objects, guests and destinations. 
const database = {
    guests: [{
        id: 1,
        firstName: "John",
        lastName: "Smith",
        destinationId: 1
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        destinationId: 2
    },
    {
        id: 3,
        firstName: "Peter",
        lastName: "Jones",
        destinationId: 1
    },
    {
        id: 4,
        firstName: "Mary",
        lastName: "Williams",
        destinationId: 3
    },
    {
        id: 5,
        firstName: "David",
        lastName: "Brown",
        destinationId: 2
    }
], 
destinations:[
    {
        id: 1,
        name: "Chamfort River",
        activities: ["rafting", "canoeing", "fishing"]
    },
    {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        activities: ["hiking", "picnicking", "rock climbing"]
    },
    {
        id: 3,
        name: "Northwest Section",
        activities: ["lodging", "parking", "information", "picnicking"]
    },
    {
        id: 4,
        name: "Gander River",
        activities: ["fishing", "hiking"]
    },
    {
        id: 5,
        name: "Southern Section",
        activities: ["information", "lodging", "parking"]
    },
    {   
        id: 6,
        name: "Pine Bluffs Trails",
        activities: ["hiking", "picnicking", "zip lines"]
    }
]
}


export const getGuests = () => {
        return structuredClone(database.guests)}
export const getDestinations = () => {
        return structuredClone(database.destinations)}