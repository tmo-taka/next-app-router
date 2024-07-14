"use client"

import { useQuery } from '@tanstack/react-query'
import type { Query } from '@/types/prismicio-types'

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
    const { data, isPending, error } = useQuery<Query >({
        queryKey: ['pages'],
        queryFn: fetchAllPage,
    })
    if (data?.allPages.edges) {
        const pageArr = data.allPages.edges.map(pageData =>
            <div key={pageData.node._meta.id}>{pageData.node.title[0].text}</div>
        );
        return <div>{pageArr}</div>
    }
    return <div>Loading...</div>
}