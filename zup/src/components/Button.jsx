export default function Button({children}){
    return(
        
 

 <button href="#" className="relative overflow-hidden justify-center  group bg-black py-4 px-6  text-white text-body rounded-[32px]   flex gap-4 items-center">
           
               <div className=' w-2 h-2 rounded-full bg-white'></div>
<div>
            <span className="block group-hover:-translate-y-[170%] transition-transform duration-[0.4s]">{children}</span>
            <span
                className="block absolute top-full  group-hover:translate-y-[-170%] transition-transform duration-[0.4s]">{children}</span>
       </div>
        </button>

        

    )
}