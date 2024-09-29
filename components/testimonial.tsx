"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Cynthia Ade",
      desc: " Implementing Zitranet's SaaS platform was a game-changer for us. The chatbot is a powerful tool that seamlessly manages our customer service needs and provides our clients with the ability to book accommodations or travel tickets effortlessly. Our team can now focus on other core business activities, knowing that our customers are well taken care of. Highly recommended for any business looking to enhance their customer service experience",
      image: "/testimonial1.jpg",
    },
    {
      name: "Daniella Ihechi",
      desc: "As a growing business, managing customer service efficiently was becoming a challenge. After integrating Zitranet's SaaS platform, our customer response time has improved dramatically. The chatbot handles inquiries 24/7, and our customers can now easily book accommodations or purchase tickets without any hassle. It's like having an extra team member who never sleeps!",
      image: "/testimonial3.jpg",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 mt-8 md:mt-20">
      <h3 className="text-center text-lg md:text-3x font-extrabold text-zinc-800 capitalize">
        What our customers say
      </h3>
      <div className="flex items-center justify-center w-[100%] md:w-[60%] lg:w-[40%]  px-2 md:px-0 md:max-w-[50%] lg:max-w-[50%] mx-auto">
        <div className="w-full items-center justify-center shadow-sm">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name}>
                  <div className="p-1">
                    <Card className="ring-1 ring-pink-200/80">
                      <CardContent className="flex items-center justify-center p-2 h-[380px] md:h-[370px] lg:h-[350px] ">
                        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
                          <div className="w-full text-[12px] md:text-sm font-normal text-center md:font-medium text-neutral-800">
                            {testimonial.desc}
                          </div>
                          <div className="w-full flex flex-col items-center justify-center gap-1">
                            <div className="w-[60px] h-[60px] ring-1 ring-pink-300 md:w-[80px] md:h-[80px] relative rounded-full">
                              <Image
                                fill
                                src={testimonial.image}
                                alt={testimonial.name}
                                className=" rounded-full object-cover"
                              />
                            </div>
                            <div className=" text-center text-xs md:text-[13px] font-semibold text-zinc-800">
                              {testimonial.name}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="w-10 h-10 md:h-12 md:w-12 absolute top-1/2 -right-3 md:-right-10 ring-1 ring-[#e4b4ca] shadow-md hover:ring-pink-300" />
            <CarouselPrevious className="w-10 h-10 md:h-12 md:w-12 ring-1 absolute top1/2 -left-3 md:-left-10  bg-white ring-[#e4b4ca] shadow-md hover:ring-pink-300" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
