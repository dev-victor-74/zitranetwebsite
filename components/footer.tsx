"use client"

import { Loader2, Mail, MapPin, PhoneCall } from "lucide-react"
import { GoDotFill } from "react-icons/go";
import { MdCopyright } from "react-icons/md";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "./ui/button"
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image"
import toast from "react-hot-toast";

const Footer = () => {
    
    const pathname = usePathname();
    const[loading, setLoading]= useState(false);

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit=async(event: any)=>{
     event.preventDefault();
 
     setLoading(true);
 
     const formData = new FormData(event.target);
     formData.append("access_key", "e3c26f9d-cd7e-47bb-9d3c-785544d99658");
     formData.append("subject", "NewsLetter");
     formData.append("NewsLetter Alert", `
        I hope this message finds you well. I recently came across your website and am impressed by the valuable content you provide. I am interested in staying updated with the latest news, articles, and insights from your team.
 
        Could you please add my email address to your newsletter subscription list.
 
       Thank you for your time, and I look forward to receiving your updates.
       `);
     const object = Object.fromEntries(formData);
     const json = JSON.stringify(object);
     try {
        const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
        const res = await response.json();
        toast.success("Email sent successfully!");
         formRef?.current?.reset()
     } catch (error) {
        toast.error("Something went wrong, please try again")
     }finally{
      setLoading(false);
     }
  }

    const thisYear = new Date().getFullYear();

    const links =[
       {label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Services",href:"/services"},{label:"Contact",href:"/contact"},{label:"blog",href:"/blog"}
    ];

  return (
    <footer className='w-full px-7 md:px-0 mt-16 py-10 bg-slate-100 flex flex-col gap-4'>
        <div className="w-full md:w-[85%] h-full mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-5">

             <div className="flex flex-col gap-2 flex-1">
             <Link href={"/"} className="flex items-center cursor-pointer">
               <div className="relative w-14 h-12 -ml-2">
                  <Image
                    fill
                    src="/zitralogo3.png"
                    alt="zitranet"
                    priority
                  />
               </div>
               <div className="text-xl font-bold md:font-extrabold mt-2 text-zinc-800 tracking-wide">
                   Zitranet
               </div>
          </Link>
                  <p className="text-[15px] font-medium text-neutral-900">At Zitranet, we specialize in revolutionizing various industries through innovative technology solutions.
               </p>
                  <div className="flex items-center gap-2 mt-3">
                       <Link href={"/"} className="p-[6px] rounded- bg-[#91073b] rounded-full flex items-center justify-center">
                            <MdFacebook color="white" size={16}/>
                       </Link>
                       <Link href={""} className="p-[6px] rounded- bg-[#91073b] rounded-full flex items-center justify-center">
                            <BsInstagram color="white" size={16}/>
                       </Link>
                       <Link href={""} className="p-[6px] rounded- bg-[#91073b] rounded-full flex items-center justify-center">
                            <FaXTwitter color="white" size={16}/>
                       </Link>
                  </div>
             </div>

             <div className="flex flex-col gap-1 flex-1">
                  <h2 className="text-sm md:text-lg font-bold text-zinc-800">Quick links</h2>
                   <div className="flex flex-col gap-1">
                       {links.map(link=>(
                            <Link href={link.href} key={link.label}
                                className={twMerge("text-[16px] transition font-medium text-neutral-950 hover:text-[#91073b]" ,pathname === link.href && "text-[#91073b]")}>
                                {link.label}
                            </Link>
                              )) 
                        }
                   </div>
             </div>

             <div className="flex flex-col gap-[6px] flex-1">
               <h2 className="text-sm md:text-lg font-bold text-zinc-800">Contact Info</h2>
                <div className="flex flex-col gap-2">
                <div className="flex items-center gap-[6px]">
                     <MapPin size={16} />
                     <span className="text-[16px] font-medium hover:text-[#91073b] text-neutral-900">17 downing street, Nigeria</span>
                </div>
                <Link href="tel:+2348147249839" className="flex items-center gap-[6px]">
                     <PhoneCall size={16} />
                     <span className="text-[16px] font-medium hover:text-[#91073b] text-neutral-900">+234 706757463</span>
                </Link>
                <Link href="mailto: victornnamdi835@gmail.com" className="flex items-center gap-[6px]">
                     <Mail size={16} />
                     <span className="text-[16px] font-medium hover:text-[#91073b] text-neutral-900">zitranet@gmail.com</span>
                </Link>
                </div>
             </div>

            <div className="flex flex-1 flex-col">
               <h2 className="text-sm md:text-lg font-bold text-zinc-800">NewsLetter</h2>
                <div className="flex flex-col gap-3">
                    <p className="text-[16px] font-medium text-neutral-900 mt-2">
                         Subscribe to keep receiving updates about our product
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="w-full flex items-center h-[40px] ring-1 ring-[#b13363] py-1 rounded-sm">
                        <input type="email" name="email" placeholder="Your email" required className="text-sm w-full h-full bg-inherit font-medium text-zinc-700 outline-none focus:outline-none rounded-none px-2"/>
                        <Button
                         type="submit"
                         disabled ={loading}
                         className="h-[40px] w-[50%] rounded-none bg-[#91073b] hover:bg-[#b33867]"
                        >
                         {
                              loading? <div className="w-full flex items-center justify-center gap-2">
                                    <Loader2 size={14} className=" animate-spin text-zinc-800"/>
                                     <span className="text-sm font-medium text-zinc-800">Sending...</span>
                              </div>: "Send"
                         }
                        </Button>
                    </form>
                </div> 
            </div>
        </div>
        <div className="w-full md:w-[85%] h-[2px] bg-pink-200 mx-auto mt-5 flex items-center justify-center">
        <div className="w-full mx-auto mt-5 flex items-center justify-center">
             <div className="flex items-center justify-center mt-4">
                <div className="flex items-center gap-1 md:gap-2">
                     <span className="text-[12px] md:text-[15px] font-semibold">Copyright</span>
                     <MdCopyright color="" size={16}/>
                     <span className="text-[12px] md:text-[15px] font-semibold">
                         {thisYear}
                     </span>
                     <span className="text-[12px] md:text-[15px] font-semibold">Zitranet</span>
                      <GoDotFill/>
                     <span className="text-[12px] md:text-[15px] font-semibold">All Rights Reserved</span>
                       
                </div>
             </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer