import Image from 'next/image'
import HouseItem from '@/components/items/HouseItem'
export default function Home() {
  return (
    <main className="flex container  flex-col items-center justify-between p-2">
       <div className="bg-slate-200 min-h-screen w-full h-full py-6 ">
        <div className="container relative max-w-screen-2xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-6 my-10 " ></div>
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        </div>
    </main>
  )
}
