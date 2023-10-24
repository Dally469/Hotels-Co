import Image from 'next/image'
import HouseItem from '@/components/items/HouseItem'
export default function Home() {
  return (
    <main className="flex container  flex-col items-center justify-between  ">
       <div className="  min-h-screen w-full h-full py-2 ">
        <div className="  relative max-w-screen-2xl gap-3 mx-auto grid grid-cols-12  my-2 " >
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        <HouseItem id={1} title={'MAlibu'} img={''} />
        </div>
       
        </div>
    </main>
  )
}
