"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      <h3 className="text-center text-lg md:text-3xl font-bold md:font-extrabold text-zinc-800 ">
        Words from our clients
      </h3>
      <div className="flex items-center justify-center w-[90%] md:w-[60%] lg:w-[60%] max-w-[450px] px-2 md:px-0 md:max-w-[60%] lg:max-w-[50%] mx-auto">
        <div className="w-full items-center justify-center shadow-sm">
          <Carousel className="w-full items-center justify-center">
            <CarouselContent className="w-full flex items-center px-3 py-3">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  className="rounded-sm px-1 flex flex-col items-center justify-center "
                  key={testimonial.name}
                >
                  <div className="w-full bg-white p-1 rounded-sm flex flex-col gap-1 items-center">
                    <p className="text-[13px] md:text-[15px] font-medium text-zinc-800 text-center">
                      {testimonial.desc}
                    </p>
                    <div className="w-full mt-5 flex items-center justify-center flex-col gap-2">
                      <div className="w-[60px] overflow-hidden md:w-[80px] ring-1 ring-pink-300 h-[60px] md:h-[80px] rounded-full relative">
                        <Image
                          fill
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <div className="text-sm font-semibold text-center text-neutral-950">
                          {testimonial.name}
                        </div>
                        {/* <div className="text-[13px] font-medium text-center text-neutral-950">
                          {testimonial.occupation}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="w-12 h-12 ring-1 ring-[#f8cee1] shadow-md hover:ring-pink-300" />
            <CarouselPrevious className="w-12 h-12 ring-1 ring-[#f8cee1] shadow-md hover:ring-pink-300" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
