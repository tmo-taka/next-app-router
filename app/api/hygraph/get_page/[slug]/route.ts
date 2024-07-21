import type { NextApiRequest} from 'next'
import {client} from "@/app/client";
import {GET_PAGE} from "@/app/graphql/queries"

type Context ={
    params: Record<string, string>;
    preview?: boolean;
}

export async function GET(req: NextApiRequest, {params}: Context) {
    const {slug} = params
    const variables = {
        slug
    }
    try {
        const res = await client.request(GET_PAGE, variables)
        return  Response.json(res)
    } catch(e) {
        console.log(e);
        throw new Error(e)
    }
}
