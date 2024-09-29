"use client";

import Link from "next/link";

const FooterReminder = () => {
  return (
    <div className="w-[95%] md:w-[50%] lg:w-[35%] mx-auto flex items-center justify-center mt-5 md:mt-16 bg-[#91073b] py-3 rounded-sm px-5">
      <div className="flex flex-col gap-2 items-center justify-center px-4 py-3">
        <h2 className=" text-zinc-200 font-bold text-center">
          “Beyond Innovation”
        </h2>
        <p className=" text-sm font-medium text-zinc-300 text-center">
          We are your partner in navigating the ever-evolving landscape of
          digital transformation.
        </p>
        <Link
          href="/contact"
          className=" px-3 rounded-sm bg-slate-100 text-center py-2 text-sm font-semibold text-[#91073b]"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default FooterReminder;
