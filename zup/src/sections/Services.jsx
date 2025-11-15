import React from 'react'
import "aos/dist/aos.css";

const Services = () => {
    const service = [
        {
            text: "Strategic identities that communicate your story clearly, setting your brand apart and building authentic connections with your audience.",
            title: "Brand Strategy & Identity",
            delay: "0",
        },
        {
            text: "User-centric, responsive websites designed for smooth navigation, compelling visuals, and optimized conversion.",
            title: "Website Development",
            delay: "200",
        },

        {
            text: "Targeted, data-driven SEO strategies that boost visibility, attract quality traffic, and position your business ahead of competitors.",
            title: "Seo Marketing",
            delay: "400",
        },

        {
            text: "Distinctive, memorable packaging designs crafted to catch attention, communicate product value, and drive consumer action.",
            title: "Packaging Design",
            delay: "600",
        },
    ]
    return (
        <section id='services' className=' pt-[120px] lg:pt-[200px] px-10'>
            <h5 className='text-h5'>[01 Services]</h5>
            <h2 className='text-h2-sm lg:text-h2 md:text-h2-md s text-black_60 lg:w-2/3'>Not just services - we deliver <span className='text-black'>growth</span>, <span className='text-black'>clarity</span>, and <span className='text-black'>real impact</span>.</h2>

            <div className='flex flex-col gap-2'>
                {service.map((srv, index) => (
                    <div key={index} data-aos="fade-in" data-aos-delay={srv.delay} className='bg-white p-10 flex flex-col lg:flex-row justify-between rounded-2xl gap-4'>
                        <h3 className=' text-h3-sm md:text-h3-md lg:text-h3 lg:order-2'>{srv.title}</h3>
                        <p className='text-body text-black_60 max-w-[450px] lg:order-1'>{srv.text}</p>

                    </div>
                ))}
                <div className='bg-black p-10 flex justify-between rounded-2xl relative overflow-hidden  group'>
                    <h3 className='text-white text-h3-sm md:text-h3-md lg:text-h3 md:block block group-hover:-translate-x-[170%] transition-transform duration-[0.4s]'>Ready to Start?</h3>
                    <div className='flex absolute right-10  lg:group-hover:translate-x-[-190%] md:group-hover:translate-x-[-100%] sm:group-hover:translate-x-1/2 transition-transform duration-[0.4s] items-center gap-4'>
                        <div className=' w-4 h-4 rounded-full bg-white'></div>
                        <h3 className='text-white text-h3-sm md:text-h3-md lg:text-h3'>Get in Touch</h3>
                    </div>
                </div>
            </div>
        </section>)
}

export default Services