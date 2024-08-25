"use client"

import { Mail, MapPin, PhoneCall } from "lucide-react"
import Link from "next/link"

const ContactInfo = () => {


  return (
    <div
     className='w-full flex items-center justify-center px-2 mt-2 md:mt-0'
    >
       <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-start md:items-center md:justify-center gap-2">
             
             <div className="flex items-center gap-2" >
                 <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
                    <MapPin size={16} color="white"/>
                </div>
                <span className="text-[15px] font-medium text-neutral-800">
                    Kufsteiner streetgg 84, 1020 
                </span>
              </div>
              <Link href="tel:+2348147249839" className="flex items-center gap-2" >
                 <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
                    <PhoneCall size={16} color="white"/>
                </div>
                <span className="text-[15px] font-medium text-neutral-800">
                    +2348147249839
                </span>
              </Link>
              <Link href="mailto: victornnamdi835@gmail.com" className="flex items-center gap-2" >
                 <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
                    <Mail size={16} color="white"/>
                </div>
                <span className="text-[15px] font-medium text-neutral-800">
                    victornnamdi835@gmail.com
                </span>
              </Link>
       </div>
    </div>
  )
}

export default ContactInfo