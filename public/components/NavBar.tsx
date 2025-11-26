import React from 'react'

function NavBar() {
  return (
    <nav className='fixed z-100 top-0 w-full dark:bg-[#0B0B0B] bg-[#ededed] z-50 backdrop-blur-xl'>
      <div className='max-w-6xl mx-auto px-6 py-3 sm:py-4 flex items-center justify-between text-xl dark:text-white'>

        {/* Logo */}
        <h1 className='font-semibold sm:text-3xl text-[#272727] dark:text-white'>
          thilina.<span className='text-[#5A92FA]'>dev</span>
        </h1>

        {/* Buttons */}
        <ul className='sm:flex hidden    gap-x-6 bg-[#4075b1] dark:bg-[#111111] dark:border-[#848484] border rounded-full py-2 px-10 text-white'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Projects</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Contact me</li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar
