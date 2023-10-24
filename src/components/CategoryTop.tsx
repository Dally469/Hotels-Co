"use client";
import React, {useState, useEffect} from "react";
import CategoryItem from "./items/CategoryItem";
import { BsSearch } from "react-icons/bs"


const CategoryTop = () => {
    return <div className="bg-white w-full h-auto border-b border-gray-300 py-6 sticky  top-20 hidden sm:block z-20">
        <div className="container bg-white sm:flex justify-between my-2 gap-10 items-center" >
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Tropical'} img="island.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Castles'} img="castle.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Lakefront'} img="pond.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Mansions'} img="mansion.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Houseboats'} img="house-boat.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Bed & Breakfasts'} img="coffee-cup.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Iconic Cities'} img="cityscape.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Surfing'} img="surf.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Lake'} img="lake.png"/>
            <CategoryItem  id={1} selectedId={0} title={'National parks'} img="park.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Caves'} img="cave.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Golfing'} img="golf.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Design'} img="designn.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Rooms'} img="hotel.png"/>
            
         </div>
    </div>;
}

export default CategoryTop; 