"use client"
import React from 'react'
import Me from "../Images/me.png"
import Image from 'next/image'
import {homevalues ,skills} from "../components/values"
import R from "../Images/R.gif"

function Home() {
  return (
    
<div className='lg:max-w-6xl sm:max-w-6xl mt-20 lg:mt-0 sm:mt-0 lg:py-40 sm:py-30 items-center justify-center gap-y-10 lg:gap-y-25 sm:gap-y-25 flex flex-col  lg:mx-auto sm:mx-auto px-6   lg:min-h-screen lg:max-h-screen '>
      <div className='  lg:flex sm:flex flex-col lg:flex-row sm:flex-row  gap-y-5 flex    items-center  lg:gap-x-15 sm:gap-x-5  '>

    {/**top section */}    
    <div className='flex lg:gap-y-10 sm:gap-y-6 flex-1    flex-row lg:flex-col sm:flex-col lg:w-full sm:w-full gap-x-5 sm:py-6   items-center  lg:h-full sm:h-full lg:bg-[#f1f1f1] sm:bg-[#f1f1f1]  lg:dark:bg-[#181818] sm:dark:bg-[#181818] lg:p-6  rounded-2xl '>
    <Image src={Me} alt='A handsome photograph of the fabulous Thilina Dewmina.'  className='z-50 w-35 h-35 sm:w-45 sm:h-45  lg:w-60 lg:h-65  lg:border-0 sm:border-0 border-2 rounded-xl lg:rounded-2xl sm:rounded-2xl object-cover'/>
    
    {/** mobile thing */}
    <div className='space-y-2'>
    <h1 className=' text-xl bg-gradient-to-r from-[#284363] to-[#246CBF] sm:hidden lg:hidden dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> {homevalues.title}</h1>
     {Object.values(homevalues.items2).map((item: any, index: number) => {
    const Icon = item.icon;
    return (
      <a
        key={index}
        href={item.link}
        className="flex items-center sm:hidden lg:hidden gap-3 text-ms    ms:px-0 hover:opacity-80 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={15} className="text-[#246CBF]"/>
        <span>{item.value}</span>
      </a>
    );
  })}
    </div>
    
    <div className=" hidden  items-center lg:items-start sm:items-start lg:flex sm:flex lg:flex-col sm:flex-col gap-y-7 rounded-xl lg:text-lg sm:text-lg lg:w-full sm:w-full   ">
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
    
    <div className='flex flex-col gap-y-5 lg:gap-y-15 sm:gap-y-10 items-center  '>

    <div className='flex flex-col sm:gap-y-10  gap-y-10'>
    <h1 className='lg:text-6xl sm:text-5xl bg-gradient-to-r hidden lg:block sm:block from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> {homevalues.title}</h1>
    <h1 className='lg:text-xl sm:text-xl hidden lg:block '>{homevalues.p}</h1>
        <h1 className='lg:text-xl sm:text-xl lg:hidden '>{homevalues.pmob}</h1>    
    
    </div>

<div className='flex flex-col gap-y-10 min-w-full items-stretch  justify-between '>
<Image src={R} alt='gif' className=' hidden lg:block sm:block  sm:max-h-40  max-h-30 max-w-full lg:max-h-70 object-cover rounded-xl'/>

{/** buttons */}
<div className='flex gap-x-5 min-w-full max-w-full'>
<input type='text' placeholder='Ask Anything About Me' 
className='border-2 border-l-[#4872a7] border-r-[#214e7e] border-t-[#4872a7] border-b-[#214e7e]
 focus:border-[#4872a7]  dark:bg-[#121212] lg:w-8/10 sm:w-8/10 bg-[#e0dbdb] w-full py-1 px-2 lg:py-3 lg:px-5 sm:py-3 sm:px-5 rounded-l-full rounded-b-full  outline-none '/>
<button className='bg-gradient-to-r from-[#145299] to-[#246CBF] py-1 px-2  text-white lg:py-3 lg:px-5 sm:py-2 sm:px-3 w-3/10  rounded-r-full rounded-t-full hidden lg:block  '>Download Resume</button>
<button className='bg-gradient-to-r from-[#145299] to-[#246CBF] py-1 px-2  text-white lg:py-3 lg:px-5 sm:py-2 sm:px-3 w-3/10 lg:w-full  rounded-r-full rounded-t-full  lg:hidden '> Resume</button>

</div>

</div>

</div>

</div>

<div className="relative lg:w-full sm:w-full w-full   lg:max-w-full sm:max-w-full  overflow-hidden lg:pb-10 sm:pb-0">
    <div
        className="flex lg:gap-x-10 sm:gap-x-10 gap-x-5 dark:text-gray-300 animate-scroll-x"
      
    >
        {[...skills.skills, ...skills.skills].map((skill: any, index: number) => (
            <div key={index} className="flex items-center gap-x-2">
                <p className='hidden lg:flex sm:flex'>{skill.name}</p>
                <skill.icon size={25} />
            </div>
        ))}
    </div>

</div>

</div>
  )
}

export default Home
