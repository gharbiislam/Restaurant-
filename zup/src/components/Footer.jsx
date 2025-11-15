import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black lg:rounded-2xl p-6 lg:p-8 lg:m-2 flex flex-col gap-10 lg:gap-[150px] '>
            <nav className='flex justify-between'>
                <ul className='flex flex-col lg:flex-row gap-6 lg:flex lg:gap-10'>
                    <li> <a href="#projects" >[ Projects ]</a></li>
                    <li> <a href="#services" >[ Services ]</a> </li>
                    <li><a href="#about" > [ About ]</a> </li>
                    <li><a href="#pricing" > [ Pricing ]</a>  </li>
                    <li> <a href="#faq" > [ FAQ ]</a></li>
                </ul>

                <ul className='flex flex-col lg:flex-row  gap-6 lg:flex lg:gap-10'>
                    <li><a href="https://x.com/">[ Twitter]</a></li>
                    <li><a href="https://www.instagram.com/">[ Instagram]</a></li>
                </ul>
            </nav>

            <div className='text-left lg:text-center'>
                <p className='text-h2 text-white_60'>Your brand deserves better. </p>
                <p className='text-h2 text-white'>Let’s build it right.</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-between lg:items-end gap-10'>
                <div className='flex justify-between lg:gap-40 items-end order-3 lg:order-1'>
                    <div>
                        <span className='logo_white'>2zup</span>
                        <p className='text-caption text-white_60'>2025©All rights reserved.</p>
                    </div>

                    <ul className=''>
                        <li><a href="privacy">[ Privacy ]</a></li>
                        <li><a href="terms">[ Terms ]</a></li>
                    </ul>
                </div>

                <div className='order-1 lg:order-3'>
                    <p className='text-body text-white_60'>Email</p>
                    <p className='text-h4 text-white'>hello@yourstudio.com</p>
                </div>

                <div className='order-2 lg:order-1'>
                    <p className='text-body text-white_60'>Phone</p>
                    <p className='text-h4 text-white'>+1 (555) 123-4567</p>
                </div>
            </div>
        </footer>)
}

export default Footer