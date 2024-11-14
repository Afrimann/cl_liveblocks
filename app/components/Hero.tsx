import React from 'react';
import right from '../components/images/download (62).svg'
import Image from 'next/image';
import comment from './images/comments (2).png'
import notifications from './images/notifications (1).png'
import textEditor from './images/text-editor (1).png'
import realtime from './images/realtime-apis (1).png'
import MobileNav from './MobileNav';
import Bg from './Bg';
import trustedCompanies from './TrustedCompanies';
import MoreCompanies from './MoreCompanies';

interface Props {
  mobileNav: boolean
  closeMobileNav: () => void
  handleMouseEnter: (item: string) => void
  handleMouseLeave: () => void
  hoveredItem: string | null
  showFullCompanies: boolean
  showCompanies: () => void
  removeCompanies: () => void
  isMobile: boolean
}
const Hero = ({ mobileNav, closeMobileNav, handleMouseEnter, handleMouseLeave, hoveredItem, showCompanies, showFullCompanies, removeCompanies, isMobile }: Props) => {

  return (
    <div className='w-full min-h-screen mt-[8rem] h-auto bg-black text-white flex flex-col md:mt-20 items-center'>
      {mobileNav && <MobileNav
        closeMobileNav={closeMobileNav}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        hoveredItem={hoveredItem}
      />}

      <div className="p-2 w-[320px] h-10 flex items-center justify-between bg-[#1464ff] rounded-full mb-6 space-x-3">
        <span className="text-sm font-semibold text-white">SEP 17-19</span>
        <span className="text-sm font-semibold text-white">Next.js Template Week</span>
        <span className="p-1 bg-white rounded-full flex items-center justify-center">
          <Image
            src={right} // Assuming you have imported the image as 'right'
            alt="arrow"
            width={12}
            height={12}
            className="text-[#1464ff] -rotate-90" // Rotate to match the design
          />
        </span>
      </div>


      {/* Hero Showcase */}
      <div className='hero-showcase text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white'>Build collaborative experiences faster</h1>
      </div>
      {/* desc */}
      <div className="hero-desc text-center mt-4 w-[90%] md:w-[70%] lg:w-[60%] z-10">
        <p className='text-[16px] md:text-[18px] lg:text-[20px]'>
          Ship features like{' '}
          <span className='inline-flex items-center'>
            <Image alt='comment' src={comment} width={20} /> Comments,
          </span>{' '}
          <span className='inline-flex items-center'>
            <Image alt='notify' src={notifications} width={20} /> Notifications,
          </span>{' '}
          <span className='inline-flex items-center'>
            a  <Image alt='text' src={textEditor} width={20} />  Text Editor.
          </span>{' '}
          Or build any collaborative experience with{' '}
          <span className='inline-flex items-center'>
            <Image alt='apis' src={realtime} width={20} /> Realtime APIs
          </span>{' '}
          in days, not months.
        </p>
        <p className='text-[16px] md:text-[18px] lg:text-[20px]'>
          Engage users, fuel creativity, and drive growth. Finally.
        </p>
      </div>
      <div className="hero-button flex flex-col  gap-4 mt-5 z-10 md:flex-row">
        <button className='button lg-button'>
          Start building for free
        </button>
        <button className='button md-button'>
          Browse examples {/*<img src={right} alt="arrow" />*/}
        </button>
      </div>

      {/* bg */}
      <div className='-mt-20 hidden md:block'>
        <Bg />
      </div>

      {/* trusted companies */}
      <div className='mt-20 trusted-companies flex flex-col items-center gap-4 relative '>
        <span className='text-gray-600 max-w-[15rem] md:max-w-full text-center'>Trusted by companies of all sizes and industries</span>
        {/* companies logo display */}
        <div className={`${showFullCompanies ? 'blur-lg' : ''} p-4 logos mt-5 grid grid-cols-3 gap-10 md:grid-cols-4 lg:grid-cols-5 mb-10 ease-in duration-300`}
          onMouseOver={!isMobile ? showCompanies : undefined}
          onMouseLeave={!isMobile ? removeCompanies : undefined}
        >
          {trustedCompanies.map((a, i) => (
            <div className='' key={i}
            >
              <Image
                alt={a.alt}
                src={a.img}
              />
            </div>
          ))}
        </div>
        <div className='absolute top-[7rem] transition-all duration-300'>
          {showFullCompanies && <MoreCompanies />
          }
        </div>
        <div className='block md:hidden'>
          {!showFullCompanies && <MoreCompanies />}
        </div>
      </div>

      {/* advertise liveblock (problem statement and offer) */}
      <div className='mt-[7rem] w-full mx-auto text-[#a7a2a2] text-[20px] md:text-[18px] lg:text-[22px] flex flex-col gap-8 items-center'>
        <div className='advertise-div'>
          Many SaaS companies struggle to grow their user base, and maintain engagement. <span className='text-white'>This is because their products aren’t designed for how people work today</span>. Teams seek collaboration in their daily work, but instead find themselves emailing files, sharing links in Slack, and juggling multiple tools… Work is fragmented, disconnected, and hinders productivity.
        </div>
        <div className='advertise-div'>
          There’s a reason why fast-growing companies like Figma, Linear, and Notion are thriving. Their secret? They’ve perfected collaboration with
          <span className='text-white'>realtime comments, intelligent notifications, and multiplayer editing.</span> And if it’s good for people, it’s good for business.
        </div>
        <div className='advertise-div'>
          However, building such experiences is no small feat. Even seemingly simple features like commenting can extend into months‑long battles for quality. Throw notifications into the mix, along with scaling & maintaining your infrastructure, and <span className='text-white'>you’re looking at months of serious effort.</span> Not to mention realtime functionality, which can be mind-bendingly complex. It starts to feel like an impossible task.
          <span className='block mt-7 text-white'>
            Liveblocks makes it possible
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
