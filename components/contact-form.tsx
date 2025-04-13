"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import { sendContactformRequest } from "@/lib/contact-request";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);
    await sendContactformRequest(formData)
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

  return (
    <div className="w-full md:w-[94%] lg:w-[75%] flex flex-col justify-center items-center mx-auto gap-2 mt-10">
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <div className="w-full md:w-[70%] lg:w-[60%] mx-auto text-sm md:text-lg font-semibold md:font-bold text-center text-zinc-800">
          Ready to take your business to the next level with zitranet technology
          solutions
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center mt-3">
        <p className=" text-[15px] font-semibold text-neutral-800">
          Request for consultation
        </p>
        <div className="w-full flex items-center md:gap-4 lg:gap-10 mx-auto px-[10px] md:p-4 rounded-sm">
          <div className="w-full hidden md:flex h-[520px] rounded-[2px] ring-1 ring-pink-200 overflow-hidden bg-slate-200 relative ">
            <Image
              fill
              alt="contact-form"
              src="/customercare.png"
              className=" object-cover"
            />
          </div>
          <div className="w-full">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full">
              <div className="w-full flex flex-col items-center gap-3">
                <div className="flex flex-col w-full gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label className="text-sm font-semibold text-neutral-800">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      name="name"
                      className="w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-600 ring-1 ring-pink-200"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <label className="text-sm font-semibold text-neutral-800">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="email"
                      className="w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-600 ring-1 ring-pink-200"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <label className="text-sm font-semibold text-neutral-800">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                      required
                      name="phone"
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-600 ring-1 ring-pink-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2">
                  <div className="flex flex-col w-full gap-1">
                    <label className="text-sm font-semibold text-neutral-800">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      name="Subject"
                      className="w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-600 ring-1 ring-pink-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-1">
                  <label className="text-sm font-semibold text-neutral-800">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message"
                    className="w-full text-sm font-medium text-zinc-800 resize-none p-2 rounded-sm 
                        focus:outline-none focus:ring-1 focus:ring-pink-600 ring-1 ring-pink-200"
                    rows={5}
                    name="message"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className=" mt-4 w-full text-sm font-semibold flex items-center justify-center bg-pink-700 hover:bg-pink-500 rounded-sm"
              >
                {loading ? (
                  <div className=" w-full flex gap-2 items-center justify-center">
                    <Loader2 size={18} className=" animate-spin" />
                    <span className="text-sm font-medium">Sending...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
