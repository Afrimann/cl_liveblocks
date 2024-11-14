'use client'
import React from 'react';
import Header from '../components/Header';
import { useHeader } from '../useHeader';
import MobileNav from '../components/MobileNav';
import DemoHero from '../components/DemoHero';



const Demo = () => {
  const { openMobileNav, handleMouseEnter, handleMouseLeave, hoveredItem,mobileNav,closeMobileNav } = useHeader();

  return (
    <div className='h-[500vh] md:h-[500vh] lg:h-auto w-full bg-black'>
      <div className='header fixed w-full'>
        <Header
          openMobileNav={openMobileNav}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          hoveredItem={hoveredItem}
        />
        
      {mobileNav && <MobileNav
      closeMobileNav={closeMobileNav}
       handleMouseEnter={handleMouseEnter}
       handleMouseLeave={handleMouseLeave} 
       hoveredItem={hoveredItem}
      />}
      </div>

      {/* Demo Hero section */}
      <section className='demoHero'>
        <DemoHero />
      </section>
    </div>
  );
};

export default Demo;
