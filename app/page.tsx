import Image from "next/image";
import Homee from "../public/sections/Home";
import Projects from "@/public/sections/Projects";
import About from "@/public/sections/About";
import Contact from "@/public/sections/contact";

export default function Home() {
  return (


    <div className=" bg-[#ebe8e8] dark:bg-[#0B0B0B] ">
    <Homee/>
    <Projects/>
    <About/> 
    <Contact/>
    </div>
  );
}
