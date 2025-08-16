"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="relative mx-6 my-[34px] overflow-hidden rounded-2xl bg-[#7D73C3] px-2 py-10 md:py-6 text-white shadow-sm sm:px-6 md:my-[47px] md:mx-[120px]">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center px-4 pt- text-center md:mb-0 md:w-1/2 md:items-start md:text-left lg:pt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-xl leading-tight sm:text-4xl md:text-[40px] md:pr-2">
            Why work harder when your AI can do it cooler?
            <br className="hidden sm:block" />
          </h2>
          <p className="mb-8 text-md text-[#D9D9D9] sm:text-lg md:text-lg">
            One AI! all your platforms, always on.
          </p>
          <Link href="/contact" passHref>
            <button className="cursor-pointer rounded-md bg-white px-8 py-3 text-sm text-[#110D0D] shadow-md transition duration-300 ease-in-out hover:bg-gray-100 md:text-base">
              Get Started Now
            </button>
          </Link>
        </motion.div>

        {/* Image Content */}
        <motion.div
          className="relative top-13 flex w-full items-end justify-center md:w-1/2 md:justify-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/new-img/cta-robot.png"
            alt="AI and human interaction illustration"
            width={450}
            height={300}
            className="object-fit object-bottom px-6"
          />
        </motion.div>
      </div>
    </section>
  );
}
