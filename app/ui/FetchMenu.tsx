"use client"

import { useQuery } from '@tanstack/react-query'
import type { Query } from '@/types/prismicio-types'
import Link from 'next/link'

const fetchAllPage = async () => {
    try {
        const res = await fetch('/api/prismic/get_all_page')
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export const FetchMenu = () => {
    const { data, isPending, error } = useQuery<Query >({
        queryKey: ['pages'],
        queryFn: fetchAllPage,
    })
    console.log(data);
    if (data?.allPages.edges) {
        const pageArr = data.allPages.edges.map(pageData =>
            <li key={pageData.node._meta.id}>
                <Link href={`/contents/${pageData.node._meta.uid}`}>{pageData.node.title[0].text}</Link>
            </li>
        );
        return <ul>{pageArr}</ul>
    }
    return <div>Loading...</div>
}