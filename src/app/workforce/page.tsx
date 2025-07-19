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
      id: "01",
    },
    {
      name: "Ehiz",
      role: "Hiring Manager",
      image: "/new-img/ehiz.svg",
      id: "02",
    },
    {
      name: "Neo",
      role: "Sales Service Worker",
      image: "/new-img/neo.svg",
      id: "03",
    },
    {
      name: "Agora",
      role: "Event Manager",
      image: "/new-img/agora.svg",
      id: "04",
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
      <section className="relative flex h-[68vh] w-full place-items-center overflow-hidden bg-[#1a1a2e] px-4 text-white sm:px-6 md:h-[800px] lg:px-8">
        {/* Background elements - subtle blurs/gradients */}
        <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[#ff6347] opacity-10 mix-blend-screen blur-3xl filter"></div>

        <div className="relative z-10 mx-auto mt-24 flex max-w-4xl flex-col items-center gap-6 py-8 text-center">
          <h1 className="mb-4 text-center text-[40px] leading-[46px] font-black -tracking-wide text-white md:text-[4rem] md:leading-[72px]">
            Workforce built specifically <br className="hidden md:block" /> for
            business needs
          </h1>
          <p className="justify-center text-center text-xl leading-[28px] -tracking-wide text-[#fff] md:max-w-2xl md:text-2xl md:leading-[34px]">
            AI Workforce represents the beginning of a transformative paradigm
            in operational efficiency.
          </p>
          <Link href="/contact-us" passHref className="mt-12">
            <button className="rounded-md bg-[#6a5acd] px-8 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee] md:text-xl">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>

      {/* <section className="relative grid place-items-center">
        <div className="h-[65vh] w-full md:h-screen">
          <Image
            src="/mountain.jpeg"
            placeholder="blur"
            blurDataURL="/mountain.jpeg"
            alt="mountain background"
            fill
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center gap-6 pt-12 md:pt-44">
          <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:max-w-2xl md:text-[4rem] md:leading-[72px]">
            Workforce Built Specifically For Business Needs
          </h1>
          <p className="mt-6 justify-center text-center text-xl leading-[28px] -tracking-wide text-[#222831] md:max-w-2xl md:text-2xl md:leading-[34px]">
            AI Workforce represents the beginning of a transformative paradigm
            in operational efficiency.
          </p>
        </div>
      </section> */}

      {/* <section className="px-5 py-6 md:py-10">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section> */}
      <section>
        {/* <div className="mx-auto grid w-full grid-cols-1 gap-4 px-5 md:max-w-6xl md:grid-cols-2 md:px-16">
            <div className="border-secondary relative overflow-hidden rounded-3xl border bg-[url(/pattern1.png)]">
              <div className="flex flex-col items-center justify-center rounded-3xl bg-[url(/gradient.svg)] bg-center">
                <div className="h-[240px] w-[306px] pt-3.5 md:h-[374px] md:w-[491px]">
                  <Image
                    src="/mylo2.png"
                    alt="mylo image"
                    placeholder="blur"
                    blurDataURL="/mylo2.png"
                    width={400}
                    height={320}
                    className="z-30 h-full w-full object-contain"
                  />
                </div>
                <div className="absolute top-[54.76px] left-[5.18px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[79px] md:left-[33.91px] md:gap-3">
                  <div className="bg-primary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Hospitality
                  </h4>
                </div>
                <div className="absolute top-[99.63px] left-[19.52px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:left-[56.91px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#1E2A47] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Wholesalers
                  </h4>
                </div>
                <div className="absolute top-[54.76px] right-[9.71px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[79px] md:right-[33px] md:gap-3">
                  <div className="bg-secondary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    E-Commerce
                  </h4>
                </div>
                <div className="absolute top-[99.63px] right-[32.24px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:right-[65px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#222831] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Others.......
                  </h4>
                </div>

                <div className="flex h-fit w-full flex-col items-center justify-center gap-3 bg-white/40 px-3 py-4 blur-[50]">
                  <h3 className="font-montserrat text-center text-4xl leading-[110%] font-bold -tracking-wide">
                    Mylo
                  </h3>
                  <Image src="/line.png" alt="line" width={230} height={2} />
                  <p className="font-montserrat text-center text-2xl leading-[110%] font-normal -tracking-wide">
                    Product Sales Worker
                  </p>

                  <Link href="/workforce/mylo">
                    <Button
                      variant="default"
                      className="text-primary font-heebo shadow-primary h-[43px] w-fit rounded-full bg-white px-10 text-lg shadow-md transition-colors duration-300 hover:bg-gray-100 hover:bg-gradient-to-r hover:from-[#7D73C3] hover:to-[#9993C3] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-secondary relative overflow-hidden rounded-3xl border bg-[url(/pattern1.png)]">
              <div className="flex flex-col items-center justify-center rounded-3xl bg-[url(/gradient.svg)] bg-center">
                <div className="h-[240px] w-[306px] pt-3.5 md:h-[374px] md:w-[491px]">
                  <Image
                    src="/neo2.png"
                    alt="neo image"
                    placeholder="blur"
                    blurDataURL="/neo2.png"
                    width={400}
                    height={320}
                    className="z-30 h-full w-full object-contain"
                  />
                </div>
                <div className="absolute top-[53.67px] left-[14.9px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[79px] md:left-[33.91px] md:gap-3">
                  <div className="bg-secondary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Healthcare
                  </h4>
                </div>
                <div className="absolute top-[113.83px] left-[5.18px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:left-[8.91px] md:gap-3">
                  <div className="bg-primary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Online Coaches
                  </h4>
                </div>
                <div className="absolute top-[53.67px] right-[5.27px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[79px] md:right-[33px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#1E2A47] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    MEP Services
                  </h4>
                </div>
                <div className="absolute top-[113.83px] right-[31.6px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:right-[45px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#222831] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Others.......
                  </h4>
                </div>
                <div className="flex h-fit w-full flex-col items-center justify-center gap-3 bg-white/40 px-3 py-4 blur-[50]">
                  <h3 className="font-montserrat text-center text-4xl leading-[110%] font-bold -tracking-wide">
                    Neo
                  </h3>
                  <Image src="/line.png" alt="line" width={230} height={2} />
                  <p className="font-montserrat text-center text-2xl leading-[110%] font-normal -tracking-wide">
                    Service Sales Worker
                  </p>

                  <Link href="/workforce/neo">
                    <Button
                      variant="default"
                      className="text-primary font-heebo shadow-primary h-[43px] w-fit rounded-full bg-white px-10 text-lg shadow-md transition-colors duration-300 hover:bg-gray-100 hover:bg-gradient-to-r hover:from-[#7D73C3] hover:to-[#9993C3] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-secondary relative overflow-hidden rounded-3xl border bg-[url(/pattern2.png)] md:mt-12">
              <div className="flex flex-col items-center justify-center rounded-3xl bg-[url(/gradient.svg)] bg-center">
                <div className="h-[240px] w-[306px] pt-3.5 md:h-[374px] md:w-[491px]">
                  <Image
                    src="/agora2.png"
                    alt="agora image"
                    placeholder="blur"
                    blurDataURL="/agora2.png"
                    width={400}
                    height={320}
                    className="z-30 h-full w-full object-contain"
                  />
                </div>

                <div className="absolute top-[54.76px] left-[5.18px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[79px] md:left-[33.91px] md:gap-3">
                  <div className="bg-primary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Public Events
                  </h4>
                </div>
                <div className="absolute top-[99.63px] left-[19.52px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:left-[46.91px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#1E2A47] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Conferences
                  </h4>
                </div>
                <div className="absolute top-[54.76px] right-[5.91px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[79px] md:right-[33px] md:gap-3">
                  <div className="bg-secondary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Private Parties
                  </h4>
                </div>
                <div className="absolute top-[99.63px] right-[32.24px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:right-[65px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#222831] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Others.......
                  </h4>
                </div>

                <div className="flex h-fit w-full flex-col items-center justify-center gap-3 bg-white/40 px-3 py-4 blur-[50]">
                  <h3 className="font-montserrat text-center text-4xl leading-[110%] font-bold -tracking-wide">
                    Agora
                  </h3>
                  <Image src="/line.png" alt="line" width={230} height={2} />
                  <p className="font-montserrat text-center text-2xl leading-[110%] font-normal -tracking-wide">
                    Event Manager
                  </p>

                  <Link href="/workforce/agora">
                    <Button
                      variant="default"
                      className="text-primary font-heebo shadow-primary h-[43px] w-fit rounded-full bg-white px-10 text-lg shadow-md transition-colors duration-300 hover:bg-gray-100 hover:bg-gradient-to-r hover:from-[#7D73C3] hover:to-[#9993C3] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-secondary relative overflow-hidden rounded-3xl border bg-[url(/pattern2.png)] md:mt-12">
              <div className="flex flex-col items-center justify-center rounded-3xl bg-[url(/gradient.svg)] bg-center">
                <div className="h-[240px] w-[306px] pt-3.5 md:h-[374px] md:w-[491px]">
                  <Image
                    src="/ehiz2.png"
                    alt="ehiz image"
                    placeholder="blur"
                    blurDataURL="/ehiz2.png"
                    width={400}
                    height={320}
                    className="z-30 h-full w-full object-contain"
                  />
                </div>

                <div className="absolute top-[54.76px] left-[5.18px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[73.14px] md:left-[46px] md:gap-3">
                  <div className="bg-primary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Recruitment
                  </h4>
                </div>
                <div className="absolute top-[99.63px] left-[19.52px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:left-[57px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#1E2A47] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Hiring Team
                  </h4>
                </div>
                <div className="absolute top-[54.42px] right-[2.61px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-1.5 md:top-[73.14px] md:right-[11.91px] md:gap-3 md:px-2.5">
                  <div className="bg-secondary h-[0.623125rem] w-[0.623125rem] rounded-full md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Human Resources
                  </h4>
                </div>
                <div className="absolute top-[99.63px] right-[32.24px] flex items-center justify-center gap-2 rounded-[1.4025rem] bg-white px-2.5 md:top-[151px] md:right-[78.91px] md:gap-3">
                  <div className="h-[0.623125rem] w-[0.623125rem] rounded-full bg-[#222831] md:h-4 md:w-4"></div>
                  <h4 className="text-xs leading-5 font-medium -tracking-wide md:text-xl md:leading-[34px]">
                    Others.......
                  </h4>
                </div>
                <div className="flex h-fit w-full flex-col items-center justify-center gap-3 bg-white/40 px-3 py-4 blur-[50]">
                  <h3 className="font-montserrat text-center text-4xl leading-[110%] font-bold -tracking-wide">
                    Ehiz
                  </h3>
                  <Image src="/line.png" alt="line" width={230} height={2} />
                  <p className="font-montserrat text-center text-2xl leading-[110%] font-normal -tracking-wide">
                    Hiring Manager
                  </p>

                  <Link href="/workforce/ehiz">
                    <Button
                      variant="default"
                      className="text-primary font-heebo shadow-primary h-[43px] w-fit rounded-full bg-white px-10 text-lg shadow-md transition-colors duration-300 hover:bg-gray-100 hover:bg-gradient-to-r hover:from-[#7D73C3] hover:to-[#9993C3] hover:text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

        {/* 2. Meet our AI workforce Section */}
        <section className="bg-white px-2 py-10 text-gray-800 sm:px-2 lg:px-8">
          <div className="container mx-auto mb-20 text-center">
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
              <div
                key={index}
                className="group relative w-full overflow-hidden"
              >
                {/* Agent ID Circle */}
                <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
                  {agent.id}
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
