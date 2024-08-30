"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  const whyUs = [
    {
      label: "Innovative Solutions",
      desc: "We leverage the latest technologies and best practices to deliver innovative solutions that stay ahead of the curve.",
    },
    {
      label: "Client-Centric Approach",
      desc: "We Priotize understanding our clients needs and goals, ensuring that our solutions are tailored to their specifications.",
    },
    {
      label: "Expertise and Experience",
      desc: "With years of experience in the industry and a team of seasoned professionals, we have the knowledge and skills to tackle even the most complex challenges",
    },
    {
      label: "Commitment to Excellence",
      desc: "We are committed to delivering exceptional quality, reliability, and value in everything we do, earning the trust and loyalty of our clients",
    },
  ];

  return (
    <div className="w-full md:w-[90%] lg:w-[85%] mx-auto mt-12 md:mt-16">
      <div className="w-full flex flex-row-reverse items-center justify-between gap-4 md:gap-7">
        <div className="hidden md:flex ring-2 mt-10 ring-pink-300 w-full relative rounded-sm overflow-hidden h-[250px] md:h-[370px] bg-slate-500">
          <Image fill src="/chooseus.jpg" alt="about" />
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="text-xl md:text-3xl font-extrabold text-zinc-800">
            Why Choose Us
          </h2>
          <div className="w-full flex flex-col gap-[18px] mt-4 px-1">
            {whyUs.map((why: { label: string; desc: string }) => (
              <div
                key={why.label}
                className="w-full flex flex-col md:flex-row items-start gap-1 md:gap-3"
              >
                <div className="flex items-center justify-center mt-0 md:mt-[2px]">
                  <CheckCircle2 color="#91073b" size={20} />
                </div>
                <div className="w-full flex flex-col gap-[2px]">
                  <h4 className="text-[15px] font-bold text-zinc-900">
                    {why.label}
                  </h4>
                  <p className="text-[13px] md:text-[16px] font-medium text-neutral-800 text-start">
                    {why.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
