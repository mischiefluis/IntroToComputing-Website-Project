import React from 'react'

const GridItem = ( {link} ) => {
  return (
    <div className='border-2 border-acc h-[190px] max-w-[345px] relative'>
        <p className='parag text-acc absolute -z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Video Loading...</p>
        <iframe className='w-full h-full' src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default GridItem