import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[245px] xl:w-[48%] xl:h-[80%] about-bg xl:bg-none p-4'>
      <h2 className='heading-2 font-bold text-white uppercase'>About Me</h2>
      <p className='parag text-white text-justify leading-5 xl:leading-[1.5rem]'>Hello, my name is Luis Lloyd P. Tolentino, and I'm an aspiring web developer. This 'CalcHub' project was created specifically for my Computer Science subject requirements. If you have any questions or comments about this website, please contact me via the social media connections provided below.</p>
      <div className='flex gap-2 mt-3'>
        <a href='https://www.facebook.com/luis.tolentino358' className='text-4xl text-white hover:text-acc hover:scale-125 transition-all ease-in-out' target='_blank'><ion-icon name="logo-facebook"></ion-icon></a>
        <a href='https://github.com/loki-099' className='text-4xl text-white hover:text-acc hover:scale-125 transition-all ease-in-out' target='_blank'><ion-icon name="logo-github"></ion-icon></a>
        <a href='https://www.instagram.com/lowkeeeey.09/' className='text-4xl text-white hover:text-acc hover:scale-125 transition-all ease-in-out' target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
      </div>

    </div>
  )
}

export default About