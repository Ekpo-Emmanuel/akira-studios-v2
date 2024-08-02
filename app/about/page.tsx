import React from 'react'
import Hero from '../_components/About Page/Hero'
import Hero2 from '../_components/About Page/Hero2'

import About from '../_components/About Page/About'
import Services from '../_components/About Page/Services'
import TextRevealByWord from '../_components/magic ui/TextRevealByWord'
import Faq from '../_components/Faq'
import TestimonialCarousel from '../_components/Testimonial'
import About2 from '../_components/About Page/About2'
import Navbar2 from '../_components/Navbar/Navbar2'
import Footer from '../_components/Footer/Footer'

export default function page() {
  return (
    <div>
      <Navbar2 />
        {/* <Hero /> */}
        <Hero2 />
        {/* <About /> */}
        <About2 />
        <Services />
        {/* <TextRevealByWord 
          text="Our team is more than just a group of professionals; we're a family of creative minds dedicated to making your dreams a reality. We approach each project with the same enthusiasm and dedication as if it were our own." 
        /> */}
        {/* <TestimonialCarousel /> */}
        <Faq />
      <Footer />
    </div>
  )
}
