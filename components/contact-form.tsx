"use client"

import { useRef, useState } from "react"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  
  const[loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit=async(event: any)=>{
     event.preventDefault();

     setLoading(true);

     const formData = new FormData(event.target);
     formData.append("access_key", "e3c26f9d-cd7e-47bb-9d3c-785544d99658");
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
        toast.error("Something went wrong, please try again");
     }finally{
      setLoading(false);
     }
  }

  return (
    <div
     className="w-full md:w-[90%] lg:w-[80%] flex flex-col justify-center items-center mx-auto gap-2 mt-10"
    >
      <div className="w-full flex flex-col gap-2 items-center justify-center">
          <div className="w-full md:w-[70%] lg:w-[60%] mx-auto text-sm md:text-lg font-semibold md:font-bold text-center text-zinc-800">
              Ready to take your business to the next level with zitranet technology solutions
          </div>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center mt-3">
          <p className=" text-[15px] font-semibold text-neutral-800">Request for consultation</p>
          <div className="w-full md:w-[70%] lg:w-[40] mx-auto bg-pink-100 max-w-[600px] p-[10px] md:p-4 lg:p-8 rounded-sm">
              <form ref={formRef}
               onSubmit={handleSubmit} className="w-full">
                  <div className="w-full flex flex-col items-center gap-3">
                      <div className="flex flex-col md:flex-row w-full gap-2">
                          <div className="flex flex-col w-full gap-1">
                            <label className="text-sm font-semibold text-neutral-800">Name</label>
                            <input type="text" placeholder="Enter your name"  required name="name" className="w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-800 ring-1 ring-pink-300"
                             />
                          </div>
                          <div className="flex flex-col w-full gap-1">
                            <label className="text-sm font-semibold text-neutral-800">Email</label>
                            <input type="email" placeholder="Enter your email" required name="email" className="w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-800 ring-1 ring-pink-300"
                             />
                          </div>
                      </div>
                      <div className="flex flex-col md:flex-row w-full gap-2">
                          <div className="flex flex-col w-full gap-1">
                            <label className="text-sm font-semibold text-neutral-800">Subject</label>
                            <input type="text" placeholder="Subject"  required name="Subject" className="w-full px-2 py-3 rounded-sm outline-none
                             focus:outline-none focus:ring-1 text-sm font-semibold focus:ring-pink-800 ring-1 ring-pink-300"
                             />
                          </div>
                      </div>
                      <textarea
                      placeholder="Your message"
                       className="w-full text-sm font-medium text-zinc-800 resize-none p-2 rounded-sm 
                        focus:outline-none focus:ring-1 focus:ring-pink-800 ring-1 ring-pink-300"
                       rows={8}
                       name="message"/>
                  </div>
                  <Button
                    type="submit"
                     disabled = {loading}
                    className=" mt-4 w-full md:w-1/2 text-sm font-semibold flex items-center justify-center bg-pink-700 hover:bg-pink-500 rounded-sm"
                  >
                    {
                      loading? <div className=" w-full flex gap-2 items-center justify-center"><Loader2 size={18} className=" animate-spin"/>
                       <span className="text-sm font-medium">Sending...</span>
                      </div>  : "Submit"
                    }
                  </Button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default ContactForm