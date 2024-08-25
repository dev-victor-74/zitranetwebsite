"use client"
import{
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import Image from "next/image"

const Testimonial = () => {

    const testimonials =[
        {
            name: "Tamara",
            desc:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis odio repudiandae, voluptatem, facilis harum illum voluptatum, accusamus doloribus asperiores maiores reiciendis dignissimos&quest; Beatae eligendi quisquam possimus repellat architecto molestias recusandae&quest;",
            image: "/home2.jpg",
            occupation:"Secretary zitrabot"
        },
        {
            name: "Emmanuel",
            desc:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis odio repudiandae, voluptatem, facilis harum illum voluptatum, accusamus doloribus asperiores maiores reiciendis dignissimos&quest; Beatae eligendi quisquam possimus repellat architecto molestias recusandae&quest;",
            image: "/home.jpg",
            occupation:"CEO zitrabot"
        },
        {
            name: "Charles",
            desc:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis odio repudiandae, voluptatem, facilis harum illum voluptatum, accusamus doloribus asperiores maiores reiciendis dignissimos? Beatae eligendi quisquam possimus repellat architecto molestias recusandae&quest;",
            image: "/home2.jpg",
            occupation:"HR zitrabot"
        },
        {
            name: "men",
            desc:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis odio repudiandae, voluptatem, facilis harum illum voluptatum, accusamus doloribus asperiores maiores reiciendis dignissimos&quest; Beatae eligendi quisquam possimus repellat architecto molestias recusandae&quest;",
            image: "/contact.jpg",
            occupation:"HR zitrabot"
        }
    ]



  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 mt-8">
        <h3 className="text-center text-lg md:text-3xl font-bold md:font-extrabold text-zinc-800 ">Words from our clients</h3>
    <div className='flex items-center justify-center w-[90%] md:w-[60%] lg:w-[60%] max-w-[360px] px-4 md:px-0 md:max-w-[60%] lg:max-w-[50%] mx-auto'>
        <div className="w-full items-center justify-center shadow-sm">
             <Carousel className="w-full items-center justify-center">
                 <CarouselContent className="w-full flex items-center gap-1 px-3 py-3">
                    {
                    testimonials.map((testimonial)=>(
                        <CarouselItem className="rounded-sm px-3 mx-auto h-full flex flex-col items-center justify-center " key={testimonial.name}>
                         <div className="w-full bg-white p-3 ring-2 ring-[#f1e8ec] shadow-md rounded-sm flex flex-col gap-1 items-center">
                                <p className="text-[16px] font-medium text-zinc-800 text-center">
                                    {testimonial.desc}
                                </p>
                              <div className="w-full mt-5 flex items-center justify-center flex-col gap-2">
                                <div className="w-[120px] overflow-hidden md:w-[140px] h-[120px] md:h-[140px] rounded-full relative">
                                    <Image
                                    fill
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="text-sm font-semibold text-center text-neutral-950">{testimonial.name}</div>
                                    <div className="text-xs font-medium text-center text-neutral-950">
                                         {testimonial.occupation}
                                    </div>
                                </div>
                              </div>
                          </div>
                        </CarouselItem>
                    ))
                   }
                 </CarouselContent>
                 <CarouselNext className="w-12 h-12 ring-1 ring-[#f8cee1] shadow-md hover:ring-pink-300"/>
                 <CarouselPrevious className="w-12 h-12 ring-1 ring-[#f8cee1] shadow-md hover:ring-pink-300"/>
             </Carousel>
        </div>
    </div>
    </div>
  )
}

export default Testimonial