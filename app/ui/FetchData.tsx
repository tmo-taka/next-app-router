"use client"

import { useQuery } from '@tanstack/react-query'
import type {UseQueryResult} from '@tanstack/react-query'
import { afterEach } from 'node:test'

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
    const pageArr = data?.allPages?.edges.map(pageData =>
        <div key={pageData.node._meta.id}>{pageData.node.title[0].text}</div>
    );

    return <div>{pageArr}</div>
}