"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Faster Task Execution",
      description:
        "DoubleU AI handles repetitive tasks at lightning speed, cutting your turnaround time from hours to seconds, so your team can focus on what truly matters.",
      imageSrc: "/new-img/thunderbolt.png",
      imageAlt: "Bolt icon",
      highlight: false,
    },
    {
      title: "Custom-Built AI Workers",
      description:
        "Tailored to fit your brand's exact workflow, tone of voice, and business goals, so it feels like an in-house teammate, not just another tool.",
      imageSrc: "/new-img/puzzle.png",
      imageAlt: "Puzzle icon",
      highlight: true,
    },
    {
      title: "Always-On Support",
      description:
        "Your AI agents never sleep, never miss a task, and never burn out, providing round-the-clock assistance so nothing falls through the cracks.",
      imageSrc: "/new-img/boat.png",
      imageAlt: "Boat icon",
      highlight: false,
    },
    {
      title: "Plug & Play Integration",
      description:
        "Seamlessly connects with your existing tools, apps, and systems. No complicated setup, no learning curve, just instant productivity.",
      imageSrc: "/new-img/plug.png",
      imageAlt: "Plug icon",
      highlight: false,
    },
    {
      title: "Scales As You Grow",
      description:
        "Whether you're a small team or a growing enterprise, the DoubleU workforce evolves with you, adapting to your scale, speed, and changing needs.",
      imageSrc: "/new-img/charts.png",
      imageAlt: "Charts icon",
      highlight: false,
    },
    {
      title: "Cost-Efficient Results",
      description:
        "Get enterprise-level output without expanding your team, save time, cut costs, and increase ROI with smart automation that pays for itself.",
      imageSrc: "/new-img/coins.png",
      imageAlt: "Coins icon",
      highlight: false,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: easeOut },
    }),
  };

  return (
    <section className="bg-white px-6 py-[49px] text-[#0B0A0A] sm:px-6 md:px-[120px] md:py-[87px]">
      <motion.div
        className="container mx-auto mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mx-auto mb-4 max-w-xl px-6 text-2xl font-bold text-[#0B0A0A] lg:text-4xl">
          Why top brands choose DoubleU AI
        </h2>
        <p className="mx-auto max-w-sm text-sm text-gray-600 md:text-lg">
          It&apos;s more than automation, it&apos;s smarter work, seamless
          integration, and real results.
        </p>
      </motion.div>

      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`group transform rounded-xl px-6 py-10 text-center shadow-xs transition-all duration-300 ease-in-out hover:scale-[1.01] ${
              feature.highlight
                ? "bg-black bg-gradient-to-r from-[#00B4D852] to-[#7D73C359] text-[#F0F0F0]"
                : "border border-gray-100 bg-gray-50 text-gray-800"
            }`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md transition-colors duration-300 ease-in-out ${
                feature.highlight
                  ? "bg-gray-50"
                  : "bg-[linear-gradient(129.25deg,rgba(125,115,195,0.3)_-8.65%,rgba(0,180,216,0.3)_145.4%)]"
              }`}
            >
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                width={28}
                height={28}
                className={`flex-shrink-0 object-contain transition-all duration-300 ease-in-out ${
                  feature.highlight
                    ? "brightness-200 filter"
                    : "brightness-50 filter group-hover:brightness-200"
                }`}
              />
            </div>

            <h3
              className={`text-md mb-2 font-medium transition-colors duration-300 ease-in-out md:text-lg ${
                feature.highlight ? "text-white" : "text-[#222831]"
              }`}
            >
              {feature.title}
            </h3>

            <p
              className={`md:text-md text-sm transition-colors duration-300 ease-in-out ${
                feature.highlight ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 mb-18 text-center md:mt-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Link href="/workforce" passHref>
          <button className="cursor-pointer rounded-md bg-[#6a5acd] px-8 py-3 text-sm text-white shadow-sm transition duration-300 ease-in-out hover:bg-[#7b68ee]">
            Explore AI Workers
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
