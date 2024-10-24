'use client';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Image from 'next/image';
import comment from './images/comments (2).png';
import realtime from './images/realtime-apis (1).png';

interface Props {
  id: number;
  image: StaticImageData;
}

const ImageDisplay = () => {
  const Images: Props[] = [
    { id: 1, image: comment },
    { id: 2, image: realtime },
    { id: 3, image: comment },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className='imageDisplay w-full flex flex-col items-center justify-center'>
      {/* Image Container */}
      <div className='imageBox transition-opacity duration-500 ease-in-out opacity-100'>
        {/* Apply transition to the image itself */}
        <Image
          alt='comment'
          src={Images[currentImageIndex].image}
          height={300}
          width={300}
          className='ease-in duration-500'
        />
      </div>
      
      {/* Button Container */}
      <div className='buttonBox flex flex-row gap-1 mt-4 md:gap-5'>
        <button
          onClick={() => setCurrentImageIndex(0)}
          className={`p-2 w-[100px] text-[14px] md:text-[16px] md:w-[120px] lg:text-[17px] lg:w-[150px]  h-[50px] text-white ${
            currentImageIndex === 0 ? 'bg-gray-600 rounded-md ease-in duration-500 ' : 'bg-none'
          } `}
        >
          Media Player
        </button>
        <button
          onClick={() => setCurrentImageIndex(1)}
          className={`p-2 w-[100px] text-[14px] md:text-[16px] md:w-[120px] lg:text-[17px] lg:w-[150px]  h-[50px] text-white ${
            currentImageIndex === 1 ? 'bg-gray-600 rounded-md ease-in duration-500 ' : 'bg-none'
          } `}
        >
          Whiteboard
        </button>
        <button
          onClick={() => setCurrentImageIndex(2)}
          className={`p-2 w-[100px] text-[14px] md:text-[16px] md:w-[120px] lg:text-[17px] lg:w-[150px]  h-[50px] text-white ${
            currentImageIndex === 2 ? 'bg-gray-600 rounded-md ease-in duration-500 ' : 'bg-none'
          } `}
        >
          Text Editor
        </button>
      </div>
    </div>
  );
};

export default ImageDisplay;
