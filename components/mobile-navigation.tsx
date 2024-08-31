"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DialogTitle } from "@radix-ui/react-dialog";
import ContactInfo from "./contact-info";
import { cn } from "@/lib/utils";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const MobileNavigation = () => {
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
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-zinc-900" />
      </SheetTrigger>
      <SheetContent
        className="px-5 py-4 h-full flex flex-col justify-between"
        side="right"
      >
        <DialogTitle className="text-zinc-800 text-sm font-bold ml-5">
          {/* Zitranet */}
        </DialogTitle>
        <div className="flex w-full flex-col items-center gap-4 mt-6 ">
          {routes.map((route: { label: string; path: string }) => (
            <Link
              href={route.path}
              key={route.label}
              className={cn(
                "text-sm font-semibold w-[90%] text-center px-4 py-2 rounded-full transition hover:text-[#91073b] text-zinc-800",
                pathname === route.path && "text-zinc-200 bg-[#91073b]"
              )}
            >
              <p className="text-inherit">{route.label}</p>
            </Link>
          ))}
        </div>
        <div className="mt-auto pr-2 pl-0">
          <div className="w-full flex items-center justify-center px-2 mt-2 md:mt-0">
            <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-start md:items-center md:justify-center gap-2">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
                  <MapPin size={14} color="white" />
                </div>
                <span className="text-xs font-neutral text-neutral-800">
                  24, Abebi shopping complex, Mosafejo bus stop, Sango Eleyele
                  Road, Ibadan, Nigeria.
                </span>
              </div>
              <a href="tel:+2348131612375" className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
                  <PhoneCall size={14} color="white" />
                </div>
                <span className="text-xs font-neutral text-neutral-800">
                  +234 8131612375
                </span>
              </a>
              <a
                href="mailto: zitranet.inc@gmail.com"
                className="flex items-center gap-2"
              >
                <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
                  <Mail size={14} color="white" />
                </div>
                <span className="text-xs font-normal text-neutral-800">
                  zitranet.inc@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
