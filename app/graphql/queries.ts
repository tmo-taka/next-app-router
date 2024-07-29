import { gql } from 'graphql-request'

export const GET_ALL_PAGE = gql`
    query {
        pages {
            title
            slug
        }
    }
`;

export const GET_PAGE = gql`
    query Page($slug: String!) {
        page(where: {slug: $slug}) {
            title
            slug
            subtitle,
            content {
                html
            }
        }
    }
`;