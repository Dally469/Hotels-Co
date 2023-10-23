import React from "react";
import CategoryItem from "./items/CategoryItem";
import { BsSearch } from "react-icons/bs"

 
const CategoryTop = () => {
    return <div className="bg-white w-full h-auto border-b border-gray-300 py-6 sticky  top-20 hidden sm:block z-20">
        <div className="container bg-white sm:flex justify-start my-2 gap-8 items-center" >
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            <CategoryItem  id={1} selectedId={0} title={'Countryside'} img="countryside.png"/>
            
         </div>
    </div>;
}

export default CategoryTop; 