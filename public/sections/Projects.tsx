"use client";
import React from 'react'
import { useState , useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {

const [projects, setProjects] = useState<any[]>([]);

useEffect(() => {
  const getProjects = async () => {
    try {
      const response = await fetch('/api/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  getProjects();
}, []); 




  return (
    <div id="projects" className='sm:max-w-6xl mt-5 lg:mt-0  sm:mt-0 items-start gap-y-5 sm:gap-y-15 flex flex-col  sm:mx-auto sm:px-6 px-5  '>

        <h1 className='sm:text-5xl text-2xl bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> Featured Projects</h1>
    

    {/* header */}

    <div className='flex dark:text-[#c7c7c7] pb-3 border-[#646464] text-sm  sm:text-xl gap-x-3 sm:gap-x-15 border-b-2 w-full '>
    <button>UI/UX Design</button>
    <button> Front-End Interfaces</button>
    <button>Full-Stack Projects</button>    
    </div>

    <div className='w-full flex flex-col gap-y-10 sm:gap-y-15 mt-5 '>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
        />
      ))}

    </div>  
      

  </div>
  )
}

export default Projects
