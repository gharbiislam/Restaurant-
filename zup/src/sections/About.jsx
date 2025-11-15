import React from "react";
import team from "../assets/img/team.png";
import director from "../assets/img/director.png";
import { BiPlus } from "react-icons/bi";
import logo1 from "../assets/img/logo/logo1.png";
import logo2 from "../assets/img/logo/logo2.png";
import logo3 from "../assets/img/logo/logo3.png";
import logo4 from "../assets/img/logo/logo4.png";
import logo5 from "../assets/img/logo/logo5.png";
import logo6 from "../assets/img/logo/logo6.png";
import Button from "../components/Button";
const About = () => {
  return (
    <section className="mt-[200px] md:mx-2">
      <div className="bg-black rounded-2xl text-white ">
        <div className="flex flex-col pt-[100px] md:px-8 px-5 pb-[200px] gap-[120px] lg:gap-[200px]">
          {/**first block */}
          <div className="flex flex-col gap-[60px] lg:gap-20">
            <div>
              <h5 className="text-h5 text-white">[04 About]</h5>
              <h2 className="text-h2-md lg:text-h2 text-white_60  lg:w-2/3">
                Creative minds. Real humans.{" "}
                <span className="text-white"> One tight-knit team.</span>
              </h2>
            </div>
            <img src={team} alt="" className="rounded-2xl" />
            <div className="flex  flex-col lg:flex-row justify-between gap-10">
              <div className="flex flex-col md:flex-row md:justify-between  gap-6 lg:gap-10 ">
                <div
                  data-aos="fade-up"
                  date-aos-delay="0"
                  className="flex flex-col justify-between lg:items-center"
                >
                  <h3 className="text-h3 text-white "> 99+</h3>
                  <p className="text-body _60">Completed Projects</p>
                </div>

                <div
                  data-aos="fade-up"
                  date-aos-delay="200"
                  className="flex flex-col justify-between lg:items-center"
                >
                  <h3 className="text-h3 text-white ">5+</h3>
                  <p className="text-body _60">Years of Experience</p>
                </div>

                <div
                  data-aos="fade-up"
                  date-aos-delay="400"
                  className="flex flex-col justify-between lg:items-center"
                >
                  <h3 className="text-h3 text-white">100%</h3>
                  <p className="text-body text-white_60"> Happy Clients</p>
                </div>
              </div>

              <p className="text-body text-white_60 md:w-2/3 lg:w-1/3  relative md:left-1/2 lg:left-0">
                We’re not just here to make things look good -
                <span className="text-white">
                  we’re here to make them work.
                </span>
                From bold startups to growing brands, we help teams bring their
                ideas to life through
                <span className="text-white">
                  strategy, design, and digital experiences that matter.
                </span>
              </p>
            </div>
          </div>

          {/** our team */}
          <div className=" flex flex-col gap-20">
            <h4 className="text-h4 text-white  "> Our Team</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-[493px] gap-2">
              <div className="lg:col-span-2 grid sm:grid-cols-1 md:grid-cols-3 border border-white_20 rounded-2xl">
                <div className="col-span-1 ">
                  <img
                    src={director}
                    alt=""
                    className="p-2 rounded-2xl object-cover w-full md:h-[476px]"
                  />
                </div>
                <div className="flex flex-col justify-between p-10 col-span-2 gap-10">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-h4-md lg:text-h4  text-white">John Lascose</h4>
                    <h5 className="text-h5-md lg:text-h5 text-white_60">
                      {" "}
                      Creative Director
                    </h5>
                  </div>
                  <h4 className="text-h4-md lg:text-h4 text-white_60 lg:max-w-md">
                    We’re not a big agency - and that’s the point.
                    <span className="text-white">
                      We care more about meaningful work, strong partnerships,
                      and results
                    </span>
                    than we do about noise.
                  </h4>
                </div>
              </div>
              <div className="lg:col-span-1 border border-white_20 rounded-2xl p-10 flex flex-col gap-[10px] justify-between">
                <div>
                  <BiPlus className="text-6xl" />
                </div>
                <div className="flex flex-col gap-6 items-end justify-end">
                  <h4 className="text-h4-md lg:text-h4 text-white">4 Developers</h4>
                  <h4 className="text-h4-md lg:text-h4 text-white">2 Designers</h4>
                  <h4 className="text-h4-md lg:text-h4 text-white">1 Project Manager</h4>
                  <h4 className="text-h4-md lg:text-h4 text-white">1 Creative Lead</h4>
                </div>
              </div>
            </div>
          </div>

          {/*brands*/}
          <div className="flex gap-20">
            <img src={logo1} alt="" className="h-12" />
            <img src={logo2} alt="" className="h-12" />
            <img src={logo3} alt="" className="h-12" />
            <img src={logo4} alt="" className="h-12" />
            <img src={logo5} alt="" className="h-12" />
            <img src={logo6} alt="" className="h-12" />
          </div>

            {/*awards*/}
          <div className="flex flex-col gap-20">
            <h4 className="text-h4 text-white">Awards and Recognition</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
            <div className="card"> 
              <p className="text-body text-white_60">
                
             
             
                Our work has been recognized by some of the industry’s top
                platforms
              </p>
            </div>
            <div className="card">
              <h5 className="text-h5-md lg:text-h5 text-white_60">CSS Design Awards</h5>
              <h3 className="text-h3-md lg:text-h3  text-white">Best UI Design</h3>
              <h5 className="text-h5-md lg:text-h5 text-white_60">2025</h5>
            </div>
            <div className="card">
              <h5 className="text-h5-md lg:text-h5 text-white_60">Awwwards</h5>
              <h3 className="text-h3-md lg:text-h3  text-white">Site of the Day</h3>
              <h5 className="text-h5-md lg:text-h5 text-white_60">2024</h5>
            </div>
            <div className="card">
              <h5 className="text-h5-md lg:text-h5 text-white_60">Awwwards</h5>
              <h3 className="text-h3-md lg:text-h3  text-white">Honorable Mention</h3>
              <h5 className="text-h5-md lg:text-h5 text-white_60">2024</h5>
            </div>
            <div className="card">
              <h5 className="text-h5-md lg:text-h5 text-white_60">Behance</h5>
              <h3 className="text-h3-md lg:text-h3  text-white">Featured Project</h3>
              <h5 className="text-h5-md lg:text-h5 text-white_60">2023</h5>
            </div>
            <div className="card">
           <button href="#" className="relative overflow-hidden justify-center  group text-h3-md lg:text-h3 bg-black py-4 px-6  text-white rounded-[32px]   flex gap-4 items-center">
           
               <div className='w-3 h-3  lg:w-4 lg:h-4 rounded-full bg-white'></div>
<div>
            <span className="block group-hover:-translate-y-[170%] transition-transform duration-[0.4s]">Get in Touch</span>
            <span
                className="block absolute top-full  group-hover:translate-y-[-170%] transition-transform duration-[0.4s]">Get in Touch</span>
       </div>
        </button>

        
            </div>
          </div>
        </div> 
      </div></div>
    </section>
  );
};

export default About;
