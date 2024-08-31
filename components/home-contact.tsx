"use client";

import React, { useRef, useState } from "react";

import { Button } from "./ui/button";
import Image from "next/image";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const HomeContact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "234f0c8c-3ab7-480d-a08a-6135505790fe");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const res = await response.json();
      toast.success("Email sent successfully!");
      formRef?.current?.reset();
    } catch (error) {
      toast.error("Something went wrong, please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full bg-[#91073b] rounded-[2px] py-3 mt-8">
      <div className="w-full md:w-[90%] lg:w-[80%] px-2 mx-auto flex items-center justify-between gap-4">
        <div className="w-full bg-slate-400 h-[350px] ring-1 ring-pink-300 rounded-sm hidden md:flex relative items-center justify-center">
          <Image
            fill
            src="/contactt.jpg"
            alt="about"
            className="rounded-sm w-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-2 mx-auto md:mx-0">
          <h3 className="text-xl md:text-2xl font-bold md:font-extrabold tracking-wide text-center md:text-start text-zinc-200 ml-1">
            Contact Us
          </h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 px-2 py-2 rounded-sm"
          >
            <div className="w-full flex flex-col gap-[2px]">
              <input
                type="text"
                required
                name="name"
                placeholder="Your name"
                className="w-full p-2 rounded-[2px] outline-none focus:outline-none focus:ring-1 focus:ring-pink-400 ring-1 py-3 ring-slate-200 bg-inherit text-sm font-semibold text-zinc-200 focus:bg-inherit"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="email"
                required
                name="email"
                placeholder="Your email"
                className="w-full p-2 rounded-[2px] outline-none focus:outline-none focus:ring-1 focus:ring-pink-400 py-3 ring-1 text-sm font-semibold text-zinc-200 ring-slate-200 bg-inherit focus:bg-inherit"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="text"
                required
                placeholder="Subject"
                name="subject"
                className="w-full p-2 rounded-[2px] outline-none focus:outline-none focus:ring-1 focus:ring-pink-400 py-3 ring-1 ring-slate-200 bg-inherit text-sm font-semibold text-zinc-200 focus:bg-inherit"
              />
            </div>
            <div className="w-full flex flex-col">
              <textarea
                name="message"
                rows={6}
                placeholder="Your message"
                required
                className="w-full p-2 rounded-[2px] outline-none focus:outline-none focus:ring-1 focus:ring-pink- ring-1 focus:ring-pink-400 resize-none ring-slate-200 bg-inherit focus:bg-inherit text-sm font-medium text-zinc-200"
              ></textarea>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="rounded-sm bg-pink-100 hover:bg-slate-300  text-zinc-800 w-full md:w-1/2"
            >
              {loading ? (
                <div className="w-full flex items-center justify-center gap-2">
                  <Loader2 size={18} className=" animate-spin text-zinc-900" />
                  <span className="text-sm font-medium text-zinc-800">
                    Sending...
                  </span>
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
