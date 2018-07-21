import { getMangas, getThumbUrl, getReadUrl } from './data';

const resolvers = {
    Query: {
        mangas: () => getMangas(""),
        manga: (_, args) => getMangas(args.name),
        thumb: (_, args) => getThumbUrl(args.id),
        readUrl: (_, args) => getReadUrl(args.id)
    },
};

export default resolvers;