import Image from "next/image";
import Navbar from "./_components/Navbar/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import About2 from "./_components/About2";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <About2 />
    <Projects />
   </div>
  );
}
