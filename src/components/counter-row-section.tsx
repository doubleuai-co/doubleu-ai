"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, easeOut } from "framer-motion";

// Stats and brand data
const stats = [
  { number: "2M+", description: "Tasks completed around the globe" },
  { number: "100%", description: "Time saved by using doubleU AI workforce" },
  { number: "85%", description: "Reduction in task completion time post-AI" },
  { number: "99.9%", description: "AI agent availability" },
];

const brands = [
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
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const brandVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } },
};

// Main Component
export default function CounterRowSection() {
  return (
    <section className="bg-white px-4 py-8 text-gray-800 sm:px-6 md:px-8 md:py-12">
      {/* Statistics Section */}
      <motion.div
        className="container mx-auto mb-20 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-start rounded-md bg-gray-50 p-6 shadow-sm md:bg-transparent md:shadow-none lg:items-center"
          >
            <AnimatedCounter rawNumber={stat.number} />
            <p className="max-w-[200px] text-base text-gray-600">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Brands Desktop */}
      <motion.div
        className="container mx-auto hidden md:block text-center mb-18"
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
          className="mx-auto flex flex-wrap items-center justify-evenly gap-x-12 gap-y-8 text-[#0B0A0A]"
          variants={containerVariants}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={brandVariants}
              className="flex items-center gap-x-2"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="object-contain"
              />
              <h3 className="text-xl md:text-md font-medium">{brand.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Brands Mobile Infinite Scroll */}
      <div className="md:hidden overflow-hidden relative mb-12">
        <h2 className="mb-6 text-center text-lg font-medium text-[#0B0A0A]">
          Trusted by the brands shaping the future with AI
        </h2>
        <motion.div
          className="flex gap-x-12 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex min-w-max items-center gap-x-2 text-[#0B0A0A]"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="object-contain"
              />
              <h3 className="text-base font-medium">{brand.label}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Counter Component
const parseNumber = (str: string) => {
  const number = parseFloat(str.replace(/[^0-9.]/g, ""));
  const suffix = str.replace(/[0-9.]/g, "").trim();
  return { number, suffix };
};

const AnimatedCounter = ({ rawNumber }: { rawNumber: string }) => {
  const { number, suffix } = parseNumber(rawNumber);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, number, {
      duration: 2,
      onUpdate: (value) => {
        const rounded = number % 1 === 0 ? Math.round(value) : value.toFixed(1);
        setDisplay(`${rounded}${suffix}`);
      },
    });
    return controls.stop;
  }, [count, number, suffix]);

  return (
    <motion.h2
      className="mb-2 text-2xl font-extrabold text-[#0B0A0A] lg:text-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {display}
    </motion.h2>
  );
};
