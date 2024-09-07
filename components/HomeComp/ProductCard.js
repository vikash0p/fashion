'use client'
import { addToCart } from '@/redux-toolkit/slice/CartSlice';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BsCartPlusFill } from "react-icons/bs";
import Link from 'next/link';

export default function ProductCard({ pro }) {
  const dispatch = useDispatch();
  const { id, title, price, description, category, image, rating } = pro || {};



  return (
    <div className='w-full py-7 bg-secondary flex flex-col justify-center gap-3 text-center border border-primary'>
      {/* Render Image only if the source is valid */}
      {image ? (
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='object-contain w-full h-48'
          priority
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
          <p>No Image Available</p>
        </div>
      )}

      <h1 className="font-semibold truncate px-1">{title} </h1>
      <h5 className='text-start ps-1'>${price?.toFixed()} </h5>

      <div className='flex justify-between px-3'>
        <Link href={`/category/${id}`} className='bg-primary px-5 py-2'>
          View
        </Link>

        <button
          type='button'
          className="bg-primary px-6 py-2"
          onClick={() => {
            dispatch(addToCart({ id, title, image, price, qty: 1 }));
          }}
        >
          <BsCartPlusFill size={25} className='mx-auto w-full' />
        </button>
      </div>
    </div>
  );
}
