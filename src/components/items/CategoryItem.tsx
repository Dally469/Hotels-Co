import React, { useState } from "react";
import { BsSearch } from "react-icons/bs"

import Image from "next/image";



interface propsType {
    id: Number;
    selectedId: Number;
    title: string;
    img: string;
}
const CategoryItem: React.FC<propsType> = ({ id, selectedId, title, img }) => {
    return <div className="navbar__link relative w-full justify-center text-xs flex-col gap-2 font-medium cursor-pointer text-gray-600 flex items-center">
        <Image src={"/" + img} height={25} width={25} alt="" className="text-gray-200" />
        <div className="flex whitespace-nowrap">
            {title}
        </div>


    </div>;
}

export default CategoryItem;