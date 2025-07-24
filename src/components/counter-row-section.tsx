"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const brandVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white px-4 md:py-12 py-4 text-gray-800 sm:px-6 md:px-8">
      {/* Statistics Section */}
      <motion.div
        className="container mx-auto mb-20 grid grid-cols-1 gap-8 px-4 text-left md:grid-cols-2 md:px-0 lg:grid-cols-4 lg:text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="items-left flex flex-col rounded-md bg-gray-50 p-6 px-6 shadow-sm md:bg-transparent md:shadow-none lg:items-center"
          >
            <h2 className="mb-2 text-2xl font-extrabold text-[#0B0A0A] lg:text-5xl">
              {stat.number}
            </h2>
            <p className="max-w-[200px] text-base text-gray-600">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trusted by Brands Section */}
      <motion.div
        className="container mx-auto hidden md:block text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-12 text-xl font-medium text-[#0B0A0A]"
          variants={brandVariants}
        >
          Trusted by the brands shaping the future with AI
        </motion.h2>
        <motion.div
          className="mx-auto flex flex-wrap place-content-center place-items-center items-center justify-evenly gap-x-12 gap-y-8 text-[#0B0A0A]"
          variants={containerVariants}
        >
          {[
            {
              src: "/new-img/body-img.svg",
              alt: "Body and Home essentials",
              label: "Body and Home essentials",
              width: 60,
              height: 40,
            },
            {
              src: "/new-img/aimco.svg",
              alt: "Aimco Intl Group",
              label: "Aimco Intl Group",
              width: 90,
              height: 60,
            },
            {
              src: "/new-img/body-img.svg",
              alt: "Body and Home essentials",
              label: "Body and Home essentials",
              width: 60,
              height: 40,
            },
            {
              src: "/new-img/aimco.svg",
              alt: "Aimco Intl Group",
              label: "Aimco Intl Group",
              width: 90,
              height: 60,
            },
          ].map((brand, index) => (
            <motion.div
              key={index}
              variants={brandVariants}
              className="flex items-center gap-x-2 self-center"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="object-contain"
              />
              <h3 className="text-xl font-medium">{brand.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
