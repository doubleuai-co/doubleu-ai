import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w relative w-screen overflow-hidden bg-gradient-to-b from-[#0B0A0A] to-[#0d0d1a] px-8 pt-36 text-white sm:px-6 lg:px-8 lg:pt-22">
      {/* Background elements - subtle blurs/gradients as seen in the design */}
      {/* These will need to be carefully positioned and styled to match exactly */}
      <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-30 mix-blend-screen blur-3xl filter"></div>
      {/* <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-10 mix-blend-screen blur-3xl filter"></div> */}

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Star Rating */}
        <div className="mb-4 flex items-center justify-center text-orange-400">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
          <Star
            className="text-white"
            size={16}
            fill="currentColor"
            strokeWidth={0}
          />
          <span className="ml-2 text-sm text-gray-400">Rated by users</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-center text-[35px] leading-[46px] font-medium -tracking-wide text-white md:text-[4.5rem] md:leading-[72px]">
          Your business, boosted by <br className="hidden md:block" /> AI that
          actually gets it
        </h1>

        {/* Sub-paragraph */}
        <p className="text-md mb-8 max-w-2xl text-center leading-[28px] -tracking-wide text-gray-300 md:text-2xl md:leading-[34px] lg:text-xl">
          Build, grow, and scale your business with our AI workforce,{" "}
          <br className="hidden md:block" /> custom-built for your business
          needs
        </p>

        {/* Call to Action Button */}
        <Link href="/demo" passHref>
          <Button className="rounded-2 mb-12 cursor-pointer bg-[#7D73C3] px-6 py-6 text-sm font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:py-8 md:text-xl lg:text-lg">
            Try DoubleU AI
          </Button>
        </Link>

        {/* Feature Highlights */}
        <div className="hidden items-center justify-center gap-6 text-gray-300 md:flex md:flex-row md:gap-12">
          <div className="flex items-center space-x-2">
            <Image
              src="/new-img/icon-check.svg"
              alt="DoubleU AI Chat Interface"
              width={30}
              height={30}
              className="object-cover"
            />
            <span className="text-sm lg:text-base">
              Always Available Workforce
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/new-img/icon-check.svg"
              alt="DoubleU AI Chat Interface"
              width={30}
              height={30}
              className="object-cover"
            />
            <span className="text-sm lg:text-base">Cloud-Based & Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/new-img/icon-check.svg"
              alt="DoubleU AI Chat Interface"
              width={30}
              height={30}
              className="object-cover"
            />
            <span className="text-sm lg:text-base">AI Solution</span>
          </div>
        </div>
        {/* Small screens  */}
        <div className="flex-col space-y-4 text-center mx-auto items-center justify-center gap-6 text-gray-300 md:hidden md:flex-row md:gap-12">
          <div className="flex items-center space-x-1 justify-evenly text-center">
            <Image
              src="/new-img/icon-check.svg"
              alt="DoubleU AI Chat Interface"
              width={15}
              height={15}
              className="object-cover"
            />
            <span className="text-md lg:text-base">
              Always Available Workforce
            </span>
          </div>
          <div className="flex items-center space-x-2 text-center justify-center">
            <Image
              src="/new-img/icon-check.svg"
              alt="DoubleU AI Chat Interface"
              width={15}
              height={15}
              className="object-cover"
            />
            <span className="text-md lg:text-base">Cloud-Based & Secure</span>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <Image
              src="/new-img/icon-check.svg"
              alt="DoubleU AI Chat Interface"
              width={15}
              height={15}
              className="object-cover"
            />
            <span className="text-sm lg:text-base">AI Solution</span>
          </div>
        </div>
      </div>

      <div className="relative z-0 mt-12 flex justify-center md:mt-8">
        <div className="flex w-full max-w-5xl items-center justify-center shadow-2xl">
          <Image
            src="/hero-img.svg"
            alt="DoubleU AI Chat Interface"
            width={1000}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
