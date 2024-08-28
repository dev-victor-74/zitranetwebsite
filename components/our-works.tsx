"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";

const OurWorks = () => {
  const works = [
    {
      label: "Zitrabot",
      image: "/wavy.jpeg",
      href: "https://www.zitrabot.com",
    },
    {
      label: "Zitrabote",
      image: "/wavy.jpeg",
      href: "https://www.zitrabot.com",
    },
    {
      label: "Zitraboter",
      image: "/wavy.jpeg",
      href: "https://www.zitrabot.com",
    },
  ];
  return (
    <div className=" max-w-[320px] w-[90%] mx-auto mt-2">
      <Carousel className="w-full">
        <CarouselContent className="flex items-center gap-3">
          {works.map((work) => (
            <CarouselItem
              className="basis-[100%] p-2 shadow-md  rounded-sm"
              key={work.label}
            >
              <Link
                href={work.href}
                target="_blank"
                className="p-1 w-full ring-1 rounded-sm ring-[#f0c3de] flex flex-col gap-1"
              >
                <div className="relative w-full h-[160px] rounded-sm overflow-hidden">
                  <Image src={work.image} fill alt={work.label} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-800">
                  {work.label}
                </h3>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OurWorks;
