import React, { useEffect, useState } from 'react'
import GridItem from './GridItem';

const Limits = () => {
  const [limits, setLimits] = useState([])

  const getLimits = async() => {
    const response = await fetch('/assets/links.json')
    const data = await response.json()
    const links = await data.limits
    setLimits(links)
  }

  useEffect(() => {
    getLimits()
  }, [])


  return ( 
    <div className='mt-4 grid grid-cols-1 justify- gap-3 md:grid-cols-3 lg:grid-cols-4 max-w-[345px] md:max-w-[768px] lg:max-w-full mx-auto'>
      {limits.map((vidlink)=>(<GridItem link={vidlink}/>))}
    </div>
  )
}

export default Limits