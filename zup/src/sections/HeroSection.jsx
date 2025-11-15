import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from 'aos';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='pt-[120px] px-10 flex flex-col gap-10 lg:gap-20'>

      <h1 className='text-h1-sm lg:text-h1 md:text-h1-md  text-black relative lg:left-40  '>Studio</h1>
      <div className='flex  flex-col lg:flex-row justify-between gap-10'>
        <div className='flex flex-col md:flex-row md:justify-between  gap-6 lg:gap-10 order-2 lg:order-1'>
          <div data-aos="fade-up" date-aos-delay="0" className='flex flex-row md:flex-col justify-between items-center'>
            <h3 className='text-h3'> 99+</h3>
            <p className='text-body text-black_60'>Completed Projects</p>
          </div>

          <div data-aos="fade-up" date-aos-delay="200" className='flex flex-row md:flex-col justify-between items-center'>
            <h3 className='text-h3'>5+</h3>
            <p className='text-body text-black_60'>Years of Experience</p>
          </div>

          <div data-aos="fade-up" date-aos-delay="400" className='flex flex-row md:flex-col justify-between items-center'>
            <h3 className='text-h3'>100%</h3>
            <p className='text-body text-black_60'> Happy Clients</p>
          </div>
        </div>

        <p className='text-body text-black_60 md:w-1/2 lg:w-1/3 order-1  lg:order-2  relative md:left-1/2 lg:left-0'>We craft memorable <span className='text-black'>brands</span>, design and develop stunning  <span className='text-black'>websites</span>, optimize your presence through strategic  <span className='text-black'>SEO</span>, and amplify your impact with results-driven  <span className='text-black'>digital marketing.</span></p>
      </div>
    </div>
  )
}

export default HeroSection