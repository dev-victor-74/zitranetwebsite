"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import MobileNavigation from "./mobile-navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Services",
      path: "/services",
    },
    // {
    //   label: "Contact",
    //   path: "/contact",
    // },
  ];

  return (
    <nav className="sticky top-0 right-0 z-50 backdrop-blur-sm bg-white/50 shadow-sm w-full md:w-[100%] mx-auto px-3 md:px-0 py-2 h-[60px]">
      <div className="w-full md:w-[85%] h-full mx-auto flex items-center justify-between">
        <Link href={"/"} className="flex items-center cursor-pointer">
          <div className="relative -ml-[10px] md:-ml-4 w-8 h-6 md:w-12 md:h-9">
            <Image fill src="/zitralogo3.png" alt="zitranet" priority />
          </div>
          <div className="text-lg select-none font-bold md:font-extrabold mt-2 text-zinc-800 tracking-wide">
            Zitranet
          </div>
        </Link>
        <div className="flex items-center gap-x-20">
          <div className="hidden md:flex items-center gap-6 ">
            {routes.map((route: { label: string; path: string }) => (
              <Link
                href={route.path}
                key={route.label}
                className={cn(
                  "text-[15px] font-bold transition hover:text-[#91073b] hover:scale-[1.02] text-zinc-800",
                  pathname === route.path && "text-[#91073b]"
                )}
              >
                <p className="text-inherit select-none">{route.label}</p>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <Button
              asChild
              variant={"ghost"}
              className=" py-2 h-10 text-sm font-semibold bg-[#91073b] hover:scale-[1.01] transition rounded-sm hover:bg-pink-700 text-center text-zinc-200 hover:text-zinc-300 md:mt-2"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>

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
          <div className="flex items-center md:hidden cursor-pointer">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
