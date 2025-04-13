import Slider from "@/components/carousel";
import FooterReminder from "@/components/footer-reminder";
import Hero from "@/components/hero";
import KnowUs from "@/components/know-us";
import OurServices from "@/components/our-services";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="mx-auto w-full flex flex-col gap-y-4 md:gap-y-8">
      <Hero />
      <div className="w-full md:w-[98%] mx-auto mt-4 px-3 md:px-0 flex flex-col gap-y-4 md:gap-y-10">
        <OurServices />
        <Slider />
        <KnowUs />
        <WhyChooseUs />
      </div>
      {/* <div className="w-full flex flex-col mt-7">
                <div className="flex flex-col gap-1">
                     <h3 className="text-center text-lg font-bold md:font-extrabold text-zinc-800">Our Blog</h3>
                     <h2 className="text-center text-lg md:text-2xl font-extrabold text-zinc-900">Stay informed, Stay Empowered</h2>
                </div>
                <div className=" mt-4 w-full md:w-[90%] lg:w-[82%] mx-auto px-7 md:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {
                        [1,2,3,].map((arr, i)=>(
                          <BlogCard key={i}/>
                        ))
                      }
                  </div>
            </div> */}

      <Testimonial />
      <FooterReminder />
    </main>
  );
}
