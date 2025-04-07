"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

const FooterReminder = () => {
  return (
    <div className="w-[95%] md:w-[50%] lg:w-[35%] mx-auto flex items-center justify-center mt-5 md:mt-10 bg-[#91073b] py-3 rounded-sm px-5">
      <div className="flex flex-col gap-2 items-center justify-center px-4 py-3">
        <h2 className=" text-zinc-200 font-bold text-center">
          “Beyond Innovation”
        </h2>
        <p className=" text-sm font-medium text-zinc-300 text-center">
          We are your partner in navigating the ever-evolving landscape of
          digital transformation.
        </p>

        <Button
          variant={"ghost"}
          asChild
          className=" bg-slate-50 text-zinc-800 py-2 h-10 text-sm font-semibold ring-1 ring-[#91073b] md:ml-1 hover:scale-[1.01] transition rounded-sm 
               text-center  md:mt-2 flex items-center gap-1"
        >
          <a href="https://www.zitrabot.com" target="_blank">
            <Zap size={14} className=" animate-bounce text-[#961848]" /> Try
            Zitrabot Now!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FooterReminder;
