
"use client"
import Image from 'next/image'
import Link from 'next/link'


const BlogCard = () => {
  return (
    <Link href={"/blog/"} className='w-full relative hover:scale-[1.01] transition flex flex-col p-[6px] ring-2 ring-[#f3d3e0] rounded-sm shadow-lg'>
      <div className=" absolute top-0 right-0 h-full w-full z-10 hover:bg-white/50 rounded-sm transition delay-75" />
        <div className="w-full h-[200px] relative rounded-sm overflow-hidden z-[5]">
             <Image
               fill
               src = "/ai.jpg"
               alt='blog'
             />
        </div>
        <div className="flex flex-col gap-[3px] w-full px-1 py-[2px]">
             <div className="w-full flex justify-between mt-1">
                 <div className="text-xs font-medium text-neutral-900">
                     12th may 2024
                 </div>
                 <div className="text-sm text-neutral-700 font-semibold">
                    Emmanuel
                 </div>
             </div>
             <h3 className='text-sm font-bold text-zinc-800'>
quickly become a leader
             </h3>
             <p className='text-sm font-medium text-neutral-900 text-justify'>
             Founded with a vision to transform how businesses interact with their customers, Zitranet has
quickly become a leader in AI-driven solutions. Our journey began with a simple yet powerful
idea to leverage technology to create seamless, personalized customer service experiences.
With a team of passionate innovators and tech enthusiasts, we have grown from a small startup
to a trusted partner for numerous businesses worldwide.
             </p>
        </div>
    </Link>
  )
}

export default BlogCard