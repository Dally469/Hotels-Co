
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { BsHeart, } from "react-icons/bs";
import { IoBedOutline, } from "react-icons/io5";
import { MdPool, MdOutlinePark } from "react-icons/md";
import { Rating } from 'react-simple-star-rating';



var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: false,

};

const slides = [
    { id: 1, image: "/santorini_1.png", },
    { id: 2, image: "/santorini_2.png", },
    { id: 3, image: "/santorini_4.png", },
    { id: 4, image: "/santorini_3.png", },
    { id: 5, image: "/santorini_5.png", },
];

interface propsType {
    id: Number;
    title: string;
    img: string;
}
const HouseItem: React.FC<propsType> = ({ id, title, img }) => {
    return <div className="relative flex w-full col-span-12 lg:col-span-2 flex-col rounded-xl my-2 bg-white bg-clip-border text-gray-700 shadow">

        <Slider {...settings}>
            {slides.map((item) => (<div className="relative mx-0 mt-0 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700"><img
                src={item.image}
                className="h-full w-full object-cover"
            /></div>))}
        </Slider>


        <div className="p-2">
            <div className="mb-2 flex items-center justify-between">
                <div className="flex gap-2 ">
                    <div className="text-[10px] font-medium bg-green-100/10 px-2 border border-green-500 py-1 rounded-full   text-green-500 ">
                        Superhost
                    </div>
                </div>

                <BsHeart className="text-green-700" />
            </div>
            <div className="flex items-center justify-between">
                <p className="block font-sans hover:text-green-500 cursor-pointer duration-500 text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Plistine Jungle Villa
                </p>

            </div>
            <p className=" font-sans text-xs font-normal   text-gray-700 antialiased opacity-75">
                Villa in Ubud, Bali, Indonesia
            </p>
        </div>
        <div className=" px-2 pt-1 pb-2">
            <div className="flex justify-start items-center gap-2">
                <div className="flex gap-1 items-center">
                    <IoBedOutline />
                    <div className="text-xs font-medium">4 Bed</div>
                </div>
                <div className="font-bold text-xl text-slate-400 pb-2">.</div>

                <div className="flex gap-1 items-center">
                    <MdPool />
                    <div className="text-xs font-medium">1 Pool</div>
                </div>
                <div className="font-bold text-xl text-slate-400 pb-2">.</div>
                <div className="flex gap-1 items-center">
                    <MdOutlinePark />
                    <div className="text-xs font-medium">2 SPA</div>
                </div>
            </div>
            <div className="flex gap-2 items-end">
                <div className="text-green-600 font-medium text-lg">$2,015</div>
                <div className="text-muted font-medium text-xs pb-1 ">night</div>
            </div>
        </div>
    </div>;
}

export default HouseItem;

