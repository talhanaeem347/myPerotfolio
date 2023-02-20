import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Work from "./views/Work";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
export default () => {
  return (
    <section className="h-screen w-screen overflow-auto z-20">
      <NavBar />
      <div className="fixed left-14 bg-transparent z-10 h-screen w-fit  lg:flex md:flex hidden items-center justify-center ">
        <div className=" w-8 h-3/5 flex flex-col justify-evenly items-center">
          <a
            href="https://web.facebook.com/profile.php?id=100010986612642"
            className="bg-gray-200  px-2  rounded-full"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          {/* <a href="" className="bg-gray-200 px-1 rounded-full">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="" className="bg-gray-200 px-1 rounded-full">
            <i className="fa-brands fa-instagram"></i>
          </a> */}
          <a
            href="www.linkedin.com/in/talhanaeem347"
            className="bg-gray-200 px-1 rounded-full"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:talhanaeem347@gmail.com"
            className="bg-gray-200 px-1 rounded-full"
          >
            <i className="fa-solid fa-envelope-open-text"></i>
          </a>
          <a href="tel:03021466065" className="bg-gray-200 px-2 rounded-full">
            <i className="fa-solid fa-mobile-screen fa-sm  "></i>
          </a>
        </div>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </section>
  );
};
