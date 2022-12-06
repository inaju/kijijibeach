import React from 'react'
interface buttonProps {
    text: String;
    icon?: String;
    color?: String;
}
export default function Button({ text }: buttonProps) {
    return (
        <button className='py-2 px-4 rounded-md text-white mt-6 bg-brand uppercase font-bold'>
            <p>
                {text}
            </p>
        </button>
    )
}
