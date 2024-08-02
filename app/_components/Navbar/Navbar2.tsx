"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Anton } from 'next/font/google'
import Contact from "../small/Contact";
import { navLinks } from "@/lib/actions";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})


const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section>
      <nav className="fixed w-full z-50 top-0">
        <div className="text-dblack bg-white max-w-[90rem] mx-auto px-4 sm:px-6 sm:py-3 md:py-5 mt-4 sm:mt-0 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className={clsx(anton.className, "antialiased uppercase text-[1.2rem] sm:text-[1.8rem]")}>
              {/* <Link href="/" className={clsx(bentoga.className, "antialiased text-[1.2rem]")}> */}
              {/* <img src='https://akira-studios.vercel.app/assets/images/logo_dark.png' className="h-12 w-auto" alt="Akira Studios" /> */}
              Akira Studios
              </Link>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="focus:outline-none focus:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 sm:h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-white flex items-end justify-start"
            >
              <div>
                <motion.p 
                  className={clsx(anton.className, "absolute top-4 left-4 md:top-6 md:left-10  hover:text-darkyellow transition-colors duration-300 text-[1.5rem] uppercase")}
                >
                  Akira Studios
                </motion.p>
              </div>
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 md:top-6 md:right-6  hover:text-darkyellow transition-colors duration-300 flex gap-2 items-center"
              >
                <span className="text-sm font-bold">
                  CLOSE
                </span>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div
                className="hidden absolute bottom-4 right-4 md:bottom-10 md:right-6 lg:bottom-12 lg:right-28 hover:text-darkyellow transition-colors duration-300 sm:block gap-2 items-center"
              >
              <motion.div className="grid grid-cols-1 gap-6" variants={itemVariants}>
                  <p className="text-[.7rem] text-[#8d8d8d]">SERVICES</p>
                  <ul>
                    {["photography", "Videography", "Social media", "Branding"].map((service, index) => (
                      <motion.li 
                        key={index} 
                        className="uppercase"
                        variants={itemVariants}
                        whileHover={{ x: 10, color: "#b6b6b6" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className="px-4 md:px-10 md:py-5">
                {navLinks.map((link, index) => (
                  <motion.div key={index} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className={clsx(anton.className, "block uppercase text-[4rem]   my-4 leading-[1.2] hover:text-darkyellow transition-colors duration-300")}
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </section>
  );
};

export default Navbar2;