import React from 'react'
import footerbg from '../components/images/prefooterimg.webp'
import Image from 'next/image'
const PreFooter = () => {
  return (
    <div className='h-[100vh] w-full border-b border-opacity-15 bg-[url())] bg-cover bg-center'>
        kis
        <Image src={footerbg} alt='moon' />
    </div>
  )
}

export default PreFooter