"use client"

// import { GET_PAGE } from "@/app/graphql/queries";
import { useQuery } from '@tanstack/react-query'

const fetchPage = async (slug: string) => {
    try {
        const res = await fetch(`/api/hygraph/get_page/${slug}`)
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

const Page = ({ params: { slug }} : { params: { slug: string } } ) => {
    const { data, isPending } = useQuery<Query >({
        queryKey: ['contents', slug],
        queryFn: () => fetchPage(slug),
    })
    console.log(data);
    return (
        <div>ページです、</div>
    )
};

export default Page;