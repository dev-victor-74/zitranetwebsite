"use client";

import Link from "next/link";
import Image from "next/image";

const KnowUs = () => {
  return (
    <div className="w-full md:w-[94%] lg:w-[85%] mx-auto mt-6 md:mt-16">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <div className="flex w-full md:w-[60%] ring-2 ring-pink-200 relative rounded-[2px] overflow-hidden h-[310px] md:h-[370px] bg-slate-500">
          <Image fill src="/teams2.png" alt="about" />
        </div>
        <div className="w-full flex flex-col items-center md:items-start gap-2 px-1">
          <h2 className="text-xl md:text-3xl font-extrabold text-zinc-800">
            About Us
          </h2>
          <p className="text-[13px] md:text-[16px] font-medium text-neutral-800 text-center md:text-justify">
            At Zitranet, we specialize in revolutionizing various industries
            through innovative technology solutions. Our mission is to enhance
            customer experiences, streamline operations, and drive business
            growth by providing cutting-edge chatbot technology, expert
            consultation, reliable maintenance, web development, and Salesforce
            administration services tailored specifically to your business
            needs.
          </p>
          <Link
            href="/about"
            className="text-sm mt-4 text-center hover:opacity-75 font-semibold text-zinc-200 px-4 py-3 w-[80%] md:w-1/2 lg:w-1/3 rounded-sm bg-[#91073b]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
