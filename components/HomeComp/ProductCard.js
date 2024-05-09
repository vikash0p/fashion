'use client'
import { addToCart } from '@/redux-toolkit/slice/CartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { BsCartPlusFill } from "react-icons/bs";

export default function ProductCard({pro}) {
  const dispatch=useDispatch();
    const {id,title,price,description,category,image,rating}=pro
  return (
    <div className='w-full py-7  bg-white flex flex-col justify-center gap-3 text-center border border-violet-800 '>
      <Image
      src={image}
      alt={title}
      width={500}
      height={500}
      className='object-contain w-full h-48'
      priority
      />
      <h1 className="min-h-24">{title} </h1>
      <div className='flex justify-between px-3  '>
              <h2 className='bg-violet-700 text-white  px-5 py-2'>$ : {price.toFixed()} </h2>
        <h2 className='bg-violet-700 text-white  px-5 py-2' >Rating : {rating.rate} </h2>
      </div>
      <button type='button' className="bg-violet-700 px-6 py-2 text-white w-1/2 mx-auto" onClick={()=>{
        return dispatch(addToCart({id,title,image, price, qty:1}))
      }}><BsCartPlusFill  size={25} className='mx-auto w-full' /> </button>
    </div>
  )
}
