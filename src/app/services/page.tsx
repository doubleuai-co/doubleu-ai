import Link from "next/link";
import React from "react";
import FAQSection from "@/components/faq-section";
import CallToActionSection from "@/components/calltoaction-section";
import ServicesSection from "@/components/services/services-section";


const Services = () => {

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section for Services Page */}
      <section className="relative flex h-[650px] items-center justify-center overflow-hidden bg-[#0B0A0A] px-4 py-20 text-white sm:px-6 lg:h-[700px] lg:px-8">
        {/* Background elements - subtle blurs/gradients */}
        <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#7D73C3] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[#ff6347] opacity-10 mix-blend-screen blur-3xl filter"></div>

        <div className="relative z-10 mx-auto my-48 flex max-w-4xl flex-col items-center px-8 text-center">
          <h1 className="font-montserrat mb-6 text-center text-[40px] leading-[46px] font-black -tracking-wide text-white md:text-[4rem] md:leading-[72px]">
            Our AI-Powered Business Solutions
          </h1>
          <p className="mb-8 max-w-2xl text-center text-xl leading-[28px] -tracking-wide text-gray-300 md:text-2xl md:leading-[34px]">
            Unlock efficiency, innovation, and growth with our intelligent AI
            workforce solutions.
          </p>
          <Link href="/contact-us" passHref>
            <button className="text-md mt-2 rounded-md bg-[#7D73C3] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:text-xl lg:text-lg">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Our Services Grid Section */}
      <ServicesSection />
      <FAQSection />
      <CallToActionSection />
    </div>
  );
};

export default Services;

