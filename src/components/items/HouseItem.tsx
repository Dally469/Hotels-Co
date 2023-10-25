
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { BsHeart, } from "react-icons/bs";
import { IoBedOutline, } from "react-icons/io5";
import { MdPool, MdOutlinePark } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link'

var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: false,

};


interface propsType {
    id: Number;
    title: string;
    images: {
        id: string;
        image: string;
    }[];
    offers: {
        id: string;
        title: string;
    }[];
    features: {
        id: string;
        icon: string;
        title: string;
    }[];
    location: string;
    price: string;
    duration: string;
}
const HouseItem: React.FC<propsType> = ({ id, title, location, images, offers, features, price, duration }) => {
    return <div className="relative flex w-full col-span-12 lg:col-span-2 flex-col rounded-xl my-2 bg-white bg-clip-border text-gray-700 shadow">

        <Slider {...settings}>
            {images.map((item) => (<div className="relative mx-0 mt-0 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700"><img
                src={item.image}
                className="h-full w-full object-cover"
            /></div>))}
        </Slider>

        <div className="p-2">
            <div className="mb-2 flex items-center justify-between">
                <div className="flex gap-2 ">
                    {offers.map((offer) => (
                        <div className="text-[10px] font-medium bg-green-100/10 px-2 border border-green-500 py-1 rounded-full   text-green-500 ">
                            {offer.title}
                        </div>
                    ))}
                </div>
                <BsHeart className="text-green-700" />
            </div>
            <div className="flex items-center justify-between">
                <p className="block font-sans hover:text-green-500 cursor-pointer duration-500 text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                   
                    <Link href={`/details`}> {title}</Link>
                </p>
            </div>
            <p className=" font-sans text-xs font-normal   text-gray-700 antialiased opacity-75">
                {location}
            </p>
        </div>
        <div className=" px-2 pt-1 pb-1">
            <div className="flex justify-start items-center gap-2">
                {features.map((feature) => (
                    <div className="flex gap-1 items-center">
                        <Image src={"/" + feature.icon} alt="bed" height={15} width={15} />
                        <div className="text-xs font-medium  whitespace-nowrap">{feature.title}</div>
                        {features.length <= features.length - 1 ? <div className="font-bold text-2xl text-slate-400 pb-2">.</div> : <div className="font-bold text-2xl text-slate-400 pb-2">.</div>}
                    </div>
                ))}
            </div>
            <div className="flex gap-2  items-end">
                <div className="text-green-600 font-medium text-lg">${price}</div>
                <div className="text-muted font-medium text-xs pb-1 ">{duration}</div>
            </div>
        </div>
    </div>;
}

export default HouseItem;

