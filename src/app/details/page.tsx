import Image from 'next/image'
import HouseItem from '@/components/items/HouseItem'
import ProductHome from '@/components/ProductHome'
import ProductDeatils from '@/components/ProductDetails'

export default function Details() {
  return (
    <main className="flex container  flex-col items-center justify-between  ">
      <div className=" w-full h-auto py-2 ">
       
        <ProductDeatils />
      </div>
    </main>
  )
}