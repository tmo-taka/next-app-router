import { gql } from 'graphql-request'

export const GET_NAVIGATION = gql`
    query {
        allPages {
            edges {
                node {
                    _meta {
                        id
                        uid
                    }
                    title
                }
            }
        }
    }
`;