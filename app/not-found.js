'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col gap-3 items-center justify-center '>
            <Image
            src={"/401.jpg"}
            alt='not found'
            width={400}
            height={400}
            className='object-cover max-w-sm md:max-w-md lg:max-w-lg '
            />
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='px-8 py-2 bg-violet-800 rounded text-xl  text-white '>Return Home</Link>
        </div>
    )
}