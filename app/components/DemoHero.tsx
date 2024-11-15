

import React from 'react'
import Review from './Review'
import DemoForm from './DemoForm'

const DemoHero = () => {


    return (
        <div className='h-[100%]  p-[2rem] md:p-[4rem] lg:p-[7rem] text-white w-full flex flex-col items-center bg-black'>
            <h1 className='text-[25px] md:text-[45px] lg:text-[65px] font-bold mt-20 text-center'>Talk to our sales team</h1>
            <p className='text-[20px] md:text-[22px] lg:text-[25px] text-[hsl(255,2%,54%)] text-center max-w-full md:max-w-[65%]'>Book a demo to discover the value of Liveblocks for your company and explore our custom plans and pricing.</p>

            <div className="form_review h-[120vh] lg:h-screen flex flex-col  lg:flex-row mt-20">
                <div className='form border  border-gray-100 border-r  border-opacity-15 flex-1'><DemoForm /></div>
                <div className="review border border-gray-100 border-opacity-15 flex-1">
                    <Review />
                </div>
            </div>
        </div>

    )
}




export default DemoHero