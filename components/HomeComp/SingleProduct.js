'use client'
import Image from 'next/image'
import React from 'react'
import Rating from './Rating'
import { BsCartPlusFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux-toolkit/slice/CartSlice';
import Link from 'next/link';

const SingleProduct = ({ pro }) => {
    const dispatch = useDispatch();

    const { id, title, price, description, category, image, rating } = pro
    return (
        <div className="max-w-7xl m-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 py-10">
            <div className='relative w-full h-96 '>
                <Image
                    fill
                    alt={title}
                    src={image}
                    className="h-56 w-full object-contain object-center sm:h-full"
                    sizes="(min-width: 1560px) 308px, (min-width: 1200px) calc(5.88vw + 217px), (min-width: 1040px) 31.43vw, (min-width: 420px) 379px, calc(84vw + 43px)"               />
            </div>

            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl  ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        {title}
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        {description}
                    </p>
                    <h5 className='text-xl'>Price: <span className='font-bold'>${price} </span> </h5>
                    <h5 className='text-xl'>Category: <span className='font-bold'>${category} </span> </h5>
                    <h5 className='flex flex-row gap-3'>Rating: <div className='flex flex-row'> <Rating rating={rating} /> </div> </h5>
                    <div className="mt-4 md:mt-8 space-x-5">
                        <button type='button' className="bg-violet-700 px-6 py-2 text-white hover:bg-violet-900" onClick={() => {
                            return dispatch(addToCart({ id, title, image, price, qty: 1 }))
                        }}>Add to cart </button>

                        <Link href={"/category"} className='bg-violet-700 px-6 py-3 text-white hover:bg-violet-900'>Back to Product</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProduct
