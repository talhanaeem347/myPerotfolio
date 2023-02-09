import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Work from './views/Work'
import Contact from './views/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="h-screen w-screen overflow-auto ">
      <NavBar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='services'>
        <Services />
      </section>
      <section id='work'>
        <Work />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
