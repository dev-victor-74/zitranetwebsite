"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="w-full flex items-center justify-center px-2 mt-2 md:mt-0">
      <div className="w-full md:w-[95%] lg:w-[70%] mx-auto pb-2 flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="tel:+2348131612375"
          className="p-2 w-full h-[140px] hover:scale-[1.02] transition-all duration-500 ring-[.5px] ring-pink-600 rounded-sm flex flex-col items-center gap-y-1"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-rose-800">
            <PhoneCall size={16} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-[2px] flex-1">
            <h2 className="font-semibold text-sm">Phone</h2>
            <p className="font-medium tracking-wide text-[13px] text-primary">
              +2348131612375
            </p>
          </div>
        </a>

        <div className="p-2 w-full h-[140px] hover:scale-[1.02] transition-all duration-500 ring-[.5px] ring-pink-600 rounded-sm flex flex-col items-center gap-y-1">
          <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-rose-800">
            <MapPin size={16} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-[2px] flex-1">
            <h2 className="font-semibold text-sm">Address</h2>
            <p className="font-medium text-center text-[13px] text-primary">
              24, Abebi shopping complex, Mosafejo bus stop, Sango Eleyele Road,
              Ibadan, Nigeria.
            </p>
          </div>
        </div>

        <a
          href="mailto:zitranet.inc@gmail.com"
          className="p-2 w-full h-[140px] hover:scale-[1.02] transition-all duration-500 ring-[.5px] ring-pink-600 rounded-sm flex flex-col items-center gap-y-1"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-rose-800">
            <Mail size={16} color="white" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-[2px] flex-1">
            <h2 className="font-semibold text-sm">Email</h2>
            <p className="font-medium text-[13px] text-primary">
              zitranet.inc@gmail.com
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
