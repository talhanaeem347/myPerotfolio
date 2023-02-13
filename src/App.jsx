import NavBar from './components/NavBar'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Work from './views/Work'
import Contact from './views/Contact'
import Footer from './components/Footer'

export default () => {
  return (
    <section className="h-screen w-screen overflow-auto z-20">
      <NavBar />
      <div className='fixed left-14 bg-transparent z-10 h-screen w-fit  lg:flex md:flex hidden items-center justify-center '>
        <div className=' w-8 h-2/5 flex flex-col justify-evenly items-center'>
          <a href="https://web.facebook.com/profile.php?id=100010986612642" className='bg-gray-200 p-2 px-3 rounded-full' ><i className="fa-brands fa-facebook-f fa-xl"></i></a>
          <a href="" className='bg-gray-200 p-2 rounded-full' ><i className="fa-brands fa-twitter fa-xl  "></i></a>
          <a href="" className='bg-gray-200 p-2 rounded-full' ><i className="fa-brands fa-instagram fa-xl" ></i></a>
          <a href="www.linkedin.com/in/talha-naeem-767973248" className='bg-gray-200 p-2 rounded-full' ><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
          <a href="mailto:talhanaeem347@gmail.com" className='bg-gray-200 p-2 rounded-full' ><i className="fa-solid fa-envelope-open-text fa-xl"></i></a>
          <a href="tel:03021466065" className='bg-gray-200 p-2 rounded-full' ><i className="fa-solid fa-mobile-screen fa-xl"></i></a>
        </div>
      </div>
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
      </section>
  )
}


