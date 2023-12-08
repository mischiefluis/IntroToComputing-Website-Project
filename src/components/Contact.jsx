import React, { useState } from 'react'

const Contact = ( {display, setDisplay, setOpac} ) => {
  const [nameCont, setNameCont] = useState("")
  const [emailCont, setEmailCont] = useState("")
  const [messageCont, setMessageCont] = useState("")

  const handleName = event => {
    setNameCont(event.target.value)
  }
  const handleEmail = event => {
    setEmailCont(event.target.value)
  }
  const handleMessage = event => {
    setMessageCont(event.target.value)
  }

  const displayModal = (event) => {
    event.preventDefault()
    if((nameCont != "") && (emailCont != "") && (messageCont != "")){
      setDisplay('block')
      setTimeout(() => {
        setOpac('opacity-100')
      }, 150)
      setTimeout(() => {
        setOpac('opacity-0')
        setNameCont("")
        setEmailCont("")
        setMessageCont("")
      }, 1000)
      setTimeout(() => {
        setDisplay('hidden')
      }, 1500)
    }
    console.log("HEllo");
  }
  return (
    <div className='w-full h-[455px] xl:w-[48%] xl:h-[80%] xl:bg-none p-4'>
      <h2 className='heading-2 font-bold text-white uppercase'>Contact Form</h2>
      <form>
        <label htmlFor="name" className='heading-3 text-white block font-semibold'>Name</label>
        <input type="text" id="name" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1' onChange={handleName} value={nameCont}/>
        <label htmlFor="email" className='heading-3 text-white block font-semibold mt-3'>Email</label>
        <input type="text" id="email" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1' onChange={handleEmail} value={emailCont}/>
        <label htmlFor="message" className='heading-3 text-white block font-semibold mt-3'>Message</label>
        <textarea rows={5} type="text" id="message" className='outline-none border-acc border-2 rounded bg-black text-white w-full parag px-2 py-1' onChange={handleMessage} value={messageCont}/>
        <button className='button heading-3 text-white font-bold uppercase hover:opacity-80 text-center relative left-[50%] translate-x-[-50%] mt-3' onClick={displayModal}>Submit</button>
      </form>
    </div>
  )
}

export default Contact