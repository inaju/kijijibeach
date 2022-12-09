import React from 'react'
import HeaderText from './HeaderText'
import HotelCard from './HotelCard'
import CarouselDemo from './CarouselDemo'
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
interface vacationProps {
  beachName: String,


}
interface itemProps {
  name: String,
  description: String,

}
function Vacation({ beachName }: vacationProps) {


  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <div className=' mt-16 md:mt-40 '>
      <div className=' text-left sm:text-center'>
        <HeaderText text="Choose The Best Place For Your Vacation" />
        <p className="text-sm text-gray-700 sm:max-w-[400px] sm:m-auto">We have prepared several hotels, villas and apartments to enjoy your vacation with your family.</p>
      </div>
      {/* <Carousel> */}
      {
        // items.map((item, i) => <Item key={i} name={item.name} description={item.description} />)
      }
      {/* </Carousel> */}
      <CarouselDemo  />
      <div className='flex flex-col mt-4 m-auto gap-4 sm:grid sm:grid-cols-3 sm:max-w-[600px] md:max-w-full md:sm:grid-cols-4'>
        {/* <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} />
        <HotelCard title="kijiji Beach Single" starNo={5} price={200} /> */}
      </div>
    </div>
  )
}



export default Vacation


