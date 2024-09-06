
import { fetchData } from '@/utils/fetchData';
import React from 'react'
import { HomeCarousel, Heading, SwiperHome, NewProducts,Collection } from '@/components/AllComponents';


export const metadata = {
  title: "Fashion Store | Timeless Elegance & Trendy Styles",
  description:
    "Welcome to Fashion Store! Discover our curated collections of elegant fashion pieces and trendy styles. Shop timeless classics and the latest trends that elevate your style effortlessly.",
  openGraph: {
    title: "Fashion Store | Timeless Elegance & Trendy Styles",
    description:
      "Explore our stunning fashion collection that blends timeless elegance with the latest trends. From sophisticated clothing to chic accessories, Fashion Store has it all.",
    url: process.env.URL,
    images: "/icon-512x512.png", // Ensure this image path is correct
    siteName: "Fashion Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Store | Timeless Elegance & Trendy Styles",
    description:
      "Discover our stunning collection of fashionable pieces that combine elegance with trendsetting designs.",
    images: "/icon-512x512.png", // Ensure this image path is correct
  },
};

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
