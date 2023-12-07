import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div className="bg-black overflow-y-hidden overflow-x-hidden relative">
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
          <Contact></Contact>
        </div>
     </div>
    </div>
  )
}

export default Home