import React from "react";
import cl1 from "../assets/img/client/client1.png";
import cl2 from "../assets/img/client/client2.png";
import cl3 from "../assets/img/client/client3.png";
import cl4 from "../assets/img/client/client4.png";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const reviews= [
    {
      img:  cl1 ,
      name: "Steve",
      role: "Product Designer",
      text: "They completely nailed our branding - from the visual identity to the tone of voice. Since launch, we’ve seen a clear uptick in client engagement and have gotten compliments on our new look almost daily.",
    }, {
      img:  cl2 ,
      name: "Sarah",
      role: "Head of Marketing, NovaSkin",
      text: "Working with this team felt like adding a full creative department to our company overnight. They’re fast, responsive, and ridiculously talented - honestly one of the smoothest collaborations we’ve had.",
    },
  {
      img:cl3 ,
      name: "Max",
      role: "Founder, Craft & Code",
      text: "The website they built for us wasn’t just beautiful - it actually performs. We saw a 60% increase in bookings within the first month, and the feedback from our customers has been amazing.",
    },{
      img:  cl4 ,
      name: "Elena",
      role: "Product Manager, Streamly",
      text: "Every part of the process felt effortless. The communication was clear, the design thinking was sharp, and the final result exceeded expectations in every way. We felt like we were in good hands throughout.",
    },
  ];
  return (
    <section className=" flex flex-col gap-[60px] lg:gap-20 pl-5 md:pl-10 pt-[200px]">
      <div>
        <h5 className="text-h5 text-black">[05 Testimonials]</h5>
        <h2 className="text-h2-md lg:text-h2 text-black w-2/3">
          Real stories. Real winners. 
          <span className="text-black_60"> Straight from our clients.</span>
        </h2>
      </div>
      <div className="flex gap-[10px] overflow-hidden">
        {reviews.map((rv,index)=>
        <div className="p-10 flex flex-col justify-between  md:h-[450px] h-[500px]  bg-white rounded-2xl" >
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <img src={rv.img} alt=""  className="rounded-lg w-20 h-20"/>
                    <div className=" ">
                        <h5 className="text-h5 ">{rv.name}</h5>
                        <p className="text-body text-black_60">{rv.role}</p>
                    </div>
                </div>
                <div className="flex gap-1 py-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
           
                <h4 className="text-h4 w-[350px] md:w-[680px]">{rv.text}</h4>
           
        </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
