import {
    gql,
} from "@apollo/client";

const getAuthorsQuery = gql`
query {
    authors {
        name
        id
    }
}
`;

const getBooksQuery = gql`
query {
    books {
        name
        id
        genre
    }
}
`;

export { getAuthorsQuery, getBooksQuery }