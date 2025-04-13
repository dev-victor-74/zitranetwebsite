"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { Code2Icon, ServerCogIcon, Bot } from "lucide-react";
import { SiSalesforce } from "react-icons/si";
import { GoDiscussionClosed } from "react-icons/go";
import Link from "next/link";

const Slider = () => {
  const services = [
    {
      label: "Zitrabot Technology",
      desc: `Enhance Customer Engagement with Zitrabot AI-Driven chatbots,
            Our AI-powered chatbots are designed to revolutionize the way you interact with your
            customers. Our chatbot is built to handle a variety of tasks.`,
      Icon: Bot,
    },
    {
      label: "Consultation",
      desc: `Our consultation services are designed to help businesses navigate the complexities of
            technology integration. Whether you're looking to implement new digital strategies or optimize
            existing processes, our experts provide insights and guidance to ensure your technology
            investments yield maximum returns.`,
      Icon: GoDiscussionClosed,
    },

    {
      label: "Web Development",
      desc: `We also specialize in creating custom web development solutions that align with your business
            goals. From responsive websites to e-commerce platforms, our development team works
            closely with you to build websites that are not only visually appealing but also optimized for
            performance and user experience.`,
      Icon: Code2Icon,
    },
    {
      label: "SalesForce",
      desc: `Our Salesforce administration services help businesses manage their Salesforce environment
            with ease. Whether it's setting up new workflows, customizing dashboards, or ensuring data
            integrity, our team ensures your Salesforce platform operates efficiently, allowing you to focus
            on growing your business.
            `,
      Icon: SiSalesforce,
    },
    {
      label: "Maintenance of Chatbots",
      desc: `Beyond development, we offer comprehensive maintenance services to ensure your chatbot
            solutions remain effective and up-to-date. Our team monitors performance, provides regular
            updates, and refines functionalities to adapt to evolving customer needs, ensuring your chatbot
            remains a valuable asset to your business.
            `,
      Icon: ServerCogIcon,
    },
  ];
  // lg:grid grid-cols-3
  return (
    <div className="w-[98%] md:w-[95%] lg:w-[85%] mx-auto mt-2">
      <div className="hidden lg:grid grid-cols-3 gap-6">
        <div className="col-span-3 grid grid-cols-3 gap-6 justify-items-center">
          {services.slice(0, 3).map((service, index) => (
            <Card
              key={service.label}
              className="ring-1 ring-pink-200 rounded-sm p-[5px] w-full"
            >
              <CardContent className="h-[300px] sm:h-[280px] md:h-[290px] lg:h-[310px] xl:h-[290px] p-[10px] flex flex-col justify-between">
                <div className="w-full h-full flex flex-col gap-2">
                  <div className="p-1 rounded-full h-10 md:h-12 md:w-12 w-10 flex items-center justify-center shadow-md">
                    <service.Icon size={30} className="text-[#91073b]" />
                  </div>
                  <h2 className="text-sm font-extrabold text-neutral-800 tracking-wide">
                    {service.label}
                  </h2>
                  {index === 0 ? (
                    <div className="text-[13px] text-justify font-normal md:font-medium">
                      <span>
                        Enhance Customer Engagement with{" "}
                        <a
                          className=" text-pink-700"
                          href="https://zitrabot.com"
                          target="_blank"
                        >
                          Zitrabot
                        </a>{" "}
                      </span>
                      <span>
                        AI-Driven chatbots, Our AI-powered chatbots are designed
                        to revolutionize the way you interact with your
                        customers. Our chatbot is built to handle a variety of
                        tasks.
                      </span>
                    </div>
                  ) : (
                    <div className="text-[13px] text-justify font-normal md:font-medium">
                      {service.desc}
                    </div>
                  )}
                </div>
                <Link
                  href={"/services"}
                  className=" text-[#91073b] text-sm font-bold mb-4"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="col-span-3 flex justify-center gap-6">
          {services.slice(3).map((service) => (
            <Card
              key={service.label}
              className="ring-1 ring-pink-200 rounded-sm p-[5px] w-[33%]"
            >
              <CardContent className="h-[300px] sm:h-[280px] md:h-[290px] lg:h-[310px] xl:h-[290px] p-[10px] flex flex-col justify-between">
                <div className="w-full h-full flex flex-col gap-2">
                  <div className="p-1 rounded-full h-10 md:h-12 md:w-12 w-10 flex items-center justify-center shadow-md">
                    <service.Icon size={30} className="text-[#91073b]" />
                  </div>
                  <h2 className="text-sm font-extrabold text-neutral-800 tracking-wide">
                    {service.label}
                  </h2>
                  <div className="text-[13px] text-justify font-normal md:font-medium">
                    {service.desc}
                  </div>
                </div>
                <Link
                  href={"/services"}
                  className=" text-[#91073b] text-sm font-bold mb-4"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Carousel className="w-[100%] mx-auto lg:hidden">
        <CarouselContent className="-ml-1">
          {services.map((service, index) => (
            <CarouselItem key={service.label} className="pl-1 md:basis-1/2">
              <div className="p-1">
                <Card className="ring-1 ring-pink-200 rounded-sm p-2">
                  <CardContent className="flex flex-col justify-between h-[300px] sm:h-[280px] md:h-[290px] lg:h-[310px] xl:h-[290px] p-[8px]">
                    <div className="w-full h-full flex flex-col gap-2">
                      <div className="p-1 rounded-full h-10 md:h-12 md:w-12 w-10 flex items-center justify-center shadow-md">
                        <service.Icon size={30} className="text-[#91073b]" />
                      </div>
                      <h2 className="text-sm font-extrabold text-neutral-800 tracking-wide">
                        {service.label}
                      </h2>
                      {index === 0 ? (
                        <div className="text-[13px] text-justify font-normal md:font-medium">
                          <span>
                            Enhance Customer Engagement with{" "}
                            <a
                              className=" text-pink-700"
                              href="https://zitrabot.com"
                              target="_blank"
                            >
                              Zitrabot
                            </a>{" "}
                          </span>
                          <span>
                            AI-Driven chatbots, Our AI-powered chatbots are
                            designed to revolutionize the way you interact with
                            your customers. Our chatbot is built to handle a
                            variety of tasks.
                          </span>
                        </div>
                      ) : (
                        <div className="text-[13px] text-justify font-normal md:font-medium">
                          {service.desc}
                        </div>
                      )}
                    </div>
                    <Link
                      href={"/services"}
                      className=" text-[#91073b] text-sm font-bold mb-4"
                    >
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="h-10 w-10 md:w-12 md:h-12 ring-1 ring-[#e4b4ca] shadow-md hover:ring-pink-300 absolute top-1/2 -left-6 md:-left-10" />
        <CarouselNext className=" h-10 w-10 md:w-12 md:h-12 ring-1 ring-[#e4b4ca] shadow-md hover:ring-pink-300 absolute top-1/2 -right-6 md:-right-10" />
      </Carousel>
    </div>
  );
};

export default Slider;
