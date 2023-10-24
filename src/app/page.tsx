import Image from 'next/image'
import HouseItem from '@/components/items/HouseItem'
import ProductHome from '@/components/ProductHome'
export default function Home() {
  return (
    <main className="flex container  flex-col items-center justify-between  ">
      <div className="  min-h-screen w-full h-full py-2 ">
       <ProductHome />

      </div>
    </main>
  )
}
