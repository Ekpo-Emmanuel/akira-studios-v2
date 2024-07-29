"use client";
import clsx from "clsx";
import localFont from "next/font/local";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const bentoga = localFont({ src: "../public/fonts/bentoga/Bentoga-Thin.otf" });
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function NotFound() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid gap-[1rem]">
        <h2
          className={clsx(
            bentoga.className,
            "antialiased text-[8.875rem] leading-[1.1] text-center"
          )}
        >
          404
        </h2>
        <p
          className={clsx(
            bentoga.className,
            "antialiased text-[32px] leading-[36px] text-center uppercase"
          )}
        >
          page not found
        </p>
        <span className="text-[1rem] leading-[1.5] max-w-[20rem] text-center">
          The page you are looking for doesn't exist or has been moved
        </span>
        <Link href="/" className="mx-auto mt-6">
            <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
            >
            <p className="text-[1.125rem] cursor-pointer uppercase">
                back home
            </p>
            <div className="mt-1 h-[2px] w-24 bg-darkyellow rounded-full overflow-hidden">
                <motion.div
                className="h-[2px] bg-red rounded-full"
                initial={{ width: "20%" }}
                animate={{ width: isHovered ? "100%" : "20%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>
            </div>
        </Link>
      </div>
    </div>
  );
}
