import React from "react";
import { BsSearch } from "react-icons/bs"

import Image from "next/image";


interface propsType {
    id: Number;
    selectedId: Number;
    title: string;
    img: string;
}
const CategoryItem: React.FC<propsType> = ({ id, selectedId, title, img }) => {
    return <div  className={id == selectedId ? 'navbar__link_selected relative justify-center text-xs flex-col gap-2 font-medium cursor-pointer text-gray-600 flex items-center' : 'navbar__link relative justify-center text-xs flex-col gap-2 font-medium cursor-pointer text-gray-600 flex items-center' }>
         <Image src={ "/" +img }  height={30} width={30} alt="" className="text-gray-200"/>
        {/* <BsSearch  size={25} /> */}
        <div>
        {title}
        </div>

       
    </div>;
}

export default CategoryItem;