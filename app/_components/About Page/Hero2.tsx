"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Anton } from 'next/font/google'
import clsx from "clsx";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})

export default function Hero2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
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
    <div ref={ref}>
      <motion.div 
        className="px-4 sm:px-[2.5rem] bg-white py-32 max-w-[90rem] mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-[1rem] pt-[6rem]">
          <motion.span 
            className="text-[.8rem] text-dblack"
            variants={itemVariants}
          >
            ABOUT US
          </motion.span>
          <motion.h1 
            className={clsx(anton.className, "text-[10.5vw] sm:text-[8vw] lg:text-8xl leading-[1.2] font-bold")}
            variants={itemVariants}
          >
            OUR STUDIO
          </motion.h1>
          <motion.p 
            className="max-w-[35rem] text-dblack"
            variants={itemVariants}
          >
            Welcome to Akira Studios, where creativity meets excellence. 
            Inspired by the meaning of our name, "light," we strive to illuminate 
            your brand with unparalleled brilliance and artistry.
          </motion.p>
          <motion.div
            variants={itemVariants}
            style={{
              position: "relative",
              overflow: "hidden"
            }}
          >
            <motion.img 
              src="https://cdn.prod.website-files.com/6685c3b150e10e73a6cd57b0/66a50598fbb8241edd81fbbd_StudioShot.webp"
              style={{
                y,
                scale: 1.1,
                transformOrigin: "top"
              }}
              transition={{
                duration: 0.5
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}