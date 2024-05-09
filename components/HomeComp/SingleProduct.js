'use client'
import Image from 'next/image'
import React from 'react'
import Rating from './Rating'

const SingleProduct = ({ pro }) => {
    const { id, title, price, description, category, image, rating } = pro
    return (
        <div className="max-w-7xl m-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 py-10">
            <div className='relative w-full h-96 '>
                <Image
                    fill
                    alt={title}
                    src={image}
                    className="h-56 w-full object-contain object-center sm:h-full"
                />
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
                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProduct
