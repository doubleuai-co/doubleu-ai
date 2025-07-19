import React from "react";
import Image from "next/image";

export default function CounterRowSection() {
  const stats = [
    { number: "2M+", description: "Tasks completed around the globe" },
    { number: "100%", description: "Time saved by using doubleU AI workforce" },
    {
      number: "85%",
      description: "Reduction in time taken to complete tasks pre- and post-AI",
    },
    { number: "99.9%", description: "AI agent availability" },
  ];

  // const Brand = [
  //   {
  //     src: "/new-img/body-img.svg",
  //     alt: "Body and Home essentials",
  //   },
  //   {
  //     src: "/new-img/aimco.svg",
  //     alt: "Aimco Intl Group",
  //   },
  //   {
  //     src: "/new-img/body-img.svg",
  //     alt: "Body and Home essentials",
  //   },
  //   {
  //     src: "/new-img/aimco.svg",
  //     alt: "Aimco Intl Group",
  //   },
  // ];

  return (
    <section className="bg-white px-4 py-8 text-gray-800 sm:px-6 lg:px-8">
      {/* Statistics Section */}
      {/* Desktop */}
      <div className="container mx-auto mb-20 hidden grid-cols-1 gap-8 text-left md:grid md:grid-cols-2 lg:grid-cols-4 lg:text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="items-left flex flex-col px-6 lg:items-center"
          >
            <h2 className="mb-2 text-2xl font-extrabold text-[#0B0A0A] lg:text-5xl">
              {stat.number}
            </h2>
            <p className="max-w-[200px] text-base text-gray-600">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
      {/* Small Screen */}
      <div className="container mx-auto mb-20 md:hidden grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-4 lg:text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="items-left flex flex-col rounded-md bg-gray-50 p-6 px-6 shadow-sm lg:items-center"
          >
            <h2 className="mb-2 text-2xl font-extrabold text-[#0B0A0A] lg:text-5xl">
              {stat.number}
            </h2>
            <p className="max-w-[200px] text-base text-gray-600">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Trusted by Brands Section */}
      <div className="hidden md:block container mx-auto text-center">
        <h2 className="mb-12 text-xl font-semibold text-[#0B0A0A]">
          Trusted by the brands shaping the future with AI
        </h2>
        <div className="flex flex-wrap items-center justify-evenly gap-x-12 gap-y-8 text-[#0B0A0A]">
          <div className="flex gap-x-2">
            <Image
              src="/new-img/body-img.svg"
              alt=""
              width={35}
              height={35}
              className="object-contain"
            />
            <h3 className="text-xl font-medium">Body and Home essentials</h3>
          </div>
          <div className="flex items-center gap-x-2 self-center">
            <Image
              src="/new-img/aimco.svg"
              alt=""
              width={40}
              height={30}
              className="object-contain"
            />
            <h3 className="text-xl font-medium">Aimco Intl Group</h3>
          </div>
          <div className="flex gap-x-2">
            <Image
              src="/new-img/body-img.svg"
              alt=""
              width={35}
              height={35}
              className="object-contain"
            />
            <h3 className="text-xl font-medium">Body and Home essentials</h3>
          </div>
          <div className="flex items-center gap-x-2 self-center">
            <Image
              src="/new-img/aimco.svg"
              alt=""
              width={40}
              height={30}
              className="object-contain"
            />
            <h3 className="text-xl font-medium">Aimco Intl Group</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
