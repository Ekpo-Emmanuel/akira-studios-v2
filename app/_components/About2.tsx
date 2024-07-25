import React from "react";
import clsx from "clsx";
import localFont from "next/font/local";

const bentoga = localFont({
  src: "../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
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

export default function About2() {
  return (
    <div className="bg-red text-lightyellow">
      <div className="px-4 sm:px-[2.5rem] md:px-[3.5rem] py-[3rem] md:py-24 lg:md:py-40 max-w-[85rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] md:gap-20 gap-[2rem] items-start">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-3 uppercase">
              <div className="size-3 bg-lightyellow rounded-full" />
              <p className={satoshi.className}>Why us</p>
            </div>
            <div className="hidden md:block relative w-fit ml-auto -rotate-[20deg] transition hover:scale-90 cursor-pointer">
              <img src="/images/badge2.svg" className="size-48 rotating-image" />
              <p className={clsx(bentoga.className, "antialiased w-full text-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1]")}>
                Let's work <br /> together
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[2rem] ">
            <p className="text-[1.5rem] md:text-[2rem]  leading-[1.5]">
            At Akira Studios, we transcend the ordinary to elevate your brand's visual storytelling. Our efficient and adaptable team crafts stunning videography, photography, and visual content, ensuring high-quality, cost-effective results. 
            </p>
            <div className="w-full h-[1px] bg-lightyellow rounded-full" />
            <p className="text-[1.5rem] md:max-w-sm md:text-[1rem] leading-[1.5]">
                Let us captivate your audience and achieve your digital marketing goals with unparalleled excellence.
            </p>
            <div className="mt-12 block md:hidden relative w-fit mx-auto -rotate-[20deg] transition hover:scale-90 cursor-pointer">
              <img src="/images/badge2.svg" className="size-48 rotating-image" />
              <p className={clsx(bentoga.className, "antialiased w-full text-red absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1]")}>
                Let's work <br /> together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
