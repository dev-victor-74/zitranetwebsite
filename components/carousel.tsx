"use client"

import{
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import { MessageCircle, Code2Icon, ServerCogIcon, Bot } from "lucide-react"
import { SiSalesforce } from "react-icons/si";
import { GoDiscussionClosed } from "react-icons/go";

const Slider = () => {

    const services =[
        {
            label:"Consultation",
            desc:`Our Salesforce administration services help businesses manage their Salesforce environment
with ease. Whether it's setting up new workflows, customizing dashboards, or ensuring data
integrity, our team ensures your Salesforce platform operates efficiently, allowing you to focus
on growing your business.
`,
            Icon: GoDiscussionClosed
        },
        {
            label:"AI Chatbot Technology",
            desc:`Enhance Customer Engagement with AI-Driven Chatbots
Our AI-powered chatbots are designed to revolutionize the way you interact with your
customers. Tailored specifically for the hospitality industry, our chatbots can handle a variety of
tasks, including:
`,
            Icon: Bot
        },
        {
            label:"Web Development",
            desc: `We also specialize in creating custom web development solutions that align with your business
goals. From responsive websites to e-commerce platforms, our development team works
closely with you to build websites that are not only visually appealing but also optimized for
performance and user experience.`,
            Icon: Code2Icon
        },
        {
            label:"SalesForce",
            desc:`Our Salesforce administration services help businesses manage their Salesforce environment
with ease. Whether it's setting up new workflows, customizing dashboards, or ensuring data
integrity, our team ensures your Salesforce platform operates efficiently, allowing you to focus
on growing your business.

`,
            Icon: SiSalesforce
        },
        {
            label:"Maintenance",
            desc:`Beyond development, we offer comprehensive maintenance services to ensure your chatbot
solutions remain effective and up-to-date. Our team monitors performance, provides regular
updates, and refines functionalities to adapt to evolving customer needs, ensuring your chatbot
remains a valuable asset to your business.`,
            Icon: ServerCogIcon
        }
    ]
  return (
    <div className="w-[95%] md:w-[95%] lg:w-[90%] max-w-[320px] md:max-w-[95%] lg:max-w-[85%] mx-auto">
        <Carousel className="w-full">
           <CarouselContent className="flex items-center gap-3 py-3 ">
               {
                services.map((service)=>(
                    <CarouselItem className="basis-[75%] h-[370px] pb-2 md:pb-0 px-2 md:px-3 md:h-[330px] md:basis-1/2 ring-2 ring-[#f3d3e0] lg:basis-1/3 shadow-lg rounded-sm bg-white" key={service.label}>
                        <div className="p-1 select-none cursor-pointer w-full flex flex-col gap-2 py-3">
                            <div className="flex w-max  p-1 shadow-md rounded-full bg-slate-50">
                                {<service.Icon size={40} color="#91073b"/>}
                            </div>
                            <div className="text-[16px] font-bold md:font-extrabold text-zinc-800 tracking-wider">
                                 {service.label}
                            </div>
                            <p className="text-[15px] md:text-[16px] font-medium text-neutral-800 text-center">
                                {service.desc}
                            </p>
                        </div>
                    </CarouselItem>
                ))
               }
           </CarouselContent>
           <CarouselPrevious className="w-12  h-12 ring-1 ring-[#d3a0b6] transition shadow-lg hover:ring-pink-400"/>
           <CarouselNext className="w-12 h-12 ring-1 ring-[#d3a0b6] transition shadow-lg hover:ring-pink-400 "/>
        </Carousel>
    </div>
  )
}

export default Slider