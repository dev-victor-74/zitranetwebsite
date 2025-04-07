"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqData = [
    {
      question: "What is Zitrabot and how can it benefit my business?",
      answer:
        "Zitrabot is our AI-powered chatbot solution designed to enhance customer engagement and streamline business operations. It can handle customer inquiries 24/7, automate routine tasks, and provide instant responses to common questions. This leads to improved customer satisfaction, reduced response times, and decreased operational costs for your business.",
    },
    {
      question: "What types of web development services do you offer?",
      answer:
        "We provide comprehensive web development services including responsive website design, e-commerce platform development, custom web applications, and progressive web apps (PWAs). Our team uses modern technologies and best practices to create fast, secure, and user-friendly websites that help businesses establish a strong online presence and achieve their digital goals.",
    },
    {
      question:
        "How can your Salesforce administration services help my company?",
      answer:
        "Our Salesforce administration services help optimize your CRM system for maximum efficiency. We handle everything from initial setup and customization to ongoing maintenance, including user management, workflow automation, custom report creation, and data integrity maintenance. This ensures your team can focus on using Salesforce effectively while we handle the technical aspects.",
    },
    {
      question: "What kind of support and maintenance services do you provide?",
      answer:
        "We offer comprehensive support including 24/7 technical assistance, regular system updates, and performance monitoring. For our chatbot solutions, we provide continuous learning and refinement based on user interactions. Our team ensures all systems remain up-to-date and efficient, with regular maintenance checks and optimization services to keep your business running smoothly.",
    },
  ];

  return (
    <div className="w-full bg-slate-800 mt-8 flex items-center py-5">
      <section className="w-full md:w-[94%] lg:w-[75%] mx-auto px-4 flex flex-col md:flex-row gap-8">
        <div className="w-full flex flex-col gap-2 mt-3 md:mt-5 px-2">
          <h1 className="text-sm tracking-wide md:text-lg lg:text-2xl md:text-start font-bold text-center text-zinc-200">
            Frequently Asked Questions
          </h1>
          <p className="text-sm hidden md:block text-zinc-300 text-start font-medium">
            Here are some of the most common questions we get asked. If you
            don&apos;t see what you&apos;re looking for, please don&apos;t
            hesitate to contact us.
          </p>
        </div>
        <div className="w-full h-full">
          <Accordion
            type="single"
            collapsible
            className="w-full border-none shadow-none"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-gray-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default Faq;
