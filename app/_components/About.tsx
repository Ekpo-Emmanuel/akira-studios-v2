"use client";
import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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

export default function About() {
  const controls = useAnimation();
  const [isHovedblack, setIsHovedblack] = useState(false);

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
        className="px-4 sm:px-[2.5rem] md:px-[3.5rem] py-[3rem] md:py-24 lg:md:py-40 max-w-[85rem] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-[2rem] items-start">
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
          <div className="grid grid-cols-1 gap-[2rem]">
            <motion.p
              variants={textVariants}
              className="text-[1.5rem] md:text-[2rem] leading-[1.5]"
            >
              At Akira Studios, we are passionate about elevating your digital
              marketing strategy. Our team of experts specializes in crafting
              visually stunning and engaging content that captivates your
              audience.
            </motion.p>
            <motion.div
              variants={lineVariants}
              className="w-full h-[1px] bg-dblack rounded-full"
            />
            <motion.p
              variants={textVariants}
              className="text-[1.5rem] md:max-w-sm md:text-[1rem] leading-[1.5]"
            >
              From dynamic eye-catching visuals that capture an audience to
              product shots. Amplify your digital marketing with our
              state-of-the-art services. We created cinematic masterpieces that
              showcase products and services.
            </motion.p>
            <Link href="/about">
              <div
                onMouseEnter={() => setIsHovedblack(true)}
                onMouseLeave={() => setIsHovedblack(false)}
              >
                <motion.p 
                  variants={textVariants}
                  className="text-[1rem] cursor-pointer"
                >
                  Read more
                </motion.p>
                <div className="mt-1 h-[2px] w-10  bg-darkyellow rounded-full overflow-hidden">
                  <motion.div
                    className="h-[2px] bg-dblack rounded-full"
                    initial={{ width: "20%" }}
                    animate={{ width: isHovedblack ? "100%" : "20%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
