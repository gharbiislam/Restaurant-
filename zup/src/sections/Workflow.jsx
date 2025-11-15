import React from "react";
import smile from "../assets/img/smile.png"
const Workflow = () => {
  const steps=[
    {
      number:'01',
      title:'Discovery & Strategy',
      text:'Deep understanding of your business, forming the foundation for an impactful strategy.',
      top:150,
      top_sm:20
    },
    {
      number:'02',
      title:'Design',
      text:'Crafting innovative concepts and user-focused designs that effectively speak to your audience.',
      top:270,
      top_sm:120

    },
    {
      number:'03',
      title:'Development',
      text:'Turning ideas into projects, built with precision, delivered on time, and fully optimized for results.',
      top:390,
      top_sm:220
    },
    {
      number:'04',
      title:'Launch',
      text:'Deploying your project, monitoring performance, and refining strategies for ongoing success.',
      top:510,
      top_sm:320
    },
    {
      img:smile,
      title:'Contact Us',
      text:'Have a vision? Let’s make a plan. Reach out and take the first step toward something great.',
      top:510,
      top_sm:320
    },
    
  ]
  return (
    <section className="mt-[200px] px-10 flex flex-col gap-10">
      <h5 className="text-h5 text-black">[03 Workflow]</h5>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start  ">
        <h2 className="text-h2-md lg:text-h2 text-black_60  lg:w-4/5  gap-10 lg:sticky top-[150px] ">
          No guesswork, just a clear path from
          <span className="text-black"> ideas → results.</span>
        </h2>
        {/**cards */}
        <div className=" flex flex-col gap-2">
          {steps.map((step,index)=>
          <div  key={index}
  className={`p-10 rounded-2xl lg:flex justify-between h-[250px] sticky
  ${index === steps.length - 1 ? "bg-black text-white" : "bg-white text-black"}` } style={{ top: window.innerWidth < 768? step.top_sm : step.top }}
 >
{step.number
  ? <h2 className="text-h2-md lg:text-h2 text-black_60 w-[200px]">{step.number}</h2>
  : <div className="w-[200px]"><img src={step.img} alt="" className="w-[75px] h-10" /></div>
}

           
            <div className="flex flex-col justify-between">
              <h3 className={`text-h3 ${index === steps.length - 1 ? " text-white" : " text-black"}`}>{step.title}</h3>
              <p className={`text-body ${index === steps.length - 1 ? " text-white_60" : " text-black_60 "}`}>{step.text}</p>
            </div>

          </div>
          
          )}
        </div>
      </div>
</section>  );
};

export default Workflow;
