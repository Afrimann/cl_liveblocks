'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from './images/logo-white.svg'

interface Props {
  openMobileNav: () => void
  handleMouseEnter: (item: string) => void
  handleMouseLeave: () => void
  hoveredItem: string | null
}

const Header = ({ handleMouseEnter, handleMouseLeave, hoveredItem, openMobileNav }: Props) => {
  return (
    <div className=' w-full h-[14vh]  bg-[#000000] flex items-center p-8 md:p-5 lg:p-8 text-white border-b-[1px] border-gray-100 border-opacity-15'>
      <nav className='flex gap-8 items-center w-full justify-between'>
        <div className='logo'>
         <a href="/">
         <Image
            alt='logo'
            src={logo}
            className=' cursor-pointer'
            style={{ filter: 'invert(1)' }}
          />
         </a>
        </div>
        <div className='w-full hidden md:flex items-center justify-between  '>
          <div className="navitems inline-block">
            {['Product', 'Resources', 'Docs', 'Pricing'].map((item, index) => (
              <a
                key={index}
                className={`pr-8 text-white text-[15px] cursor-pointer transition-opacity duration-500 ${hoveredItem && hoveredItem !== item ? 'opacity-50' : 'opacity-100'
                  }`}
                href="#"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </a>
            ))}
          </div>
          <div className='navItems_2'>
            <a className='pr-8 text-[15px]' href="/demo">Book a Demo</a>
            <button className='signInBtn bg-[#272727] px-3 py-1.5 rounded-md text-[15px] opacity-100 hover:opacity-80 duration-300'

            ><a href='#'>Sign In</a></button>
          </div>

        </div>
        <div className="menuIcon">
          <div className='flex flex-col items-center justify-center gap-1 cursor-pointer md:hidden '
            onClick={openMobileNav}>
            <span className='h-[0.18rem] w-6 bg-white'></span>
            <span className='h-[0.18rem] w-6 bg-white'></span>
            <span className='h-[0.18rem] w-6 bg-white'></span>
          </div>

        </div>
      </nav>
    </div>


  )
}

export default Header