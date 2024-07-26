"use client";
import React from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import Contact from "./small/Contact";
import { motion } from "framer-motion";
import Link from "next/link";

const bentoga = localFont({
  src: "../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
});

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const text = "Elevating Your Digital Presence".split(" ");

  return (
    <div>
      <div className="px-4 lg:px-32 h-screen relative flex flex-col justify-center items-center py-[3rem]">
        <motion.p
          className={`${satoshi.className} antialiased text-[1rem] uppercase font-medium`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          We are Akira
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className={clsx(
            bentoga.className,
            "antialiased mt-2 bg-lightyellow text-center text-[12vw] sm:text-[9vw] lg:text-[10vw] leading-[1.1] sm:leading-[.9]"
          )}
        >
          {text.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <Link href="/about">
          <motion.div
            className="relative mt-6 md:mt-12 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 0.9 }}
          >
            <img src="/images/badge.svg" className="size-48 rotating-image" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >
              <p
                className={clsx(
                  bentoga.className,
                  "antialiased font-semibold text-lightyellow text-center text-[1.5rem] leading-[1.1]"
                )}
              >
                Let's work <br /> together
              </p>
            </motion.div>
          </motion.div>
        </Link>
        <motion.div
          className={clsx(
            satoshi.className,
            "absolute bottom-10 hidden sm:flex items-end justify-between w-full"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          <motion.div
            className="pl-[2.5rem] lg:pl-32"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="size-3 bg-red rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
              />
              <p>CREATIVE AGENCY</p>
            </div>
            <p className="mt-3 font-light text-[.875rem] tracking-[1px] uppercase">
              Unleash The Power
              <br /> of Visuals
            </p>
          </motion.div>
          <motion.div
            className="pr-[2.5rem] lg:pr-32"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            <Contact />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
