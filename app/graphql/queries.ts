import { gql } from 'graphql-request'

export const GET_ALL_PAGE = gql`
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

export const GET_PAGE = gql`
    query GetPage($uid: String!) {
        page(uid: $uid, lang: "ja-jp") {
            _meta {
                id
                uid
                type
                lang
                tags
            }
            title
            slices {
                __typename
                # # ... on PageSlicesHero {
                # ... on text {
                #     primary
                # }
            }
        }
    }
`;