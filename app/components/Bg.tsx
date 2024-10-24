import React from 'react'
import fallback from '../components/images/fallback (1).png'
import Image from 'next/image'
const Bg = () => {
  return (
    <div className='w-full '>
        <Image 
        src={fallback}
        alt='bg'
        height={1000}
        width={3000}
        />
    </div>
  )
}

export default Bg