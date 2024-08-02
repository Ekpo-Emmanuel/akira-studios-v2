"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Anton } from 'next/font/google'
import { navLinks, socialLinks } from "@/lib/actions";

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})


export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="px-4 sm:px-[2.5rem] pt-12 py-6 md:px-[3.5rem] max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 gap-12">
          <motion.div className="grid gap-10 md:flex md:justify-between" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-6">
              <motion.p 
                className="text-[1.5rem] sm:text-[2rem] text-[#8d8d8d] leading-[1.5] md:max-w-[26rem]"
                variants={itemVariants}
              >
                <span className="text-black">Drop us a line</span> and let's build something together.
              </motion.p>
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                variants={itemVariants}
              >
                <p className="text-[1.125rem] cursor-pointer">
                  admin@akiramediamarketing.com
                </p>
                <div className="mt-1 h-[1px] max-w-[16.8rem] bg-dblack rounded-full overflow-hidden ">
                  <motion.div
                    className="h-[1px] bg-[#b6b6b6] rounded-full"
                    initial={{ width: "20%" }}
                    animate={{ width: isHovered ? "100%" : "20%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div className="grid grid-cols-1 gap-6" variants={itemVariants}>
                <p className="text-[.7rem] text-[#8d8d8d]">CITEMAP</p>
                <ul>
                  {navLinks.map((item, index) => (
                    <motion.li key={index} variants={itemVariants}>
                      <Link href={item.href}>
                        <motion.span 
                          className="uppercase"
                          whileHover={{ x: 10, color: "#b6b6b6" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.title}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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
          </motion.div>
          <motion.div className="grid grid-cols-1 md:flex md:justify-between gap-10" variants={itemVariants}>
            <div className="grid grid-cols-1 gap-0 cursor-default">
              <motion.p 
                className={clsx(anton.className, "text-[2.5rem] md:text-[7.5rem] uppercase")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Akira Studios
              </motion.p>
              <motion.p variants={itemVariants}>
                © Akira Studios 2024 - All rights reserved
              </motion.p>
            </div>
            <motion.div className="md:flex md:items-end md:justify-end" variants={itemVariants}>
              <div className="flex gap-4">
                {socialLinks.map((item, index) => (
                  <motion.div key={index} variants={socialIconVariants} whileHover="hover">
                    <Link href={item.url} target="_blank">
                      <item.icon size={20} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}