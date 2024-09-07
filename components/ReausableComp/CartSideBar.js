'use client';

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { IoCartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, incrementQty, removeToCart } from '@/redux-toolkit/slice/CartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { IoRemoveCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export function CartSideBar() {
    const cart = useSelector((state) => state.allCart.cart);
    const dispatch = useDispatch();

    const calculateTotalPrice = () => {
        const totalPrice = cart.reduce((acc, product) => {
            const productPrice = parseFloat(product.price.toFixed(0)) * parseFloat(product.qty);
            return acc + (isNaN(productPrice) ? 0 : productPrice);
        }, 0);
        return totalPrice.toFixed(0);
    };

    const calculateTotalQuantity = () => {
        const totalQuantity = cart.reduce((acc, product) => acc + product.qty, 0);
        return totalQuantity;
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="cursor-pointer">
                    <span className="relative inline-flex items-center">
                        <IoCartSharp size={30} />
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-secondary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </span>
                </div>
            </SheetTrigger>
            <SheetContent side="right"> {/* Sidebar slides from the right */}
                <SheetHeader>
                    <SheetTitle className="text-3xl font-semibold font-serif text-violet-800">Cart</SheetTitle>
                </SheetHeader>

                {cart.length <= 0 ? (
                    <div className='flex flex-col justify-center items-center gap-4 py-8'>
                        <Image
                            src="/emptyCart.svg"
                            alt="empty_cart"
                            width={200}
                            height={200}
                            className="object-contain w-48 h-48"
                        />
                        <Link href="/" className="w-full text-center py-2 bg-primary text-white">Go To HomePage</Link>
                    </div>
                ) : (
                    <div className="flex flex-col w-full py-4">
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
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="py-2 flex items-center">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={50}
                                                height={50}
                                                className="w-12 h-12 object-cover rounded-full mr-4"
                                            />
                                        </td>
                                        <td className="py-2">${(item.price * item.qty).toFixed(0)}</td>
                                        <td className="py-2 text-center">
                                            <div className="flex items-center justify-center space-x-2 text-2xl">
                                                <button onClick={() => item.qty > 1 && dispatch(decreaseQty(item))}>
                                                    <IoRemoveCircle size={25} className="text-red-800" />
                                                </button>
                                                <span>{item.qty}</span>
                                                <button onClick={() => dispatch(incrementQty(item))}>
                                                    <IoIosAddCircle size={25} className="text-green-800" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-2 text-center">
                                            <button onClick={() => dispatch(removeToCart(item))}>
                                                <MdDelete size={25} className="text-red-800 hover:text-violet-600" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-4 p-4 bg-secondary flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p>Total Items</p>
                                <p>{calculateTotalQuantity()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>Total Price</p>
                                <p>${calculateTotalPrice()}</p>
                            </div>
                            <Link href="/checkout" className="bg-primary text-center py-2 ">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
