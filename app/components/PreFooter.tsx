import React from 'react'
import footerbg from '../components/images/prefooterimg.webp'
import Image from 'next/image'
const PreFooter = () => {
  return (
    <div className='h-[100vh] w-full text-white flex flex-col items-center justify-center border-b border-opacity-15'>
      <div>
        <div className="flex items-center justify-center">
          <p className="text-center leading-tight text-[30px] md:text-[50px] lg:text-[70px] font-bold">
            Add collaboration <br />to your product today
          </p>
        </div>

        <div className='flex flex-row-reverse font-bold items-center justify-center gap-8 mt-7'>
          <a className='' href="#">Book a demo</a>
          <a className='lg-button' href="#">Start building for free</a>
        </div>
      </div>
    </div>
  )
}

export default PreFooter