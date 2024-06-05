'use client'

import { useEffect } from 'react';
import { useParams } from 'next/navigation'

export default function Page() {
    const params = useParams<({slug: string})>();
    const slug = params.slug;

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(`/api/lists/${slug}`);
            const data = await res.json();
            console.log(data);
        }
        fetchData()
    }, []);

    return (
        <div>
            <h1 className="p-4">これがテストだ</h1>
        </div>
    );
}
