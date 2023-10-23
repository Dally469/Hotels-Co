import React from "react";
import { BsSearch } from "react-icons/bs"
import Image from "next/image";


interface propsType {
    id: Number;
    title: string;
    img: string;
}
const   HouseItem: React.FC<propsType> = ({ id, title, img }) => {
    return <div className="relative md:col-span-6 lg:col-span-3  duration-500 cursor-pointer flex items-center justify-center p-4 px-10 py-4 overflow-hidden 
    text-green-500 transition duration ease-out border border-green-500 rounded-full group">
     { title }
  </div>;
}

export default HouseItem;