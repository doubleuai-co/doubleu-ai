import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Lightbulb, Target, Rocket, User } from "lucide-react";

const AboutPage = () => {
  // Data for "Our Impact by the Numbers" section
  const impactStats = [
    { number: "2M+", description: "Tasks completed around the globe" },
    { number: "100%", description: "Time saved by using doubleU AI workforce" },
    {
      number: "85%",
      description: "Reduction in time taken to complete tasks pre- and post-AI",
    },
    { number: "99.9%", description: "AI agent availability" },
  ];

  // Data for "Our Revolutionary Approach" section
  const approachSteps = [
    {
      icon: Lightbulb,
      title: "True Autonomy",
      description:
        "Our system operates independently, handling routine tasks without the need for constant oversight.",
    },
    {
      icon: Target,
      title: "End-to-End Mastery",
      description:
        "We own the complete process from the first interaction to the final outcome, through an integrated solution.",
    },
    {
      icon: Rocket,
      title: "Results Over Rhetoric",
      description:
        "We're not here for show. We measure success by the real-world impact we deliver.",
    },
    {
      icon: Rocket,
      title: "Task-Based Value",
      description:
        "Every dollar you invest translates directly into efficient, measurable outcomes.",
    },
    {
      icon: Rocket,
      title: "Smart Integration",
      description:
        "By merging cutting-edge analytics with next-gen data management, we empower smarter and faster.",
    },
    {
      icon: Rocket,
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

  // Data for Testimonials section
  const testimonials = [
    {
      quote:
        "DoubleU AI transformed our customer service. Our response times improved dramatically, and customer satisfaction soared. Truly revolutionary!",
      author: "Princess. B.",
      rating: 5,
    },
    {
      quote:
        "Our sales agent from DoubleU helps us stay on tip of leads and follow-ups. its made our team faster and more focused.",
      author: "David. U",
      rating: 5,
    },
    {
      quote:
        "Its like habving a quite helper that doesnt interrupt. Task get done fatser and I can breathe more.",
      author: "Mark D.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section for About Page */}
      <section  className="relative bg-center inset-0 overflow-hidden py-24"
      style={{
        background: '#0B0A0A', // Main dark background
        // Reference the image directly from the public folder
        backgroundImage: `url('dots-bg.png')`,
        backgroundRepeat: 'no-repeat', // Assuming you want the pattern to repeat
        backgroundSize: 'cover', // Or 'contain', 'cover', or a specific size like '20px 20px'
                               // 'auto' will use the natural size of the image, adjust as needed.
      }}
    >
      {/* Blurred Shape 1 */}
      <div
        className="absolute opacity-40"
        style={{
          top: '18%', // Adjust position as needed
          left: '4%', // Adjust position as needed
          width: '500px', // Adjust size
          height: '500px', // Adjust size
          borderRadius: '50%', // Make it circular for a blob-like effect
          background: '#7D73C39E', // Purple with transparency
          filter: 'blur(100px)', // The desired blur amount
          transform: 'translateZ(0)', // Optimize for blur rendering
        }}
      ></div>

      {/* Blurred Shape 2 */}
      <div
        className="absolute opacity-40"
        style={{
          bottom: '18%', // Adjust position as needed
          right: '5%', // Adjust position as needed
          width: '400px', // Adjust size
          height: '400px', // Adjust size
          borderRadius: '50%', // Make it circular
          background: '#7D73C39E', // Purple with transparency
          filter: 'blur(1000px)', // The desired blur amount
          transform: 'translateZ(0)', // Optimize for blur rendering
        }}
      ></div>
        <div className="relative z-10 mx-auto flex flex-col items-center px-4 pt-18 text-center lg:max-w-4xl">
          <h1 className="mb-6 text-center text-[35px] leading-[46px] font-medium -tracking-wide text-white md:text-[4.2rem] md:leading-[72px]">
            AI workers that handles the work, So you can handle what&apos;s next{" "}
            <br className="hidden md:block" />
          </h1>
          <p className="px-4 py-2 text-[#D9D9D9] font-normal lg:px-40 lg:text-lg">
            Build, grow, and scale your business with our AI workforce,
            custom-built for your business needs
          </p>
          <Link href="/contact-us" passHref className="mt-12 cursor-pointer">
            <button className="text-md rounded-md bg-[#7D73C3] px-8 py-4 font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:text-xl">
              Try DoubleU AI
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Our Mission & Vision Section */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="container mx-auto max-w-4xl px-2 py-12 text-justify lg:px-6 lg:text-center">
          <h2 className="mb-8 text-2xl font-medium text-[#0B0A0A] lg:text-4xl">
            Our Mission
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[##404040] lg:mb-12 lg:text-lg">
            Our mission is to empower businesses of all sizes to thrive in the
            AI era by providing cutting-edge, custom-built AI workforce
            solutions that automate tedious tasks, streamline operations, and
            unlock unprecedented levels of productivity and innovation.
          </p>
          <h2 className="mb-8 pt-12 text-2xl font-medium text-[#0B0A0A] lg:text-4xl">
            Our Vision
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[##404040] lg:text-lg">
            We envision a future where every business, regardless of its scale,
            leverages intelligent AI workers to achieve its full potential,
            fostering growth, efficiency, and a focus on human creativity and
            strategic thinking.
          </p>
        </div>
      </section>

      {/* 3. Our Impact by the Numbers Section (Adapted from previous Stats section) */}
      <section className="relative w-full overflow-hidden bg-[#0B0A0A] py-20 text-white">
        {/* Blue Blurred Gradient */}
        <div
          className="absolute top-1/4 left-24 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#00B4D852] blur-[300px]"
          aria-hidden="true"
        ></div>

        {/* Purple Blurred Gradient */}
        <div
          className="absolute top-1/2 right-24 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-[#7D73C359] blur-[300px]"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white lg:text-4xl">
            Our Impact by the Numbers
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center py-2">
              <h4 className="mb-2 text-3xl font-medium text-white lg:text-5xl">
                {stat.number}
              </h4>
              <p className="mx-auto max-w-4xl text-sm text-gray-300 lg:text-base">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Revolutionary Approach Section */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-20">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#0B0A0A] lg:text-4xl">
            Our Revolutionary Approach
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 lg:text-lg">
            Our systematic approach ensures a seamless transition to an
            AI-powered workforce, tailored to your success.
          </p>
        </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-x-8 px-3 text-center lg:p-4"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[linear-gradient(129.25deg,rgba(125,115,195,0.3)_-8.65%,rgba(0,180,216,0.3)_145.4%)] p-4 lg:p-4">
                <step.icon size={30} className="" />{" "}
              </div>
              <div className="text-left">
                <h3 className="text-md mb-2 font-medium text-[#0B0A0A] lg:text-xl">
                  {step.title}
                </h3>
                <p className="text-justify text-sm text-gray-700 lg:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Team Section */}
      <section className="bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#0B0A0A] lg:text-4xl">
            Meet Our Team
          </h2>
        </div>
        <div className="container mx-auto grid max-w-4xl grid-cols-1 items-center justify-between gap-12 text-center md:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-x-12 p-6 md:flex-row md:items-start ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <Image
                src={member.imageSrc}
                alt={member.imageAlt}
                width={350}
                height={150}
                className="object-fit md:w-w-1/2 mb-6 flex-shrink-0 object-cover md:mr-6 md:mb-0"
              />
              <div className="md:w-w-1/2 mx-auto text-center md:text-left">
                <h3 className="mb-1 text-2xl font-semibold text-[#222831]">
                  {member.name}
                </h3>
                <p className="mb-3 text-lg text-[#404040]">{member.role}</p>
                <p className="text-justify text-base leading-relaxed text-gray-700">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="bg-white py-20 sm:px-6 lg:px-18">
        <div className="container mx-auto mb-12 max-w-xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#0B0A0A] lg:text-4xl">
            We handle the boring stuff so you can focus on real work.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            What our clients has to say about us
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:px-0 md:py-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mx-4 flex h-full flex-col rounded-xl border border-gray-300 bg-white px-6 py-8 shadow-sm"
            >
              <div className="justify-left mb-4 flex space-x-1 text-orange-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-4 flex-grow text-justify text-base leading-relaxed text-gray-700">
                {testimonial.quote}
              </p>
              <div className="mt-auto flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-600">
                  <User size={20} /> {/* Generic user icon for avatar */}
                </div>
                <div>
                  <p className="font-semibold text-[#222831]">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Bottom CTA Banner ("Take a smarter approach...") */}
      <section className="relative mx-4 my-10 max-w-6xl overflow-hidden rounded-2xl bg-[linear-gradient(171.67deg,_#160F0F_35.65%,_#7D73C3_93.62%)] px-4 py-18 text-white shadow-xl sm:px-6 md:my-18 lg:mx-auto lg:px-2">
        <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-2xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            Take a smarter approach to AI in your business today.
            <br className="hidden sm:block" />{" "}
          </h2>
          <p className="px-4 md:px-0">
            Seamlessly connect ai to your everyday tools and start working
            faster, better, and easier
          </p>
          <Link href="/contact-us" passHref className="mt-14">
            <button className="cursor-pointer rounded-md bg-white px-8 py-4 text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-gray-100">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
