import React from 'react'
import GridItem from './GridItem'
import { useState, useEffect } from 'react'

const Differentiation = () => {
  const [diff, setDiff] = useState([])

  const getDiffs = async() => {
    const response = await fetch('/assets/links.json')
    const data = await response.json()
    const links = await data.differentiation
    setDiff(links)
  }

  useEffect(() => {
    getDiffs()
  }, [])


  return ( 
    <div className='mt-4 grid grid-cols-1 justify- gap-3 md:grid-cols-3 lg:grid-cols-4 max-w-[345px] md:max-w-[768px] lg:max-w-full mx-auto'>
      {diff.map((vidlink)=>(<GridItem link={vidlink}/>))}
    </div>
  )
}

export default Differentiation