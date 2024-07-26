import clsx from "clsx";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Link from "next/link";


const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
});

export default function ContactLight() {
  const badgeVariants = {
    hidden: { opacity: 0, rotate: -40, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: -20,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <Link href="contact">
        <motion.div
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: .9 }}
        className="relative w-fit mx-auto cursor-pointer"
        >
        <img src="/images/badge2.svg" className="size-48 rotating-image" />
        <p
            className={clsx(
            bentoga.className,
            "antialiased w-full text-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1]"
            )}
        >
            Let's work <br /> together
        </p>
        </motion.div>
    </Link>
  );
}