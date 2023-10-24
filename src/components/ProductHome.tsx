"use client";


import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import CategoryItem from "./items/CategoryItem";
import HouseItem from './items/HouseItem';

const queryClient = new QueryClient()

export default function ProductHome() {
    return (
        <QueryClientProvider client={queryClient}>
            <Poriduct />
        </QueryClientProvider>
    )
}

function Poriduct() {
    const { isLoading, error, data } = useQuery('HotelsCo', () =>
        fetch('https://65365642bb226bb85dd1f028.mockapi.io/api/v1/rooms').then(res =>
            res.json()

        )
    )
    console.log(data);
    if (isLoading) return (<div className="  relative max-w-screen-2xl gap-3 mx-auto grid grid-cols-12  my-2 " > Loading</div>)

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className=" relative max-w-screen-2xl gap-3 mx-auto grid grid-cols-12  my-2 " >
            {data.map((item: any, i: any) => (
                <HouseItem key={i} id={1} title={item.title} img={''} />
            ))}
        </div>
    )
}