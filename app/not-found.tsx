import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='w-64'>
                <h2 className='text-3xl mb-4'>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className="text-link underline">Return Home</Link>
            </div>
        </div>
    )
}