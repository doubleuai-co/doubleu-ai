import Link from "next/link";
import React from "react";
import FAQSection from "@/components/faq-section";
import CallToActionSection from "@/components/calltoaction-section";
import ServicesSection from "@/components/services/services-section";
import Image from "next/image";

const Services = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section for Services Page */}
      <section className="relative w-full overflow-hidden bg-[#0B0A0A] py-2 text-white">
        <Image
          src="/service.svg"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-0"
        />
        {/* Blue Blurred Gradient */}
        {/* <div
          className="absolute top-1/4 left-[30%] h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30"
          style={{
            background: "#00B4D89E",
            filter: "blur(400px)",
          }}
          aria-hidden="true"
        ></div> */}

        {/* Purple Blurred Gradient */}
        {/* <div
          className="absolute top-1/4 right-[40%] h-[600px] w-[600px] translate-x-1/2 rounded-full opacity-30"
          style={{
            background: "#7D73C39E",
            filter: "blur(400px)",
          }}
          aria-hidden="true"
        ></div> */}
        <div className="relative z-10 mx-auto my-20 md:my-40 flex max-w-4xl flex-col items-center md:px-8 px-4 pt-18 text-center">
          <h1 className="mb-6 text-center text-[40px] leading-[46px] -tracking-wide text-white md:text-[4rem] md:leading-[72px]">
            Our AI-Powered Business Solutions
          </h1>
          <p className="text-md max-w-lg text-center leading-[28px] -tracking-wide text-gray-300 md:text-lg md:leading-[34px]">
            Leverage AI to streamline processes, reduce costs, and drive growth.
          </p>
          <Link href="/contact" passHref>
            <button className="mt-11.5 cursor-pointer rounded-[8px] bg-[#7D73C3] px-5.5 py-3.5 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:rounded-lg md:px-6 md:py-3.5 md:text-[16px]">
              Try DoubleU AI
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
