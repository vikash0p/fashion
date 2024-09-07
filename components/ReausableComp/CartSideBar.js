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
import { links } from "@/utils/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { CartCard } from "../AllComponents";

export function CartSideBar() {
    const cart = useSelector((state) => state.allCart.cart);


    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="cursor-pointer">
                    <span className="relative inline-flex items-center">
                        <IoCartSharp size={30} className="" /> {/* Cart Icon */}
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-secondary  text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                    </span>

                 </div>
            </SheetTrigger>
            <SheetContent side="right"> {/* Set the side to "left" */}
                <SheetHeader>
                    <SheetTitle className="text-3xl font-semibold font-serif text-violet-800">Cart</SheetTitle>
                </SheetHeader>

            </SheetContent>
        </Sheet>
    );
}
