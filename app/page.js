import Collection from '@/components/HomeComp/Collection';
import Heading from '@/components/HomeComp/Heading';
import HomeCarousel from '@/components/HomeComp/HomeCarosusel';
import NewProducts from '@/components/HomeComp/NewProducts';
import ProductCard from '@/components/HomeComp/ProductCard';
import SwiperHome from '@/components/HomeComp/SwiperHome';
import React from 'react'

export const fetchData = async () => {
  let data
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch data");
    data = await res.json();
    return data

  } catch (error) {
    console.log("🚀 ~ file: page.js:16 ~ error:", error);

  }
}

export default async function Home() {

  const product = await fetchData();
  // console.log("🚀 ~ file: page.js:17 ~ product:", product.reverse());


  const trending = product.slice(6)

  return (
    <div>
      {/* <HomeCarousel />
      <div className='max-w-7xl m-auto py-8'>
        <Heading heading={"Featured Products"} />
        <SwiperHome pro={product} />
      </div>
      <NewProducts />
      <div className='max-w-7xl m-auto py-8'>
        <Heading heading={"Trending Products"} />
        <SwiperHome pro={trending} />
      </div>
      <Collection /> */}


    </div>

  )
}
