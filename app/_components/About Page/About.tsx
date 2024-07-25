import React from 'react'

export default function About() {
  return (
    <div className='px-4 sm:px-[2.5rem] py-[5rem] md:py-24 lg:py-38'>
        <div className="">
            <p className="text-center text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] leading-[1.2] max-w-6xl mx-auto">
                {/* <span className="hidden md:inline ml-52"></span> */}
                Our skill in translating abstract concepts into visually stunning representations is nothing short of exceptional.
            </p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[2rem] mt-10 sm:mt-32 lg:px-[6vw] mx-auto">
                {specs.map((spec, index) => (
                    <div 
                        key={index}
                        className="bg-[#FEF7E7] p-[1rem] md:p-[1.5vw] rounded-[.5rem] grid grid-cols-1 gap-y-[6.4rem]"
                    >
                        <div className="text-[5rem] lg:text-[5.5vw] font-semibold w-fit leading-[1] lg:leading-[1.5] ml-auto">{spec.digit}</div>
                        <div className="grid gap-[1rem]">
                            <p className='text-[1.9rem]'>{spec.title}</p>
                            <p className='text-[1rem] lg:text-[1vw] leading-[1.5] '>{spec.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}


const specs = [
    {
        title: "Clients",
        digit: "+30",
        desc: "Bringing unique challenges that have enriched our creative journey and expanded our industry impact."
    },
    {
        title: "Awards",
        digit: "+26",
        desc: "Celebrating our commitment to excellence, innovation, and the transformative power of outstanding design."
    },
    {
        title: "Years of experience",
        digit: "2024",
        desc: "We elevated our design agency to new heights, embracing cutting-edge trends and innovative practices"
    },
    {
        title: "Growth",
        digit: "137%",
        desc: "The trust our clients place in our ability to deliver exceptional design solutions."
    },
    {
        title: "Projects Delivered",
        digit: "100+",
        desc: "Our exceptional work has been recognized with 26 prestigious awards, celebrating our commitment to excellence"
    },
    {
        title: "Cases",
        digit: "+56",
        desc: "Our diverse project experience showcases our ability to tailor bespoke solutions that drive success"
    },
]