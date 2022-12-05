import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
function Navbar() {
    const [showNav, setShowNav] = useState(false)
    console.log(showNav)
    return (
        <div className='relative  bg-brand  border-red-400 w-screen h-[50px]'>

            <div className=''>

                <ul className={`${showNav ? 'block' : 'hidden'} flex flex-col pl-8 pt-[25%] gap-4 text-white font-semibold absolute top-0 w-full h-screen bg-gray-700 z-10 `}>
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
                    <li>
                        <a href='#booking'>Booking Now</a>
                    </li>
                </ul>
                <div className='absolute top-[25%] right-[10px] z-10'
                    onClick={() => setShowNav(!showNav)}
                >
                    {!showNav ?
                        <FaBars size={20} color="white" />
                        :
                        <GrClose size={20} color="white" className='text-white'/>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar