"use client"
import React from 'react'
import Me from "../Images/me.png"
import Image from 'next/image'
import {homevalues ,skills} from "../components/values"
import R from "../Images/R.gif"

function Home() {
  return (
    <div className='sm:max-w-6xl mt-20 sm:mt-0 sm:py-40 items-center justify-center gap-y-25 flex flex-col  sm:mx-auto px-6   sm:min-h-screen sm:max-h-screen'>
    <div className='  sm:flex flex-col sm:flex-row   items-center sm:gap-x-15  '>

    {/**top section */}    
    <div className='flex flex-col gap-y-10 flex-1   items-center sm:h-full sm:bg-[#f1f1f1]  sm:dark:bg-[#181818] sm:p-6   rounded-2xl '>
    <Image src={Me} alt='A handsome photograph of the fabulous Thilina Dewmina.'  className='z-50 w-35 h-35  sm:w-60 sm:h-65 border-gray-600 sm:border-0 border-2 rounded-full sm:rounded-2xl   object-cover'/>
    <Image src={R} alt='gif' className='absolute block top-0 sm:hidden max-h-40 max-w-full sm:max-h-70 object-cover '/>

    <div className=" hidden  items-center sm:items-start sm:flex sm:flex-col gap-y-7 rounded-xl sm:text-lg sm:w-full   ">
  {Object.values(homevalues.items).map((item: any, index: number) => {
    const Icon = item.icon;
    return (
      <a
        key={index}
        href={item.link}
        className="flex items-center gap-3  px-4 ms:px-0 hover:opacity-80 transition"
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
    <h1 className='sm:text-6xl bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> {homevalues.title}</h1>
    <h1 className='sm:text-xl'>{homevalues.p}</h1>    
    </div>




    




<div className='flex flex-col gap-y-10 items-stretch  justify-between '>
{/**image */}
<Image src={R} alt='gif' className=' hidden sm:block  max-h-30 max-w-full sm:max-h-70 object-cover rounded-xl'/>

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

<div className="relative sm:w-full max-w-110  sm:max-w-full  overflow-hidden pb-10">
    <div
        className="flex sm:gap-x-10 gap-x-5 dark:text-gray-300 animate-scroll-x"
      
    >
        {[...skills.skills, ...skills.skills].map((skill: any, index: number) => (
            <div key={index} className="flex items-center gap-x-2">
                <p className='hidden sm:flex'>{skill.name}</p>
                <skill.icon size={25} />
            </div>
        ))}
    </div>

</div>



</div>
  )
}

export default Home
