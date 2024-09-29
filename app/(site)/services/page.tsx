import { Metadata } from "next";
import Image from "next/image";
import FooterReminder from "@/components/footer-reminder";

export const metadata: Metadata = {
  title: "Services - zitranet",
  description:
    "Our services includes, web development, chatbot development and maintenance, salesforce and consultation",
};
const ServicesPage = () => {
  return (
    <main className="w-full">
      <div
        style={{
          backgroundImage: "url(/servicespage.jpg)",
          backgroundSize: "cover",
        }}
        className="w-full h-[60vh] md:h-[65vh] px-2 md:px-0 lg:h-[70vh] overflow-hidden bg-slate-300 relative flex flex-col items-center justify-center"
      >
        <div className="absolute top-0 w-full right-0 bg-black/85 p-[10px] md:p-0 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[65%] lg:w-[55%] ">
            <h2 className="text-xl md:text-3xl tracking-wider font-extrabold text-zinc-200">
              Our Services
            </h2>
            <p className="text-[13px] md:text-sm font-medium text-zinc-300/90 text-center">
              At Zitranet, we offer specialized services designed to enhance
              your business operations and elevate customer experiences. With
              our expertise in cutting-edge technology and deep understanding of
              the various industries, we provide tailored solutions that meet
              your unique needs.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex items-center flex-col gap-2 mt-8">
        <h2 className="text-xl font-extrabold text-zinc-700">Why choose Us</h2>
        <h2 className="text-xl md:text-2xl font-extrabold text-zinc-800">
          Explore Our Services Below
        </h2>
      </div>
      <section className="mx-auto flex flex-col-reverse md:flex-row items-center w-full md:w-[90%] lg:w-[80%] px-[14px] md:px-1 justify-between gap-4 md:gap-8 mt-5 md:mt-10">
        <div className=" flex flex-col gap-2 md:w-[70%] lg:w-[80%]">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-xl font-bold md:font-extrabold text-zinc-800">
              Consultation
            </h1>
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              Expert Guidance for Technology Integration and Optimization
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Navigating the complexities of technology integration can be
              challenging. Our consultation services are designed to help you
              make informed decisions and maximize the return on your technology
              investments.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              We offer:
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Digital Strategy Development: Craft a roadmap for your business's
              digital transformation.
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Technology Integration: Seamlessly integrate new technologies into
              your existing systems.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Process Optimization: Improve efficiency and effectiveness across
              your operations. Our experts work closely with you to understand
              your business goals and challenges, providing actionable insights
              and tailored solutions.
            </p>
          </div>
        </div>
        <div className="h-[300px] sm:h-[330px] md:h-[380px] bg-slate-200 relative w-full md:w-[55%] lg:w-[50%] xl:w-[45%] ring-2 ring-pink-200 rounded-[2px]">
          <Image src="/consultation.png" alt="consultation" fill />
        </div>
      </section>

      <section className="mx-auto flex flex-col-reverse md:flex-row-reverse items-center w-full md:w-[90%] lg:w-[80%] px-[14px] md:px-1 justify-between gap-4 md:gap-8 mt-7 md:mt-14">
        <div className=" flex flex-col gap-2 md:w-[70%] lg:w-[80%]">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-xl font-bold md:font-extrabold text-zinc-800">
              Chatbot Technology Solution
            </h1>
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              Expert Guidance for Technology Integration and Optimization
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Navigating the complexities of technology integration can be
              challenging. Our consultation services are designed to help you
              make informed decisions and maximize the return on your technology
              investments.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              We offer:
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Digital Strategy Development: Craft a roadmap for your
              business&apos;s digital transformation.
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Technology Integration: Seamlessly integrate new technologies into
              your existing systems.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Process Optimization: Improve efficiency and effectiveness across
              your operations.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Our experts work closely with you to understand your business
              goals and challenges, providing actionable insights and tailored
              solutions.
            </p>
          </div>
        </div>
        <div className="h-[300px] sm:h-[330px] md:h-[380px] bg-slate-200 relative w-full md:w-[55%] lg:w-[50%] xl:w-[45%] ring-2 ring-pink-200 rounded-[2px]">
          <Image src="/chatbot.png" alt="consultation" fill />
        </div>
      </section>

      <section className="mx-auto flex flex-col-reverse md:flex-row items-center w-full md:w-[90%] lg:w-[80%] px-[14px] md:px-1 justify-between gap-4 md:gap-8 mt-7 md:mt-14">
        <div className=" flex flex-col gap-2 w-full md:w-[70%] lg:w-[80%]">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-xl font-bold md:font-extrabold text-zinc-800">
              Maintenance
            </h1>
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              Ensure Your Chatbot Remains a Valuable Asset
            </p>
            <p className="text-[14px] md:text-[15px] font-medium text-zinc-800">
              Beyond development, ongoing maintenance is crucial to ensure your
              chatbot continues to meet evolving customer needs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              Our maintenance services include:
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Performance Monitoring: Regularly track and analyze chatbot
              performance to ensure optimal functionality.
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Updates and Enhancements: Implement updates and refine
              functionalities to adapt to changing customer expectations.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Technical Support: Provide prompt assistance and troubleshooting
              to resolve any issues.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              With our comprehensive maintenance services, your chatbot will
              remain effective and up-to-date, consistently delivering value to
              your business.
            </p>
          </div>
        </div>
        <div className="h-[300px] sm:h-[330px] md:h-[380px] bg-slate-200 relative w-full md:w-[55%] lg:w-[50%] xl:w-[45%] ring-2 ring-pink-200 rounded-[2px]">
          <Image src="/maintenance.png" alt="maintenance" fill />
        </div>
      </section>

      <section className="mx-auto flex flex-col-reverse md:flex-row-reverse items-center w-full md:w-[90%] lg:w-[80%] px-[14px] md:px-1 justify-between gap-4 md:gap-8 mt-7 md:mt-14">
        <div className=" flex flex-col gap-2 w-full md:w-[70%] lg:w-[80%]">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-xl font-bold md:font-extrabold text-zinc-800">
              Web Development
            </h1>
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              Create Custom Websites that Drive Business Success
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              We specialize in developing websites that are not only visually
              appealing but also optimized for performance and user experience.
              Our web development services include:
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Responsive Design: Ensure your website looks great and functions
              smoothly on all devices.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              E-Commerce Solutions: Build secure, user-friendly online stores
              that drive sales. Custom Development: Create tailored websites
              that align with your brand and business objectives.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Our development team works closely with you to create a website
              that meets your specific needs, helping you establish a strong
              online presence.
            </p>
          </div>
        </div>
        <div className="h-[300px] sm:h-[330px] md:h-[380px] bg-slate-200 relative w-full md:w-[55%] lg:w-[50%] xl:w-[45%] ring-2 ring-pink-200 rounded-[2px]">
          <Image src="/webdevelopment.png" alt="web development" fill />
        </div>
      </section>

      <section className="mx-auto flex flex-col-reverse md:flex-row items-center w-full md:w-[90%] lg:w-[80%] px-[14px] md:px-1 justify-between gap-4 md:gap-8 mt-7 md:mt-14">
        <div className=" flex flex-col gap-2 w-full md:w-[70%] lg:w-[80%]">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-xl font-bold md:font-extrabold text-zinc-800">
              Salesforce Administration
            </h1>
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              Maximize the Potential of Your Salesforce Platform
            </p>
            <p className="text-[14px] md:text-[15px] font-medium text-zinc-800">
              Our Salesforce administration services are designed to help you
              manage and optimize your Salesforce environment.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] md:text-[15px] font-bold text-zinc-800">
              We offer:
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Workflow Setup: Design and implement custom workflows to
              streamline your business processes.
            </p>
            <p className=" text-[13px] md:text-[15px] font-medium text-neutral-900">
              Dashboard Customization: Create intuitive dashboards that provide
              valuable insights and data visualization.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              Data Management: Ensure data accuracy and integrity across your
              Salesforce platform.
            </p>
            <p className="text-[13px] md:text-[15px] font-medium text-neutral-900">
              With our expertise, you can leverage the full potential of
              Salesforce to enhance customer relationships and drive business
              growth.
            </p>
          </div>
        </div>
        <div className="h-[300px] sm:h-[330px] md:h-[380px] bg-slate-200 relative w-full md:w-[55%] lg:w-[50%] xl:w-[45%] ring-2 ring-pink-200 rounded-[2px]">
          <Image src="/salesforce.jpg" alt="salesforce" fill />
        </div>
      </section>

      <FooterReminder />
    </main>
  );
};

export default ServicesPage;
