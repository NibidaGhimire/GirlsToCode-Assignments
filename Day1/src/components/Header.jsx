import React from 'react'

const Header = ({ title }) => {
    return (
        <div className="px-8 py-4 bg-green-500 w-full text-center text-[24px]  border-white border-2">
            {title}
        </div>
    )
}

export default Header


