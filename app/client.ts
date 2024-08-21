import { GraphQLClient } from "graphql-request";

const endpoint = process.env.API_URL ?? "";

// アプリ全体で共通のhygraphへのGraphQLClient
export const client = new GraphQLClient(endpoint, {
	// eslint-disable-next-line @typescript-eslint/unbound-method
	method: "post",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
	},
});
