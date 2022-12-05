import Image from 'next/image'
import React from 'react'
import heromobile from "../assets/heromobile.png"
import welcomeimage from "../assets/welcomeimage_2.png"
import Button from './Button'

const Welcome = () => {
  return (

    <div className='max-w-[350px] m-auto px-4  mt-16 '>


      <div className='grid grid-cols-2  gap-x-4'>
        <div className='max-h-[679px] max-w-[430px]'>
          <Image src={heromobile} alt="welcome image" className='w-full h-full' />
        </div>
        <div className='max-h-[350px] max-w-[100px] mt-[20%]'>

          <Image src={welcomeimage} alt="welcome image" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-xl text-gray-800">Welcome To Our Kijiji Beach</h3>
        <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta corrupti ea esse inventore sint minima voluptates aliquid nesciunt ipsa?</p>
        <Button text="Book Now" />
      </div>

    </div>
  )
}

export default Welcome