"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { backOut, easeOut, motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeOut,
      delay: 0.6,
    },
  },
};

const starAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: backOut,
    },
  }),
};

const buttonHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-screen overflow-hidden bg-[#0B0A0A] px-4 pt-36 text-white md:px-8 lg:pt-22">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="animate-blob animation-delay-2000 absolute right-[2%] -bottom-30 h-100 w-full rounded-full bg-[#00B4D8] opacity-50 mix-blend-screen blur-3xl filter"
      />
      <motion.div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#0B0A0A] opacity-0 mix-blend-screen blur-3xl filter" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Star Rating */}
        <motion.div
          variants={fadeInUp}
          className="mb-4 flex items-center justify-center text-orange-400 md:mt-20 md:mb-8"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={starAnimation}
            >
              <Star size={16} fill="currentColor" strokeWidth={0} />
            </motion.div>
          ))}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={starAnimation}
          >
            <Star
              className="text-white"
              size={16}
              fill="currentColor"
              strokeWidth={0}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="ml-2 text-xs text-white md:text-sm"
          >
            Rated by users
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeInUp}
          className="font-satoshi px-2 pb-6 text-center text-[35px] leading-[40px] font-medium -tracking-wide text-white md:pb-8 md:text-[64px] md:leading-[72px]"
        >
          Your business, boosted by <br className="hidden md:block" /> AI that
          actually gets it
        </motion.h1>

        {/* Sub-paragraph */}
        <motion.p
          variants={fadeInUp}
          className="text-md mb-2 max-w-2xl px-8 text-center leading-[28px] -tracking-wide text-gray-300 md:mb-8 md:text-2xl md:leading-[34px] lg:text-xl"
        >
          Build, grow, and scale your business with our AI Workforce,{" "}
          <br className="hidden md:block" /> custom-built for your business
          needs
        </motion.p>

        {/* Call to Action Button */}
        <motion.div variants={fadeInUp}>
          <Link href="/contact" passHref>
            <motion.div
              variants={buttonHover}
              whileHover="hover"
              whileTap="tap"
            >
              <button className="cursor-pointer m-6 md:mb-8 md:mt-0 rounded-[8px] bg-[#7D73C3] px-5.5 py-3.5 text-sm font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:rounded-lg md:px-6 md:py-3.5 md:text-[16px]">
               Try DoubleU AI 
              </button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Feature Highlights - Desktop */}
        <motion.div
          variants={fadeInUp}
          className="hidden items-center justify-center text-gray-300 md:flex md:flex-row md:gap-12"
        >
          {[
            { text: "Always Available Workforce" },
            { text: "Cloud-Based & Secure" },
            { text: "Custom Solution" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={featureItemVariants}
              custom={index}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              >
                <Image
                  src="/new-img/icon-check.svg"
                  alt="Check icon"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </motion.div>
              <span className="text-sm md:text-base">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlights - Mobile */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-row flex-wrap items-center justify-center gap-3 text-center text-gray-300 md:hidden md:flex-col md:gap-6"
        >
          {[
            { text: "Always Available" },
            { text: "Cloud & Secure" },
            { text: "Custom Solution" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={featureItemVariants}
              custom={index}
              className="flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
              >
                <Image
                  src="/new-img/icon-check.svg"
                  alt="Check icon"
                  width={12}
                  height={12}
                  className="object-cover"
                />
              </motion.div>
              <span className="text-xs sm:text-sm">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        variants={slideInFromBottom}
        initial="hidden"
        animate="visible"
        className="relative z-0 flex justify-center pt-6 md:mt-8 md:pt-3"
      >
        <motion.div
          className="flex w-full max-w-5xl items-center justify-center shadow-2xl"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src="/hero-img.svg"
            alt="DoubleU AI Chat Interface"
            width={1271}
            height={554}
            className="w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
