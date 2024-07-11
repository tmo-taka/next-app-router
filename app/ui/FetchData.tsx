"use client"

import { useQuery } from '@tanstack/react-query'
import type {UseQueryResult} from '@tanstack/react-query'

const fetchAllPage = async () => {
    try {
        const res = await fetch('/api/prismic/')
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const FetchData = () => {
    const { data }: UseQueryResult<[] | undefined> = useQuery({queryKey: ['pages'], queryFn: fetchAllPage})
    console.log(data)

    return (
        <div>
            <div>テキスト</div>
        </div>
    )
}