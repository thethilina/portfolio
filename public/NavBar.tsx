import React from 'react'

function NavBar() {
  return (
    <nav className='flex items-center fixed w-full justify-around py-10 top-0  text-xl dark:text-white'>

    {/*Logo*/}
    <h1 className='flex font-semibold text-[#272727] dark:text-white text-3xl'>thilina.<h1 className='text-[#5A92FA]'>dev</h1></h1>
 
   {/*buttton*/}
    <ul className='flex gap-x-6 dark:bg-[#111111] py-3 px-10 text-white bg-[#3A4C60] border dark:border-[#848484] rounded-full'>
    <li className='hover:cursor-pointer'>Home</li>
    <li className='hover:cursor-pointer'>Projects</li>
    <li className='hover:cursor-pointer'>About</li>
    <li className='hover:cursor-pointer'>Contact me</li>
    </ul>
   


    </nav>
      
  )
}

export default NavBar
