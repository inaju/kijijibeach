import Image from 'next/image';
import React from 'react'
import heromobile from "../assets/heromobile.png"
import bedroom from "../assets/bedroom.webp"
import { AiFillStar } from "react-icons/ai"
interface hotelCardProps {
    title: String;
    starNo: Number;
    price: any;
}
const HotelCard = ({ title, starNo, price }: hotelCardProps) => {
    return (
        <div className=' w-full md:max-w-[250px]  shadow-xl rounded-br-2xl  rounded-bl-2xl rounded-tl-2xl'>
            <div className='max-h-[276px] w-full h-[200px]'>
            
                <Image 
                   src={bedroom} alt="hotel card" className='object-cover rounded-tr-2xl rounded-tl-2xl w-full h-full' />
            </div>
            <div className="flex flex-col p-4 gap-2">

                <div className=" ">{title}</div>
                <div className="flex">

                    {[...Array.from(Array(starNo).keys())].map(i =>
                        <div><AiFillStar color="#F68209" />
                        </div>
                    )}
                </div>
                <div className="grow-0 w-fit bg-brand">
                    <div className="px-4 py-2 text-white font-bold">${price}/day</div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard