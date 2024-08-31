"use client";

import React, { useRef, useState } from "react";

import toast from "react-hot-toast";
import { Button } from "./ui/button";

import { Linkedin, Loader2 } from "lucide-react";
import { MdFacebook } from "react-icons/md";

const ContactSocial = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const socialHandles = [
    {
      label: "facebook.com/zitranet.com",
      icon: <MdFacebook color="white" size={16} />,
      href: "https://www.facebook.com/profile.php?id=61562499407000&mibextid=ZbWKwL",
    },

    {
      label: "linkedin.com/zitranet",
      icon: <Linkedin size={16} color="white" />,
      href: "https://www.facebook.com/profile.php?id=61562499407000&mibextid=ZbWKwL",
    },
  ];

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "234f0c8c-3ab7-480d-a08a-6135505790fe");
    formData.append("subject", "NewsLetter");
    formData.append(
      "NewsLetter Alert",
      `
       I hope this message finds you well. I recently came across your website and am impressed by the valuable content you provide. I am interested in staying updated with the latest news, articles, and insights from your team.

       Could you please add my email address to your newsletter subscription list.

      Thank you for your time, and I look forward to receiving your updates.
      `
    );
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
    <div className="w-full flex flex-col items-center justify-center px-2 mt-2 md:mt-8 gap-2">
      <div className="w-full md:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-start md:items-center md:justify-center gap-2">
        <div className="text-[15px] font-semibold text-neutral-800 text-center">
          Follow us on social media to stay up-to-date on the latest news,
          updates and promotions from zitranet
        </div>
      </div>
      <div className="w-full md:w-[90%] lg:w-[80%] flex md:flex-row items-center justify-center gap-3">
        {socialHandles.map((con) => (
          <a
            href={con.href}
            target="_blank"
            key={con.label}
            className="flex items-center gap-2"
          >
            <div className="flex items-center justify-center bg-rose-800 p-[6px] rounded-full">
              {con.icon}
            </div>
            {/* <span className="text-[15px] font-medium text-neutral-800">
              {con.label}
            </span> */}
          </a>
        ))}
      </div>
      <div className="w-full flex flex-col gap-1 items-center justify-center mt-12">
        <h3 className="text-sm font-bold text-center text-neutral-800">
          Subscribe to our newsletter
        </h3>
        <div className="w-full md:w-[70%] lg:w-[40] flex items-center justify-center mx-auto bg-pink-700 max-w-[500px] p-[3px] py-5 px-2 md:p-4 lg:p-8 rounded-[2px]">
          <div className=" w-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="flex ring-1 ring-pink-300 rounded-sm overflow-hidden w-full"
            >
              <input
                type="email"
                placeholder="Your email address"
                name="email"
                required
                className="
                         px-2 py-2 text-sm font-medium text-neutral-800 w-full focus:outline-none border-none outline-none"
              />
              <div className="w-[50%]">
                <Button
                  disabled={loading}
                  className="w-full bg-slate-200 rounded-none text-pink-800 hover:bg-slate-300"
                >
                  {loading ? (
                    <div className="w-full gap-2 flex items-center justify-center">
                      <Loader2 className=" animate-spin text-zinc-950" />
                      <span className="text-sm font-medium text-zinc-800 hidden md:flex">
                        sending...
                      </span>
                    </div>
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSocial;
