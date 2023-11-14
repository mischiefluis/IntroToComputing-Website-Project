import React from 'react'

const Header = () => {
  return (
    <div className='relative w-full py-4 px-4 flex items-center justify-between z-10'>
      <h1 className='logo-text font-bold text-white'>CALC<span className='text-acc'>HUB</span></h1>
      <nav>
        <ul className='hidden items-center gap-6 text-white xl:flex'>
          <li className='heading-3 font-bold uppercase hover:text-acc hover:scale-125 transition-all ease-in-out'><a href="https://youtu.be/YNstP0ESndU?feature=shared">Limits</a></li>
          <li className='heading-3 font-bold uppercase hover:text-acc hover:scale-125 transition-all ease-in-out'><a href="">Derivatives</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header