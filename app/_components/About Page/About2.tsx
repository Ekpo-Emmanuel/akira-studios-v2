"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
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

export default function About2() {
  const controls = useAnimation();
  const boxControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      boxControls.start("visible");
    } else {
      controls.start("hidden");
      boxControls.start("hidden");
    }
  }, [controls, boxControls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 7,
        stiffness: 100,
      },
    },
  };

  const columnVariants = {
    hidden: { height: '100%' },
    visible: (custom: any) => ({
      height: custom,
      transition: { duration: 1.5, ease: "easeInOut" }
    })
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, ease: "circOut" },
    },
  };

  return (
    <motion.div className="bg-white" style={{ y }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative px-4 sm:px-[2.5rem] py-[3rem] md:py-24 lg:md:py-40 max-w-[90rem] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-[2rem] lg:gap-[4rem] items-start">
          <div className="h-full flex flex-col gap-6">
            <motion.div
              variants={titleVariants}
              className="flex items-center gap-3 uppercase"
            >
              <motion.div
                className="size-3 bg-dblack rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, times: [0, 0.6, 1] }}
              />
              <p className={satoshi.className}>About us</p>
            </motion.div>
            <div className="w-full h-full grid grid-cols-3"> 
              <motion.div
                className="bg-[#F8BB32]"
                initial="hidden"
                animate={boxControls}
                variants={columnVariants}
                custom="100%"
              />
              <motion.div
                className="bg-[#F39731]"
                initial="hidden"
                animate={boxControls}
                variants={columnVariants}
                custom="60%"
              />
              <motion.div
                className="bg-black"
                initial="hidden"
                animate={boxControls}
                variants={columnVariants}
                custom="30%"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[2rem]">
            <motion.p
              variants={textVariants}
              className="text-[1.5rem] md:text-[2rem] leading-[1.5]"
            >
              Our journey began with a passion for visual storytelling and a commitment 
              to bringing our clients' visions to life. We believe that every project is 
              an opportunity to create something extraordinary, and we pour our hearts into 
              every detail to ensure that your content stands out.
            </motion.p>
            <motion.div
              variants={lineVariants}
              className="w-full h-[1px] bg-dblack rounded-full"
            />
            <motion.p
              variants={textVariants}
              className="text-[1.5rem] md:text-[1rem] leading-[1.5]"
            >
              Our team is more than just a group of professionals; we're a family of creative 
              minds dedicated to making your dreams a reality. We understand that your brand 
              is your baby, and we treat it with the same care and compassion. Whether it's a 
              commercial, a promotional video, or a photoshoot, we approach each project with 
              the same enthusiasm and dedication as if it were our own.
            </motion.p>
            <Link href="/about">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.p 
                  variants={textVariants}
                  className="text-[1rem] cursor-pointer"
                >
                  Learn more
                </motion.p>
                <div className="mt-1 h-[2px] w-[80px]  bg-dblack/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-[2px] bg-black rounded-full"
                    initial={{ width: "20%" }}
                    animate={{ width: isHovered ? "100%" : "20%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <div className="w-0 h-0 
            border-solid
            border-x-[160.5px] border-b-[105px] border-t-0
            border-x-transparent border-b-[#00000081] border-t-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}