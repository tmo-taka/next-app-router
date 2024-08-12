"use client"

import {Loading} from '@/app/ui/Loading'
import type {Query} from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

const fetchNavigation = async () => {
    try {
        const res = await fetch('/api/hygraph/get_navigation')
        const data = await res.json()
        console.log(data);
        return data
    } catch(e: unknown) {
        throw new Error('fetchError')
    }
}

export const Navigation = () => {
    const { data, isPending, error } = useQuery<Query>({
        queryKey: ['navigation'],
        queryFn: fetchNavigation,
    })
    if(isPending) return <Loading />
    if(error) throw new Error(error.message)

    const navArr = data?.navigations?.map(nav =>
        <li key={nav.navId}>
            <Link href={`/${nav.navId}`}>{nav.navId}</Link>
        </li>
    );
    return (
        <nav>
            <ul>
                {navArr}
            </ul>
        </nav>
    )
}