"use client"

import { useQuery } from '@tanstack/react-query'
import type { Query } from '@/types/prismicio-types'
import { pages } from 'next/dist/build/templates/app-page'

const fetchAllPage = async () => {
    try {
        const res = await fetch('/api/prismic/')
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

const initialResponse:Query = {
    allPages: {
        edges: [
            {
                node: {}
            }
        ],
        pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false
        },
        totalCount: 1
    }
}

export const FetchData = () => {
    const { data, isLoading, error } = useQuery<Query>({
        queryKey: ['pages'],
        queryFn: fetchAllPage,
        initialData: initialResponse
    })
    if(!data.allPages.edges) {return <div>エラー</div>　}
    // if(!data.allPages.edges || !data) {return <div>エラー</div>　}
    const pageArr = data.allPages.edges.map(pageData =>
        <div key={pageData.node._meta.id}>{pageData.node.title[0].text}</div>
    );

    return <div>{pageArr}</div>
}