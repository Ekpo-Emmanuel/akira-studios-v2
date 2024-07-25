"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import { MarqueeDemoVertical } from "./HeroAnimated";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
});

const titleVariants = {
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

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const bottomContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

export default function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="text-lightyellow w-[100%] overflow-clip">
      <div className="absolute max-w-screen overflow-hidden">
        <MarqueeDemoVertical />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen bg-black/70 overflow-hidden" />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="relative px-4 lg:px-32 h-screen flex flex-col justify-center items-center py-[3rem]"
      >
        <motion.h1
          variants={titleVariants}
          className={clsx(
            bentoga.className,
            "antialiased text-center text-[24vw] sm:text-[15vw] leading-[1.1] sm:leading-[.9]"
          )}
        >
          Akira
        </motion.h1>
        <motion.p
          variants={paragraphVariants}
          className="text-[1rem] text-center md:w-3/4 lg:w-1/2 mx-auto"
        >
          To truly stand out from the crowd, you need to be exceptional. Embrace
          the refined elegance of Paprika. Here, our team of creative designers
          and skilled developers is dedicated to making your digital dreams
          blossom beautifully.
        </motion.p>

        <motion.div
          variants={bottomContentVariants}
          className={clsx(
            satoshi.className,
            "antialiased absolute bottom-10 hidden sm:flex items-end justify-between w-full"
          )}
        >
          <motion.div variants={bottomContentVariants} className="pl-[2.5rem]">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="size-3 bg-lightyellow rounded-full"
              />
              <p>CREATIVE AGENCY</p>
            </div>
            <p className="mt-3 font-light text-[.875rem] tracking-[1px] uppercase">
              Unleash The Power
              <br /> of Visuals
            </p>
          </motion.div>
          <motion.div variants={bottomContentVariants} className="pr-[2.5rem]">
            <Link href="/">
              <motion.div
                variants={badgeVariants}
                whileHover={{ scale: 0.9 }}
                className="relative cursor-pointer"
              >
                <img src="/images/badge.svg" className="size-30 rotating-image" />
                <p
                  className={clsx(
                    bentoga.className,
                    "antialiased w-full font-bold text-lightyellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1rem] leading-[1.1]"
                  )}
                >
                  Let's work <br /> together
                </p>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}