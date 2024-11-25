"use client";
import React, { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import clsx from "clsx";
import localFont from "next/font/local";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const bentoga = localFont({ src: "../../public/fonts/bentoga/Bentoga-Thin.otf" });
const satoshi = localFont({
  src: [
    { path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Medium.otf", weight: "500", style: "medium" },
    { path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Light.otf", weight: "300", style: "light" },
  ],
});

const projects = [
  { title: "Prada", description: "Lorem ipsum dolor sit amet...", display_image: "/images/projects/1.jpg" },
  { title: "Space X", description: "Lorem ipsum dolor sit amet...", display_image: "/images/projects/2.jpg" },
  { title: "Blue moon", description: "Lorem ipsum dolor sit amet...", display_image: "/images/projects/3.jpg" },
  { title: "Louis Vuitton", description: "Lorem ipsum dolor sit amet...", display_image: "/images/projects/4.jpg" },
];

const AnimatedTitle = ({ text } : { text: string }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className="text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.3] lg:leading-[1.5] text-center overflow-hidden"
      variants={container}
      initial="hidden"
      animate={isAnimated ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em] mb-[0.25em]"
          variants={child}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function Projects() {
  return (
    <div>
      <div className="px-4 sm:px-[2.5rem] py-[3rem] md:py-24 max-w-7xl mx-auto">
        <AnimatedTitle text="To truly shine, you need a touch of brilliance. Our talented designers and development experts are here to bring your digital visions to life." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
          {projects.map((project, index) => (
            <Link
              href="#"
              key={index}
              className="group h-[70vh] overflow-clip object-contain rounded-[1rem]"
              style={{
                backgroundImage: `url(${project.display_image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center bg-black/70 py-[1rem] px-[8vw] transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="absolute top-5 right-5 cursor-pointer">
                  <img
                    src="/images/badge.svg"
                    className="size-20 rotating-image"
                  />
                  <MoveUpRight
                    strokeWidth={1.5}
                    className="text-lightyellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1] md:size-7"
                  />
                </div>
                <div>
                  <p
                    className={clsx(
                      bentoga.className,
                      "antialiased text-lightyellow text-center text-[4rem] leading-[1.3]"
                    )}
                  >
                    {project.title}
                  </p>
                  <p className="mt-2 text-lightyellow text-[1rem] leading-[20px] text-center">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3">
            <div className="size-3 bg-red rounded-full uppercase" />
            <p>VIEW ALL PROJECTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}