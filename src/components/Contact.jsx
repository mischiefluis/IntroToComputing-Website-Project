import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[455px] xl:w-[48%] xl:h-[80%] xl:bg-none p-4'>
      <h2 className='heading-2 font-bold text-white uppercase'>Contact Form</h2>
      <form>
        <label htmlFor="name" className='heading-3 text-white block font-semibold'>Name</label>
        <input type="text" id="name" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1'/>
        <label htmlFor="email" className='heading-3 text-white block font-semibold mt-3'>Email</label>
        <input type="text" id="email" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1'/>
        <label htmlFor="message" className='heading-3 text-white block font-semibold mt-3'>Message</label>
        <textarea rows={5} type="text" id="message" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1'/>
        <button href="#" className='button heading-3 text-white font-bold uppercase hover:opacity-80 text-center relative left-[50%] translate-x-[-50%] mt-3'>Submit</button>
      </form>
    </div>
  )
}

export default Contact