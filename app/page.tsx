import Image from "next/image";
import Navbar from "./_components/Navbar/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import About2 from "./_components/About2";
import Navbar2 from "./_components/Navbar/Navbar2";

export default function Home() {
  return (
   <div>
    {/* <Navbar /> */}
    <Navbar2 />
    <Hero />
    <About />
    <About2 />
    <Projects />
   </div>
  );
}
