'use client'
import React, { useState } from 'react'
import ProductCard from '../HomeComp/ProductCard';

export default function ProductCategory({ product }) {
    const [AllData, setAllData] = useState("All Product");
    const [sortOrder, setSortOrder] = useState(null);
    const [selected, setSelect] = useState(0);

    // console.log(AllData);
    const uniqueData = (pro, propety) => {
        const newValue = pro.map((value) => {
            return value[propety] 
        })

        const newUniqueCat = ["All Product", ...new Set(newValue)];
        return newUniqueCat;
    }

    const CategoryDate = uniqueData(product, "category");
    const rating = uniqueData(product, "rating", );
    
   
    const UpdateFilterValue = (value, indx) => {
        setAllData(value);
        setSelect(indx);


    }
    const handleSort = (order,) => {
        setSortOrder(order);

    };

    const prices = ["price:High to Low", "price:Low to High"]


    return (
        <div className='flex w-full min-h-screen '>
            <div className="basis-[20%]  py-2">
                <div className='flex flex-col w-full gap-2 ' >
                    <h1 className='text-2xl font-semibold '>Category</h1>
                    {
                        CategoryDate.map((value, indx) => {
                            return (
                                <button type="button" key={indx} className={` text-white py-2 rounded-md text-left ps-4 hover:bg-violet-400 hover:text-black ${selected === indx ? "bg-violet-950" : "bg-violet-700 "}`} onClick={() => UpdateFilterValue(value, indx)} >{value} </button>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col w-full gap-2 mt-5 ' >
                    <h1 className='text-2xl font-semibold '>Price</h1>
                    {
                        prices.map((value, indx) => {
                            return (
                                <button type="button" key={indx} className={` ${sortOrder === value ? " bg-violet-950" : "bg-violet-700"} text-white py-2 rounded-md text-left ps-4 hover:bg-violet-400 hover:text-black `} onClick={() => handleSort(value)} >{value} </button>
                            )
                        })
                    }
                </div>

            </div>
            <div className="basis-[80%] bg-gray-50 px-3">
                <div className="w-full grid grid-cols-1 py-10 gap-10 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
                    {
                        product?.filter((value, index, arr) => {
                            const mydata = AllData === "All Product" || value.category === AllData;
                            return mydata;
                        })?.sort((a, b) => {
                            if (sortOrder === 'price:Low to High') {
                                return a.price - b.price;
                            } else if (sortOrder === 'price:High to Low') {
                                return b.price - a.price;
                            } else {
                                return 0;
                            }
                        })?.map((value, index) => {
                            return (
                                <ProductCard pro={value} key={index} />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}
