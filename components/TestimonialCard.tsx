import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import manprofile from "../assets/heromobile.png"
const TestimonialCard = () => {
    return (
        <div>
            <div className=" max-w-[384px] max-h-[250px] rounded-2xl shadow-lg flex flex-col  bg-white p-4">

                <div className="flex flex-row justify-between items-center">
                    <div className='flex flex-row gap-x-4 pt-2'>

                        <div className="w-10 h-10 rounded-full border">
                            <Image src={manprofile} className=" rounded-full w-full h-full object-center" alt="manprofile" />
                        </div>
                        <div>
                            <p className='font-semibold text-gray-700'>Mitchel Inaju</p>
                            <p className=' text-gray-400 text-sm'>Dar selen,Tanzania</p>
                        </div>
                    </div>
                    <span className='flex flex-row items-center justify-between'>
                        <AiFillStar color="#F68209" />
                        <p className="text-[#F68209] ml-1">4.8</p>
                    </span>
                </div>

                <p className='pt-6 pb-4 text -[1rem] text-ellipsis text-gray-400 text-md '>
                “very exclusive service. really a very comfortable hotel the mattress is very soft like the rendang meat that I met yesterday“</p>
            </div>
        </div>
    )
}

export default TestimonialCard