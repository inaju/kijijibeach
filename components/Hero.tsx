import React from 'react'
import Button from './Button'
interface heroProps {
    beachName: String
}
function Hero({ beachName }: heroProps) {
    return (
        // translate-x-[-50%] translate-y-[-50%]
        <div className='relative'>

            <div className="heroImage m-auto max-w-[512px]  w-screen relative h-[70vh] space-y-4  text-white " >
                <div className='absolute top-[20%] mx-4'>
                    <p className='text-2xl font-thin'>WELCOME TO</p>
                    <h1 className='text-6xl font-semibold tracking-wider'>{beachName.toUpperCase()}</h1>
                    <p className='text-sm mt-4 font-thin'>Book your stay and enjoy Luxury
                        redefined at the most affordable rates.</p>
                    <Button text="BOOK NOW" />
                </div>
            </div>
        </div>
    )
}

export default Hero