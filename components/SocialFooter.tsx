import Image from 'next/image';
import React from 'react'
import instagramicon from "../assets/InstagramIcon.svg"
import FacebookIcon from "../assets/FacebookIcon.svg"
import TwitterIcon from "../assets/TwitterIcon.svg"
interface socialFooterProps {
    beachName: String
}
function SocialFooter({ beachName }: socialFooterProps) {
    return (
        <div className="mt-16  bg-brand p-4 w-full ">
            <div className="flex flex-col justify-between items-center px-4  text-white">

                <p>© 2022 {beachName} All rights reserved.</p>
                <div className="flex gap-2 pt-1">
                    <Image src={instagramicon} alt="" />
                    <Image src={FacebookIcon} alt="" />
                    <Image src={TwitterIcon} alt="" />
                </div>
            </div>
        </div>
    )

}

export default SocialFooter
