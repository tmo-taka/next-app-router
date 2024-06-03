'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    console.log(router)
    return (
        <div>
            <h1 className="p-4">これがテストだ</h1>
        </div>
    );
}
