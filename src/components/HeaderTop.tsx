import React from "react";
import { BsFacebook, BsSearch, BsChevronDown, BsMenuButton } from "react-icons/bs"
import { TiThMenu } from "react-icons/ti"
import Image from "next/image";
const HeaderTop = () => {
    return <div className="bg-white w-full h-28 border-b border-gray-300 py-4 sticky  -top-0 hidden sm:block">
        <div className="container sm:flex justify-between my-4 items-center">
            <div className="font-medium text-4xl text-clip pb-0 sm:bg-0">
            <Image src={'/logoh.png'} alt="Profile"  height={100} width={150}/>
            </div>
            <div className="w-full sm:w-[300px] md:w-[40%] items-center p-2  relative">
                <input
                    type="text"
                    className="bg-gray-100   p-2 px-4 focus:outline-none rounded-full w-full"
                    placeholder="Search hotel , places,..." />

                <div className="absolute right-3 top-3 bottom-3  text-white bg-green-500 p-2 rounded-full">
                    <BsSearch />
                </div>



            </div>
            <div className="flex gap-4 items-center justify-center">
                <div className="flex items-center rounded-full gap-1 p-2 border border-gray-200">
                    <Image src={'/english.svg'} alt="Profile" width={15} height={15} />
                    <div className="text-xs px-2">USD</div>
                    <BsChevronDown />
                </div>
                <div className="flex items-center rounded-full gap-2 p-2 border border-gray-200">
                    <TiThMenu />

                    <Image src={'/profile.png'} alt="Profile" width={16} height={16} />


                </div>
            </div>
        </div>
    </div>;
}
export default HeaderTop;