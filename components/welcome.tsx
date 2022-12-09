import Image from 'next/image'
import React from 'react'
import heromobile from "../assets/heromobile.png"
import welcomeimage from "../assets/welcomeimage_2.png"
import Button from './Button'
import HeaderText from './HeaderText'
interface welcomeProps {
  beachName: String
}
const Welcome = ({ beachName }: welcomeProps) => {

  return (

    <div className=' mt-16 md:mt-24 sm:flex sm:gap-x-6 sm:max-w-full sm:max-h-[370px] md:max-h-[670px] sm:p-auto sm:justify-center    '>
      <div className='flex flex-row  gap-x-4 max-h-[400px] sm:max-w-[400px] md:max-w-full md:h-[400px] lg:h-[450px] md:gap-0 sm:max-h-full '>
        <div className=' max-w-[430px] max-h-[350px] sm:max-h-full md:w-2/3 md:m-0 md:p-0'>
          <Image src={heromobile} alt="welcome image" className='w-full h-full' />
        </div>
        <div className=' mr-[0%] mt-[10%]  m-[10%] max-h-[300px] sm:max-h-full  md:w-1/3 md:h-[350px] md:ml-[5%]'>
          <Image src={welcomeimage} alt="welcome image" className='w-full h-full  ' />
        </div>
      </div>
      <div className="mt-4 sm:w-[350px] md:mt-[4%]">
        <HeaderText text={`Welcome To Our ${beachName}`} />
        <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta corrupti ea esse inventore sint minima voluptates aliquid nesciunt ipsa?</p>
        <Button text="Book Now" />
      </div>

    </div>
  )
}

export default Welcome