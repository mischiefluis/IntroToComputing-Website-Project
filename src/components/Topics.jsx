import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/topics.css'

const Topics = () => {
  return (
    <div className='relative w-full py-2 px-4 z-10'>
      <nav className='w-full border-b-acc border-b-2'>
        <ul className='flex items-center gap-4'>
          <li><NavLink to="limits" className='text-white heading-3 uppercase font-bold'>Limitss</NavLink></li>
          <li><NavLink to="differentiation" className='text-white heading-3 uppercase font-bold'>Differentiations</NavLink></li>
        </ul>
      </nav>
      <div className='w-full'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Topics