// content API If no stage parameter is set on the GraphQL query or additional HTTP header, then content from the selected default stage will be served.
import { gql } from 'graphql-request'

export const GET_ALL_PAGE = gql`
    query {
        pages(stage: PUBLISHED) {
            title
            slug
        }
    }
`;

export const GET_PAGE = gql`
    query Page($slug: String!) {
        page(where: {slug: $slug}, stage: PUBLISHED) {
            title
            slug
            subtitle,
            content {
                html
            }
        }
    }
`;