"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MoveRight, MoveLeft } from "lucide-react";


const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content:
      "Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence are unparalleled.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Marketing Director, GrowthCo",
    content:
      "I've never seen such a perfect blend of creativity and technical expertise. They delivered beyond our expectations, and in record time!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "Founder, StartupX",
    content:
      "From concept to execution, their work is flawless. They're not just service providers; they're true partners in our success story.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
<div className="bg-darkyellow min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          className="bg-lightyellow rounded-lg shadow-xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
            <motion.div
              className="relative overflow-hidden bg-red rounded-[1rem] aspect-square w-full max-w-[300px]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <div className="flex flex-col justify-between">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-xl md:text-2xl text-red mb-6">
                      {testimonials[currentIndex].content}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold text-[#621B1D]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-red">{testimonials[currentIndex].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex justify-start mt-8 space-x-4">
                <motion.button
                  onClick={prevTestimonial}
                  className="bg-red text-white p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoveLeft />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="bg-red text-white p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MoveRight />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
