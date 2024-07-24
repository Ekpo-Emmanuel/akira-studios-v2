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

export default function About() {
  return (
    <div className="bg-darkyellow">
      <div className="px-4 sm:px-[2.5rem] md:px-[3.5rem] py-[3rem] md:py-24 lg:md:py-40 max-w-[85rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-[2rem] items-start">
          <div className="flex items-center gap-3 uppercase">
            <div className="size-3 bg-red rounded-full" />
            <p className={satoshi.className}>About us</p>
          </div>
          <div className="grid grid-cols-1 gap-[2rem] ">
            <p className="text-[1.5rem] md:text-[2rem] leading-[1.5]">
              At Akira Studios, we are passionate about elevating your digital
              marketing strategy. Our team of experts specializes in crafting
              visually stunning and engaging content that captivates your
              audience.
            </p>
            <div className="w-full h-[1px] bg-red rounded-full" />
            <p className="text-[1.5rem] md:max-w-sm md:text-[1rem] leading-[1.5]">
              From dynamic eye-catching visuals that capture an audience to
              product shots. Amplify your digital marketing with our
              state-of-the-art services. We created cinematic masterpieces that
              showcase products and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
