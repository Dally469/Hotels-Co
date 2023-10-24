"use client";


import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import CategoryItem from "./items/CategoryItem";

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

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="bg-white w-full h-auto   py-6 sticky  top-20 hidden sm:block z-20">
            <div className="container bg-white sm:flex justify-between overflow-hidden my-2 gap-10 items-center" >
                {data.map((item: any, i:any) => (
                    <CategoryItem key={i} id={item.id} selectedId={0} title={item.title} img={item.icon} />
                ))}

            </div>
        </div>
    )
}