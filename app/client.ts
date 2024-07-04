// import * as prismic from '@prismicio/client'
import { GraphQLClient } from 'graphql-request'

const repositoryName = process.env.PRISMIC_REPOSITYORY_NAME ?? ''

// const prismicClient = prismic.createClient(repositoryName, {
//   // If your repository is private, add an access token
//   // accessTokenはここにも設定しないとinvalid access token になってしまいます
//     accessToken: process.env.PRISMIC_ACCESS_TOKEN,
// })

// アプリ全体で共通のprismicへのGraphQLClient
export const client = new GraphQLClient(
    repositoryName, {
    // eslint-disable-next-line @typescript-eslint/unbound-method
        // fetch: prismicClient.graphQLFetch as (
        //     input: RequestInfo | URL,
        //     init?: RequestInit | undefined,
        // ) => Promise<Response>,
        method: 'get',
        // prismicで生成したapischemaのバージョン((https://your-repo-name.prismic.io/api/v2))
        // APIのtoken(https://your-repo-name.prismic.io/settings/apps/)
        // tokenはBearerで仕込む(https://prismic.io/docs/integration#add-an-authorization-token)
        headers: {
            // Accept: 'application/json',
            // 'Content-Type': 'application/json',
            'Prismic-Ref': process.env.PRISMIC_REF ?? '',
            Authorization: `Token ${process.env.PRISMIC_ACCESS_TOKEN}`,
        },
    }
)