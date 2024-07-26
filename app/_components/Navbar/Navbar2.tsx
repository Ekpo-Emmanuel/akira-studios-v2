"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import localFont from 'next/font/local'

const bentoga = localFont({ src: '../../../public/fonts/bentoga/Bentoga-Thin.otf' })
const satoshi = localFont({
  src: [
    {
      path: '../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // { title: "Services", href: "#/services" },
  { title: "Works", href: "#/works" },
  { title: "Contact", href: "/contact" },
];

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

  const flipVariants = {
    hover: {
      rotateX: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="max-w-7xl mt-4 mx-auto px-4 sm:px-6 md:pt-10 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className={clsx(bentoga.className, "antialiased text-[1.2rem] sm:text-[1.8rem]")}>
              AKIRA STUDIOS
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-red focus:outline-none focus:text-red"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            className="fixed inset-0 bg-lightyellow flex items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-red hover:text-darkyellow transition-colors duration-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              {navLinks.map((link, index) => (
                <motion.div key={index} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className={clsx(bentoga.className, "block uppercase text-4xl sm:text-[3.5rem] font-bold text-red my-4 sm:leading-[1.2] hover:text-red/70 transition-colors duration-300")}
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
  );
};

export default Navbar2;