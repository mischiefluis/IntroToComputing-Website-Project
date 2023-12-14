import React from 'react'

const Modal = ( {display } ) => {
  return (
    <div className={`bg-black/80 w-full h-screen fixed z-50 flex items-center justify-center ${display} fade-in`}>
      <div className='bg-black border-2 border-acc w-[50%] h-[200px] flex flex-col items-center justify-center'>
        <span className='text-acc text-8xl flex items-center justify-center'><ion-icon name="checkmark-circle-outline"></ion-icon></span>
        <h2 className='heading-2 text-acc'>Message sent!</h2>
      </div>
    </div>
  )
}

export default Modal