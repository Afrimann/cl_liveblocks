import React from 'react';
import LongChartedData from './LongChartedData';
import Image from 'next/image';
import ImageDisplay from './ImageDisplay';

const Showcase = () => {
    return (
        <div className='p-4 md:p-6 lg:p-10'>
            {LongChartedData.map((a, i) => (
                <div
                    key={i}
                    className='bg-black text-gray-600 w-full flex flex-col md:flex-col lg:flex-row h-auto lg:h-[160vh] border-[1px] border-gray-100 border-opacity-15'
                >
                    {/* First row with image and text */}
                    <div className='w-full flex flex-col lg:flex-row'>
                        {/* Left column */}
                        <div className='w-full lg:w-[35%] h-auto lg:h-[100%] px-4 md:px-6 lg:px-10 py-[3rem] lg:py-[6rem] showcaseBorder'>
                            <Image
                                alt='comment'
                                src={a.bigImage}
                                height={100}
                                width={100}
                                className="object-contain"
                            />

                            <div className="heading mt-6">
                                <h1 className='text-white text-[20px] md:text-[22px] font-normal'>
                                    {a.bigHeading}
                                </h1>
                                <h2 className='text-[rgb(142,141,145)] text-[18px] md:text-[20px] max-w-full md:max-w-full lg:max-w-[13rem] font-normal'>
                                    {a.bigSpan}
                                </h2>
                                <button className='button lg-button p-2 px-3 mt-8'>{a.bigButton}</button>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className='w-full lg:w-[65%] h-auto lg:h-[100%] flex flex-col gap-0'>
                            <div className='w-full h-[auto] lg:h-[40%] flex flex-col md:flex-row'>
                                {/* First small box */}
                                <div className='flex-1 p-4 md:p-6 lg:p-8 showcaseBorder border-[1px]'>
                                    <h1 className='text-white text-[18px] md:text-[20px]'>
                                        {a.smallBoxHead1}
                                    </h1>
                                    <h2 className='text-[rgb(142,141,145)]'>{a.smallBoxSpan1}</h2>
                                </div>
                                {/* Second small box */}
                                <div className='flex-1 p-4 md:p-6 lg:p-8 showcaseBorder border-[1px]'>
                                    <h1 className='text-white text-[18px] md:text-[20px]'>
                                        {a.smallBoxHead2}
                                    </h1>
                                    <h2 className='text-[rgb(142,141,145)]'>{a.smallBoxSpan2}</h2>
                                </div>
                            </div>

                            {/* Middle small box */}
                            <div className='w-full h-auto lg:h-[10%] flex items-center justify-center border-[1px] border-gray-100 border-opacity-15'>
                                <span className='text-center text-[rgb(142,141,145)]'>
                                    Fully integrated with Notifications and Text Editor
                                </span>
                            </div>

                            {/* Large bottom box */}
                            <div className='w-full h-auto lg:h-[50%] border-[1px] border-gray-100 border-opacity-15 p-4 lg:p-6'>
                                <div>
                                    <span className="text-white text-[20px]">
                                        Endlessly customizable
                                    </span>
                                    <p className='max-w-full lg:max-w-[20rem] text-[rgb(142,141,145)]'>Add a perfectly on-brand commenting system to any part of your product.</p>
                                </div>
                                {/* state controlled image display */}
                                <div className='imageDisplay'>
                                    <ImageDisplay />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    );
};

export default Showcase;
