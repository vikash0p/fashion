import ProductCard from '@/components/HomeComp/ProductCard';
import React from 'react'

export const fetchData = async () =>{
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
  
}

export default async function Home() {

 const product= await fetchData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-7 bg-gray-200 py-6 px-2'>
      {
        product.map((pro,indx,arr)=>{
          return (
            <ProductCard key={pro.id} pro={pro} />
          )
        })
      }
    </div>
  )
}
