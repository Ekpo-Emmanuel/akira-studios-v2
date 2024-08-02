import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import About2 from "./_components/About2";
import Navbar2 from './_components/Navbar/Navbar2'
import Footer from './_components/Footer/Footer'

export default function Home() {
  return (
   <div>
    <Navbar2 />
    <Hero />
    <About />
    <About2 />
    <Projects />
    <Footer />
   </div>
  );
}
