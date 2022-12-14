import React from 'react'
interface headerTextProps {
    text: String;
    color?: String;
    position?: String;
}
function HeaderText({ text, color ,position}: headerTextProps) {
    return (
        <div>
            <h3 className={`text-3xl font-bold  tracking-tight ${color ? color : 'text-gray-900'}`}>{text}</h3>
        </div>
    )
}

export default HeaderText