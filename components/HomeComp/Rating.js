'use client'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import React from 'react'

const Rating = ({ rating }) => {
    // console.log("🚀 ~ file: Rating.js:5 ~ rating:", rating.rate);
    return (
        <div className="flex flex-row text-yellow-600 text-2xl">
            {[...Array(5)].map((value, index) => {
                if (index < rating.rate) {
                    return <IoIosStar key={index} />;
                } else if (index - rating.rate < 0.5) {
                    return <IoIosStarHalf key={index} />;
                } else {
                    return <IoIosStarOutline key={index} />;
                }
            })}
        </div>
    );
}

export default Rating;
