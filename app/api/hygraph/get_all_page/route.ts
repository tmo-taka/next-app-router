import { client } from "@/app/client";
import { GET_ALL_PAGE } from "@/app/graphql/queries";

export async function GET() {
	try {
		const res = await client.request(GET_ALL_PAGE);
		return Response.json(res);
	} catch (e) {
		throw new Error(e);
	}
}
