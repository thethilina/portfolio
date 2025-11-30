"use client";
import React, { use } from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from '@/app/page';

gsap.registerPlugin(ScrollTrigger);







      


function NavBar() {





const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  id='nav' className='fixed z-100  top-0 w-full dark:bg-[#0B0B0B] bg-[#ededed] z-50 backdrop-blur-xl'>
      <div className='max-w-6xl mx-auto px-6 py-3 sm:py-4 flex items-center justify-between text-xl dark:text-white'>

        {/* Logo */}
        <h1 className='font-semibold sm:text-3xl text-[#272727] dark:text-white'>
          thilina.<span className='text-[#5A92FA]'>dev</span>
        </h1>

        {/* Buttons */}
        <ul className='lg:flex hidden gap-x-6 bg-[#4075b1] dark:bg-[#111111] dark:border-[#848484] border rounded-full py-2 px-10 text-white'>
            <li onClick={()=>{smoother.scrollTo("#home" , true , "top center")}} className='cursor-pointer'>Home</li>
            <li onClick={()=>{smoother.scrollTo("#projects", true , "center center")}} className='cursor-pointer'>Projects</li>
            <li onClick={()=>{smoother.scrollTo("#about", true , "center center")}} className='cursor-pointer'>About</li>
            <li onClick={()=>{smoother.scrollTo("#contact", true , "center center")}} className='cursor-pointer'>Contact me</li>
        </ul>
        {isOpen?<IoCloseSharp onClick={()=>{isOpen?setIsOpen(false):setIsOpen(true)}} className='lg:hidden z-100' /> : <IoMdMenu onClick={()=>{isOpen?setIsOpen(false):setIsOpen(true)}} className='lg:hidden z-100' />}


      {isOpen &&
        <ul className=' fixed w-screen h-screen items-center backdrop-blur-sm  justify-center  flex flex-col gap-y-4 bg-[#4075b1] dark:bg-[#111111]/95  py-4 px-10 text-white top-0 right-0'>
              <li onClick={()=>{smoother.scrollTo("#home" , true , "top center"); setIsOpen(false)}} className='cursor-pointer'>Home</li>
              <li onClick={()=>{smoother.scrollTo("#projects", true , "center center"); setIsOpen(false)}} className='cursor-pointer'>Projects</li>
              <li onClick={()=>{smoother.scrollTo("#about", true , "top center"); setIsOpen(false)}} className='cursor-pointer'>About</li>
              <li onClick={()=>{smoother.scrollTo("#contact", true , "center center"); setIsOpen(false)}} className='cursor-pointer'>Contact me</li>
        </ul>
      }

      </div>
    </nav>
  )
}

export default NavBar
