import React from 'react'
import HeaderText from './HeaderText'

interface vacationProps {
    beachName: String
}
const Footer = ({ beachName }: vacationProps) => {
    return (
        <div className="mt-16">
            <div>
                <HeaderText text={beachName} />
                <p className="pt-2 text-gray-500">Southeast Asia’s travel unicorn start-up, Traveloka, is a leading travel and lifestyle booking platform.</p>
            </div>
            <div className='grid grid-cols-2 mt-4'>
                <div>
                <p className=" text-gray-700 font-semibold">Links</p>
                <ul className={`flex flex-col  gap-2  text-gray-500  `}>
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
                </div>
                <div>
                <p className=" text-gray-700 font-semibold">About</p>

                <ul className={`flex flex-col gap-2 text-gray-500  `}>
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
                </div>
            </div>
        </div>
    )
}

export default Footer