import React from 'react'
import me2 from "../Images/me2.png"
import {homevalues ,skills ,whatido} from "../components/values"
import Image from 'next/image'


function About() {
  return (
        <div className='sm:max-w-6xl my-20  items-start  gap-y-10 flex flex-col  sm:mx-auto px-6  '>

        <h1 className='sm:text-5xl bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> About Me</h1>
    

    {/* header */}

    <div className='flex dark:text-[#c7c7c7] pb-3 justify-between  items-center text-lg gap-x-35  w-full '>
    <p className=''>{homevalues.about}</p>
    </div>

    <div className='flex gap-x-15 items-center justify-between'>

    {/**what i do */}
    <div>
    <h1 className='sm:text-4xl mb-5 bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#7bace4] dark:to-[#246CBF] bg-clip-text text-transparent'> What I Do</h1>
    <div className='grid grid-cols-2 gap-6 '>
    {whatido.map((item:any , index:number) => (
        <div key={index} className='flex flex-col gap-y-3  p-4 items-center justify-center  rounded-xl  sm:bg-[#f1f1f1] sm:dark:bg-[#181818]  '>
        <item.icon size={40} className="dark:text-[#bac0c7] text-[#2e2e2e]"/>
        <h1 className=' font-semibold text-center'>{item.name}</h1>
        </div>
    ))}
    </div>
    </div>


    <div>
    {/** skills */}
    <h1 className='sm:text-4xl mb-5 bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#78aeeb] dark:to-[#246CBF] bg-clip-text text-transparent'> Skills</h1>
    <div className='grid grid-cols-3 sm:grid-cols-6 gap-6 rounded-xl    items-center  py-4 px-4 sm:bg-[#f1f1f1] sm:dark:bg-[#181818] '>
    {skills.skills.map((item:any , index:number) => (
        <div key={index} className='flex flex-col gap-y-3 items-center p-4  '>
        <item.icon size={40} className="dark:text-[#bac0c7] text-[#141516]"/>
        <h1 className='text-center text-lg'>{item.name}</h1>
        </div>
    ))}
    </div>
    </div>

    </div>

  </div>
  )
}

export default About
