'use client'
import { decreaseQty, incrementQty, removeToCart } from '@/redux-toolkit/slice/CartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoRemoveCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

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
        const totalQuantity = CartProduct.reduce((acc, product) => acc + product.qty, 0);
        return totalQuantity;
    };

    return (
        <div className='w-full h-screen'>
            {
                CartProduct?.length <= 0 ? (
                    <div className='w-full h-screen flex flex-col justify-center items-center gap-4'>
                        <Image
                            src={"/emptyCart.svg"}
                            alt='empty_cart'
                            width={500}
                            height={500}
                            className='object-contain w-96 h-96'
                        />
                        <Link href={"/"} className='w-1/4 text-center py-2 bg-primary text-lg text-white'>Go To HomePage</Link>
                    </div>
                ) : (
                    <div className='flex flex-col lg:flex-row w-full min-h-[93%]'>
                        <div className="basis-[100%] lg:basis-[70%] p-4">
                            <table className="min-w-full bg-secondary/50 border border-gray-200 px-4">
                                <thead className="bg-secondary">
                                    <tr>
                                        <th className="py-2 text-left">Product</th>
                                        <th className="py-2 text-left">Price</th>
                                        <th className="py-2 text-center">Quantity</th>
                                        <th className="py-2 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        CartProduct.map((value) => (
                                            <tr key={value.id} className="border-b">
                                                <td className="py-2 flex items-center">
                                                    <Image
                                                        src={value.image}
                                                        alt={value.name}
                                                        width={50}
                                                        height={50}
                                                        className='w-12 h-12 object-cover rounded-full mr-4'
                                                    />
                                                    <span>{value.title}</span>
                                                </td>
                                                <td className="py-2">${(value.price * value.qty).toFixed(0)}</td>
                                                <td className="py-2 text-center">
                                                    <div className="flex items-center justify-center space-x-2 text-2xl">
                                                        <button onClick={() => value.qty > 1 && dispatch(decreaseQty(value))}>
                                                            <IoRemoveCircle size={25} className='text-red-800' />
                                                        </button>
                                                        <span>{value.qty}</span>
                                                        <button onClick={() => dispatch(incrementQty(value))}>
                                                            <IoIosAddCircle size={25} className='text-green-800' />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-2 text-center">
                                                    <button onClick={() => dispatch(removeToCart(value))}>
                                                        <MdDelete size={25} className='text-red-800 hover:text-violet-600' />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="basis-[100%] lg:basis-[30%] bg-secondary p-4">
                            <div className="flex flex-col gap-4 py-4">
                                <div className="flex justify-between items-center px-3">
                                    <p>Shopping Cart</p>
                                    <p>${calculateTotalPrice()}</p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Discount</p>
                                    <p>$00</p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Items</p>
                                    <p>{CartProduct.length}</p>
                                </div>
                                <div className="flex justify-between items-center px-3">
                                    <p>Quantity</p>
                                    <p>{calculateTotalQuantity()}</p>
                                </div>
                                <div className="flex justify-between items-center text-xl bg-primary t px-3 py-2">
                                    <p>Total Price</p>
                                    <p>${calculateTotalPrice()}</p>
                                </div>
                                <Link href="/checkout" className="bg-primary  text-center py-2">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
