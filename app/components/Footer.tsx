import React from 'react'
import { FirstGroup, SecondGroup, ThirdGroup } from './FooterDetails'
import logo from './images/logo-white.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='h-auto lg:h-[150vh] w-full showcaseBorder text-white p-8 relative'>
      <div
        className='flex flex-row justify-between'
      >
        <div className='col_! flex flex-col lg:flex-row gap-[200px]'>
          <div className='firstGroup'>
            {
              FirstGroup.map((link, index) => (
                <div key={index} className='mb-[20px]'>
                  <h2 className='font-bold mb-2'>{link.link.heading}</h2>
                  {link.link.links.map((a, i) => (
                    <li key={i} className='editList text-[rgb(137,136,140)] font-normal pb-3 text-[14px]'>
                      {a}
                    </li>
                  ))}
                </div>
              ))
            }
          </div>
          <div className='secondGroup'>
            {
              SecondGroup.map((link, index) => (
                <div key={index} className='mb-[20px]'>
                  <h2 className='font-bold mb-2'>{link.link.heading}</h2>
                  {
                    link.link.links.map((a, i) => (
                      <li key={i} className='editList text-[rgb(137,136,140)] font-normal pb-3 text-[14px] '>{a}</li>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className='thirdGroup'>
            {
              ThirdGroup.map((link, index) => (
                <div key={index} className='mb-[20px]'>
                  <h2 className='font-bold mb-2'>{link.link.heading}</h2>
                  {
                    link.link.links.map((a, i) => (
                      <li key={i} className='editList text-[rgb(137,136,140)] font-normal pb-3 text-[14px]'>{a}</li>
                    ))
                  }
                </div>
              ))
            }
          </div>

        </div>
        <div className='col_2 flex flex-col items-end'>
          <div className='aside'>
            <Image
              alt='logo'
              src={logo}
              className=' cursor-pointer'
              style={{ filter: 'invert(1)' }}
            />
            <p className='text-[rgb(93,205,176)] flex flex-row gap-4 items-center justify-center'><span className='font-bold text-[20px] '>.</span>             All systems operational</p>
            {

            }
          </div>

          <div className='text-[13px] text-[rgb(137,136,140)] absolute bottom-20'>© 2024 Liveblocks Inc.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer