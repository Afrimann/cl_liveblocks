'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Showcase from './components/Showcase'


const page = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showFullCompanies, setShowFullCompanies] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState(false);

  const openMobileNav = () => {
    setMobileNav(true)
  }
  const closeMobileNav = () => {
    setMobileNav(false)
  }
  // Function to handle mouse hover events
  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check the screen size on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showCompanies = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout); // Clear any existing timeout
      setHoverTimeout(null); // Reset the timeout state
    }
    setShowFullCompanies(true);
  };

  const removeCompanies = () => {
    const timeout = window.setTimeout(() => {
      setShowFullCompanies(false);
    }, 500); // Set a shorter delay to reduce flickering
    setHoverTimeout(timeout);
  };


  // Function to handle mouse leave events
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <div className='w-full h-auto mx-auto bg-[#000000] flex flex-col gap-20'>
      <div className='header fixed top-0 w-full z-20'>
        <Header
          openMobileNav={openMobileNav}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hoveredItem={hoveredItem} />
      </div>

      <section className='hero h-auto md:mt-20'>
        <Hero
          mobileNav={mobileNav}
          closeMobileNav={closeMobileNav}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hoveredItem={hoveredItem}
          showFullCompanies={showFullCompanies}
          showCompanies={showCompanies}
          removeCompanies={removeCompanies}
          isMobile={isMobile}
        />
      </section>

      <section className='showcase'>
        <Showcase />
      </section>

      <section className='afterShowcase p-4 flex flex-col items-center pb-[70px]'>
        <div className='w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl pb-4'>
          <h1 className='text-white font-normal text-[24px] md:text-[26px] pb-6'>
            Designed for developers.
          </h1>
          <p className='text-gray-600 pb-5 text-[18px] md:text-[20px] lg:text-[22px]'>
            Every API is carefully crafted to provide{' '}
            <span className='text-white'>the best developer experience.</span> Save
            heartache and ship faster. Let us handle the maintenance.
          </p>
          <button className='button lg-button'>Read the docs</button>
        </div>
      </section>


      <section className='tools h-[200vh] w-[65%] showcaseBorder border-[1px] mb-[250px] mx-auto'>


      </section>
      <section className='afterShowcase p-4 flex flex-col items-center pb-[70px]'>
        <div className='w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl pb-4'>
          <h1 className='text-white font-normal text-[24px] md:text-[26px] pb-6'>
            The all‑in‑one collaboration platform.
          </h1>
          <p className='text-gray-600 pb-5 text-[18px] md:text-[20px] lg:text-[22px]'>
            Liveblocks is the world’s{' '}
            <span className='text-white'>most advanced platform</span> for{' '}
            <span className='text-white'>building</span>,{' '}
            <span className='text-white'>hosting</span>, and{' '}
            <span className='text-white'>scaling</span> collaborative products that
            work the way they should.
          </p>
        </div>
      </section>

    </div>
  )
}

export default page