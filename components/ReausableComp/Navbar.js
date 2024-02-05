'use client'
import Link from 'next/link'
import React from 'react'
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';

export default function Navbar() {
    const cart = useSelector((state) => state.allCart.cart);
    return (
        <div className='flex justify-between w-full h-12 text-white bg-violet-800 items-center px-5'>
            <div className="">Logobar</div>
            <div className='space-x-4'>
                <Link href={"/"} className="">Home</Link>
                <Link href={"/category"} className="">Category</Link>
            </div>
            <Link href={"/cart"} className="flex"><IoCartSharp size={25} /> ({cart.length}) </Link>
        </div>
    )
}
