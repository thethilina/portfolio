import React from 'react'

function Projects() {
  return (
    <div className='sm:max-w-6xl mt-20 sm:mt-0 items-start gap-y-5 sm:gap-y-15 flex flex-col  sm:mx-auto sm:px-6 px-5  '>

        <h1 className='sm:text-5xl text-2xl bg-gradient-to-r from-[#284363] to-[#246CBF] dark:from-[#AAC2DD] dark:to-[#246CBF] bg-clip-text text-transparent'> Projects</h1>
    

    {/* header */}

    <div className='flex dark:text-[#c7c7c7] pb-3 border-[#646464] text-sm  sm:text-xl gap-x-3 sm:gap-x-15 border-b-2 w-full '>
    <button>UI/UX Design</button>
    <button> Front-End Interfaces</button>
    <button>Full-Stack Projects</button>    
    </div>

  </div>
  )
}

export default Projects
