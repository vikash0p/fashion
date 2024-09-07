'use client'
import Link from 'next/link'
import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation'
import { Sidebar } from './Sidebar';
import { links } from '@/utils/data';
import { PermanentMarker } from '../font/FontComponent';
import { CartSideBar } from './CartSideBar';
export default function Navbar() {
    const cart = useSelector((state) => state.allCart.cart);
    const pathname = usePathname()



    return (
        <div className='flex justify-between w-full h-16   bg-primary items-center py-1 px-5 sticky top-0 left-0 right-0 z-30'>
            <div className={`text-4xl font-bold  text-start ${PermanentMarker.className}`}>Fashion</div>
            <div className='space-x-4 hidden lg:block'>
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className={`text-xl  ${link.href === pathname ? "border-b " : ""}`} >{link.text}</Link>
                ))}
            </div>
            <div className='hidden lg:block'>
                <CartSideBar />

            </div>
            <div className='lg:hidden' >
                <Sidebar />
            </div>
        </div>
    )
}
