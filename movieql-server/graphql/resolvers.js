const Jerryrox = {
    name: "Jerryrox",
    age: 21,
    gender: "male"
};

const resolvers = {
    Query: {
        person: () => Jerryrox
    }
};

export default resolvers;