"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialsGrid from "@/components/testimonial-test";

const AboutPage = () => {
  // Data for "Our Impact by the Numbers" section
  const impactStats = [
    { number: "2M+", description: "Tasks completed" },
    { number: "100%", description: "Time saved by using doubleU AI workforce" },
    {
      number: "30 Min’s",
      description: "Reduction in time taken to complete tasks pre- and post-AI",
    },
    { number: "99.9%", description: "AI agent availability" },
  ];

  // Data for "Our Revolutionary Approach" section
  const approachSteps = [
    {
      title: "True Autonomy",
      description:
        "Our system operates independently, handling routine tasks without the need for constant oversight.",
    },
    {
      title: "End-to-End Mastery",
      description:
        "We own the complete process from the first interaction to the final outcome, through an integrated solution.",
    },
    {
      title: "Results Over Rhetoric",
      description:
        "We're not here for show. We measure success by the real-world impact we deliver.",
    },
    {
      title: "Task-Based Value",
      description:
        "Every dollar you invest translates directly into efficient, measurable outcomes.",
    },
    {
      title: "Smart Integration",
      description:
        "By merging cutting-edge analytics with next-gen data management, we empower smarter and faster.",
    },
    {
      title: "Human Empowerment",
      description:
        "We liberate you from the mundane, so you can focus on what fuels your business.",
    },
  ];

  // Data for "Our Team" section
  const teamMembers = [
    {
      name: "Solomon Asonye",
      role: "Co-Founder & CEO",
      bio: "Solomon is the co-founder and CEO, driving DoubleU AI’s strategic vision and operational excellence. With a strong background in engineering, innovation, and business leadership, Solomon ensures that every solution is not only practical but built to deliver real-world impact. His expertise in bridging technical and business needs, managing complex projects, and building strong client partnerships has been key to the company’s growth.",
      imageSrc: "/SolomonB.png", // Placeholder image
      imageAlt: "Solomon Asonye",
    },
    {
      name: "Wahab G. Yahaya",
      role: "Founder & CTO",
      bio: "Wahab is the founder and an analytical powerhouse, propelling DoubleU AI cutting-edge technology. He leads our development team in creating AI agents that truly understand and respond to human interactions. Wahab’s commitment to ethical AI practices ensures that our solutions are not only innovative, but also responsible and trustworthy.",
      imageSrc: "/WahabA.png", // Placeholder image
      imageAlt: "Wahab G. Yahaya",
    },
  ];

  // Framer Motion variants for animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="bg-white">
        {/* 1. Hero Section for About Page */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative inset-0 overflow-hidden bg-[#0B0A0A] py-24"
          // style={{
          //   background: "#0B0A0A",
          //   backgroundImage: `url('dots-bg.png')`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "contain",
          //   backgroundPosition: "center center",
          // }}
        >
          <Image
            src="/new-img/about(2).png"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
            className="-z-0"
          />

          {/* Blurred Shape 1 */}
          {/* <div
            className="absolute opacity-50"
            style={{
              top: "50%",
              left: "6%",
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              background: "#7D73C39E",
              filter: "blur(100px)",
              transform: "translateZ(0)",
            }}
          ></div> */}

          {/* Blurred Shape 2 */}
          {/* <div
            className="absolute opacity-30"
            style={{
              bottom: "30%",
              right: "8%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "#7D73C39E",
              filter: "blur(100px)",
              transform: "translateZ(0)",
            }}
          ></div> */}
          <motion.div
            variants={staggerContainer}
            className="relative z-10 mx-auto flex flex-col items-center px-4 py-18 text-center lg:max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="mb-6 pt-12 text-center text-3xl leading-[36px] font-medium -tracking-wide text-white md:text-[3.9rem] md:leading-[72px]"
            >
              AI workers that handles the work, So you can handle whats next{" "}
              <br className="hidden md:block" />
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="px-4 py-2 text-sm font-normal text-[#D9D9D9] md:px-2 md:text-lg lg:px-40"
            >
              Build, grow, and scale your business with our AI workforce,
              custom-built for your business needs
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/contact" passHref className="cursor-pointer">
                <button className="md:text-md mt-8 cursor-pointer rounded-md bg-[#7D73C3] px-8 py-3 text-sm font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF]">
                  Try DoubleU AI
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 2. Our Mission & Vision Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
        >
          <div className="container mx-auto max-w-4xl px-2 py-12 text-justify lg:px-6 lg:text-center">
            <motion.h2
              variants={fadeInUp}
              className="mb-8 text-2xl font-medium text-[#0B0A0A] lg:text-[40px]"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="md:text-md mx-auto max-w-md text-sm leading-relaxed text-[#404040] lg:mb-12"
            >
              To bring personalized AI agents to businesses of all sizes,
              helping teams cut time on tasks, automate the boring stuff, and
              focus on what really matters.{" "}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-8 pt-12 text-2xl font-medium text-[#0B0A0A] lg:text-[40px]"
            >
              Our Vision
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-xl text-sm leading-relaxed text-[#404040]"
            >
              The future of work isn&apos;t on the horizon, it&apos;s already
              here. With the AI Workforce, businesses no longer have to imagine
              smarter operations or wait for next-generation productivity tools.
              With our AI Workforce, you have the power right now to transform
              how your organization operates.
            </motion.p>
          </div>
        </motion.section>

        {/* 3. Our Impact by the Numbers Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="relative w-full overflow-hidden bg-[#0B0A0A] py-20 text-white"
        >
          <div
            className="absolute top-1/4 left-24 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#00B4D852] opacity-60 blur-[400px]"
            aria-hidden="true"
          ></div>
          <div
            className="absolute top-1/4 right-24 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-[#7D73C359] opacity-60 blur-[400px]"
            aria-hidden="true"
          ></div>
          <div className="z-20 container mx-auto mb-18 text-center">
            <motion.h2
              variants={fadeInUp}
              className="mb-4 px-22 text-2xl font-bold text-white lg:text-[40px]"
            >
              Our Impact by the Numbers
            </motion.h2>
          </div>
          <motion.div
            variants={staggerContainer}
            className="container mx-auto grid grid-cols-1 gap-8 px-12 text-center md:grid-cols-2 lg:grid-cols-4"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="flex flex-col items-center py-2"
              >
                <h4 className="mb-2 text-3xl font-bold text-white lg:text-5xl">
                  {stat.number}
                </h4>
                <p className="mx-auto max-w-xl text-sm text-[#D9D9D9] lg:text-base">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 4. Our Revolutionary Approach Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-white py-24 md:px-[120px]"
        >
          <div className="container mx-auto mb-12 text-center">
            <motion.h2
              variants={fadeInUp}
              className="mb-4 px-14 text-2xl font-bold text-[#0B0A0A] lg:text-[40px]"
            >
              Our Revolutionary Approach
            </motion.h2>
            {/* <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg"
            >
              Our systematic approach ensures a seamless transition to an
              AI-powered workforce, tailored to your success.
            </motion.p> */}
          </div>
          <motion.div
            variants={staggerContainer}
            className="container mx-auto mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-x-6 px-4 text-center lg:p-4"
              >
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-[linear-gradient(129.25deg,rgba(125,115,195,0.3)_-8.65%,rgba(0,180,216,0.3)_145.4%)] p-4 lg:p-4">
                  {/* <step.icon size={30} className="" />{" "} */}
                </div>
                <div className="text-left">
                  <h3 className="text-md mb-2 text-sm text-[#000000] lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700 lg:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* 5. Our Team Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid place-items-center bg-white px-0 py-0 sm:px-6 md:mx-auto lg:px-8"
        >
          <div className="container mx-auto mb-12 text-center">
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-bold text-[#0B0A0A] lg:text-[40px]"
            >
              Our Team
            </motion.h2>
          </div>
          <div className="container grid grid-cols-1 items-center justify-between gap-12 text-center md:grid-cols-1">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`mx-auto max-w-4xl flex-col justify-items-end gap-x-16 px-6 md:flex md:flex-row md:items-end ${index % 2 === 1 ? "items-end justify-items-end md:flex-row-reverse" : "items-end justify-items-end"}`}
              >
                <div className="w-full md:min-w-sm">
                  <Image
                    src={member.imageSrc}
                    alt={member.imageAlt}
                    width={350}
                    height={150}
                    className="object-fit mb-6 w-full flex-shrink-0 object-cover md:mr-6 md:mb-0"
                  />
                </div>

                <div className="mx-auto text-left md:text-left">
                  <h3 className="mb-1 text-[26px] leading-[48px] font-bold text-[#0B0A0A]">
                    {member.name}
                  </h3>
                  <p className="text-md py-2 text-[#404040] md:text-xl">
                    {member.role}
                  </p>
                  <p className="py-2 text-sm leading-relaxed text-[#404040] md:text-[15px]">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 7. Testimonials Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-white pt-14 md:pt-24"
        >
          <div className="container mx-auto mb-8 max-w-3xl px-4 text-center sm:px-6 md:mb-14 md:px-18">
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-2xl font-bold text-[#0B0A0A] lg:text-4xl"
            >
              We handle the boring stuff so you can focus on real work.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-2xl text-gray-600 md:text-lg"
            >
              What our clients has to say about us
            </motion.p>
          </div>
          {/* <motion.div
            variants={staggerContainer}
            className="container mx-auto grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:px-0 md:py-0"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mx-4 flex h-full flex-col rounded-xl border border-gray-300 bg-white px-6 py-8 shadow-sm"
              >
                <div className="justify-left mb-4 flex space-x-1 text-orange-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={19}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="mb-4 flex-grow text-justify text-base leading-relaxed text-gray-700">
                  {testimonial.quote}
                </p>
                <div className="mt-auto flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-600">
                    <Image
                      src="/user-placeholder.png"
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#222831]">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
          <div className="w-full bg-[#F9F9F9] sm:px-6 lg:px-36">
            <TestimonialsGrid />
          </div>
        </motion.section>

        {/* 8. Bottom CTA Banner */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="relative mx-4 mb-6 flex max-w-6xl items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(171.67deg,_#160F0F_35.65%,_#7D73C3_93.62%)] px-4 py-18 text-white md:mx-[120px] md:my-16 md:px-[120px]"
        >
          <div className="mx-auto flex flex-col items-center text-center md:container md:max-w-3xl">
            <h2 className="mb-4 text-2xl leading-tight font-medium sm:text-4xl md:max-w-lg md:px-4 md:text-4xl">
              Take a smarter approach to AI in your business today.
            </h2>
            <p className="max-w-lg px-3 md:px-0">
              Seamlessly connect ai to your everyday tools and start working
              faster, better, and easier
            </p>
            <Link href="/contact-us" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 cursor-pointer rounded-md bg-white px-8 py-3 text-sm font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-[#9747FF] hover:text-black md:mt-12 md:text-base"
              >
                Get Started Now
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutPage;
