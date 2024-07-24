import { cn } from "@/lib/utils";
import Marquee from "../magic ui/Marquee";

const images = [
    "/images/projects/1.jpg",
    "/images/projects/2.jpg",
    "/images/projects/3.jpg",
    "/images/projects/4.jpg",
    "/images/projects/1.jpg",
    "/images/projects/2.jpg",
    "/images/projects/3.jpg",
    "/images/projects/4.jpg",
    "/images/projects/1.jpg",
    "/images/projects/2.jpg",
    "/images/projects/3.jpg",
    "/images/projects/4.jpg",
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({ img }: { img: string }) => {
  return (
    <div
      className="group h-[70vh] w-[50vw] md:w-[30vw] overflow-clip object-contain rounded-[1rem]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
    </div>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden">
      <Marquee vertical className="[--duration:60s]">
        {firstRow.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:70s]" reverse>
        {secondRow.map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
      </Marquee>
      <div className="hidden md:flex">
        <Marquee vertical className="[--duration:70s]">
            {firstRow.map((img, index) => (
            <ImageCard key={index} img={img} />
            ))}
        </Marquee>
        <Marquee vertical className="[--duration:70s]" reverse>
            {secondRow.map((img, index) => (
            <ImageCard key={index} img={img} />
            ))}
        </Marquee>
      </div>
    </div>
  );
}