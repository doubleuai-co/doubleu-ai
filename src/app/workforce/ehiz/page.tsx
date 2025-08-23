import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Ehiz() {
  // Data for "What Ehiz can do for you" section
  const Capabilities = [
    {
      icon: "/brand-logo.png", //
      title: "Smart and Efficient Screening",
      description:
        "Ehiz uses AI to match candidates to job requirements, so recruiters can focus on the best-fit applicants.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Automated Interview Scheduling",
      description:
        "Ehiz schedules interviews for recruiters and candidates, cutting the back-and-forth and making the process smooth and stress-free.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Streamlined Communication",
      description:
        "Ehiz is your 24/7 hiring assistant, managing inquiries, updates, and follow-ups in real-time to keep everyone in the loop.",
    },
    {
      icon: "/brand-logo.png", //
      title: "AI-Powered Insights & Analytics",
      description:
        "Ehiz gives clear insights on candidate performance, hiring trends, and roadblocks to help recruiters improve continuously.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Seamless Integration with Existing Tools",
      description:
        "Ehiz connects seamlessly with your ATS, HR tools, and comms apps — streamlining hiring without disrupting your workflow.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Reliable and Scalable Support",
      description:
        "Ehiz adapts to various industries and hiring needs, ensuring a tailored approach to recruitment that scales alongside your business as your team grows.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section for Ehiz Page */}
      <section className="relative overflow-hidden bg-[#0B0A0A] text-white md:px-[120px] md:pt-2">
        {/* Background elements - subtle blurs/gradients */}
        {/* <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bcd4] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div> */}
        {/* <div className="animate-blob animation-delay-2000 absolute -bottom-30 h-120 w-120 rounded-full bg-[#00bcd4] opacity-20 mix-blend-screen blur-3xl filter md:top-[45%] md:right-40"></div> */}
        {/* <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#ff6347] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div> */}

        <div className="max-h-7xl relative z-10 flex flex-col items-center justify-between gap-x-24 pt-20 md:flex-row md:items-center md:justify-between md:px-0 md:pt-24">
          {/* Left Column: Text Content */}
          <div className="pb- flex flex-col items-center px-2 pt-18 text-center md:mt-26 md:mb-0 md:w-1/2 md:items-start md:px-0 md:pb-22 md:text-left">
            <h1 className="mb-4 text-[40px] leading-[46px] -tracking-wide text-white md:text-[3rem] md:leading-[72px]">
              Hi, I&apos;m Ehiz!
            </h1>
            <p className="mb-8 max-w-lg px-4 text-sm leading-[28px] -tracking-wide text-[#D9D9D9] md:-mr-40 md:px-0 md:text-[14px] md:leading-[34px]">
              I help you enhance your recruitment process by sourcing top
              talent, screening candidates, and simplifying hiring decisions.
              Let me handle the search while you focus on building your dream
              team.
            </p>
            <Link href="/contact" passHref>
              <button className="cursor-pointer rounded-md bg-[#7D73C3] px-6 py-3.5 text-sm font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:mb-4 md:text-[16px]">
                Try DoubleU AI
              </button>
            </Link>
          </div>

          {/* Right Column: Neo Image with Overlays */}
          <div className="flex w-full transform justify-end md:translate-x-22">
            {" "}
            <Image
              src="/Group 42118(2).png" // Placeholder for Mylo's image
              alt="Mylo AI Worker"
              width={400} // Adjust based on actual image dimensions
              height={500} // Adjust based on actual image dimensions
              className="h-full w-full object-fill md:h-fit md:w-[800px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Who is Ehiz? Section */}
      <section className="bg-white px-6 pt-[49px] sm:px-6 md:px-[120px] md:pt-[118px]">
        <div className="grid grid-cols-1 items-center justify-between gap-4 md:grid-cols-2 md:gap-2">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="mb-6 text-[28px] font-bold text-[#0B0A0A] md:text-[40px]">
              Who is Ehiz?
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#404040] md:text-[16px]">
              Ehiz isn’t just a hiring tool, it’s your recruitment partner,
              built to streamline every stage of talent acquisition. From
              screening applicants to scheduling interviews and managing
              communications, Ehiz makes the process efficient, personalized,
              and effective. More than automation, Ehiz acts as a 24/7 extension
              of your team, helping evaluate candidates, coordinate interviews,
              and connect you with top talent. With Ehiz, you reduce
              time-to-hire, improve candidate engagement, and make smarter
              hiring decisions, while maintaining a strong, approachable
              employer brand.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/new-img/image.png" // Placeholder for the sales illustration
              alt="Sales process illustration"
              width={400}
              height={300}
              className="rounded-xl border border-[#7D73C3] object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. What Ehiz can do for you Section */}
      <section className="mx-auto bg-white px-8 py-[49px] sm:px-6 md:px-[120px] md:py-[89px]">
        <div className="mx-auto mb-10 text-center md:mb-16">
          <h2 className="mb-4 px-14 text-[28px] font-bold text-[#0B0A0A] md:px-0 md:text-4xl">
            What Ehiz can do for you
          </h2>
          <p className="mx-auto max-w-sm px-2 text-[#404040] md:px-0">
            Skilled, specialized, and always ready, these AI agents are built to
            work for you.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Capabilities.map((capability, index) => (
            <div
              key={index}
              className="max-x-3xl flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 px-6 py-10 text-center shadow-sm md:px-4"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#222831]">
                {/* Placeholder for capability icon */}
                <Image
                  src={capability.icon}
                  alt={capability.title + " icon"}
                  width={28}
                  height={28}
                  className="flex-shrink-0 object-contain group-hover:brightness-200"
                />
              </div>
              <h3 className="text-md mb-2 pt-4 font-semibold text-[#404040] md:text-lg">
                {capability.title}
              </h3>
              <p className="md:text-md text-sm text-[#0B0A0A]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The future of AI-driven sales Section (CTA) */}
      <section className="relative w-screen overflow-hidden bg-[#0B0A0A] px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <div className="animate-blob animation-delay-2000 absolute top-0 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-20 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob absolute top-1/2 left-8 h-80 w-80 rounded-full bg-[#00bcd4] opacity-20 mix-blend-screen blur-3xl filter md:top-0 md:left-0"></div>

        <div className="container mx-0 max-w-5xl md:mx-auto">
          <h2 className="mb-8 px-10 text-[28px] leading-tight font-bold text-[#F0F0F0] md:px-0 md:text-4xl">
            The Future of AI-Driven Business Solutions
          </h2>
          <p className="mx-auto max-w-5xl px-4 text-start text-[16px] leading-relaxed text-[#D9D9D9] md:px-0 md:text-center">
            Ehiz redefines how organizations approach talent acquisition by
            providing a balance between automation and human connection. It
            ensures that every stage of recruitment is streamlined,
            data-informed, and candidate-centric, making hiring managers
            confident in their decisions and candidates impressed with their
            experience. With AI-driven recruitment becoming essential for
            competitive organizations, Ehiz offers a seamless, scalable, and
            intelligent solution for engaging candidates and building
            exceptional teams.
          </p>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="relative mx-4 my-10 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-b from-[#000] to-[#7D73C3] px-4 py-[49px] text-[#F0F0F0] sm:px-6 md:mx-[120px] md:py-[87px]">
        <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-2xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            Get Started with Ehiz Today
            <br className="hidden sm:block" />{" "}
          </h2>
          <p className="px-4 md:px-0">
            Discover a new level of customer engagement with an AI sales agent
            who ensures every moment of your customer&apos;s experience counts.
            Integrate Ehiz into your business today and revolutionize the way
            you connect with prospects and close sales.
          </p>
          <Link href="/contact-us" passHref className="mt-14">
            <button className="cursor-pointer rounded-md bg-white px-8 py-4 text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-[#9747FF]">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
