import React from 'react'
import screen from '../assets/img/screen.png'
import sky from '../assets/img/sky.png'
import "aos/dist/aos.css";
const Features = () => {
    return (
        <section className='mx-2 md:mx-10 mt-[200px] flex flex-col lg:gap-20 md:gap-[60px] '>
            <div className='lg:flex justify-between'>
                <h5 className='text-h5'>[02 Features]</h5>
                <h2 className='text-h2-sm md:text-h2-md lg:text-h2 text-black_60 lg:text-right w-2/3'>You’ll get more than just great design - <span className='text-black'> you’ll get results.</span></h2>
            </div>

            <div className='lg:grid lg:grid-cols-3   gap-2 space-y-2 lg:space-y-0'>
            {/*left_card  */}
                <aside className='flex flex-col gap-8 col-span-2'>
                    {/* big card */}
                    <div className="relative bg-white flex flex-col md:flex-row justify-between   items-end  max-h-[600px]  rounded-2xl ">
                        {/* Text area */}
                        <div className="flex flex-col gap-4  pb-9 ml-10 w-full">
                            <h4 className=" text-h4-sm md:text-h4-md lg:text-h4 font-bold text-black">
                                Effortless Collaboration
                            </h4>

                            <p className="text-black_60 text-body">
                                Real-time updates and fast replies that make you feel like we’re right there with you.
                            </p>
                        </div>

                        {/* Phone area */}
                        <div className="relative h-[550px] w-full md:w-auto flex justify-center items-start pb-8 md:pb-0 overflow-hidden">
                            {/* Phone Image - Cropped at bottom */}
                            <img
                                src={screen}
                                alt="Phone"
                                className="relative z-0 w-3/5  object-contain  translate-y-[10%]"
                            />

                            {/* Messages (positioned absolutely) */}
                            <div className="absolute z-10  flex flex-col gap-6 pt-5 top-1/3">
                                <div data-aos="zoom-in">
                                    <p className=" relative msg_black transform -rotate-2 -left-20" >Just saw the first draft - this is 🔥🔥 🔥</p>
                                </div>
                                <div data-aos="zoom-in">
                                    <p className="msg_white transform rotate-2 relative -right-20" > Yes! So glad you like it. Want me to prep a second direction too?</p>
                                </div>
                                <div data-aos="zoom-in">
                                    <p className="msg_black transform rotate-1 relative -left-20" >That would be amazing. You're killing it.</p>
                                </div>
                                <div data-aos="zoom-in"><p className="msg_white  transform -rotate-2 relative -right-20">
                                    Already on it. You'll have it by tomorrow afternoon.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
    {/*little cards */}
                    <div className='md:grid grid-cols-2 gap-2 relative'>
                        <div className='p-10 bg-black rounded-2xl text-center h-56 md:h-64'>
                            <p className='text-body text-white_60'>Projects launched in as little as</p>
                            <h2 className='text-white text-[80px]'>3 weeks</h2>
                        </div>

                        <div className='flex flex-col justify-between pt-7 px-10 pb-9 bg-white rounded-2xl h-56 md:h-64'>
                            <h4 className='text-h4'>Increased Sales</h4>
                            <p className='text-body text-black_60'>Clear messaging and conversion-focused design that drives real revenue.</p>
                        </div>

                    </div>
                </aside>

                 {/*right_card  */}

                <aside className='col-span-1 flex flex-col gap-2'>
                    {/*number_card  */}
                    <div className='number_card '>
                        <p className='text-[80px] text-white font-outfit font-medium py-5 md:py-20 text-center'>+85%</p>
                        
                        <div className='flex flex-col gap-4 '>
                            <h4 className='lg:text-h4 md:text-h4-md text-white '>Higher Conversion Rates</h4>
                            <p className='text-body text-white_60'>Designs and content that keep people clicking, scrolling, and sharing.</p>
                        </div>
                    </div>

                    {/* Pill area */}
                    <div className='pt-7 px-10 pb-2 bg-white rounded-2xl relative overflow-hidden'>
                        {/* Text area */}
                        <div className='flex flex-col gap-4 z-10 '>
                            <h4 className='lg:text-h4 md:text-h4-md text-h4-sm'>Stronger Online Presence</h4>
                            <p className='text-body text-black_60'>Rank higher, get found faster, and stay top-of-mind.</p>
                        </div>

                        {/* Pill area */}
                        <div className='relative h-64 m-auto lg:w-full md:w-2/3'>
                            <h4 className='pill transform-gpu scale-[0.8] rotate-[15deg] absolute -right-10 top-4 animate-float '>+200 Countries</h4>
                            <h4 className='pill transform-gpu scale-75 -rotate-3 absolute -left-14 top-5 animate-float'>+3k Downloads</h4>
                            <h4 className='pill transform-gpu rotate-6 scale-105 absolute top-28 left-16 animate-float'>+30k Followers</h4>
                            <h4 className='pill transform-gpu -rotate-3 scale-75 absolute -right-16 top-48 animate-float'>+1M Impressions</h4>
                            <h4 className='pill transform-gpu rotate-12 scale-75 absolute -left-12 top-44 animate-float'>+240k Likes</h4>
                        </div>
                    </div>

                </aside>
            </div>
        </section>
    )
}

export default Features