import React from 'react'
import HotelCard from './HotelCard'

function Vacation() {
  return (
    <div className='max-w-[350px] m-auto  mt-16 px-4'>
      <div className=' text-left sm:text-center'>
        <h3 className="font-bold text-xl text-gray-800">Choose The Best Place For Your Vacation</h3>
        <p className="text-sm text-gray-700">We have prepared several hotels, villas and apartments to enjoy your vacation with your family.</p>


      </div>
      <div className=' flex flex-col mt-4 m-auto gap-4'>
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
      </div>
    </div>
  )
}

export default Vacation


