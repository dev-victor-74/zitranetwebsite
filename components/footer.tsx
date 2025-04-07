"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";

import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

import { Linkedin, Loader2, Mail, MapPin, PhoneCall } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { MdCopyright } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { subscribeToNewsLetter } from "@/lib/contact-request";

const Footer = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);
    await subscribeToNewsLetter(formData)
      .then((data) => {
        if (data?.success === false) {
          return toast.error(data.message);
        }
        if (data?.success === true) {
          formRef.current?.reset();
          return toast.success(data?.message!);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const thisYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full px-[13px] md:px-0 py-20 mt-10 bg-slate-100 flex flex-col gap-4">
      <div className="w-full md:w-[85%] h-full mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-5">
        <div className="flex flex-col gap-2 flex-1">
          <Link href={"/"} className="flex items-center cursor-pointer">
            <div className="relative w-10 h-8 -ml-2">
              <Image fill src="/zitralogo3.png" alt="zitranet" priority />
            </div>
            <div className="text-lg select-none font-bold md:font-extrabold mt-[2px] text-zinc-800 tracking-wide">
              Zitranet
            </div>
          </Link>
          <p className="text-[12px] md:text-[14px] font-medium text-neutral-900">
            At Zitranet, we specialize in revolutionizing various industries
            through innovative technology solutions.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <a
              href="https://www.facebook.com/profile.php?id=61562499407000&mibextid=ZbWKwL"
              target="_blank"
              className="p-[6px] rounded- bg-[#91073b] rounded-full flex items-center justify-center"
            >
              <MdFacebook color="white" size={16} />
            </a>
            <a
              href={
                "https://www.linkedin.com/in/zitranet-technologies-006828323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              target="_blank"
              className="p-[6px] rounded- bg-[#91073b] rounded-full flex items-center justify-center"
            >
              <Linkedin color="white" size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <h2 className="text-sm md:text-[17px] mt-3 font-bold text-zinc-800 ">
            Quick links
          </h2>
          <div className="flex flex-col gap-5 mt-1">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={cn(
                  "text-[13px] md:text-[14px] transition font-medium text-neutral-950 hover:text-[#91073b]",
                  pathname === link.href && "text-[#91073b]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[6px] flex-1">
          <h2 className="text-sm md:text-[17px] mt-3 font-bold text-zinc-800">
            Contact Info
          </h2>
          <div className="flex flex-col gap-5 mt-1">
            <a
              href="tel:+2348131612375"
              className="flex items-center gap-[6px] hover:text-[#91073b]"
            >
              <PhoneCall size={18} className="" />
              <span className="text-[13px]md: text-[14px] font-medium hover:text-[#91073b] text-neutral-900">
                +234 8131612375
              </span>
            </a>
            <a
              href="mailto:zitranet.inc@gmail.com"
              className="flex items-center gap-[6px] hover:text-[#91073b]"
            >
              <Mail size={18} className="" />
              <span className="text-[13px] md:text-[14px] font-medium hover:text-[#91073b] text-neutral-900">
                zitranet.inc@gmail.com
              </span>
            </a>
            <div className="flex items-center gap-1 ">
              <MapPin size={18} className="" />
              <span className="text-[13px] md:text-[14px] flex-1 font-medium hover:text-[#1d1c1c] text-neutral-900">
                24, Abebi shopping complex, Mosafejo bus stop, Sango Eleyele
                Road, Ibadan, Nigeria.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="text-sm md:text-[17px] mt-3 font-bold text-zinc-800">
            NewsLetter
          </h2>
          <div className="flex flex-col gap-4 mt-1">
            <p className="text-[13px] md:text-[14px] font-medium text-neutral-900 mt-2">
              Subscribe to keep receiving updates about our product
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex items-center h-[40px] ring-1 ring-[#b13363] py-1 rounded-sm"
            >
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="text-sm w-full h-full bg-inherit font-medium text-zinc-700 outline-none focus:outline-none rounded-none px-2"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-[40px] w-[50%] rounded-none bg-[#91073b] hover:bg-[#b33867]"
              >
                {loading ? (
                  <div className="w-full flex items-center justify-center gap-2">
                    <Loader2
                      size={14}
                      className=" animate-spin text-zinc-800"
                    />
                    <span className="text-sm font-medium text-zinc-800">
                      Sending...
                    </span>
                  </div>
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[85%] h-[2px] bg-pink-200 mx-auto mt-5 flex items-center justify-center" />
      <div className="w-full md:w-[85%] mx-auto gap-2 flex flex-col md:flex-row justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className={cn(
              "text-[12px] md:text-[13px] transition font-semibold text-neutral-950 hover:text-[#91073b]"
            )}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className={cn(
              "text-[12px] md:text-[13px] transition font-semibold text-neutral-950 hover:text-[#91073b]"
            )}
          >
            Terms of Service
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-1 md:gap-2">
            <span className="text-[12px] md:text-[13px] font-semibold">
              Copyright
            </span>
            <MdCopyright color="" size={16} />
            <span className="text-[12px] md:text-[13px] font-semibold">
              {thisYear}
            </span>
            <span className="text-[12px] md:text-[13px] font-semibold">
              Zitranet
            </span>
            <GoDotFill />
            <span className="text-[12px] md:text-[13px] font-semibold">
              All Rights Reserved
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
