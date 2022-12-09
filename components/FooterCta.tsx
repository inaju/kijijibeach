import React from 'react'
import Button from './Button'
import HeaderText from './HeaderText'

type Props = {}

const FooterCta = (props: Props) => {
    return (


        <div className=' mt-16 relative contentImage h-[70vh]'>
            <div className='max-w-[400px] text-white m-auto px-4 absolute top-[30%] left-[3%]'>
                <HeaderText text="Do you want to rent out the hotel?" color="white" />
                <p className=''>We prepare the best choice of places with high quality that is guaranteed by the hotel assessment agency.</p>
                <Button text={'Book Now'} icon="" color="" />
            </div>
        </div>

    )
}

export default FooterCta