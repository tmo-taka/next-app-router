"use client"

// import { GET_PAGE } from "@/app/graphql/queries";
import type {Query} from '@/graphql/graphql'
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

const escapeHtml = (unsafe: string) => {
    return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;')
}

const Page = ({ params: { slug }} : { params: { slug: string } } ) => {
    const { data, isPending } = useQuery<Query>({
        queryKey: ['contents', slug],
        queryFn: () => fetchPage(slug),
    })
    if (data?.page) {
        return (
            <div className='p-6'>
                <h1 className="text-4xl font-bold mb-6">{data?.page.title}</h1>

                <p>{data?.page.subtitle}</p>
                <div className='p-8'>
                    <div dangerouslySetInnerHTML={{ __html: `${data?.page.content.html}` }} />
                </div>
            </div>
        )
    }
    return (<div> loading...</div>)
};

export default Page;