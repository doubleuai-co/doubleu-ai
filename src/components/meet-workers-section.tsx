"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

export default function MeetWorkersSection() {
  const agents = [
    {
      name: "Mylo",
      role: "Product Sale Worker",
      image: "/new-img/mylo.svg",
      id: "01",
      access: "/workforce/mylo",
    },
    {
      name: "Ehiz",
      role: "Hiring Manager",
      image: "/new-img/ehiz.svg",
      id: "02",
      access: "/workforce/ehiz",
    },
    {
      name: "Neo",
      role: "Sales Service Worker",
      image: "/new-img/neo.svg",
      id: "03",
      access: "/workforce/neo",
    },
    {
      name: "Agora",
      role: "Event Manager",
      image: "/new-img/agora.svg",
      id: "04",
      access: "/workforce/agora",
    },
  ];

  const numSlides = Math.ceil(agents.length / 2);
  const [currentSlideGroupIndex, setCurrentSlideGroupIndex] = useState(0);

  // Refs for touch events
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50; // Minimum distance in pixels for a swipe to be recognized

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    // Optional: Prevent default vertical scrolling if you only want horizontal swipe
    // e.preventDefault();
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left (next slide)
      setCurrentSlideGroupIndex((prevIndex) =>
        Math.min(prevIndex + 1, numSlides - 1),
      );
    } else if (isRightSwipe) {
      // Swipe right (previous slide)
      setCurrentSlideGroupIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const goToSlideGroup = (index: number) => {
    setCurrentSlideGroupIndex(index);
  };

  return (
    <section className="bg-white px-4 text-gray-800 md:px-[120px] pt-[64px] md:pt-[87px]">
      <div className="container mx-auto mb-12 md:mb-8 text-center">
        <h2 className="mb-4 text-2xl md:text-4xl font-bold text-[#0B0A0A]">
          Meet our AI workforce
        </h2>
        <p className="mx-auto max-w-md text-md md:text-lg text-gray-600">
          Skilled, specialized, and always ready, these AI workers are built to
          work for you.
        </p>
      </div>

      {/* Desktop Grid Layout (lg and up) */}
      <div className="container mx-auto hidden grid-cols-1 gap-5 sm:grid-cols-2 lg:grid lg:grid-cols-4 max-w-6xl">
        {agents.map((agent, index) => (
          <Link key="" href={agent.access} passHref className="mt-12">
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border  bg-[#EAEAEA] "
            >
              {/* Agent ID Circle */}
              {/* <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
              {agent.id}
            </div>
            {/* Agent Image */}
              <Image
                src={agent.image} // Replace with actual agent image paths
                alt={agent.name}
                width={250} // Adjust based on actual image dimensions
                height={300} // Adjust based on actual image dimensions
                className="h-fit w-full rounded-t-xl object-cover -z-12"
              />
              {/* Name and Role Overlay */}
              {/* <div className="absolute right-0 bottom-0 left-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white">
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              <p className="text-sm text-gray-600">{agent.role}</p>
            </div> */}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Carousel Layout (md and below) */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="relative w-full overflow-hidden">
          {/* Carousel Track - Add touch event handlers here */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlideGroupIndex * 100}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {agents.map((agent, index) => (
              <div
                key={index}
                className="relative mx-2 w-1/2 flex-shrink-0 overflow-hidden rounded-xl"
              >
                {/* Agent ID Circle */}
                {/* <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
                  {agent.id}
                </div> */}
                {/* Agent Image */}
                <Image
                  src={agent.image} // Replace with actual agent image paths
                  alt={agent.name}
                  width={200} // Adjusted width for two cards side-by-side on mobile
                  height={240} // Adjusted height for two cards side-by-side on mobile
                  className="h-auto w-full rounded-t-xl object-cover"
                />
                {/* Name and Role Overlay */}
                {/* <div className="absolute right-0 bottom-0 left-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white">
                  <h3 className="text-xl font-semibold">{agent.name}</h3>
                  <p className="text-sm text-gray-300">{agent.role}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-8 flex space-x-2">
          {Array(numSlides)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlideGroup(index)}
                className={`cursor-pointer h-3 w-3 rounded-full transition-colors duration-300 ${
                  currentSlideGroupIndex === index
                    ? "bg-[#6a5acd]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              ></button>
            ))}
        </div>
      </div>
    </section>
  );
}
