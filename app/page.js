
import { fetchData } from '@/utils/fetchData';
import React from 'react'
import { HomeCarousel, Heading, SwiperHome, NewProducts,Collection } from '@/components/AllComponents';
export default async function Home() {

  const product = await fetchData();
  const trending = product.slice(6)

  return (
    <div>
       <HomeCarousel />
      <div className='py-8 m-auto max-w-7xl'>
        <Heading heading={"Featured Products"} />
        <SwiperHome pro={product} />
      </div>
      <NewProducts />
      <div className='py-8 m-auto max-w-7xl'>
        <Heading heading={"Trending Products"} />
        <SwiperHome pro={trending} />
      </div>
      <Collection />


    </div>

  )
}
