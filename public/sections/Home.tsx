"use client"
import React from 'react'
import Me from "../Images/me.png"
import Image from 'next/image'
import {homevalues ,skills} from "../components/values"
import R from "../Images/R.gif"

function Home() {
  return (
    <div className='max-w-6xl py-50 items-center gap-y-15 flex flex-col  mx-auto px-6   min-h-screen max-h-screen'>
    <div className='  flex  items-center gap-x-15  '>

    {/**top section */}    
    <div className='flex flex-col gap-y-10 flex-1  items-center h-full bg-[#ffffff]  dark:bg-[#181818] p-6    rounded-2xl '>
    <Image src={Me} alt='A handsome photograph of the fabulous Thilina Dewmina.'  className=' w-60 h-65 rounded-2xl  object-cover'/>
    
     <div className=" flex flex-col gap-y-7 rounded-xl text-lg w-full   ">
  {Object.values(homevalues.items).map((item: any, index: number) => {
    const Icon = item.icon;
    return (
      <a
        key={index}
        href={item.link}
        className="flex items-center gap-3   hover:opacity-80 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={22} className="text-[#246CBF]"/>
        <span>{item.value}</span>
      </a>
    );
  })}
</div>
    
    </div> 

    {/** bottom */}
    
    <div className='flex flex-col gap-y-15 items-center  '>

<div className='flex flex-col gap-y-10'>
    <h1 className='text-6xl bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> {homevalues.title}</h1>
    <h1 className='text-xl'>{homevalues.p}</h1>    
    </div>




       {/** contact */}    
    




<div className='flex flex-col gap-y-10 items-stretch  justify-between '>
{/**image */}
<Image src={R} alt='gif' className='max-h-70 object-cover rounded-xl'/>

{/** buttons */}
<div className='flex gap-x-5'>
<input type='text' placeholder='Ask Anything About Me' 
className='border-2 border-l-[#4872a7] border-r-[#214e7e] border-t-[#4872a7] border-b-[#214e7e]
 focus:border-[#4872a7]  dark:bg-[#121212] w-8/10  bg-[#e0dbdb] py-3 px-5 rounded-l-full rounded-b-full  p-3 outline-none '/>
<button className='bg-gradient-to-r from-[#145299] to-[#246CBF] text-white py-3 px-5 w-3/10  rounded-r-full rounded-t-full '>Download Resume</button>
</div>

</div>


</div>


</div>

<div className="relative w-full overflow-hidden pb-10">
    <div
        className="flex gap-x-10 dark:text-gray-300 animate-scroll-x"
        style={{
            minWidth: "max-content",
            animation: "scroll-x 20s linear infinite"
        }}
    >
        {[...skills.skills, ...skills.skills].map((skill: any, index: number) => (
            <div key={index} className="flex items-center gap-x-2">
                <p>{skill.name}</p>
                <skill.icon size={25} />
            </div>
        ))}
    </div>
    <style jsx>{`
        @keyframes scroll-x {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    `}</style>
</div>



</div>
  )
}

export default Home
