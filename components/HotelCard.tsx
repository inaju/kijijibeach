import Image from 'next/image';
import React from 'react'
import heromobile from "../assets/heromobile.png"
import bedroom from "../assets/bedroom.webp"
import { AiFillStar } from "react-icons/ai"
interface hotelCardProps {
    title: String;
    starNo: Number;
    price: any;
    img: any,
}
const HotelCard = ({ title, starNo, price, img }: hotelCardProps) => {
    return (
        <div className=' w-full sm:max-w-[250px]  shadow-md rounded-br-2xl  rounded-bl-2xl rounded-tl-2xl hover:cursor-pointer hover:transform hover:scale-[110%]'>
            <div className='max-h-[276px] w-full h-[200px] sm:h-[150px] '>
                <Image
                    src={img} alt="hotel card" className='object-cover rounded-tr-2xl rounded-tl-2xl w-full h-full ' />
            </div>
            <div className="flex flex-col p-4 gap-2">

                <div className=" font-semibold text-gray-800">{title}</div>
                <div className="flex">

                    {[...Array.from(Array(starNo).keys())].map(i =>
                        <div><AiFillStar color="#F68209" />
                        </div>
                    )}
                </div>
                <div className="grow-0 w-fit bg-brand hover:border hover:border-brand hover:bg-white">
                    <div className="px-4 py-2 text-white font-bold hover:text-brand">${price}/day</div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard