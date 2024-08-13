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

    const navArr = data?.navigations?.map(nav => {
            const getFirstLink = nav.link[0];
            return (
                <li key={nav.navId} className="border-2 border-white">
                    <Link href={getFirstLink.externalUrl} className="block px-8 py-4 bg-accent text-white">{getFirstLink.displayText}</Link>
                </li>
            )
        }
    );
    return (
        <nav>
            <ul className="flex">
                {navArr}
            </ul>
        </nav>
    )
}