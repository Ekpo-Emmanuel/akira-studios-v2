import React from "react";
import clsx from "clsx";
import localFont from "next/font/local";

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
export default function Hero() {
  return (
    <div>
      <div className="px-4 lg:px-32 h-screen relative flex flex-col justify-center items-center py-[3rem]">
        <p className={`${satoshi.className} antialiased text-[1rem] uppercase font-medium`}>
          We are Akira
        </p>
        <h1
          className={clsx(
            bentoga.className,
            "antialiased mt-2 bg-lightyellow text-center text-[12vw] sm:text-[9vw] lg:text-[10vw] leading-[1.1] sm:leading-[.9]"
          )}
        >
          Elevating Your Digital Presence
        </h1>
        <div className="relative mt-6 md:mt-12 transition hover:scale-90 cursor-pointer">
          <img src="/images/badge.svg" className="size-48 rotating-image" />
          <p
            className={clsx(
              bentoga.className,
              "antialiased w-full text-lightyellow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[1.5rem] leading-[1.1]"
            )}
          >
            Let's work <br /> together
          </p>
        </div>
        <div
          className={clsx(
            satoshi.className,
            "absolute bottom-10 hidden sm:flex items-end justify-between w-full"
          )}
        >
          <div className="pl-[2.5rem] lg:pl-32">
            <div className="flex items-center gap-3">
              <div className="size-3 bg-red rounded-full" />
              <p>CREATIVE AGENCY</p>
            </div>
            <p className="mt-3 font-light text-[.875rem] tracking-[1px] uppercase">
              Unleash The Power
              <br /> of Visuals
            </p>
          </div>
          <div className="pr-[2.5rem] lg:pr-32">
            <div>
              <p className="text-[1.125rem]">contact@akira.com</p>
              <div className="mt-1 h-[2px] w-full bg-darkyellow rounded-full">
                <div className="h-[2px] w-[20%] bg-red rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
