import { getAnime, getById, deleteAnime, addAnime } from './data';

const resolvers = {
    Query: {
        animes: () => getAnime(),
        anime: (_, args) => getById(args.id),
    },
    Mutation: {
        addAnime: (_, args) => addAnime(args.name, args.score),
        deleteAnime: (_, args) => deleteAnime(args.id)
    }
};

export default resolvers;