'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { fashion } from '@/utils/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function HomeCarousel() {
    const router=useRouter();
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-80 md:h-[500px] w-full "
            >
                {
                    fashion.map((Value) => {
                        const myDes= Value.des.split(" ").slice(0,2).join(" ");
                        const myDes1= Value.des.split(" ").slice(2, ).join(" ");

                        return (
                            <SwiperSlide key={Value.id} className='w-full h-full'>
                                <div className='w-full h-full relative  '>
                                    <div className='w-full h-full relative '>
                                        <Image src={Value.img} alt={Value.des} fill className='w-full h-full object-fill md:object-cover md:object-top ' />
                                    </div>
                                    <div className='absolute top-0 w-full h-full px-1 pb-5 md:px-0 md:pb-0 text-center  md:text-start  '>
                                        <div className='flex w-full h-full flex-col md:flex-row gap-4 justify-center items-center md:pe-8 '>
                                            <div className="flex-1"></div>
                                            <div className="flex-1 space-y-3">
                                                <h2 className='text-violet-800 text-3xl  md:text-5xl font-serif font-bold'>{myDes} </h2>
                                                <p className='text-wrap text-xl '>{myDes1} </p>
                                                <h1 className='text-red-800'>Your summer sale Upto 50% off</h1>
                                                <button onClick={()=>{router.push("/category") }}  type="button" className='px-8 py-2 bg-violet-800 rounded-sm text-white text-md hover:bg-violet-900'>Shop Now</button>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    })
                }

            </Swiper>
        </>
    );
}
