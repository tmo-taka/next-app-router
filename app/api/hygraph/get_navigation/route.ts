import {client} from "@/app/client";
import {GET_NAVIGATION} from "@/app/graphql/queries"

export async function GET() {
    try {
        const res = await client.request(GET_NAVIGATION)
        return Response.json(res)
    } catch(e) {
        throw new Error(e)
    }
}
