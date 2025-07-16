import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Lightbulb, Target, Rocket, User } from "lucide-react"; // Importing Lucide icons

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
      icon: Lightbulb, // Placeholder icon, replace with specific SVGs if available
      title: "True Autonomy",
      description:
        "Our system operates independently, handling routine tasks without the need for constant oversight.",
    },
    {
      icon: Target, // Placeholder icon
      title: "End-to-End Mastery",
      description:
        "We own the complete process from the first interaction to the final outcome, through an integrated solution.",
    },
    {
      icon: Rocket, // Placeholder icon
      title: "Results Over Rhetoric",
      description:
        "We're not here for show. We measure success by the real-world impact we deliver.",
    },
    {
      icon: Rocket, // Placeholder icon
      title: "Task-Based Value",
      description:
        "Every dollar you invest translates directly into efficient, measurable outcomes.",
    },
    {
      icon: Rocket, // Placeholder icon
      title: "Smart Integration",
      description:
        "By merging cutting-edge analytics with next-gen data management, we empower smarter and faster.",
    },
    {
      icon: Rocket, // Placeholder icon
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
      <section className="justify-center w-full relative flex lg:h-[700px] items-center overflow-hidden bg-[#1a1a2e] px-4 py-20 text-white sm:px-6 lg:px-8">
        {/* Background elements - subtle blurs/gradients */}
        <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-20 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-20 mix-blend-screen blur-3xl filter"></div>
        {/* <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#ff6347] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div> */}

        <div className="relative z-10 mx-auto flex lg:max-w-4xl flex-col items-center text-center pt-18">
          <h1 className="mb-6 text-center text-[35px] leading-[46px] font-medium -tracking-wide text-white md:text-[4.2rem] md:leading-[72px]">
            AI workers that handles the work, So you can handle what&apos;s next{" "}
            <br className="hidden md:block" />
          </h1>
          <p className="lg:px-40 px-4 py-6 lg:text-2xl font-normal">
            Build, grow, and scale your business with our AI workforce,
            custom-built for your business needs
          </p>
          <Link href="/contact-us" passHref className="pt-4">
            <button className="rounded-md bg-[#6a5acd] px-8 py-4 text-sm font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee] md:text-xl">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Our Mission & Vision Section */}
      <section className="bg-white px-4 lg:py-16 py-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl py-12 text-left lg:text-center lg:px-6 px-2 ">
          <h2 className="mb-8 lg:text-4xl text-2xl font-medium text-[#0B0A0A]">
            Our Mission
          </h2>
          <p className="mx-auto lg:mb-12 max-w-2xl lg:text-lg text-sm leading-relaxed text-[##404040]">
            Our mission is to empower businesses of all sizes to thrive in the
            AI era by providing cutting-edge, custom-built AI workforce
            solutions that automate tedious tasks, streamline operations, and
            unlock unprecedented levels of productivity and innovation.
          </p>
          <h2 className="mb-8 pt-12 lg:text-4xl text-2xl font-medium text-[#0B0A0A]">
            Our Vision
          </h2>
          <p className="mx-auto max-w-2xl lg:text-lg text-sm leading-relaxed text-[##404040]">
            We envision a future where every business, regardless of its scale,
            leverages intelligent AI workers to achieve its full potential,
            fostering growth, efficiency, and a focus on human creativity and
            strategic thinking.
          </p>
        </div>
      </section>

      {/* 3. Our Impact by the Numbers Section (Adapted from previous Stats section) */}
      <section className="bg-[#1a1a2e] px-14 py-16 text-white sm:px-6 lg:px-8">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 lg:text-4xl text-2xl font-bold text-white">
            Our Impact by the Numbers
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4 px-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center py-2">
              <h4 className="mb-2 lg:text-5xl text-3xl font-medium text-white">
                {stat.number}
              </h4>
              <p className="max-w-4xl mx-auto text-sm lg:text-base text-gray-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Revolutionary Approach Section */}
      <section className="bg-white px-4 py-4 sm:px-6 lg:px-20">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 lg:text-4xl text-2xl font-bold text-[#0B0A0A]">
            Our Revolutionary Approach
          </h2>
          <p className="mx-auto max-w-2xl lg:text-lg text-sm text-gray-600">
            Our systematic approach ensures a seamless transition to an
            AI-powered workforce, tailored to your success.
          </p>
        </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-center lg:p-4 px-2 text-center gap-x-8"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center bg-[#7D73C3] lg:p-4 p-4 rounded-lg">
                <step.icon size={32} className="text-[#fff]" />{" "}
              </div>
              <div className="text-left">
                <h3 className="mb-2 text-md lg:text-xl font-medium text-[#0B0A0A]">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Team Section */}
      <section className="bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 text-2xl lg:text-4xl font-bold text-[#0B0A0A]">
            Meet Our Team
          </h2>
        </div>
        <div className="justify-between container max-w-4xl text-center mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex gap-x-8 flex-col items-center p-6 md:flex-row md:items-start"
            >
              <Image
                src={member.imageSrc}
                alt={member.imageAlt}
                width={350}
                height={150}
                className="mb-6 object-fit flex-shrink-0 object-cover md:mr-6 md:mb-0"
              />
              <div className="text-center md:text-left mx-auto">
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
      <section className="bg-white px-4 py-8 sm:px-6 lg:px-18">
        <div className="container mx-auto max-w-xl mb-12 text-center ">
          <h2 className="mb-4 text-2xl lg:text-4xl font-bold text-[#0B0A0A]">
            We handle the boring stuff so you can focus on real work.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            What our clients has to say about us
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-xl border border-gray-300 bg-white px-6 py-8 shadow-sm"
            >
              <div className="mb-4 flex justify-left text-orange-400 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mb-4 flex-grow text-base leading-relaxed text-justify text-gray-700">
                
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
      <section className="bg-gradient-to-b from-[#000] to-[#7D73C3] relative lg:mx-auto mx-4 my-18 max-w-6xl overflow-hidden rounded-2xl px-4 py-18 text-white shadow-xl sm:px-6 lg:px-">
        <div className="container mx-auto max-w-3xl flex flex-col items-center text-center px-4">
          <h2 className="mb-4 text-2xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            Take a smarter approach to AI in your business today.<br className="hidden sm:block" />{" "}
            
          </h2>
          <p>Seamlessly connect ai to your everyday tools and start working faster, better, and easier</p>
          <Link href="/contact-us" passHref className="mt-14">
            <button className="rounded-md bg-white px-8 py-4 text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-gray-100">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

// import Image from "next/image";

// export default function About() {
//   const approachItems = [
//     {
//       id: 1,
//       title: "True Autonomy",
//       description:
//         "Our system operates independently, handling routine tasks without the need for constant oversight.",
//     },
//     {
//       id: 2,
//       title: "End-to-End Mastery",
//       description:
//         "We own the complete process—from the first interaction to the final outcome—through an integrated suite of solutions.",
//     },
//     {
//       id: 3,
//       title: "Results Over Rhetoric",
//       description:
//         "We're not here for show. We measure success by the real-world impact we deliver.",
//     },
//     {
//       id: 4,
//       title: "Task-Based Value",
//       description:
//         "Every dollar you invest translates directly into efficient, measurable outcomes.",
//     },
//     {
//       id: 5,
//       title: "Smart Integration",
//       description:
//         "By merging cutting-edge analytics with next-gen data management, we empower smarter, faster decision making.",
//     },
//     {
//       id: 6,
//       title: "Human Empowerment",
//       description:
//         "Our goal is clear—liberate you from the mundane, so you can focus on what ignites your passion and drives your business forward.",
//     },
//   ];
//   return (
//     <main className="flex-1 pt-24 md:pt-0">
//       <section className="relative grid place-items-center">
//         <div className="h-screen w-full md:h-[120vh]">
//           <Image
//             src="/about-bg.jpg"
//             alt="mountain background"
//             placeholder="blur"
//             blurDataURL="/about-bg.jpg"
//             fill
//             className="h-full w-full object-cover opacity-40"
//           />
//         </div>
//         <div className="absolute flex h-full w-full flex-col items-center gap-6 px-5 py-6 pt-12 md:pt-44">
//           <Image
//             src="/doublelogo.svg"
//             placeholder="blur"
//             blurDataURL="/doublelogo.svg"
//             alt="logo"
//             width={604}
//             height={115}
//           />
//           <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:max-w-5xl md:text-[4rem] md:leading-[72px]">
//             Unleashing Our Ao Redefine Work
//           </h1>
//           <p className="justify-center text-center text-xl leading-[28px] -tracking-wide text-[#222831] md:max-w-5xl md:text-2xl md:leading-[34px]">
//             Our AI Workers are autonomous digital professionals that understand
//             natural input, communicate intelligently, adapt in real time, and
//             take decisive action. From scheduling and data entry to customer
//             support and order management, AI Workers handle operational tasks
//             with speed, accuracy, and consistency—freeing your team to focus on
//             what truly moves the business forward.
//           </p>
//         </div>
//       </section>
//       <section>
//         <div className="mx-auto flex flex-col gap-6 px-5 py-6 md:max-w-6xl">
//           <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-[#D9DFF0] px-5 py-6">
//             <h3 className="font-montserrat text-center text-[2.5rem] leading-[110%] font-bold -tracking-wide md:text-[4rem]">
//               The Challenge
//             </h3>
//             <p className="text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//               In today’s fast-paced business environment, time is a critical
//               asset and yet, companies continue to invest significant human
//               effort into repetitive, manual tasks. This inefficiency drains
//               resources, restricts growth, and shifts focus away from innovation
//               and value creation.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="from-primary/30 to-secondary/30 flex w-full flex-col gap-6 bg-gradient-to-r px-5 py-6">
//           <div className="bg-background mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 rounded-[36px] px-5 py-6 md:max-w-6xl">
//             <h3 className="font-montserrat text-center text-[2.5rem] leading-[110%] font-bold -tracking-wide md:text-[4rem]">
//               Our Bold Vision
//             </h3>
//             <p className="text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//               The future of work isn’t on the horizon but already here. With our
//               AI solutions, businesses no longer have to imagine smarter
//               operations or wait for next-generation productivity tools. You
//               have the power right now to transform how your organization
//               operates.
//             </p>
//             <p className="text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//               By bringing our AI Workers into your operations, you&apos;re not
//               just adopting a new tool, you’re leading a shift. You’re
//               empowering your team to focus on strategic, creative, and
//               growth-driving work, while our AI Workers take care of the rest
//               with speed, intelligence, reliability and precision.
//             </p>
//             <p className="text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//               DoubleU AI isn’t just a name, it’s a promise. We’re here to double
//               your team’s potential, not add another tool to your cluttered
//               stack. It’s time to rethink work from the ground up.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="mx-auto flex flex-col gap-6 px-3 py-6 md:max-w-6xl">
//           <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-[#D9DFF0] px-8 py-6">
//             <h3 className="font-montserrat text-center text-[2.5rem] leading-[110%] font-bold -tracking-wide md:text-[4rem]">
//               What Sets Us Apart?
//             </h3>
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               <div className="flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 shadow-lg shadow-[#7D73C366]/40 md:px-10">
//                 <h3 className="font-montserrat text-2xl leading-[150%] font-bold -tracking-wide md:text-[32px]">
//                   True Autonomy
//                 </h3>
//                 <p className="text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//                   We’re not about adding yet another app to your collection. We
//                   build agentic infrastructure that reimagines how tasks get
//                   done.
//                 </p>
//               </div>
//               <div className="flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 shadow-lg shadow-[#7D73C366]/40 md:px-10">
//                 <h3 className="font-montserrat text-2xl leading-[150%] font-bold -tracking-wide md:text-[32px]">
//                   Outcome-Driven
//                 </h3>
//                 <p className="text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//                   Forget endless features and complicated interfaces. We’re
//                   focused on delivering tangible, transformative results.
//                 </p>
//               </div>
//               <div className="flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 shadow-lg shadow-[#7D73C366]/40 md:px-10">
//                 <h3 className="font-montserrat text-2xl leading-[150%] font-bold -tracking-wide md:text-[32px]">
//                   Total Workflow Transformation
//                 </h3>
//                 <p className="text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//                   Our infrastructure doesn’t just assist—it takes full command
//                   of entire workflows, streamlining operations around the clock.
//                 </p>
//               </div>
//               <div className="flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 shadow-lg shadow-[#7D73C366]/40 md:px-10">
//                 <h3 className="font-montserrat text-2xl leading-[150%] font-bold -tracking-wide md:text-[32px]">
//                   Unmatched Efficiency
//                 </h3>
//                 <p className="text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
//                   With agentic infrastructure working tirelessly behind the
//                   scenes, your human talent can finally shine where it matters
//                   most.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="mx-auto flex flex-col gap-6 px-3 py-6 md:max-w-6xl">
//           <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-[#D9DFF0] px-3 py-6 md:px-12">
//             <h3 className="font-montserrat text-center text-[2.5rem] leading-[110%] font-bold -tracking-wide md:text-[4rem]">
//               Our Team
//             </h3>
//             <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
//               <div className="rounded-[26px] bg-white">
//                 <Image
//                   src="/solomon.png"
//                   alt="solomon profile picture"
//                   width={462}
//                   height={455}
//                   placeholder="blur"
//                   blurDataURL="/solomon.png"
//                   // className="h-full w-full"
//                 />
//               </div>
//               <div className="flex-col items-center justify-center space-y-4 rounded-[36px] bg-white p-5">
//                 <h3 className="font-montserrat text-[40px] leading-[2.875rem] font-bold -tracking-wide md:text-2xl md:text-[4rem] md:leading-[110%]">
//                   Solomon Asonye
//                 </h3>
//                 <h4 className="text-xl font-extralight md:text-2xl md:leading-[110%]">
//                   Co-Founder & CEO
//                 </h4>
//                 <p className="max-w-2xl text-lg leading-[1.75rem] font-normal -tracking-wide md:text-xl md:leading-[30px]">
//                   Solomon is the co-founder and CEO, driving DoubleU AI’s
//                   strategic vision and operational excellence. With a strong
//                   background in engineering, innovation, and business
//                   leadership, Solomon ensures that every solution is not only
//                   practical but built to deliver real-world impact. His
//                   expertise in bridging technical and business needs, managing
//                   complex projects, and building strong client partnerships has
//                   been key to the company’s growth.
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col gap-5 md:flex-row-reverse">
//               <div className="h-full rounded-[26px] bg-white">
//                 <Image
//                   src="/wahab.png"
//                   alt="wahab profile picture"
//                   width={462}
//                   height={455}
//                   placeholder="blur"
//                   blurDataURL="/wahab.png"
//                   // className="h-full w-full"
//                 />
//               </div>
//               <div className="max-w-[642px] flex-col items-center justify-center space-y-4 rounded-[36px] bg-white p-5">
//                 <h3 className="font-montserrat text-[40px] leading-[2.875rem] font-bold -tracking-wide md:text-2xl md:text-[4rem] md:leading-[110%]">
//                   Wahab G. Yahaya
//                 </h3>
//                 <h4 className="text-xl font-extralight md:text-2xl md:leading-[110%]">
//                   Founder & CTO
//                 </h4>
//                 <p className="text-lg leading-[1.75rem] font-normal -tracking-wide md:text-xl md:leading-8">
//                   Wahab is the founder and an analytical powerhouse, propelling
//                   DoubleU AI cutting-edge technology. He leads our development
//                   team in creating AI agents that truly understand and respond
//                   to human interactions. Wahab’s commitment to ethical AI
//                   practices ensures that our solutions are not only innovative,
//                   but also responsible and trustworthy.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="bg-background flex w-full flex-col gap-6 px-5 py-6">
//           <div className="bg-background mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] px-5 py-6 md:max-w-6xl">
//             <h3 className="font-montserrat text-center text-[2.5rem] leading-[2.875rem] font-bold -tracking-wide md:text-[4rem]">
//               Our Revolutionary Approach
//             </h3>
//             <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
//               <div className="space-y-5">
//                 {approachItems.slice(0, 3).map((item) => (
//                   <div key={item.id} className="flex items-start gap-6">
//                     <ShieldWithNumber number={item.id} />
//                     <div>
//                       <h3 className="text-2xl leading-[2rem] font-bold -tracking-wide md:text-[32px] md:leading-[150%]">
//                         {item.title}
//                       </h3>
//                       <p className="text-left text-base leading-[1.25rem] font-light -tracking-wide md:text-lg md:leading-[1.75rem]">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="space-y-5">
//                 {approachItems.slice(3).map((item) => (
//                   <div key={item.id} className="flex items-start gap-6">
//                     <ShieldWithNumber number={item.id} />
//                     <div>
//                       <h3 className="text-2xl leading-[2rem] font-bold -tracking-wide md:text-[32px] md:leading-[150%]">
//                         {item.title}
//                       </h3>
//                       <p className="text-left text-base leading-[1.25rem] font-light -tracking-wide md:text-lg md:leading-[1.75rem]">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="from-primary/30 to-secondary/30 flex w-full flex-col gap-6 bg-gradient-to-r px-5 py-6">
//           <div className="bg-background mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] px-5 py-6 md:max-w-6xl">
//             <h3 className="font-montserrat text-center text-[2.5rem] leading-[110%] font-bold -tracking-wide md:text-[4rem]">
//               Join the Movement
//             </h3>
//             <p className="text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[2.125rem]">
//               The era of half-baked software is over. With DoubleU AI, you’re
//               not just adopting a new tool—you’re stepping into a future where
//               work is reimagined, streamlined, and truly liberated. Let our
//               agentic infrastructure take care of the mundane, so you can focus
//               on being brilliantly human. Welcome to a new age of work.
//             </p>
//             <p className="text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[2.125rem]">
//               Welcome to DoubleU AI.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// // Shield component with image and number
// function ShieldWithNumber({ number }: { number: number }) {
//   return (
//     <div className="relative h-24 w-16 flex-shrink-0">
//       {/* Using the provided shield image */}
//       <Image
//         src="/shield.png"
//         alt="Shield"
//         width={64}
//         height={96}
//         placeholder="blur"
//         blurDataURL="/shield.png"
//         className="h-full w-full object-contain"
//       />

//       {/* Number overlay */}
//       <div
//         className="font-montserrat absolute inset-0 flex items-center justify-center text-2xl leading-[150%] font-normal -tracking-wide text-white"
//         style={{ top: "-4px" }}
//       >
//         {number}
//       </div>
//     </div>
//   );
// }
