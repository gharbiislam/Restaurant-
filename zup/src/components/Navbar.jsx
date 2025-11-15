import React, { useEffect, useState } from 'react'
import Button from './Button'
import { FaBars, FaTimes } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
    })
    AOS.refresh()
  }, [nav])

  return (

    <header className='  flex justify-between items-center lg:px-10 px-6 py-4  '>

      <span className='logo_black'>2zup</span>

      <nav className='hidden lg:flex gap-16 items-center web '>
        <ul className='flex gap-10 '>
          <li><a href="#projects" > [ Projects ]</a></li>
          <li>  <a href="#services" > [ Services ]</a></li>
          <li><a href="#about" > [ About ]</a> </li>
          <li> <a href="#pricing" > [ Pricing ]</a> </li>
          <li><a href="#faq" > [ FAQ ]</a> </li>
        </ul>

        <Button>Get in Touch</Button>
      </nav>

      <button onClick={handleClick}
        className="lg:hidden z-10 group h-20 w-20 rounded-lg  grid place-content-center" >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-[2px] w-[30px] rounded-full bg-black transition-transform duration-100 ${nav ? "-rotate-45 translate-y-2.5" : ""
              }`}
          ></span>
          <span
            className={`h-[2px] w-[30px] rounded-full bg-black transition-transform duration-100 ${nav ? "scale-x-0" : ""
              }`}
          ></span>
          <span
            className={`h-[2px] w-[30px] rounded-full bg-black transition-transform duration-100 ${nav ? "rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </div>
      </button>

      <nav className={!nav ? 'hidden' : ' text-h5 absolute top-20 left-0 w-full px-10 flex flex-col gap-4'} data-aos="fade-up" data-aos-duration="0">

        <ul className=' text-right flex flex-col gap-4'>
          <li> <a href="#projects" > Projects </a></li>
          <li> <a href="#services" > Services </a> </li>
          <li><a href="#about" >  About </a> </li>
          <li><a href="#pricing" >  Pricing </a>  </li>
          <li> <a href="#faq" >  FAQ </a></li>
        </ul>

        <Button className='w-full'>Get in Touch</Button>
      </nav>


    </header>
  )
}

export default Navbar