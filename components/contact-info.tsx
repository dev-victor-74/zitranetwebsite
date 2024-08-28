"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="w-full flex items-center justify-center px-2 mt-2 md:mt-0">
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-start md:items-center md:justify-center gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
            <MapPin size={16} color="white" />
          </div>
          <span className="text-[15px] font-medium text-neutral-800">
            24, Abebi shopping complex, Mosafejo bus stop, Sango Eleyele Road,
            Ibadan, Nigeria.
          </span>
        </div>
        <a href="tel:+2348131612375" className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
            <PhoneCall size={16} color="white" />
          </div>
          <span className="text-[15px] font-medium text-neutral-800">
            +234 8131612375
          </span>
        </a>
        <a
          href="mailto: zitranet.inc@gmail.com"
          className="flex items-center gap-2"
        >
          <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
            <Mail size={16} color="white" />
          </div>
          <span className="text-[15px] font-medium text-neutral-800">
            zitranet.inc@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
