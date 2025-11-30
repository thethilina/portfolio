"use client"
import Image from "next/image";
import Homee from "../public/sections/Home";
import Projects from "@/public/sections/Projects";
import About from "@/public/sections/About";
import Contact from "@/public/sections/contact";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let smoother:any;


export default function Home() {

  useGSAP(() => {
   smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth:0.5,
      effects: true,
    });
  }, []); 
      



  return (

    <div id="smooth-wrapper" className=" bg-[#ebe8e8] dark:bg-[#0B0B0B]  ">
      
    <div id="smooth-content"  >
    <Homee/>
    <Projects/>
    <About/> 
    <Contact/>
    <div className="w-2 h-10" />
    </div>
    </div>
  );
}
