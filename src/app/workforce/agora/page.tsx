import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Agora() {
  // Data for "What Agora can do for you" section
  const Capabilities = [
    {
      icon: "/brand-logo.png", //
      title: "Professional & Organized",
      description:
        "Agora intelligently manages schedules, reminders, and logistics, coordinating multiple vendors and resources seamlessly to ensure nothing falls through the cracks.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Responsive & Reliable",
      description:
        "Agora provides instant, accurate answers to guest inquiries and manages RSVPs efficiently, facilitating clear, real-time communication among team members and attendees.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Adaptable & Versatile",
      description:
        "Agora adapts to any event, from galas to festivals, matching the tone and style with tailored responses.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Multilingual & Inclusive",
      description:
        "Agora speaks multiple languages and offers accessibility to ensure every guest feels welcome and understood.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Proactive & Insightful",
      description:
        "Agora anticipates potential issues and offers data-driven insights to optimize planning, sending real-time updates to keep everyone informed as the event unfolds.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Enhanced Guest Experience",
      description:
        "Agora personalizes interactions with guests for truly memorable experiences, providing interactive features such as live polls or Q&A sessions during events.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section for Agora Page */}
      <section className="relative overflow-hidden bg-[#0B0A0A] px-4 md:pt-24 text-white sm:px-6 lg:px-8">
        {/* Background elements - subtle blurs/gradients */}
        {/* <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bcd4] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div> */}
        <div className="animate-blob animation-delay-2000 absolute top-1/4 right-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-20 mix-blend-screen blur-3xl filter"></div>
        {/* <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#ff6347] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div> */}

        <div className="max-h-7xl relative z-10 container mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row md:items-center">
          {/* Left Column: Text Content */}
          <div className="mt-48 flex flex-col items-center text-center md:mt-0 md:mb-0 md:w-1/2 md:items-start md:text-left">
            <h1 className="mb-6 text-[40px] leading-[46px] font-black -tracking-wide text-white md:text-[4rem] md:leading-[72px]">
              Hi, I&apos;m Agora!
            </h1>
            <p className="text-md mb-8 max-w-xl leading-[28px] -tracking-wide text-gray-300 md:text-xl md:leading-[34px]">
              I help you enhance your event planning experience by streamlining
              bookings, managing schedules, and ensuring every detail is
              perfectly executed. Leave the planning stress to me while you
              focus on creating memorable moments.
            </p>
            <Link href="/" passHref>
              <button className="rounded-md bg-[#7D73C3] px-8 py-4 text-md font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee] md:text-xl">
                Try DoubleU AI
              </button>
            </Link>
          </div>

          {/* Right Column: Agora Image with Overlays */}
          <div className="relative m-0 flex w-full items-end justify-end p-0 md:w-1/2">
            <Image
              src="/new-img/agora-m.svg" // Placeholder for Agora's image
              alt="Agora AI Worker"
              width={400} // Adjust based on actual image dimensions
              height={500} // Adjust based on actual image dimensions
              className="h-full w-full object-contain"
            />
            {/* Small info overlays - these are illustrative and might need custom SVG/CSS */}
            {/* <div className="absolute top-1/4 left-0 bg-gray-700 bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">AI Model</div>
      <div className="absolute top-1/3 right-0 bg-gray-700 bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">Sales Agent</div>
   */}{" "}
          </div>
        </div>
      </section>

      {/* 2. Who is Agora? Section */}
      <section className="bg-white px-6 py-8 sm:px-6 md:py-14 lg:px-8">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center justify-between gap-8 md:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="mb-6 text-2xl font-bold text-[#222831] md:text-4xl">
              Who is Agora?
            </h2>
            <p className="text-md mb-4 leading-relaxed text-gray-700">
              Agora isn’t just a digital tool, he’s your event partner, built to
              streamline planning and enhance guest experiences. From corporate
              conferences to weddings and private parties, Agora ensures every
              interaction is smooth, responsive, and memorable. As a 24/7
              extension of your event team, he coordinates logistics, handles
              guest inquiries, and supports seamless event execution. With
              Agora, you can automate bookings, reduce planning stress, and
              boost guest satisfaction, while keeping your events professional,
              organized, and adaptable.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/new-img/image-2.svg" // Placeholder for the sales illustration
              alt="Sales process illustration"
              width={400}
              height={300}
              className="rounded-xl border-2 border-gray-400 object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. What Agora can do for you Section */}
      <section className="mx-auto max-w-[85rem] bg-white px-8 py-16 sm:px-6 md:px-4 lg:px-8">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="mb-4 px-28 text-2xl font-bold text-[#222831] md:px-0 md:text-4xl">
            What Agora can do for you
          </h2>
          <p className="px-14 text-[#404040] md:px-0">
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
              <h3 className="text-md mb-2 pt-4 font-semibold text-[#222831] md:text-lg">
                {capability.title}
              </h3>
              <p className="md:text-md text-sm text-gray-700">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The future of AI-driven sales Section (CTA) */}
      <section className="relative w-screen overflow-hidden bg-[#0B0A0A] px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-30 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-10 mix-blend-screen blur-3xl filter"></div>

        <div className="container mx-0 max-w-4xl px-2 md:mx-auto">
          <h2 className="mb-4 px-14 text-2xl leading-tight font-bold md:px-0 md:text-4xl">
            The Future of AI-Driven Event Management
          </h2>
          <p className="text-md mx-auto text-justify leading-relaxed text-[#D9D9D9] md:text-center">
            Agora redefines how events are planned and experienced by providing
            a balance between intelligent automation and personalized
            interaction. He ensures that every aspect of event management is
            streamlined, responsive, and value-driven, making hosts feel
            confident and guests feel valued. With AI-driven event solutions
            becoming essential for modern event professionals, Agora offers a
            seamless, scalable, and intelligent approach to planning and
            execution. Whether you&apos;re organizing corporate functions or
            social celebrations, integrating Agora enhances your event process
            and strengthens guest satisfaction.
          </p>
        </div>
      </section>

      {/* 5. Bottom CTA Banner ("Take a smarter approach...") */}
      <section className="relative mx-4 my-10 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-b from-[#000] to-[#7D73C3] px-4 py-18 text-white sm:px-6 md:my-18 lg:mx-auto lg:px-2">
        <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-2xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            Get Started with Agora Today
            <br className="hidden sm:block" />{" "}
          </h2>
          <p className="px-4 md:px-0">
            Empower your business with an AI brand advocate who ensures every
            interaction counts. Contact us today to integrate Neo and
            revolutionize the way you connect with prospects and grow your
            brand.
          </p>
          <Link href="/contact-us" passHref className="mt-14">
            <button className="rounded-md bg-white px-8 py-4 text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-gray-100">
             Explore AI Workers
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
