"use client";


import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import CategoryItem from "./items/CategoryItem";
import Image from "next/image";
import { BsChevronDown, BsFilter } from "react-icons/bs";
const queryClient = new QueryClient()

export default function CategoryTop() {
    return (
        <QueryClientProvider client={queryClient}>
            <Category />
        </QueryClientProvider>
    )
}

function Category() {
    const { isLoading, error, data } = useQuery('HotelsCo', () =>
        fetch('https://65365642bb226bb85dd1f028.mockapi.io/api/v1/categories').then(res =>
            res.json()

        )
    )
    console.log(data);
    if (isLoading) return (<div className="bg-white w-full h-auto border-b border-gray-300 py-6 sticky  top-20 hidden sm:block z-20">
        <div className="container bg-white sm:flex justify-between my-2 gap-10 items-center" >

        </div></div>)

    if (error) return 'An error has occurred: ' + error

    return (

        <div className="bg-white w-full h-auto   py-6 sticky  top-20 hidden sm:block z-20">
            <div className="flex container items-center">

                <div className="w-4/5  bg-white sm:flex justify-between overflow-hidden my-2 py-3 gap-10 items-center">
                    {data.map((item: any, i: any) => (
                        <CategoryItem key={i} id={item.id} selectedId={0} title={item.title} img={item.icon} />
                    ))}
                </div>
                <div className="flex w-1/5 p-4 gap-3 items-center">
                    <div className="flex items-center group cursor-pointer hover:border-green-400 duration-500 mx-1 rounded-xl gap-1 py-2 px-2 border border-gray-200">
                        <BsFilter size={27} className="duration-500 text-black group-hover:text-green-500" />
                        <div className="text-sm font-medium group-hover:text-green-500 text-black duration-500 px-2">Filters</div>

                    </div>
                    <div className="flex items-center w-full  rounded-xl gap-1 py-3 px-2 border border-gray-200">
                        <BsChevronDown size={20} className="text-black" />
                        <div className="text-sm font-medium text-black px-2">Display total  </div>

                    </div>
                </div>
            </div>

        </div>
    )
}