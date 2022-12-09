import React from 'react'
import HeaderText from './HeaderText'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='mt-16 md:mt-40 w-full sm:flex sm:flex-col sm:justify-center '>
      <div className='text-center'>

      <HeaderText text="Our Customers Said" />
      </div>
        <div className='mt-4 m-auto space-y-4 sm:flex sm:flex-wrap sm:gap-x-4 sm:space-y-0 sm:gap-y-4 sm:w-full md:grid md:grid-cols-3 md:max-w-full'>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        </div>
        <p className='font-semibold text-[#F4694C] mt-4 hover:cursor-pointer'>View all reviews</p>
    </div>
  )
}

export default Testimonials