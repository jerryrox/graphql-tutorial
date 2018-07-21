export const people = [
    {
        id: 1,
        name: "Jerryrox",
        age: 21,
        gender: "male"
    },
    {
        id: 2,
        name: "Jerryrox 2",
        age: 22,
        gender: "male"
    },
    {
        id: 3,
        name: "Jerryrox 3",
        age: 23,
        gender: "male"
    },
    {
        id: 4,
        name: "Jerryrox 4",
        age: 24,
        gender: "male"
    },
    {
        id: 5,
        name: "Jerryrox 5",
        age: 25,
        gender: "male"
    }
];

export const getById = id => {
    return people.filter(person => person.id === id)[0];
};