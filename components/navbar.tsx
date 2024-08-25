"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge";
import MobileNavigation from "./mobile-navigation";
import Image from "next/image";



const Navbar = () => {

    const pathname  = usePathname();

    const routes =
       [
        {
            label: "Home",
            path : "/"
        },
        {
            label: "About",
            path : "/about"
        },
        {
            label: "Services",
            path : "/services"
        },
        {
            label: "Contact",
            path : "/contact"
        },
        
       ]

  return (
    <nav className='sticky top-0 right-0 z-50 backdrop-blur-sm bg-white/50 shadow-sm w-full md:w-[100%] mx-auto px-7 md:px-0 py-2 h-[60px]'>
        <div className="w-full md:w-[85%] h-full mx-auto flex items-center justify-between">
          <Link href={"/"} className="flex items-center cursor-pointer">
               <div className="relative -ml-[10px] md:-ml-4 w-16 h-12">
                  <Image
                    fill
                    src="/zitralogo3.png"
                    alt="zitranet"
                    priority
                  />
               </div>
               <div className="text-xl select-none font-bold mt-2 text-zinc-700 tracking-wide">
                   Zitranet
               </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 ">
             {
                routes.map((route:{label:string, path:string})=>(
                    <Link href={route.path} key={route.label}
                     className={twMerge("text-[15px] font-bold transition hover:text-[#91073b] hover:scale-[1.02] text-zinc-800",pathname === route.path && "text-[#91073b]")}
                    >
                       <p className="text-inherit select-none">
                          {route.label}
                       </p>
                    </Link>
                ))
             }
          </div>
          <div className="flex items-center md:hidden cursor-pointer">
             <MobileNavigation/>
          </div>
          </div>
    </nav>
  )
}

export default Navbar