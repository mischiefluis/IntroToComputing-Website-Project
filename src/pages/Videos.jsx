import React from 'react'
import Topics from '../components/Topics';
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <div className="bg-black overflow-y-hidden overflow-x-hidden relative">
      <div className="w-full max-w-[1180px] mx-auto relative"> 
        <div className='min-h-screen'>
          <Link to ="/" className='text-white font-bold uppercase logo-text relative inline-block my-6 mx-4 items-center z-10'>Calc<span className='text-acc'>Hub</span></Link>
          <Topics></Topics>
        </div>
      </div>
    </div>
  )
}

export default Videos