"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

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

const faqs = [
  {
    question: "How does Paprika benefit my website?",
    answer:
      "Papika empowers your website by providing an energetic and captivating online environment. With its customizable design options and user-friendly interface, Paprika helps you create an immersive experience that resonates with your audience.",
  },
  {
    question: "How does Paprika benefit my website?",
    answer:
      "Papika empowers your website by providing an energetic and captivating online environment. With its customizable design options and user-friendly interface, Paprika helps you create an immersive experience that resonates with your audience.",
  },
  {
    question: "How does Paprika benefit my website?",
    answer:
      "Papika empowers your website by providing an energetic and captivating online environment. With its customizable design options and user-friendly interface, Paprika helps you create an immersive experience that resonates with your audience.",
  },
  {
    question: "How does Paprika benefit my website?",
    answer:
      "Papika empowers your website by providing an energetic and captivating online environment. With its customizable design options and user-friendly interface, Paprika helps you create an immersive experience that resonates with your audience.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="px-4 sm:px-[2.5rem] py-[5rem] md:py-24 lg:py-38 max-w-[90rem] mx-auto">
        <p
          className={`${bentoga.className} antialiased lg:text-center max-w-lg lg:mx-auto text-[2.4rem] sm:text-[3.7rem] font-medium leading-[1.2]`}
        >
          Frequently asked questions
        </p>
        <div className="grid lg:grid-cols-2 lg:gap-y-[5rem] lg:gap-x-[2rem] mt-[4rem]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-5 sm:py-[3rem] lg:py-[1.9rem] border-b border-dblack/10 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className={`flex flex-col ${activeIndex === index ? "gap-7" : ""}`}>
                <div className="flex items-center gap-2 justify-between">
                  <p className="text-[1.8125rem] ">
                    {faq.question}
                  </p>
                  <div className="bg-gray-100 rounded-[100%] w-[3rem] h-[3rem] flex items-center justify-center text-[#484848] p-4">
                    {activeIndex === index ? (
                      <Minus />
                    ) : (
                      <Plus />
                    )}
                  </div>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="leading-[1.5] text-[1rem] ">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
