import React from 'react'
import clsx from "clsx";
import localFont from "next/font/local";

const bentoga = localFont({
  src: "../../../public/fonts/bentoga/Bentoga-Thin.otf",
});
export default function Services() {
  return (
    <div className='bg-red text-lightyellow'>
        <div className="px-4 sm:px-[2.5rem] py-[5rem] md:py-24 lg:py-38 max-w-[79rem] mx-auto">
            <div className="relative">
                <div className="overflow-hidden absolute left-0 bottom-0 rounded-full -rotate-12 translate-y-10 sm:translate-y-28">
                    <img 
                        src="/images/space2.jpg"
                        alt="about-us-img2"
                        className="h-auto w-16 sm:w-20 md:w-32"
                    />
                </div>
                <div className="overflow-hidden absolute right-0 top-0 rounded-full rotate-12 -translate-y-24 blur-[2px]">
                    <img 
                        src="/images/space1.jpg"
                        alt="about-us-img1"
                        className="h-auto w-16 sm:w-20 md:w-32"
                    />
                </div>
                <p className="relative text-center text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] leading-[1.2]">
                    To truly shine, you need a touch of brilliance. 
                    Our talented designers experts are here to bring your digital visions to life.
                </p>
            </div>

            <div className="grid grid-cols-1 mt-[4rem] lg:mt-[10rem] divide-y-[1px] divide-lightyellow/30 items-center justify-center">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="grid lg:grid-cols-[.25fr_1fr_1fr] gap-[2vw] py-[3rem]"
                    >
                        <span className="font-semibold text-[1rem] leading-[1.5]">0{index + 1}</span>
                        <p className={clsx(bentoga.className, "text-[1.8rem] leading-[1.5]")}>{service.title}</p>
                        <p className="text-[1.125rem] leading-[1.5]">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

const services = [
    {
        title: "Marketing",
        desc: "Strategic prowess defines every triumphant brand odyssey. We navigate market intricacies, consumer perceptions, and your brand's essence to outline a roadmap that bridges vision and implementation."
    },
    {
        title: "Branding",
        desc: "Branding epitomizes crafting an identity that etches itself into memory. We mold captivating brand personalities by blending values, narratives, and design, crafting resonant experiences."
    },
    {
        title: "Copywriting",
        desc: "Communication forms the pulsating core of brand connections. We sculpt narratives that enthrall, strategies that reverberate, and messages that ignite bonds."
    },
    {
        title: "Development",
        desc: "In the current digital realm, innovation reigns supreme. Our digital solutions embolden brands with avant-garde strategies, web design, and technology."
    }
]
