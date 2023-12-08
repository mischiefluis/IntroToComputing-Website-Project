import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Modal from "../components/Modal";
import { useState } from "react";

const Home = () => {
  const [display, setDisplay] = useState('hidden opacity-0')
  const [opac, setOpac] = useState('opacity-0')

  return (
    <div className="bg-black overflow-y-hidden overflow-x-hidden relative">
      <Modal display={display} opac={opac}></Modal>
      {/* WRAPPER */}
      <div className="w-full max-w-[1180px] mx-auto relative">
        {/* HERO SECTION */}
        <div className="h-screen relative">
          <Header></Header>
          <Hero></Hero>
        </div>
        {/* ABOUT SECTION */}
        <div className="xl:h-screen flex flex-col xl:flex-row xl:items-center xl:justify-between relative z-10">
          <About></About>
          <Contact display={display} setDisplay={setDisplay} setOpac={setOpac}></Contact>
        </div>
     </div>
    </div>
  )
}

export default Home