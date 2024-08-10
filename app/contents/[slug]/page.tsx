"use client"

// import { GET_PAGE } from "@/app/graphql/queries";
import type {Query} from '@/graphql/graphql'
import { useQuery } from '@tanstack/react-query'
import { Loading } from '@/app/ui/Loading'

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
    const { data, isPending } = useQuery<Query>({
        queryKey: ['contents', slug],
        queryFn: () => fetchPage(slug),
    })
    if(isPending) {return (<Loading />)}
    return (
        <div className='p-6'>
            <h1 className="mb-6 font-bold text-4xl">{data?.page?.title}</h1>

            <p>{data?.page?.subtitle}</p>
            <div className='p-8'>
                <div dangerouslySetInnerHTML={{ __html: `${data?.page?.content.html}` }} />
            </div>
        </div>
    )
};

export default Page;