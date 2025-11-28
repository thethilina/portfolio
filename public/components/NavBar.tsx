"use client";
import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";


function NavBar() {

const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed z-100 top-0 w-full dark:bg-[#0B0B0B] bg-[#ededed] z-50 backdrop-blur-xl'>
      <div className='max-w-6xl mx-auto px-6 py-3 sm:py-4 flex items-center justify-between text-xl dark:text-white'>

        {/* Logo */}
        <h1 className='font-semibold sm:text-3xl text-[#272727] dark:text-white'>
          thilina.<span className='text-[#5A92FA]'>dev</span>
        </h1>

        {/* Buttons */}
        <ul className='lg:flex hidden gap-x-6 bg-[#4075b1] dark:bg-[#111111] dark:border-[#848484] border rounded-full py-2 px-10 text-white'>
          <li className='cursor-pointer'><a href="#home">Home</a></li>
          <li className='cursor-pointer'><a href="#projects">Projects</a></li>
          <li className='cursor-pointer'><a href="#about">About</a></li>
          <li className='cursor-pointer'><a href="#contact">Contact me</a></li>
        </ul>
        {isOpen?<IoCloseSharp onClick={()=>{isOpen?setIsOpen(false):setIsOpen(true)}} className='lg:hidden z-100' /> : <IoMdMenu onClick={()=>{isOpen?setIsOpen(false):setIsOpen(true)}} className='lg:hidden z-100' />}


      {isOpen &&
        <ul className='w-screen h-screen items-center backdrop-blur-2xl  justify-center  absolute flex flex-col gap-y-4 bg-[#4075b1] dark:bg-[#111111]/95  py-4 px-10 text-white top-0 right-0'>
          <li className='cursor-pointer'><a href="#home" onClick={()=>setIsOpen(false)}>Home</a></li>
          <li className='cursor-pointer'><a href="#projects" onClick={()=>setIsOpen(false)}>Projects</a></li>
          <li className='cursor-pointer'><a href="#about" onClick={()=>setIsOpen(false)}>About</a></li>
          <li className='cursor-pointer'><a href="#contact" onClick={()=>setIsOpen(false)}>Contact me</a></li>
        </ul>
      }

      </div>
    </nav>
  )
}

export default NavBar
