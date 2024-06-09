// 'use client'

// import { useRouter } from 'next/navigation'

export function Modal({ children }: { children: React.ReactNode }) {
    // const router = useRouter()
    console.log(children)

    return (
        <div className='fixed w-full h-full bg-black opacity-35'>
            <button
                // onClick={() => {
                //     router.back()
                // }}
            >
                モーダルを閉じる
            </button>
            <div className='bg-white w-1/2 h-1/3 absolute top-1/2 left-1/2'>{children}</div>
        </div>
    )
}