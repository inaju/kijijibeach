import Image from 'next/image'
import React from 'react'
import heromobile from "../assets/heromobile.png"
import welcomeimage from "../assets/welcomeimage_2.png"
import Button from './Button'
import HeaderText from './HeaderText'
interface welcomeProps{
  beachName:String
}
const Welcome = ({beachName}:welcomeProps) => {
  
  return (

    <div className='  mt-16 border-red-300 '>


      <div className='grid grid-cols-2  gap-x-4 max-h-[400px]'>
        <div className=' max-w-[430px] max-h-[350px]'>
          <Image src={heromobile} alt="welcome image" className='w-full h-full' />
        </div>
        <div className=' mr-[0%] mt-[10%]  m-[10%] max-h-[350px]'>

          <Image src={welcomeimage} alt="welcome image" />
        </div>
      </div>
      <div className="mt-4">
        <HeaderText text={`Welcome To Our ${beachName}`} />
        <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta corrupti ea esse inventore sint minima voluptates aliquid nesciunt ipsa?</p>
        <Button text="Book Now" />
      </div>

    </div>
  )
}

export default Welcome