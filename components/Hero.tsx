import React from 'react'
import Button from './Button'
interface heroProps {
    beachName: String
}
function Hero({ beachName }: heroProps) {
    return (
        // translate-x-[-50%] translate-y-[-50%]
        <div className='relative'>
            <div className="heroImage  m-auto  sm:max-w-full  w-screen relative h-[70vh]  lg:h-[100vh] space-y-4  text-white " >
                <div className='absolute top-[20%] mx-4 sm:mx-10  md:mx-10  lg:mx-20'>
                    <p className='text-2xl md:text-3xl lg:text-4xl font-thin'>WELCOME TO</p>
                    <h1 className='text-6xl md:text-7xl md:w-1/2 lg:text-9xl lg:w-1/2 font-semibold tracking-wider'>{beachName.toUpperCase()}</h1>
                    <p className='text-sm md:text-md w-[70%] md:w-[50%] lg:text-lg lg:w-[40%] mt-4 font-thin'>Book your stay and enjoy Luxury
                        redefined at the most affordable rates.</p>
                    <Button text="BOOK NOW" />
                </div>
            </div>
        </div>
    )
}

export default Hero