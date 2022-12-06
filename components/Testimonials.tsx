import React from 'react'
import HeaderText from './HeaderText'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div className='mt-16'>
      <HeaderText text="Our Customers Said" />
        <div className='mt-4 m-auto space-y-4'>

        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        </div>
        <p className='font-semibold text-[#F4694C] mt-4'>View all reviews</p>
    </div>
  )
}

export default Testimonials