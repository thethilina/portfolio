import React from 'react'
import {homevalues ,skills} from "../components/values"


function Contact() {
  return (


<div className='sm:max-w-6xl  mb-20 rounded-2xl mt-20 sm:mt-0 items-start    gap-y-15 flex flex-col  sm:mx-auto sm:px-6 px-5 '>
<div className='sm:bg-[#f1f1f1] sm:dark:bg-[#181818] rounded-2 w-full border border-[#7a7a7a] rounded-2xl  p-20  sm:flex flex-col sm:flex-row justify-between   items-center sm:gap-x-15 '>

<div className='flex flex-col gap-y-10'>
<h1 className='text-5xl'>Let's work <span className='text-[#417CFA]'><br></br> together.</span></h1>
<p className='text-lg'>I'm always interested in hearing about new projects and opportunities.</p>

    <div className=" hidden  items-center sm:items-start sm:flex sm:flex-col gap-y-7 rounded-xl sm:text-lg sm:w-full   ">
  {Object.values(homevalues.contact).map((item: any, index: number) => {
    const Icon = item.icon;
    return (
      <a
        key={index}
        href={item.link}
        className="flex items-center gap-3  ms:px-0 hover:opacity-80 transition"
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

  <form className='flex flex-col gap-y-10 w-full items-end'>
    <input type='text' placeholder='Your Name' 
className='border   dark:bg-[#121212] w-8/10  bg-[#e0dbdb] py-3 px-5 rounded-2xl border-gray-600  p-3 outline-none '/>
 <input type='email' placeholder='Email Address' 
className='border  dark:bg-[#121212] w-8/10  bg-[#e0dbdb] py-3 px-5 rounded-2xl   border-gray-600 p-3 outline-none '/>
 <input type="text" placeholder='Message Subject' 
className='border  dark:bg-[#121212] w-8/10  bg-[#e0dbdb] py-3 px-5 rounded-2xl  border-gray-600  p-3 outline-none '/>
<button className='bg-gradient-to-r from-[#145299] to-[#246CBF] text-white py-3 px-5 w-3/10  rounded-l-full rounded-b-full '>Send</button>

  </form>
{/* form */}
  </div>

  </div>
  )
}

export default Contact
