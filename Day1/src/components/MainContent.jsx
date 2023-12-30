import React from 'react'

const MainContent = ({ title }) => {
    return (
        <div className="flex-[0.75] px-8 py-4 bg-purple-500 text-center text-[24px] border-white border-2">
            {title}
        </div>
    )
}

export default MainContent
