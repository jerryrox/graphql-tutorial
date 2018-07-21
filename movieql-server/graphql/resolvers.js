import { people, getById } from './data';

const resolvers = {
    Query: {
        people: () => people,
        person: (_, args) => getById(args.id)
    }
};

export default resolvers;