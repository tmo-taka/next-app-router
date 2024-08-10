import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='w-64'>
                <h2 className='mb-4 text-3xl'>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className="text-link underline">Return Home</Link>
            </div>
        </div>
    )
}