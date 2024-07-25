"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bentoga = localFont({
  src: "../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
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

export default function About2() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const badgeVariants = {
    hidden: { opacity: 0, rotate: -40, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: -20,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "circOut" },
    },
  };

  return (
    <motion.div className="bg-red text-lightyellow" style={{ y }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="px-4 sm:px-[2.5rem] md:px-[3.5rem] py-[3rem] md:py-24 lg:md:py-40 max-w-[85rem] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] md:gap-20 gap-[2rem] items-start">
          <div className="flex flex-col justify-between h-full">
            <motion.div variants={itemVariants} className="flex items-center gap-3 uppercase">
              <motion.div
                className="size-3 bg-lightyellow rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, times: [0, 0.6, 1] }}
              />
              <p className={satoshi.className}>Why us</p>
            </motion.div>
            <motion.div
              variants={badgeVariants}
              className="hidden md:block relative w-fit ml-auto transition hover:scale-90 cursor-pointer"
            >
              <img src="/images/badge2.svg" className="size-48 rotating-image" />
              <p className={clsx(bentoga.className, "antialiased w-full text-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1]")}>
                Let's work <br /> together
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-[2rem] ">
            <motion.p variants={itemVariants} className="text-[1.5rem] md:text-[2rem] leading-[1.5]">
              At Akira Studios, we transcend the ordinary to elevate your brand's visual storytelling. Our efficient and adaptable team crafts stunning videography, photography, and visual content, ensuring high-quality, cost-effective results. 
            </motion.p>
            <motion.div variants={lineVariants} className="w-full h-[1px] bg-lightyellow rounded-full" />
            <motion.p variants={itemVariants} className="text-[1.5rem] md:max-w-sm md:text-[1rem] leading-[1.5]">
              Let us captivate your audience and achieve your digital marketing goals with unparalleled excellence.
            </motion.p>
            <motion.div
              variants={badgeVariants}
              className="mt-12 block md:hidden relative w-fit mx-auto transition hover:scale-90 cursor-pointer"
            >
              <img src="/images/badge2.svg" className="size-48 rotating-image" />
              <p className={clsx(bentoga.className, "antialiased w-full text-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1]")}>
                Let's work <br /> together
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}