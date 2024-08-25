import BlogCard from "@/components/blog-card";
import Slider from "@/components/carousel";
import Hero from "@/components/hero";
import HomeContact from "@/components/home-contact";
import KnowUs from "@/components/know-us";
import OurServices from "@/components/our-services";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <main className="mx-auto w-full flex flex-col gap-2">
        <Hero/>
        <div className="w-full md:w-[95%] mx-auto mt-4 px-7 md:px-0 flex flex-col gap-4">
            <OurServices/>
            <Slider/>
            <KnowUs/>
            <WhyChooseUs/>
        </div>
            <HomeContact/>
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
        <Testimonial/>
    </main>
  );
}
