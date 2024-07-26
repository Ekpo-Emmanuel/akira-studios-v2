"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulating load time
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-red flex items-center justify-center z-50"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="text-lightyellow text-6xl font-bold"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            AKIRA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;