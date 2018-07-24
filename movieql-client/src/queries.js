import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        mangas {
            id
            n
            l
        }
    }
`;