"use client"

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const WhyChooseUs = () => {

    const whyUs = [
        {
            label:"Innovative Solutions",
            desc: "We leverage the latest technologies and best practices to deliver innovative solutions that stay ahead of the curve."
        },
        {
            label:"Client-Centric Approach",
            desc: "We Priotize understanding our clients needs and goals, ensuring that our solutions are tail;ored to their specifications."
        },
        {
            label:"Expertise and Experience",
            desc: "We Priotize understanding our clients needs and goals, ensuring that our solutions are tail;ored to their specifications."
        },
        {
            label:"Commitment to Excellence",
            desc: "We Priotize understanding our clients needs and goals, ensuring that our solutions are tailored to their specifications."
        },
    ]

  return (
    <div className='w-full md:w-[90%] lg:w-[85%] mx-auto mt-12 md:mt-16'>
        <div className="w-full flex flex-row-reverse items-center justify-between gap-7">
             <div className="hidden md:flex ring-2 ring-pink-300 w-full relative rounded-sm overflow-hidden h-[250px] md:h-[350px] bg-slate-500">
                <Image
                  fill
                  src="/chooseus.jpg"
                  alt='about'
                />
             </div>
             <div className="w-full flex flex-col items-center gap-2">
                <h2 className='text-xl md:text-3xl font-extrabold text-zinc-800'>
                  Why Choose Us</h2>
                 <div className="w-full flex flex-col gap-4 mt-4">
                     {
                        whyUs.map((why:{label:string, desc:string})=>(
                            <div key={why.label} className="w-full flex items-center gap-3">
                                <div className="flex items-center justify-center">
                                     <CheckCircle2 color='#91073b' size={20}/>
                                </div>
                                <div className="w-full flex flex-col gap-[2px]">
                                     <h4 className='text-[15px] font-bold text-zinc-900'>
                                        {why.label}
                                     </h4>
                                     <p className='text-[15px] md:text-[16px] font-medium text-neutral-800 text-center md:text-start'>{why.desc}</p>
                                </div>
                            </div>
                        ))
                     }
                 </div>                  
             </div>
        </div>
    </div>
  )
}

export default WhyChooseUs