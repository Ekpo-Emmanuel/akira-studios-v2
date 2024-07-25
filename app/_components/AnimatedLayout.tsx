'use client'

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 }
};

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}