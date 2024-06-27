'use client'

import { useRouter } from 'next/navigation'
import { Button } from './Button'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleClick = () => {
        router.back()
    }

    return (
        <div className='fixed w-full h-full bg-black opacity-35 top-0 left-0' suppressHydrationWarning>
            <Button
                childClick={() => handleClick()}
            >
                モーダルを閉じる
            </Button>
            <div className='bg-white w-1/2 h-1/3 absolute top-1/2 left-1/2'>{children}</div>
        </div>
    )
}