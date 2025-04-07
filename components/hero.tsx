"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <header
      style={{
        backgroundImage: `url(/homeherosection.jpeg)`,
        backgroundSize: "cover",
      }}
      className="w-full h-[65vh] md:h-[70vh] px-2 md:px-0 lg:h-[90vh] bg-no-repeat bg-contain bg-center overflow-hidden bg-rose-300 relative"
    >
      <div className="absolute top-0 w-full right-0 bg-black/50 p-2 md:p-0 h-full flex items-center justify-start">
        <div className="w-full mx-auto flex items-center justify-center">
          <div className="flex flex-col items-center md:items-start px-1 w-full md:w-[80%] lg:w-[60%] gap-3 ">
            <h1 className="text-xl tracking-wide sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-zinc-200 text-center">
              Creating Digital Products That&apos;s Beyond Innovation
            </h1>
            <p className="text-sm font-medium md:font-semibold text-neutral-200 text-center tracking-wide">
              Ready to embark on your digital transformation journey?, lets
              create something extraordinary together
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 gap-y-5 w-full mt-8 md:mt-2">
              <Button asChild variant={"ghost"} className=" py-2 h-12">
                <Link
                  href="/contact"
                  className="text-sm font-semibold bg-[#91073b] md:ml-1 hover:scale-[1.01] transition sm:w-1/3 rounded-sm w-1/2 md:w-1/3
                lg:w-[27%] shadow-sm hover:bg-pink-700 text-center text-zinc-200 hover:text-zinc-300 md:mt-2"
                >
                  Contact Us
                </Link>
              </Button>

              <Button
                variant={"ghost"}
                asChild
                className=" bg-slate-100 text-zinc-800 py-2 h-12"
              >
                <a
                  href="https://www.zitrabot.com"
                  target="_blank"
                  className="text-sm font-semibold ring-1 ring-[#91073b] md:ml-1 hover:scale-[1.01] transition sm:w-1/3 rounded-sm w-1/2 md:w-1/3
              lg:w-[27%] shadow-sm text-center text-zinc-200 md:mt-2 flex items-center gap-1"
                >
                  <Zap size={14} className=" animate-bounce text-[#91073b]" />{" "}
                  Try Zitrabot Now!
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
