import React, { useState } from 'react'

const Contact = ( { setDisplay } ) => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleInput = (event) => {
    const value = event.target.value;
    setInputs({...inputs, [event.target.name]: value});
  };
  const displayModal = (event) => {
    event.preventDefault()
    if((inputs.name != "") && (inputs.email != "") && (inputs.message != "")){
      setDisplay('block');
      setTimeout(() => {
        setInputs({name: "", email: "", message: ""});
        setDisplay('hidden');
      }, 1300);
    }
  }
  return (
    <div className='w-full h-[455px] xl:w-[48%] xl:h-[80%] xl:bg-none p-4'>
      <h2 className='heading-2 font-bold text-white uppercase'>Contact Form</h2>
      <form>
        <label htmlFor="name" className='heading-3 text-white block font-semibold'>Name</label>
        <input type="text" id="name" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1' name="name" onChange={handleInput} value={inputs.name}/>
        <label htmlFor="email" className='heading-3 text-white block font-semibold mt-3'>Email</label>
        <input type="text" id="email" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1' name='email' onChange={handleInput} value={inputs.email}/>
        <label htmlFor="message" className='heading-3 text-white block font-semibold mt-3'>Message</label>
        <textarea rows={5} type="text" id="message" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1' name='message' onChange={handleInput} value={inputs.message}/>
        <button className='button heading-3 text-white font-bold uppercase text-center relative left-[50%] translate-x-[-50%] mt-3 transition-all ease-in-out' onClick={displayModal}>Submit</button>
      </form>
    </div>
  )
}

export default Contact