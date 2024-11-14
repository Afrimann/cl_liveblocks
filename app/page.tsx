'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import { LongChartedData2 } from './components/LongChartedData'
import Image from 'next/image'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'


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



      <section className='tools h-[200vh] w-[65%] showcaseBorder border-[1px] mx-auto text-white'>
        {/* Showcase 2 */}
        <div className="showcase2 h-[100%] w-[100%] flex flex-col">
          {/* first box */}
          <div className='firstBox text-[20px] w-[100%] h-[35%] text-white p-6'>
            <span
              className='font-bold'
            >{LongChartedData2.firstDivText.firstLink}</span>
            <p className='text-[rgb(137,136,140)]'>{LongChartedData2.firstDivText.dormantText}
              <span className='text-white'>{LongChartedData2.firstDivText.secondLink}</span>
            </p>
            <p>{LongChartedData2.firstDivText.thirdLink}
              <span className='text-[rgb(137,136,140)]'> {LongChartedData2.firstDivText.lastText}</span>
            </p>
          </div>

          {/* second box */}
          <div className='secondBox h-auto w-[100%] md:h-[30%]'>
            <div className='h-[100%] w-[100%] border-[1px] showcaseBorder flex flex-col  md:flex-row'>
              {LongChartedData2.secondDivText.map((item, index) => (
                <div key={index} className='showcaseBorder w-[100%] border-b-[1px]  border-opacity-15 p-6 text-[18px]'>
                  <h2 className='font-bold'>{item.head}</h2>
                  <span className=' text-[rgb(137,136,140)] w-[50%] break-words'>{item.spanText}</span>
                  <Image src={item.image} alt={`Image for ${item.head}`}/>
                </div>
              ))}
            </div>
          </div>



          {/* third box */}
          <div className='thirdBox h-[35%] w-[100%] p-6'>
            <span className='text-[20px] font-bold'>{LongChartedData2.lastDiv.text.link}</span>
            <span className='block w-[50%] md:w-[30%] text-[rgb(137,136,140)] text-[20px]'>{LongChartedData2.lastDiv.text.spanText}</span>
            <Image src={LongChartedData2.lastDiv.image} alt={`Image for ${LongChartedData2.lastDiv.text.link}`} />
          </div>
        </div>

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


    {/* Prefooter */}
    <PreFooter />
    <Footer />
    </div>
  )
}

export default page