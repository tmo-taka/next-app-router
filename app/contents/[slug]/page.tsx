"use client"

// import { GET_PAGE } from "@/app/graphql/queries";
import { useQuery } from '@tanstack/react-query'
import type { Query } from '@/types/prismicio-types'

const fetchPage = async (uuid: string) => {
    try {
        const res = await fetch(`/api/prismic/get_page/${uuid}`)
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

const Page = ({ params: { slug }} : { params: { slug: string } } ) => {
    const { data, isPending, error } = useQuery<Query >({
        queryKey: ['contents', slug],
        queryFn: () => fetchPage(slug),
    })
    return (
        <div>ページです、</div>
    )
};

export default Page;