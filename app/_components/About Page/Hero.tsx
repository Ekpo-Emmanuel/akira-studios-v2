import React from "react";
import clsx from "clsx";
import localFont from "next/font/local";
import { MarqueeDemoVertical } from "./HeroAnimated";

const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});
const satoshi = localFont({
  src: [
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
export default function Hero() {
  return (
    <div className="text-lightyellow w-[100%] overflow-clip">
        <div className="absolute">
        <MarqueeDemoVertical />
        </div>
        <div className="absolute top-0 left-0 w-full h-screen bg-black/70 overflow-hidden"/>
      <div className="relative px-4 lg:px-32 h-screen flex flex-col justify-center items-center py-[3rem]">
        <h1
          className={clsx(
            bentoga.className,
            "text-center text-[24vw] sm:text-[15vw] leading-[1.1] sm:leading-[.9]"
          )}
        >
          Akira
        </h1>
        <p className="text-[1rem] text-center md:w-3/4 lg:w-1/2 mx-auto">
          To truly stand out from the crowd, you need to be exceptional. Embrace
          the refined elegance of Paprika. Here, our team of creative designers
          and skilled developers is dedicated to making your digital dreams
          blossom beautifully.
        </p>

        <div
          className={clsx(
            satoshi.className,
            "absolute bottom-10 hidden sm:flex items-end justify-between w-full"
          )}
        >
          <div className="pl-[2.5rem]">
            <div className="flex items-center gap-3">
              <div className="size-3 bg-lightyellow rounded-full" />
              <p>CREATIVE AGENCY</p>
            </div>
            <p className="mt-3 font-light text-[.875rem] tracking-[1px] uppercase">
              Unleash The Power
              <br /> of Visuals
            </p>
          </div>
          <div className="pr-[2.5rem]">
            <div className="relative transition hover:scale-90 cursor-pointer">
              <img src="/images/badge.svg" className="size-30 rotating-image" />
              <p
                className={clsx(
                  bentoga.className,
                  "w-full text-lightyellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1rem] leading-[1.1]"
                )}
              >
                Let's work <br /> together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
