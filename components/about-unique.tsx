"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface aboutProps {
  image: string;
  label: string;
  desc1?: string;
  desc2?: string;
  desc3?: string;
  className: string;
  imageClass: string;
}
const AboutUnique = ({
  image,
  label,
  desc1,
  desc2,
  desc3,
  className,
  imageClass,
}: aboutProps) => {
  return (
    <div className="w-full rounded-[2px] py-8 mt-3 px-1">
      <div
        className={cn(
          "w-full md:w-[90%] lg:w-[80%] px-[10px] mx-auto flex flex-col justify-between items-center",
          className
        )}
      >
        <div
          className={cn(
            "bg-slate-400 rounded-[2px] flex relative items-center justify-center",
            imageClass
          )}
        >
          <Image
            fill
            src={image}
            alt={label}
            className="rounded-[2px] w-full"
          />
        </div>
        <div className="w-full flex flex-col gap-4 mx-auto md:mx-0">
          <h3 className="text-xl md:text-3xl font-extrabold text-zinc-800 text-center md:text-start ml-1">
            {label}
          </h3>
          <div className="text-[13px] md:text-[16px] font-medium text-center md:text-justify text-neutral-900 flex flex-col gap-3">
            {desc1 ? <p className=" text-inherit">{desc1}</p> : ""}
            {desc2 ? <p className="text-inherit">{desc2}</p> : ""}
            {desc3 ? <p className=" text-inherit">{desc3}</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUnique;
