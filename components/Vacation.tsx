import React from 'react'
import HeaderText from './HeaderText'
import HotelCard from './HotelCard'

interface vacationProps{
  beachName:String
}
function Vacation({beachName}:vacationProps) {
  return (
    <div className=' mt-16 '>
      <div className=' text-left sm:text-center'>
        <HeaderText text="Choose The Best Place For Your Vacation" />
        <p className="text-sm text-gray-700">We have prepared several hotels, villas and apartments to enjoy your vacation with your family.</p>
      </div>
      <div className='flex flex-col mt-4 m-auto gap-4'>
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
      </div>
    </div>
  )
}

export default Vacation


