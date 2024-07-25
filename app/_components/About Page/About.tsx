"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Spec = {
  title: string;
  digit: string;
  desc: string;
};

const specs: Spec[] = [
  {
    title: "Clients",
    digit: "+30",
    desc: "Bringing unique challenges that have enriched our creative journey and expanded our industry impact."
  },
  {
    title: "Awards",
    digit: "+26",
    desc: "Celebrating our commitment to excellence, innovation, and the transformative power of outstanding design."
  },
  {
    title: "Years of experience",
    digit: "2024",
    desc: "We elevated our design agency to new heights, embracing cutting-edge trends and innovative practices"
  },
  {
    title: "Growth",
    digit: "137%",
    desc: "The trust our clients place in our ability to deliver exceptional design solutions."
  },
  {
    title: "Projects Delivered",
    digit: "100+",
    desc: "Our exceptional work has been recognized with 26 prestigious awards, celebrating our commitment to excellence"
  },
  {
    title: "Cases",
    digit: "+56",
    desc: "Our diverse project experience showcases our ability to tailor bespoke solutions that drive success"
  },
];

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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

  return (
    <div className='px-4 sm:px-[2.5rem] py-[5rem] md:py-24 lg:py-38'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={titleVariants}
        className=""
      >
        <p className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] leading-[1.2] max-w-6xl mx-auto">
          Our skill in translating abstract concepts into visually stunning representations is nothing short of exceptional.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[2rem] mt-10 sm:mt-32 lg:px-[6vw] mx-auto"
      >
        {specs.map((spec, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#FEF7E7] p-[1rem] md:p-[1.5vw] rounded-[.5rem] grid grid-cols-1 gap-y-[6.4rem]"
          >
            <div className="text-[5rem] lg:text-[5.5vw] font-semibold w-fit leading-[1] lg:leading-[1.5] ml-auto">{spec.digit}</div>
            <div className="grid gap-[1rem]">
              <p className='text-[1.9rem]'>{spec.title}</p>
              <p className='text-[1rem] lg:text-[1vw] leading-[1.5]'>{spec.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}