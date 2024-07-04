"use client"

import {client} from "../client";
import {GET_NAVIGATION} from "../graphql/queries"
import { useQuery } from '@tanstack/react-query'

const fetchAllPage = async () => {
    const query = GET_NAVIGATION
    const data = await client.request(query)
    return data
}

export const FetchData = () => {
    try {
        const { data } = useQuery({queryKey: ['pages'], queryFn: fetchAllPage})
        console.log(data)
    } catch(e) {
        console.log(e)
    }

    return (
        <div>これ</div>
    )
}