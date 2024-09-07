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
    const router = useRouter();
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
                    dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-60 md:h-[500px] w-full "
            >
                {
                    fashion.map((Value) => {
                        const myDes = Value.des.split(" ").slice(0, 2).join(" ");
                        const myDes1 = Value.des.split(" ").slice(2,).join(" ");

                        return (
                            <SwiperSlide key={Value.id} className='w-full h-60 md:h-full'>
                                <div className='w-full h-full relative  '>
                                    <div className='w-ful h-60 md:h-full relative '>
                                        <Image src={Value.img} alt={Value.des} fill className='w-full  h-full  md:object-cover md:object-top ' sizes="(min-width: 440px) 100vw, calc(83.33vw + 50px)" />
                                    </div>
                                    <div className='absolute -top-8 left-10  md:left-0 md:top-0 w-full h-full px-1 pb-5 md:px-0 md:pb-0 text-center  md:text-start  '>
                                        <div className='flex w-full h-full flex-col md:flex-row md:gap-4 justify-center items-center md:pe-8 '>
                                            <div className="flex-1"></div>
                                            <div className="flex-1 space-y-1 md:space-y-3">
                                                <h2 className=' text-xl md:text-3xl  lg:text-5xl font-serif font-bold'>{myDes} </h2>
                                                <p className='text-wrap text-xl hidden md:block  '>{myDes1} </p>
                                                <h1 className=''>Your summer sale Upto 50% off</h1>
                                                <button onClick={() => { router.push("/category") }} type="button" className='px-8 py-2 bg-primary rounded-sm text-md hover:bg-secondary'>Shop Now</button>

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
