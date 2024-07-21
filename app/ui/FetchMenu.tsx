"use client"

import { useQuery } from '@tanstack/react-query'
import type {Query} from '@/graphql/graphql'
import Link from 'next/link'

const fetchAllPage = async () => {
    try {
        const res = await fetch('/api/hygraph/get_all_page')
        const data = await res.json()
        console.log(data);
        return data
    } catch(e) {
        console.log(e)
    }
}

export const FetchMenu = () => {
    const { data, isPending, error } = useQuery<Query>({
        queryKey: ['pages'],
        queryFn: fetchAllPage,
    })
    console.log(data);
    if (data?.pages.length) {
        const pageArr = data.pages.map(pageData =>
            <li key={pageData.slug}>
                <Link href={`/contents/${pageData.slug}`}>{pageData.title}</Link>
            </li>
        );
        return <ul>{pageArr}</ul>
    }
    return <div>Loading...</div>
}