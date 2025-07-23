// import EmblaCarousel from "@/components/card-parrallex";
// import { EmblaOptionsType } from "embla-carousel";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// import "../embla.css";

// const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Workforce() {
  const agents = [
    {
      name: "Mylo",
      role: "Product Sale Worker",
      image: "/new-img/mylo.svg",
      icon: "/new-img/solar_arrow-up-linear.svg",
      access: "/workforce/mylo",
    },
    {
      name: "Ehiz",
      role: "Hiring Manager",
      image: "/new-img/ehiz.svg",
      icon: "/new-img/solar_arrow-up-linear.svg",
      access: "/workforce/ehiz",
    },
    {
      name: "Neo",
      role: "Sales Service Worker",
      image: "/new-img/neo.svg",
      icon: "/new-img/solar_arrow-up-linear.svg",
      access: "/workforce/neo",
    },
    {
      name: "Agora",
      role: "Event Manager",
      image: "/new-img/agora.svg",
      icon: "/new-img/solar_arrow-up-linear.svg",
      access: "/workforce/agora",
    },
  ];

  // Data for "Our Workers general features" section
  const generalFeatures = [
    "Data-Driven Insights.",
    "Multilingual Capabilities.",
    "24/7 Availability: Always active.",
    "Seamless Multi-Channel Integration",
    "Feedback and online reviews management.",
    "Enhanced & Personalized Customer Experience.",
  ];

  return (
    <main className="bg-white">
      {/* 1. Hero Section for Workforce Page */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image */}
        {/* <Image
          src="/hero-img.svg" // Make sure this is the correct filename you uploaded
          alt="Background Graphic"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none opacity-40 select-none"
        /> */}

        {/* Overlay Glow (if any) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />

        {/* Main Content */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Workforce built specifically
            <br />
            for business needs
          </h1>
          <p className="mt-6 text-base text-gray-300">
            AI workforce represents the beginning of a transformative
            <br />
            paradigm in operational efficiency.
          </p>
          <Link href="/contact-us" passHref>
            <button className="mt-8 rounded-md bg-[#6a5acd] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee] md:text-xl">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>

      <section>
        {/* 2. Meet our AI workforce Section */}
        <section className="bg-white px-2 py-24 text-gray-800 sm:px-2 lg:px-8">
          <div className="container mx-auto text-center md:mb-20">
            <h2 className="mb-4 text-2xl font-bold text-[#222831] md:text-4xl">
              Meet our AI workforce
            </h2>
            <p className="text-md mx-auto max-w-lg px-6 text-center leading-[1.75rem] font-normal -tracking-wide md:text-xl md:leading-[150%]">
              Skilled, specialized, and always ready, these AI agents are built
              to work for you.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-8 px-6 sm:grid-cols-2 sm:px-4 md:max-w-2xl md:px-0 lg:grid-cols-2">
            {agents.map((agent, index) => (
              <Link key="" href={agent.access} passHref>
                <div
                  key={index}
                  className="group relative w-full overflow-hidden"
                >
                  {/* Agent Icons */}
                  <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#1D0B0B] font-bold">
                    <Image
                      src={agent.icon}
                      alt={agent.name}
                      width={250}
                      height={300}
                    />
                  </div>
                  {/* Agent Image */}
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    width={250}
                    height={300}
                    className="h-auto w-full rounded-t-xl object-cover md:w-fit"
                  />
                  {/* Name and Role Overlay */}
                  {/* <div className="absolute right-0 bottom-0 left-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white">
        <h3 className="text-xl font-semibold">{agent.name}</h3>
        <p className="text-sm text-gray-300">{agent.role}</p>
      </div> */}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Our Workers General Features Section */}
        <section className="bg-white px-6 py-16 sm:px-6 md:px-4 lg:px-8">
          <div className="container mx-auto hidden max-w-7xl grid-cols-1 bg-[#F9F9F9] md:grid md:grid-cols-2">
            {/* Left Column: Features List */}
            <div className="flex flex-col space-y-6 p-6 md:p-12">
              <h2 className="mb-4 pb-2 text-center text-2xl font-bold text-[#222831] md:text-start md:text-4xl">
                Our Workers general features
              </h2>
              <p className="max-w-sm pb-4 text-center text-[#404040] md:text-start">
                Skilled, specialized, and always ready, these AI agents are
                built to work for you.
              </p>
              <ul className="space-y-4">
                {generalFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex w-fit items-center space-x-3 bg-[#FFFFFF] p-3"
                  >
                    <Image
                      src="/new-img/bullet.svg"
                      alt=""
                      width="20"
                      height="20"
                      className="h-auto object-cover"
                    />
                    <p className="text-sm text-gray-700 md:text-lg">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="m-0 flex items-center justify-end overflow-hidden p-0">
              <Image
                src="/new-img/woman-phone.svg"
                alt="User interacting with AI"
                width={450}
                height={250}
                className="h-full w-fit object-cover"
              />
            </div>
          </div>
          {/* Mobile */}
          <div className="container mx-auto grid max-w-7xl grid-cols-1 bg-[#F9F9F9] md:hidden md:grid-cols-2">
            {/* Left Column: Features List */}
            <div className="flex flex-col space-y-6 p-6 md:p-12">
              <h2 className="mb-4 pb-2 text-center text-2xl font-bold text-[#222831] md:text-start md:text-4xl">
                Our Workers general features
              </h2>
              <p className="max-w-sm pb-4 text-center text-[#404040] md:text-start">
                Skilled, specialized, and always ready, these AI agents are
                built to work for you.
              </p>

              <div className="m-0 flex items-center justify-end overflow-hidden p-0">
                <Image
                  src="/new-img/woman-phone.svg"
                  alt="User interacting with AI"
                  width={450}
                  height={250}
                  className="h-full w-fit object-cover"
                />
              </div>

              <ul className="space-y-4 py-6 md:py-0">
                {generalFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex w-fit items-center space-x-3 bg-[#FFFFFF] p-2"
                  >
                    <Image
                      src="/new-img/bullet.svg"
                      alt=""
                      width="20"
                      height="20"
                      className="h-auto object-cover"
                    />
                    <p className="text-xs text-gray-700 md:text-lg">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>

      {/* 8. Bottom CTA Banner ("Take a smarter approach...") */}
      <section className="relative mx-4 my-10 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-b from-[#000] to-[#7D73C3] px-4 py-18 text-white sm:px-6 md:my-18 lg:mx-auto lg:px-2">
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
            <button className="rounded-md bg-white px-8 py-4 text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-gray-100">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
