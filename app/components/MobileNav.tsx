import React, { SetStateAction, useState } from 'react'

interface Props {
    closeMobileNav: () => void
    handleMouseEnter: (item: string) => void
    handleMouseLeave: () => void
    hoveredItem: string | null

}
const MobileNav = ({ closeMobileNav, handleMouseEnter, handleMouseLeave, hoveredItem }: Props) => {
    return (
        <div className='w-full h-[100%] fixed top-0 left-0 right-0 bottom-0 bg-black z-[900] text-white flex flex-col'>
            <div className='flex flex-col items-center justify-center '>
                <div className='absolute right-5 top-10 cursor-pointer flex flex-col items-center justify-center gap-1'
                    onClick={closeMobileNav}
                >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <span className='h-[0.17rem] w-6 absolute rotate-45 bg-white'></span>
                        <span className='h-[0.17rem] w-6 absolute -rotate-45 bg-white'></span>
                    </div>

                </div>
                <div className="navitems mt-[200px]">
                    {['Product', 'Resources', 'Docs', 'Pricing'].map((item, index) => (
                        <li className='editList pb-10' key={index}>
                            <a
                                className={`pr-8 text-white text-center text-[30px] cursor-pointer transition-opacity duration-500 ${hoveredItem && hoveredItem !== item ? 'opacity-50' : 'opacity-100'
                                    }`}
                                href="#"
                                onMouseEnter={() => handleMouseEnter(item)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MobileNav