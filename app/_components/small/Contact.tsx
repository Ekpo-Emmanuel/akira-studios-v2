'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-[1.125rem] cursor-pointer">admin@akiramediamarketing.com</p>
      <div className="mt-1 h-[2px] w-full bg-darkyellow rounded-full overflow-hidden">
        <motion.div
          className="h-[2px] bg-red rounded-full"
          initial={{ width: "20%" }}
          animate={{ width: isHovered ? "100%" : "20%" }}
          transition={{ duration: .5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Contact;
