import React from 'react'

const Hero = () => {
  return (
    <div className='absolute top-10 w-full h-full px-4 flex flex-col xl:flex-row items-center justify-evenly xl:gap-0 xl:justify-between'>
      <div className='xl:w-[48%] text-center xl:text-left'>
        <h1 className='heading-1 uppercase font-bold text-white leading-[1] mb-3'>Struggling with <span className='text-acc'>Calculus</span>?</h1>
        <p className='parag text-white leading-[1.25] mb-7 hidden xl:block'>Follow the roadmaps for what you should work on more to enhance your mathematics skills, and watch videos that will help you along the way solving calculus.</p>
        <a href="https://www.youtube.com/@TheOrganicChemistryTutor" className='button heading-3 text-white font-bold uppercase hover:opacity-80' target='_blank'>Click Here</a>
      </div>
      <div className='xl:w-[48%] sm:max-w-[450]'>
        <img src="./assets/calc-img.png" className='w-full' alt="calc" />
      </div>
    </div>
  )
}

export default Hero