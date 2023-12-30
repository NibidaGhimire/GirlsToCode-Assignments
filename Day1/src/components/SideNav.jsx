import React from 'react'

const SideNav = ({ title }) => {
    return (
        <div className="flex-[0.25] px-8 py-4 bg-purple-500 w-full text-center text-[24px] border-white border-2">
            {title}
        </div>
    )
}

export default SideNav
