import Slider from '@/components/carousel'
import React from 'react'

const ServicesPage = () => {


  return (
    <main className='w-full'>
         <div 
          style={{backgroundImage:"url(/home2.jpg)", backgroundSize:"cover"}}
          className="w-full h-[40vh] md:h-[50vh] px-6 md:px-0 lg:h-[70vh] overflow-hidden bg-slate-300 relative flex flex-col items-center justify-center">
           <div className="absolute top-0 w-full right-0 bg-black/85 p-6 md:p-0 flex items-center justify-center h-full">
             <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[65%] lg:w-[55%] ">
             
                 <h2 className='text-xl md:text-3xl tracking-wider font-bold md:font-extrabold text-zinc-200'>Our Services</h2>
                 <p className='text-sm font-medium text-zinc-300/90 text-center'>
                 At Zitranet, we offer specialized services designed to enhance your business operations and
                  elevate customer experiences. With our expertise in cutting-edge technology and deep
                  understanding of the various industries, we provide tailored solutions that meet your unique
                  needs. 
                 </p>
             </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex items-center flex-col gap-3 mt-8">
              <h2 className='text-xl font-bold md:text-2xl md:font-extrabold text-zinc-800'>Services We Offer</h2>
              <Slider/>
        </div>
    </main>
  )
}

export default ServicesPage

