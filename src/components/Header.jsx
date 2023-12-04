import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='relative w-full py-4 px-4 flex items-center justify-between z-10'>
      <Link to="/"><h1 className='logo-text font-bold text-white'>CALC<span className='text-acc'>HUB</span></h1></Link>
      <nav>
        <ul className='hidden items-center gap-6 text-white xl:flex'>
          <Link to="/videos"><li className='heading-3 font-bold uppercase hover:text-acc hover:scale-125 transition-all ease-in-out'><a href="./videos">Limits</a></li></Link>
          <Link to="/videos"><li className='heading-3 font-bold uppercase hover:text-acc hover:scale-125 transition-all ease-in-out'><a href="./videos">Differentiation</a></li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header