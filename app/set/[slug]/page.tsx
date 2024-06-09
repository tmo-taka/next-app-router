'use client'

import { useParams } from 'next/navigation'

export default function Page() {
    const params = useParams<({slug: string})>();
    const slug = params.slug;

    console.log(slug)


    return (
        <div>
            <h1 className="p-4">これがテストだ</h1>
            {/* <button onClick={() => modalOpen()}>Click Me</button> */}
        </div>
    );
}
