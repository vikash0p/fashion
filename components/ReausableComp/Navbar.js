'use client'
import Link from 'next/link'
import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation'
import { Sidebar } from './Sidebar';
import { links } from '@/utils/data';
export default function Navbar() {
    const cart = useSelector((state) => state.allCart.cart);
    const pathname = usePathname()



    return (
        <div className='flex justify-between w-full h-16 text-white bg-violet-800 items-center py-1 px-5 sticky top-0 left-0 right-0 z-30'>
            <div className="text-2xl font-bold font-mono text-start">Fashion</div>
            <div className='space-x-4 hidden md:block'>
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className={`text-xl  ${link.href === pathname ? "border-b " : ""}`} >{link.text}</Link>
                ))}
            </div>
            <Link href={"/cart"} className=" hidden md:flex"><IoCartSharp size={25} /> ({cart.length}) </Link>
            <div className='md:hidden' >
                <Sidebar />
            </div>
        </div>
    )
}
