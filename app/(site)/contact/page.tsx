import { Metadata } from "next";

import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";
import ContactSocial from "@/components/contact-social";

export const metadata: Metadata = {
  title: "Contact us - zitranet",
};

const ContactPage = () => {
  return (
    <main className="mx-auto w-full px-0 md:px-0 mt-0">
      <div
        style={{
          backgroundImage: "url(/contact.jpg)",
          backgroundSize: "cover",
        }}
        className="w-full h-[60vh] md:h-[65vh] px-2 md:px-0 lg:h-[70vh] bg-no-repeat overflow-hidden bg-slate-300 relative flex flex-col items-center justify-center"
      >
        <div className="absolute top-0 w-full right-0 bg-black/60 p-[10px] md:p-0 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[65%] lg:w-[55%] ">
            <h2 className="text-xl md:text-3xl tracking-wider font-extrabold text-zinc-200">
              Contact Us
            </h2>
            <p className="text-[13px] md:text-sm font-medium text-zinc-300/90 text-center">
              Ready to take your customer service and business operations to the
              next level? Contact us today to learn more about our chatbot
              solutions, consultation services, web development, Salesforce
              administration, and how we can help your business thrive. At
              Zitranet, we are excited to be part of your journey towards
              exceptional customer experiences and business success.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-3">
        <div className="w-full flex flex-col gap-3 mt-8">
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <h1 className="text-center text-lg md:text-3xl font-extrabold text-zinc-800 ">
              Customer Support
            </h1>
            <p className="text-[15px] font-semibold text-zinc-800 text-center">
              Contact us via phone or email, and we&apos;ll promptly address any
              questions or concerns you may have
            </p>
          </div>
          <ContactInfo />
          <ContactForm />
          <ContactSocial />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
