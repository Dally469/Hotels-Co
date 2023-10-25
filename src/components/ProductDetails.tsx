import React from "react";
import { BsHeart, BsShare, BsStar, BsChevronDown, BsCircle, BsCircleFill } from "react-icons/bs";
import { IoBedOutline, } from "react-icons/io5";
import { MdPool, MdOutlinePark } from "react-icons/md";

const ProductDeatils = () => {
    return <div className="container p-4 space-y-3">
        <div className="font-bold text-2xl "> Kive malina, KDS </div>
        <div className=" justify-between flex gap-3 pa-4">
            <div className="flex space-x-3">
                <div className="flex items-center gap-2">
                    <BsStar />
                    <div className="font-medium  text-gray-700 ">4.8</div>
                </div>
                <div className="font-bold text-2xl text-slate-400 mx-4 pb-2">.</div>
                <div className="flex items-center cursor-pointer underline gap-2">
                    <div className="font-medium  text-gray-700 ">258 Reviews</div>
                </div>
                <div className="font-bold text-2xl text-slate-400 mx-4 pb-2">.</div>
                <div className="flex items-center cursor-pointer underline gap-2">
                    <div className="font-medium  text-gray-700 ">Nayimbi-Nyabihu,Rwanda</div>
                </div>
            </div>
            <div className="flex items-center gap-0">
                <div className="flex items-center gap-2 group cursor-pointer duration-500 border hover:bg-green-500/10 border-gray-600 hover:border-green-500/20 py-2 px-3 rounded-s-full ">
                    <BsShare size={15} className="text-gray-700 group-hover:text-green-500 duration-500" />
                    <div className="font-medium text-sm text-gray-700 group-hover:text-green-500 duration-500">Share</div>
                </div>

                <div className="flex items-center gap-2 group cursor-pointer duration-500 border hover:bg-green-500/10 border-gray-600 hover:border-green-500/20 py-2 px-4 rounded-e-full ">
                    <BsHeart size={15} className="text-gray-700 group-hover:text-green-500 duration-500" />
                    <div className="font-medium text-sm text-gray-700 group-hover:text-green-500 duration-500">Save</div>
                </div>


            </div>
        </div>
        <div className=" lg:flex w-full gap-2 p-2">
            <div className="w-1/2 bg-gray-200 rounded-s-xl lg:h-[500px] ">
                <img src="/santorini_1.png" className="w-full h-full rounded-s-xl  object-cover" />
            </div>
            <div className="w-1/2 space-y-2  ">
                <div className="flex w-full gap-2 lg:h-[245px]">
                    <div className="w-1/2 bg-gray-200 ">
                        <img src="/santorini_2.png" className="w-full h-full  object-cover" />
                    </div>
                    <div className="w-1/2 bg-gray-200 rounded-tr-xl ">
                        <img src="/santorini_3.png" className="w-full h-full rounded-tr-xl  object-cover" />
                    </div>
                </div>
                <div className="flex w-full gap-2 lg:h-[246px]">
                    <div className="w-1/2 bg-gray-200 ">
                        <img src="/santorini_5.png" className="w-full h-full   object-cover" />
                    </div>
                    <div className="w-1/2 bg-gray-200 rounded-br-xl ">
                        <img src="/santorini_4.png" className="w-full h-full rounded-br-xl  object-cover" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex w-full gap-2 p-2">
            <div className="w-2/3   py-5 px-3   lg:h-[500px] ">
                <div className="flex gap-4 items-center py-10  justify-between border-b ">
                    <div className="">
                        <div className="leading font-medium text-xl">Entire house hosted by Heath</div>
                        <div className="font-light ">10 guests - 4 bedrooms - 8 beds - 3 baths </div>
                    </div>
                    <div className="bg-gray-500/20 p-1 rounded-full w-16 h-16">
                        <img src="/santorini_2.png" className="w-full h-full rounded-full  object-cover" />
                    </div>
                </div>
                <div className="  py-8 space-y-4 border-b">
                    <div className="flex gap-3 ">
                        <MdPool size={30} className="text-gray-400" />
                        <div className="flex-col gap-2">
                            <div className="font-medium text-lg text-green-500">Self Check-in</div>
                            <div className="font-light text-sm"> Check yourself in with smart lock</div>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <MdPool size={30} className="text-gray-400" />
                        <div className="flex-col gap-2">
                            <div className="font-medium text-lg text-green-500">Great location</div>
                            <div className="font-light text-sm"> Check yourself in with smart lock</div>
                        </div>
                    </div>
                    <div className="flex gap-3 ">
                        <MdPool size={30} className="text-gray-400 " />
                        <div className="flex-col gap-2">
                            <div className="font-medium text-lg text-green-500">Park for free</div>
                            <div className="font-light text-sm"> Check yourself in with smart lock</div>
                        </div>
                    </div>
                </div>
                <div className="flex pt-12">
                    <div className=" ">
                        <div className="leading font-medium  text-primary text-xl">More information </div>
                        <div className="font-light py-6 ">10 guests - 4 bedrooms - 8 beds - 3 baths Free cancellation before 3 PM. Cancel before check-in on 12 November for partial refund Free cancellation before 3 PM. Cancel before check-in on 12 November for partial refund
                            Free cancellation before 3 PM. Cancel before check-in on 12 November for partial refund Free cancellation before 3 PM. <br />  fore check-in on 12 November for partial refund</div>
                    </div>
                </div>

                <div className="hidden py-12 border-b space-y-4" >
                    <div className="font-bold">Where  we will sleep</div>

                    <div className="flex gap-3 w-full justify-between items-center">
                        <div className="rounded-lg border w-full p-4">
                            <IoBedOutline sixe={60} className="my-5"/>
                            <div className="font-medium">Bedroom 1</div>
                            <div className="font-light"> 1 queen bed</div>
                        </div>
                        <div className="rounded-lg border w-full">w</div>
                        <div className="rounded-lg w-full">w</div>
                    </div>
                </div>
            </div>

            <div className="w-1/3 space-y-2 rounded-xl h-auto  bg-white shadow-lg p-4 ">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <div className="leading font-bold  text-green-600 text-2xl">$248 </div>
                        <div className="font-normal py-6 ">night </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsStar />
                        <div className="font-medium  text-gray-900 ">4.8</div>
                        <div className="flex items-center cursor-pointer underline gap-2">
                            <div className="font-medium  text-gray-700 ">258 Reviews</div>
                        </div>
                    </div>

                </div>
                <div className="  items-center w-full rounded-lg border-2  ">
                    <div className="flex items-center w-full ">
                        <div className="border-r border-b w-full py-5 px-4">
                            <div className="font-bold text">CHECK-IN</div>
                            <div className="font-light text">11-10-2023</div>
                        </div>
                        <div className="border-l border-b w-full py-5 px-4">
                            <div className="font-bold text">CHECKOUT</div>
                            <div className="font-light text">11-10-2023</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="py-5 px-4">
                            <div className="font-bold">GUEST</div>
                            <div className="font-light ">12 guests</div>
                        </div>
                        <BsChevronDown size={30} className="text-gray-600 mx-4" />
                    </div>
                </div>
                <div className="font-bold text-lg py-2 uppercase">Cancellation policies</div>

                <div className=" mb-6 items-center w-full rounded-lg border-2  ">
                    <div className="flex justify-between border-b items-center">
                        <div className="py-5 px-4">
                            <div className="font-medium">Non-refundable: $248 total</div>
                        </div>
                        <BsCircleFill size={20} className="text-gray-600 mx-4" />
                    </div>
                    <div className="flex justify-between border-t items-center">
                        <div className="py-5 px-4">
                            <div className="font-medium">Refundable : 300 total</div>
                            <div className="font-light ">Free cancellation before 3 PM. Cancel before check-in on 12 November for partial refund</div>
                        </div>
                        <BsCircle size={30} className="text-gray-600 mx-4" />
                    </div>
                </div>

                <div className="rounded-lg bg-green-500 p-4 text-white items-center mt-5 cursor-pointer
                 hover:text-green-500 hover:bg-green-500/20 duration-600
                 justify-center felx font-medium text-xl text-center"> Book Now</div>

            </div>
        </div>
    </div>;
}

export default ProductDeatils;