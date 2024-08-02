"use client";
import clsx from "clsx";
import localFont from "next/font/local";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Anton } from 'next/font/google'
import Navbar2 from '../_components/Navbar/Navbar2'
import Footer from '../_components/Footer/Footer'


const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

const bentoga = localFont({ src: "../../public/fonts/bentoga/Bentoga-Thin.otf" });
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function Page() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const letterVariants = {
    hover: (i: number) => ({
      y: -10,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <>
    <Navbar2 />
      <motion.div 
        className="w-full h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid gap-[1rem] px-4 cursor-default">
          <motion.h2
            className={clsx(
              anton.className,
              "antialiased text-[5.875rem] md:text-[8.875rem] uppercase leading-[1.1] text-center"
            )}
            variants={itemVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {Array.from("Works/").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                animate={isHovered ? "hover" : ""}
                custom={index}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className={clsx(
              "antialiased text-[22px] leading-[36px] text-center uppercase"
            )}
            variants={itemVariants}
          >
            page under construction
          </motion.p>
        </div>
      </motion.div>
    <Footer />
    </>
  );
}