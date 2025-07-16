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
    <section className="bg-white px-4 py-20 text-gray-800 sm:px-6 lg:px-8">
      {/* Statistics Section */}
      <div className="container text-left mx-auto mb-20 grid grid-cols-1 gap-8 lg:text-center md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col lg:items-center items-left px-6">
            <h2 className="mb-2 text-2xl lg:text-5xl font-extrabold text-[#0B0A0A]">
              {stat.number}
            </h2>
            <p className="max-w-[200px] text-base text-gray-600">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Trusted by Brands Section */}
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-xl font-semibold text-[#0B0A0A]">
          Trusted by the brands shaping the future with AI
        </h2>
        <div className=" text-[#0B0A0A] flex flex-wrap items-center justify-evenly gap-x-12 gap-y-8">
          <div className="flex gap-x-2">
            <Image
              src="/new-img/body-img.svg"
              alt=""
              width={35}
              height={35}
              className="object-contain"
            />
            <h3 className="font-medium text-xl">Body and Home essentials</h3>
          </div>
          <div className="flex items-center gap-x-2 self-center">
            <Image
              src="/new-img/aimco.svg"
              alt=""
              width={40}
              height={30}
              className="object-contain"
            />
            <h3 className="font-medium text-xl">Aimco Intl Group</h3>
          </div>
          <div className="flex gap-x-2">
            <Image
              src="/new-img/body-img.svg"
              alt=""
              width={35}
              height={35}
              className="object-contain"
            />
            <h3 className="font-medium text-xl">Body and Home essentials</h3>
          </div>
          <div className="flex items-center gap-x-2 self-center">
            <Image
              src="/new-img/aimco.svg"
              alt=""
              width={40}
              height={30}
              className="object-contain"
            />
            <h3 className="font-medium text-xl">Aimco Intl Group</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
