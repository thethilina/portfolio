import React from 'react'
import me2 from "../Images/me2.png"
import {homevalues ,skills ,whatido} from "../components/values"
import Image from 'next/image'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

function About() {

  useGSAP(() => { 
    gsap.fromTo(
      "#about",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
        
        },
      }
    );
  }, []);







  return (
        <div id="about" className='sm:max-w-6xl mt-10 sm:mt-20  items-start gap-y-5 sm:gap-y-15 flex flex-col  sm:mx-auto sm:px-6 px-5 '>

        <h1 className='sm:text-5xl text-2xl bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> About Me</h1>
    

    {/* header */}

    <div className='flex dark:text-[#c7c7c7] pb-3 justify-between  items-center sm:text-lg gap-x-35  w-full '>
    <p className=''>{homevalues.about}</p>
    </div>

    <div className='flex gap-x-15 gap-y-10 items-center sm:flex-row flex-col sm:min-h-full     min-w-full justify-between'>

    {/**what i do */}
    <div className='min-w-full  sm:min-h-full    sm:min-w-auto'>
    <h1 className='sm:text-4xl text-xl mb-5 bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#7bace4] dark:to-[#246CBF] bg-clip-text text-transparent'> What I Do</h1>
    <div className='grid grid-cols-2 gap-6 '>
    {whatido.map((item:any , index:number) => (
        <div key={index} className='flex flex-col gap-y-3 text-sm sm:text-lg p-4 items-center justify-center  rounded-xl  bg-[#f1f1f1] dark:bg-[#181818]  '>
              <item.icon size={40} className="dark:text-[#bac0c7] hidden lg:block text-[#141516]"/>
        <item.icon size={30} className="dark:text-[#bac0c7] lg:hidden text-[#141516]"/>
        <h1 className=' text-center'>{item.name}</h1>
        </div>
    ))}
    </div>
    </div>


    <div className='min-w-full sm:min-w-auto sm:min-h-full  '>
    {/** skills */}
    <h1 className='sm:text-4xl text-xl mb-5 bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#78aeeb] dark:to-[#246CBF] bg-clip-text text-transparent'> Skills</h1>
    <div className='grid grid-cols-3 sm:grid-cols-6 gap-6 rounded-xl  min-w-full  items-center    py-4 px-4 bg-[#f1f1f1] dark:bg-[#181818] '>
    {skills.skills.map((item:any , index:number) => (
        <div key={index} className='flex flex-col gap-y-3 items-center p-4  '>
        <item.icon size={40} className="dark:text-[#bac0c7] hidden lg:block text-[#141516]"/>
        <item.icon size={30} className="dark:text-[#bac0c7] lg:hidden text-[#141516]"/>
        <h1 className='text-center  lg:text-lg'>{item.name}</h1>
        </div>
    ))}
    </div>
    </div>

    </div>

  </div>
  )
}

export default About
