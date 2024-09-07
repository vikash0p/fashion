'use client'
import React, { useState } from 'react'
import ProductCard from '../HomeComp/ProductCard';
import Link from 'next/link';


export default function ProductCategory({ product }) {
    const [AllData, setAllData] = useState("All Product");
    const [sortOrder, setSortOrder] = useState(null);
    const [selected, setSelect] = useState(0);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const uniqueData = (pro, property) => {
        const newValue = pro.map((value) => value[property]);
        const newUniqueCat = ["All Product", ...new Set(newValue)];
        return newUniqueCat;
    };

    const CategoryDate = uniqueData(product, "category");
    const prices = ["price:High to Low", "price:Low to High"];

    const UpdateFilterValue = (value, indx) => {
        setAllData(value);
        setSelect(indx);
    };

    const handleSort = (order) => {
        setSortOrder(order);
    };

    const updateProduct = product?.filter((value) => {
        const mydata = AllData === "All Product" || value.category === AllData;
        const searchData = search.toLowerCase() === '' ? value :
            (value.category.toLowerCase().includes(search.toLowerCase()) ||
                value.title.toLowerCase().includes(search.toLowerCase()) ||
                value.description.toLowerCase().includes(search.toLowerCase()));
        return mydata && searchData;
    })?.sort((a, b) => {
        if (sortOrder === 'price:Low to High') {
            return a.price - b.price;
        } else if (sortOrder === 'price:High to Low') {
            return b.price - a.price;
        } else {
            return 0;
        }
    });


    if (!updateProduct || updateProduct.length === 0) {
        return (
            <div className='flex flex-col w-full min-h-screen justify-center gap-3 items-center'>
                <p className='text-primary text-4xl'>No products found!</p>
                <Link href={"/"} className='bg-primary px-5 py-2 rounded-sm'>Back to Collection</Link>
            </div>
        );
    }

    return (
        <div className='flex flex-col lg:flex-row w-full lg:gap-5 min-h-screen container m-auto'>
            {/* Toggle Filter Button for Mobile */}
            <div>
                <button type="button" className='bg-primary px-5 py-2 mt-4 lg:hidden' onClick={() => setOpen(!open)}>
                    Filter
                </button>
            </div>

            {/* Filter Section for Mobile */}
            <div className={`lg:hidden transition-all duration-400 ease-in-out overflow-hidden ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="basis-[100%] lg:basis-[15%] py-2 w-full flex flex-col md:flex-row justify-between">
                    {/* Category Filter */}
                    <div className='flex flex-col md:items-start gap-2'>
                        <h1 className='text-2xl font-semibold'>Category</h1>
                        {
                            CategoryDate.map((value, indx) => (
                                <button
                                    type="button"
                                    key={indx}
                                    className={`py-2 rounded-md text-left px-8 hover:bg-secondary i hover:text-black ${selected === indx ? "bg-primary" : "bg-secondary"}`}
                                    onClick={() => UpdateFilterValue(value, indx)}
                                >
                                    {value}
                                </button>
                            ))
                        }
                    </div>
                    {/* Price Filter */}
                    <div className='flex flex-col md:items-start  gap-2 mt-5'>
                        <h1 className='text-2xl font-semibold'>Price</h1>
                        {
                            prices.map((value, indx) => (
                                <button
                                    type="button"
                                    key={indx}
                                    className={`py-2 rounded-md text-left px-8 hover:bg-violet-400 hover:text-black ${sortOrder === value ? "bg-primary" : "bg-secondary"}`}
                                    onClick={() => handleSort(value)}
                                >
                                    {value}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Filter Section for Desktop */}
            <div className="basis-[100%] lg:basis-[15%] py-2 hidden lg:block">
                {/* Category Filter */}
                <div className='flex flex-col w-full gap-2'>
                    <h1 className='text-2xl font-semibold'>Category</h1>
                    {
                        CategoryDate.map((value, indx) => (
                            <button
                                type="button"
                                key={indx}
                                className={`py-2 rounded-md text-left ps-4 hover:bg-secondary hover:text-black ${selected === indx ? "bg-primary" : "bg-secondary"}`}
                                onClick={() => UpdateFilterValue(value, indx)}
                            >
                                {value}
                            </button>
                        ))
                    }
                </div>
                {/* Price Filter */}
                <div className='flex flex-col w-full gap-2 mt-5'>
                    <h1 className='text-2xl font-semibold'>Price</h1>
                    {
                        prices.map((value, indx) => (
                            <button
                                type="button"
                                key={indx}
                                className={`py-2 rounded-md text-left ps-4 hover:bg-violet-400 hover:text-black ${sortOrder === value ? "bg-primary" : "bg-secondary"}`}
                                onClick={() => handleSort(value)}
                            >
                                {value}
                            </button>
                        ))
                    }
                </div>
            </div>

            {/* Product Display Section */}
            <div className="basis-[100%] lg:basis-[85%] px-3">
                <div className='max-w-sm m-auto mt-3'>
                    <label htmlFor="input" className='sr-only'>Search: </label>
                    <input
                        type="text"
                        name="input"
                        id="input"
                        className="w-full h-10 rounded-sm px-4 bg-secondary outline-none border hover:border-primary placeholder:text-black"
                        placeholder='Search Product'
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                <div className="w-full grid grid-cols-1 py-10 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
                    {
                        updateProduct.map((value, index) => (
                            <ProductCard pro={value} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
