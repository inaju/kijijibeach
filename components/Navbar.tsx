import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import hotellogo_lionhead from '../assets/hotellogo_lionhead.png'
function Navbar() {
    const [showNav, setShowNav] = useState(false)
    console.log(showNav)
    return (
        <div className='relative  bg-brand  w-screen sm:w-full h-[50px] md:h-[70px] flex flex-row justify-between'>

            <div className=''>

                <ul className={`${showNav ? 'block' : 'hidden'} flex flex-col  pl-8 pt-[25%] gap-4 text-white text-2xl font-semibold absolute top-0 md:flex md:bg-inherit md:pt-2 md:flex-row md:justify-center md:items-center md:text-sm md:space-x-6 md:h-full w-full h-screen bg-gray-700 z-10 `}>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#rooms'>Rooms</a>
                    </li>
                    <li>
                        <a href='#facilities'>Facilities</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact Us</a>
                    </li>
                    <li className='md:border md:p-2 md:rounded-md md:hover:cursor-pointer'>
                        <a href='#booking'>Booking Now</a>
                    </li>
                </ul>
                <div className='absolute top-[25%] right-[10px] z-10 md:hidden'
                    onClick={() => setShowNav(!showNav)}
                >
                    {!showNav ?
                        <FaBars size={20} color="white" />
                        :
                        <GrClose size={20} color="white" className='text-white' />
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar