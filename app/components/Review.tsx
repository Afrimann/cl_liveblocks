'use client'

import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ReviewContent from './ReviewDetails';
import Image from 'next/image';

const Review = () => {
    const [currentReview, setCurrentReview] = useState(0);

    // Calculate the last index dynamically
    const lastIndex = ReviewContent.length - 1;

    const showNextReview = () => {
        setCurrentReview((prev) => (prev === lastIndex ? 0 : prev + 1));
    };

    const showPrevReview = () => {
        setCurrentReview((prev) => (prev === 0 ? lastIndex : prev - 1));
    };


    return (
        <div>
            <div className='reviewBox  flex flex-col justify-between p-8 h-screen w-full'>
                <div className='topRow flex flex-col items-center gap-4 md:flex-row justify-between'>
                    <div className='companyLogo'>
                        <Image src={ReviewContent[currentReview].logo} alt='Company logo' width={150} height={100}/>
                    </div>
                    <div className='navArrows flex flex-row gap-2'>
                        <div className='bg-[rgb(28,28,28)] rounded-md p-2 cursor-pointer'
                        onClick={showPrevReview}
                        ><FaArrowLeft /></div>
                        <div className='bg-[rgb(28,28,28)] rounded-md p-2 cursor-pointer'
                        onClick={showNextReview}
                        ><FaArrowRight /></div>
                    </div>
                </div>
                <div className='bottomRow'>
                    <div className='reviewText text-[18px] md:text-[22px] lg:text-[24px] mb-6 text-[rgb(137,136,140)]'>
                        {ReviewContent[currentReview].reviewText}
                    </div>
                    <div className='reviewerDetails flex flex-row items-center gap-3'>
                        <div className='profilePicture'>
                            <Image className=' rounded-full' src={ReviewContent[currentReview].image} alt='Reviewer' />
                        </div>
                        <div className='name_position flex flex-col'>
                            <div className="name font-bold">{ReviewContent[currentReview].name}</div>
                            <div className="position text-[rgb(137,136,140)] font-semibold"> {ReviewContent[currentReview].position}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review

// MAKE THE DEMOPAGE RESPON SIVE BEFORE ADDING OTHER COMPONENTS