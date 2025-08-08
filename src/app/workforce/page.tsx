// import EmblaCarousel from "@/components/card-parrallex";
// import { EmblaOptionsType } from "embla-carousel";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ButtonAnimate from "@/components/workforce/button-anim";
import { agents } from "@/lib/agentsData";
// import "../embla.css";

// const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Workforce() {
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
      <section className="relative flex h-screen md:h-[120vh] items-center justify-center bg-black text-white">
        <Image
          src="/new-img/workforce(2).png"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-0"
        />
        {/* Blurred Shape 1 */}
        {/* <div className="absolute top-[5px] left-0 h-[412.3px] w-[80px] translate-z-0 rotate-[137.15deg] transform-gpu rounded-full bg-[#7D73C34D] opacity-40 blur-[40px] md:left-[362px] md:w-[122px]"></div> */}

        {/* Blurred Shape 2 */}
        {/* <div className="absolute -top-[7px] right-0 h-[412.3px] w-[80px] translate-z-0 rotate-[42.85deg] transform-gpu rounded-full bg-[#7D73C34D] opacity-40 blur-[40px] md:right-[23%] md:w-[122px]"></div> */}

        {/* Overlay Glow (if any) */}
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/30 to-black/90" /> */}

        {/* Main Content */}
        <div className="relative mx-auto max-w-[52rem] px-4 py-20 text-center">
          <h1 className="text-3xl leading-tight font-bold sm:text-5xl md:text-6xl">
            Workforce built specifically for business needs
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-gray-300">
            AI workforce represents the beginning of a transformative paradigm
            in operational efficiency.
          </p>
          <Link href="/contact-us" passHref>
            <button className="cursor-pointer md:text-md mt-14 rounded-md bg-[#6a5acd] px-8 py-3 text-sm font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee]">
              Try DoubleU AI
            </button>
          </Link>
          <Image
            src="/new-img/workforce-pattern.svg"
            alt="Pattern background"
            width={100}
            height={80}
            className="md:hidden absolute top-[26rem] -left-[1rem] w-[150px] object-cover md:top-[12rem] md:-left-[20rem] md:w-[400px]"
          />
          <Image
            src="/new-img/workforce-pattern.svg"
            alt="Pattern background"
            width={100}
            height={80}
            className="md:hidden absolute top-[26rem] -right-[1rem] w-[150px] scale-x-[-1] object-cover md:top-[12rem] md:-right-[20rem] md:w-[400px] md:scale-x-[-1]"
          />
        </div>
      </section>

      <section>
        {/* 2. Meet our AI workforce Section */}
        <section className="bg-white px-2 py-18 text-[#0B0A0A] sm:px-2 lg:px-8">
          <div className="container mx-auto mb-8 text-center md:my-20">
            <h2 className="mb-4 text-2xl font-bold text-[#0B0A0A] md:text-4xl">
              Meet our AI workforce
            </h2>
            <p className="mx-auto max-w-lg px-6 text-center text-sm leading-[1.4rem] font-normal -tracking-wide text-[#404040] md:text-xl md:leading-[150%]">
              Skilled, specialized, and always ready, these AI agents are built
              to work for you.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-8 px-6 sm:grid-cols-2 sm:px-4 md:max-w-2xl md:px-0 lg:grid-cols-2">
            {agents.map((agent, index) => (
              // <Link key="" href="" passHref>
              <div
                key={index}
                className="group relative w-full overflow-hidden"
              >
                {/* Agent Icons */}

                <div className="absolute top-10 left-10 z-10 flex h-6 w-6 items-center justify-center">
                  <ButtonAnimate agent={agent} />
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
              // </Link>
            ))}
          </div>
        </section>

        {/* 3. Our Workers General Features Section */}
        <section className="bg-white px-6 py-0 sm:px-6 md:py-16 md:px-[120px]">
          <div className="p-0 m-0 mx-auto hidden justify-between items-center max-w-7xl grid-cols-1 bg-[#F9F9F9] md:grid md:grid-cols-2">
            {/* Left Column: Features List */}
            <div className="flex flex-col space-y-8 p-4 pl-8">
              <h2 className="mb-4 pb-2 text-center text-xl font-bold text-[#0B0A0A] md:text-start md:text-3xl">
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
                      width="30"
                      height="30"
                      className="h-auto object-cover"
                    />
                    <p className="text-sm font-bold text-[#0B0A0A] md:text-md">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="m-0 flex items-center justify-end w-full h-full p-0">
              <Image
                src="/new-img/woman-phone.svg"
                alt="User interacting with AI"
                width={450}
                height={250}
                className="h-fit w-full object-contain"
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="container mx-auto grid max-w-7xl grid-cols-1 bg-[#F9F9F9] md:hidden md:grid-cols-2">
            {/* Left Column: Features List */}
            <div className="flex flex-col space-y-6 md:p-12">
              <h2 className="mb-4 px-6 pb-2 text-center text-2xl font-bold text-[0B0A0A] md:text-start md:text-4xl">
                Our Workers general features
              </h2>
              <p className="max-w-sm px-6 pb-4 text-center text-sm text-[#404040] md:text-start">
                Skilled, specialized, and always ready, these AI agents are
                built to work for you.
              </p>

              <div className="m-0 flex items-center justify-end overflow-hidden pb-4">
                <Image
                  src="/new-img/woman-phone.svg"
                  alt="User interacting with AI"
                  width={450}
                  height={250}
                  className="h-full w-full object-cover"
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
                    <p className="text-xs font-bold text-[#0B0A0A] md:text-lg">
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
           <section
          className="relative flex justify-center items-center mx-4 md:mx-[120px] mb-6 md:my-16 max-w-6xl overflow-hidden rounded-2xl bg-[linear-gradient(171.67deg,_#160F0F_35.65%,_#7D73C3_93.62%)] px-4 md:px-[120px] py-18 text-white"
        >
          <div className="md:container mx-auto flex md:max-w-3xl flex-col items-center  text-center">
            <h2 className="mb-4 text-2xl leading-tight md:px-4 font-medium sm:text-4xl md:text-4xl md:max-w-lg">
              Take a smarter approach to AI in your business today.
            </h2>
            <p className="px-3 md:px-0 max-w-lg">
              Seamlessly connect ai to your everyday tools and start working
              faster, better, and easier
            </p>
            <Link href="/contact-us" passHref>
              <button
                className="cursor-pointer mt-6 md:mt-12 rounded-md bg-white px-8 py-3 text-sm md:text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-[#9747FF] hover:text-black"
              >
                Get Started Now
              </button>
            </Link>
          </div>
        </section>
    </main>
  );
}
