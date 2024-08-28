import { Metadata } from "next";

import AboutUnique from "@/components/about-unique";

export const metadata: Metadata = {
  title: "About us - zitranet",
};

const Aboutpage = () => {
  return (
    <main className="w-full">
      <div
        style={{
          backgroundImage: "url(/aboutpagebg.jpg)",
          backgroundSize: "cover",
        }}
        className="w-full h-[65vh] md:h-[65vh] px-3 md:px-0 lg:h-[70vh] bg-no-repeat overflow-hidden bg-slate-300 relative flex flex-col items-center justify-center"
      >
        <div className="absolute top-0 w-full right-0 bg-black/85 p-6 md:p-0 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[65%] lg:w-[55%] ">
            <h2 className="text-xl md:text-3xl tracking-wider font-bold md:font-extrabold text-zinc-200">
              About Us
            </h2>
            <p className="text-[14px] md:text-[15px] font-medium text-zinc-300/90 text-center">
              At Zitranet, we pride ourselves on using the latest advancements
              in artificial intelligence, machine learning, and web
              technologies. Our chatbots are equipped with natural language
              processing capabilities, enabling them to understand and respond
              to customer queries with human-like precision. Our web development
              practices adhere to the highest standards, ensuring your online
              presence is robust and secure. Additionally, our Salesforce
              administration services leverage the full potential of the
              platform, providing you with tools to manage customer
              relationships effectively.
            </p>
          </div>
        </div>
      </div>

      <AboutUnique
        image="/unq.jpg"
        label="Our Story"
        className="flex gap-8 flex-col-reverse md:flex-row-reverse"
        imageClass=" h-[260px] sm:h-[300px] md:h-[400px] w-full md:w-[55%] lg:w-[60%] ring-2 ring-pink-200"
        desc1="Founded with a vision to transform how businesses interact with their customers, Zitranet has
                quickly become a leader in AI-driven solutions."
        desc2=" Our journey began with a simple yet powerful
             idea to leverage technology to create seamless, personalized customer service experiences."
        desc3="With a team of passionate innovators and tech enthusiasts, we have grown from a small startup
         to a trusted partner for numerous businesses worldwide.
         "
      />

      <div
        style={{ backgroundImage: "url(/vision.jpg)", backgroundSize: "cover" }}
        className="w-full h-[55vh] md:h-[65vh] px-6 bg-no-repeat md:px-0 lg:h-[65vh] overflow-hidden bg-[#91073b] relative flex flex-col items-center justify-center"
      >
        <div className="absolute top-0 w-full right-0 bg-black/85 flex p-6 md:p-0 items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-2 w-full md:w-[65%] lg:w-[55%] ">
            <h2 className="text-lg md:text-3xl tracking-wider font-bold md:font-extrabold text-zinc-200">
              Our Vision
            </h2>
            <p className="text-[13px] md:text-[15px] font-medium text-zinc-300 text-center">
              We envision a future where businesses can effortlessly engage with
              their customers through intelligent, responsive, and intuitive
              technology solutions. By bridging the gap between technology and
              human interaction, we aim to create a world where customer service
              is not just efficient, but also personal and enjoyable.
            </p>
          </div>
        </div>
      </div>
      <AboutUnique
        image="/weareunique.png"
        label="We Are Unique"
        imageClass="h-[260px] sm:h-[300px] md:h-[400px] w-full md:w-[55%] lg:w-[48%] ring-2 ring-pink-200"
        className="flex gap-8 flex-col-reverse md:flex-row"
        desc1="In a rapidly evolving digital landscape, staying stagnant is not an option. We are committed to
              continuous improvement, constantly updating our technology and refining our processes to
             deliver superior solutions across all our service offerings.
            "
        desc2="We believe in building long-term partnerships. Our dedicated support team is always on hand to
                assist you, from initial setup to ongoing maintenance. We provide comprehensive training and
                resources to ensure that you and your team can make the most of our technology solutions.
               "
        desc3="Our clients are at the heart of everything we do. We take the time to understand your business,
             your challenges, and your goals. By working closely with you, we develop tailored solutions that
             not only meet but exceed your expectations."
      />
      <AboutUnique
        image="/theteam.png"
        label="Meet The Team"
        className="flex gap-8 flex-col-reverse md:flex-row-reverse"
        desc1="At Zitranet, our team is the heart and soul of our company. Comprised of dedicated professionals with diverse expertise and a shared passion for technology, we are committed to delivering exceptional service and innovative solutions to our clients"
        imageClass="h-[260px] md:h-[400px] w-full sm:h-[300px] md:w-[60%] ring-2 ring-pink-200"
      />
    </main>
  );
};

export default Aboutpage;
