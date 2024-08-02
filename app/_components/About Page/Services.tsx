"use client";
import React, { useEffect } from 'react';
import clsx from "clsx";
import localFont from "next/font/local";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});

interface Service {
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    title: "Mission",
    desc: "Strategic prowess defines every triumphant brand odyssey. We navigate market intricacies, consumer perceptions, and your brand's essence to outline a roadmap that bridges vision and implementation."
  },
  {
    title: "Vision",
    desc: "We transcend the ordinary to elevate your brand's visual storytelling. Our efficient and adaptable team crafts stunning videography, photography, and visual content, ensuring high-quality, cost-effective results"
  },
  {
    title: "Copywriting",
    desc: "Communication forms the pulsating core of brand connections. We sculpt narratives that enthrall, strategies that reverberate, and messages that ignite bonds."
  },
  {
    title: "Development",
    desc: "In the current digital realm, innovation reigns supreme. Our digital solutions embolden brands with avant-garde strategies, web design, and technology."
  }
];

export default function Services() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='bg-dblack text-white'>
      <div className="px-4 sm:px-[2.5rem] py-[5rem] md:py-24 lg:py-38 max-w-[79rem] mx-auto">
        <motion.div
          className="relative"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          ref={ref}
        >
          <motion.div
            className="overflow-hidden absolute left-0 bottom-0 rounded-full -rotate-12 translate-y-10 sm:translate-y-28"
            variants={imageVariants}
          >
            <img 
              src="/images/space2.jpg"
              alt="about-us-img2"
              className="h-auto w-16 sm:w-20 md:w-32"
            />
          </motion.div>
          <motion.div
            className="overflow-hidden absolute right-0 top-0 rounded-full rotate-12 -translate-y-24 blur-[2px]"
            variants={imageVariants}
          >
            <img 
              src="/images/space1.jpg"
              alt="about-us-img1"
              className="h-auto w-16 sm:w-20 md:w-32"
            />
          </motion.div>
          <motion.p
            className="relative text-center text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] leading-[1.2]"
            variants={itemVariants}
          >
            To truly shine, you need a touch of brilliance. 
            Our talented designers experts are here to bring your digital visions to life.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 mt-[4rem] lg:mt-[10rem] divide-y-[1px] divide-lightyellow/30 items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="grid lg:grid-cols-[.25fr_1fr_1fr] gap-[2vw] py-[3rem] cursor-default"
              variants={itemVariants}
            >
              <motion.span
                className="font-semibold text-[1rem] leading-[1.5]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                0{index + 1}
              </motion.span>
              <motion.p
                className={clsx(bentoga.className, "antialiased text-[1.8rem] leading-[1.5]")}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.title}
              </motion.p>
              <motion.p
                className="text-[1.125rem] leading-[1.5]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}