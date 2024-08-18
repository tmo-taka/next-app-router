"use client"

import {Loading} from '@/app/ui/Loading'
import type {Query} from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

const fetchAllPage = async () => {
    try {
        const res = await fetch('/api/hygraph/get_all_page')
        const data = await res.json()
        return data
    } catch(e: unknown) {
        throw new Error('fetchError')
    }
}

export const FetchMenu = () => {
    const { data, isPending, error } = useQuery<Query>({
        queryKey: ['all_pages'],
        queryFn: fetchAllPage,
    })
    if(isPending) return <Loading />
    if(error) throw new Error(error.message)

    const pageArr = data?.pages.map(pageData =>
        <li key={pageData.slug} className='mb-1'>
            <Link
                href={`/contents/${pageData.slug}`}
                className="block p-2 border-l-2 border-l-accent hover:translate-x-2"
            >
                {pageData.title}
            </Link>
        </li>
    );
    return <ul className="p-4 w-1/4">{pageArr}</ul>
}