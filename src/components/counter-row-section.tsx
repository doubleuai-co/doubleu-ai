"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, easeOut } from "framer-motion";

// Stats and brand data
const stats = [
  { number: "2M+", description: "Tasks completed around the globe" },
  { number: "99.9%", description: "Workload reduced by using DoubleU AI workforce" },
  { number: "85%", description: "Reduction in time taken to complete tasks pre- and post-AI" },
  { number: "100%", description: "AI workers availability" },
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
    <section className="bg-white md:text-center text-left pt-[49px] md:pt-[87px] text-gray-800 sm:px-6 md:px-[120px]">
      {/* Statistics Section */}
      <motion.div
        className="container mx-auto justify-between grid grid-cols-1 gap-4 md:gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
       {stats.map((stat, index) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [startCount, setStartCount] = useState(false);

  return (
    <motion.div
      key={index}
      variants={cardVariants}
      className="flex flex-col items-start rounded-md bg-gray-50 p-4 shadow-sm md:bg-transparent md:shadow-none lg:items-center"
      onViewportEnter={() => setStartCount(true)}
      viewport={{ once: true }}
    >
      <AnimatedCounter rawNumber={stat.number} start={startCount}  />
      <p className="md:max-w-[200px] md:pt-4 pt-4 pr-28 md:pr-0 text-md md:text-base text-[#404040]">
        {stat.description}
      </p>
    </motion.div>
  );
})}

      </motion.div>

      {/* Brands Desktop */}
      <motion.div
        className="container mx-auto mb-18 hidden text-center md:hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-12 text-xs font-medium mt-20 text-[#404040]"
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
              <h3 className="text-md font-medium">{brand.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* Brands Infinite Scroll */}
      <div className="relative pt-[89px] overflow-hidden hidden md:block">
        <h2 className="mb-6 text-center text-lg text-[#404040]">
          Trusted by the brands shaping the future with AI
        </h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-x-12 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex min-w-max items-center gap-x-4 pr-6 text-[#0B0A0A]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain"
                />
                <h3 className="text-lg font-medium whitespace-nowrap">
                  {brand.label}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
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

const AnimatedCounter = ({ rawNumber, start = false }: { rawNumber: string; start: boolean }) => {
  const { number, suffix } = parseNumber(rawNumber);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, number, {
      duration: 1, // 
      onUpdate: (value) => {
        const rounded = number % 1 === 0 ? Math.round(value) : value.toFixed(1);
        setDisplay(`${rounded}${suffix}`);
      },
    });

    return controls.stop;
  }, [start, count, number, suffix]);

  return (
    <motion.h2
      className="text-3xl text-[#0B0A0A] lg:text-5xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {display}
    </motion.h2>
  );
};
