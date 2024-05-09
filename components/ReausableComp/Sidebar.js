'use client'
import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { links } from "@/utils/data"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoCartSharp } from "react-icons/io5"
import { useSelector } from "react-redux"

export function Sidebar() {
    const cart = useSelector((state) => state.allCart.cart);

    const pathname=usePathname();
    return (
        <Sheet className="" >
            <SheetTrigger asChild>
                <div variant="destructive "><Menu className="hover:text-black transition-colors duration-200 ease-linear" /> </div>
            </SheetTrigger>
            <SheetContent>

                <SheetHeader>
                    <SheetTitle className="text-3xl font-semibold font-serif text-violet-800" >Fashion</SheetTitle>

                </SheetHeader>
                <div className='flex flex-col gap-2'>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className={`text-xl  ${link.href === pathname ? " text-violet-800 " : ""}`} >{link.text}</Link>
                    ))}
                </div>
                <Link href={"/cart"} className="flex flex-row gap-2"><IoCartSharp size={25} /> ({cart.length}) </Link>

            </SheetContent>
        </Sheet>
    )
}
