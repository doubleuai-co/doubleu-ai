import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CallToActionSection() {
  return (
    <section className="relative lg:mx-auto mx-6 my-10 md:my-20 max-w-6xl overflow-hidden rounded-3xl bg-[#7D73C3] px-4 py-12 text-white shadow-sm sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Text Content */}
        <div className="pt-4 lg:pt-0 px-8 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:text-left">
          <h2 className="mb-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Why work harder when your AI can
            do it cooler?<br className="hidden sm:block" /> 
          </h2>
          <p className="mb-8 text-base text-gray-200 sm:text-lg">
            One AI! all your platforms, always on.
          </p>
          <Link href="/" passHref>
            <button className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#6a5acd] shadow-md transition duration-300 ease-in-out hover:bg-gray-100">
              Get Started Now
            </button>
          </Link>
        </div>

        {/* Illustration (Placeholder) */}
        {/* In a real scenario, you'd use an SVG or a high-quality PNG for this illustration */}
        <div className="relative top-13 flex w-full justify-center md:w-1/2 md:justify-end items-end">
          <Image
            src="/new-img/cta-robot.png" 
            alt="AI and human interaction illustration"
            width={450} 
            height={300} 
            className="object-fit object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
