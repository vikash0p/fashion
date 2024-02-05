'use client'
import { decreaseQty, incrementQty, removeToCart } from '@/redux-toolkit/slice/CartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoRemoveCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux'
export default function CartCard() {
    const dispatch = useDispatch();
    const CartProduct = useSelector((state) => state.allCart.cart);


    const calculateTotalPrice = () => {
        const totalPrice = CartProduct.reduce((acc, product) => {

            const productPrice = parseFloat(product.price.toFixed(0)) * parseFloat(product.qty);
            return acc + (isNaN(productPrice) ? 0 : productPrice);
        }, 0);

        return totalPrice.toFixed(0);
    };

    const calculateTotalQuantity = () => {
        const totalQuantity = CartProduct.reduce((acc, product) => {
            return acc + product.qty;
        }, 0);

        return totalQuantity;
    };


    return (
        <div className='w-full h-screen'>
            {
                CartProduct?.length <= 0 ? (
                    <div className='w-full h-screen flex flex-col justify-center items-center gap-4 '>
                        <Image
                            src={"/emptyCart.svg"}
                            alt='empty_cart'
                            width={500}
                            height={500}
                            className='object-contain w-96 h-96'
                        />
                        <Link href={"/"} className='w-1/4 text-center py-2 bg-violet-600 text-lg text-white' >Go To HomePage</Link>
                    </div>
                ) : (
                    <div className='flex flex-col lg:flex-row w-full min-h-[93%] ' >
                        <div className="basis-[100%] lg:basis-[70%] ">
                            {
                                CartProduct?.length >= 1 && CartProduct?.map((value, index, arr) => {
                                    return (
                                        <div key={value.id} className=' py-2 gap-4 border border-violet-600 flex justify-between px-4 items-center '>
                                            <Image
                                                src={value.image}
                                                alt={value.name}
                                                width={500}
                                                height={500}
                                                className='w-20  h-20 object-contain'
                                            />
                                            <p className="">{value.price.toFixed(0) * value.qty} </p>
                                            <div className="space-x-2 text-2xl flex items-center">
                                                <button type="button" onClick={() => {
                                                    value.qty > 1 ?
                                                        dispatch(decreaseQty(value)) : value.qty == 0
                                                }} ><IoRemoveCircle size={25} className='text-red-800' /> </button>
                                                <span>{value.qty} </span>
                                                <button type="button" onClick={() => {
                                                    value.qty >= 1 && dispatch(incrementQty(value))
                                                }}><IoIosAddCircle className='text-green-800' /> </button>

                                            </div>
                                            <button type="button " className='hover:text-violet-600' onClick={() => {
                                                dispatch(removeToCart(value));
                                            }} > <MdDelete size={25} className='text-red-800' /> </button>
                                        </div>
                                    )
                                })
                            }
                            <div className=''>

                            </div>
                        </div>
                        <div className=" basis-[100%] lg:basis-[30%] bg-violet-800 text-white relative">
                            <div className="flex flex-col gap-4 py-4 ">
                                <div className="flex justify-between items-center px-3 ">
                                    <p>Shoping cart</p>
                                    <p>{calculateTotalPrice()}</p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Discount</p>
                                    <p>$00</p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Discount</p>
                                    <p>$00</p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Items:</p>
                                    <p>{CartProduct.length} </p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Quantity</p>
                                    <p>{calculateTotalQuantity()} </p>
                                </div>
                                <div className="flex justify-between items-center text-xl w-full bg-slate-950 px-3 py-2   ">
                                    <p className="">Total Price</p>
                                    <p className="">${calculateTotalPrice()} </p>
                                </div>
                                    <Link href={"/checkout"} className='bg-slate-900 text-white px-6 py-2 mx-auto  ' >Checkout</Link>

                            </div>
                        </div>

                    </div >)
            }

        </div>
    )
}
