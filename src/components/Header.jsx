import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative w-full py-6 px-4 flex items-center justify-between z-10'>
      <Link to="/" className='logo-text font-bold text-white'>CALC<span className='text-acc'>HUB</span></Link>
      <nav>
        <ul className='hidden items-center gap-6 text-white xl:flex'>
          <li className='heading-3 font-bold uppercase hover:text-acc hover:scale-125 transition-all ease-in-out'><Link to="videos">Limits</Link></li>
          <li className='heading-3 font-bold uppercase hover:text-acc hover:scale-125 transition-all ease-in-out'><Link to="videos">Differentiation</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header