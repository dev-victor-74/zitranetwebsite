"use client";

import Link from "next/link";

const Hero = () => {
  const images = ["/home2.jpg", "/home3.jpg", "/home.jpg"];

  return (
    <header
      style={{
        backgroundImage: `url(${images[2]})`,
        backgroundSize: "cover",
      }}
      className="w-full h-[60vh] md:h-[70vh] px-2 md:px-0 lg:h-[85vh] bg-no-repeat overflow-hidden bg-rose-300 relative"
    >
      <div className="absolute top-0 w-full right-0 bg-black/75 p-2 md:p-0 h-full flex items-center justify-start">
        <div className="w-full md:w-[95%] mx-auto">
          <div className="flex flex-col items-center md:items-start px-1 w-full md:w-[65%] lg:w-[50%] md:ml-16 rounded-sm gap-3 md:gap-3 ">
            <h1 className="text-xl font-bold tracking-wide md:text-3xl lg:text-4xl md:font-extrabold text-zinc-200 text-center md:text-start">
              Creating Digital Products In The Shortest Time
            </h1>
            <p className="text-sm font-medium md:font-semibold text-neutral-300 text-center md:text-start tracking-wide">
              Ready to embark on your digital transformation journey?, lets
              create something extraordinary together
            </p>
            <Link
              href={"/contact"}
              className="text-sm ring-1 ring-pink-300 font-semibold bg-slate-50 px-4 py-3 rounded-sm w-1/2 md:w-[40%] text-center text-pink-700 md:mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
