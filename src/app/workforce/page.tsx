// import EmblaCarousel from "@/components/card-parrallex";
// import { EmblaOptionsType } from "embla-carousel";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react"; // Lucide icons

// import "../embla.css";

// const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Workforce() {
  const agents = [
    { name: "Mylo", role: "Product Sale Worker", image: "/", id: "01" },
    { name: "Ehiz", role: "Hiring Manager", image: "/", id: "02" },
    { name: "Neo", role: "Sales Service Worker", image: "/", id: "03" },
    { name: "Agora", role: "Event Manager", image: "/", id: "04" },
  ];

  // Data for "Our Workers general features" section
  const generalFeatures = [
    "24/7 availability, ensuring continuous operation.",
    "Seamless integration with your existing systems.",
    "Customizable to fit unique business processes.",
    "Scalable to grow with your enterprise needs.",
    "Data-driven insights for improved decision-making.",
    "Secure and compliant data handling.",
    "Intuitive and easy-to-use interfaces.",
    "Continuous learning and adaptation.",
  ];

  return (
    <main className="bg-white">
      {/* 1. Hero Section for Workforce Page */}
      <section className="relative flex h-[65vh] w-full place-items-center overflow-hidden bg-[#1a1a2e] px-4 py-20 text-white sm:px-6 md:h-screen lg:px-8">
        {/* Background elements - subtle blurs/gradients */}
        <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[#ff6347] opacity-10 mix-blend-screen blur-3xl filter"></div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h1 className="mb-4 text-center text-[40px] leading-[46px] font-black -tracking-wide text-white md:text-[4rem] md:leading-[72px]">
            Workforce built specifically <br className="hidden md:block" /> for
            business needs
          </h1>
          <p className="justify-center text-center text-xl leading-[28px] -tracking-wide text-[#fff] md:max-w-2xl md:text-2xl md:leading-[34px]">
            AI Workforce represents the beginning of a transformative paradigm
            in operational efficiency.
          </p>
          <Link href="/contact-us" passHref>
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
        <section className="bg-white px-4 py-16 text-gray-800 sm:px-6 lg:px-8">
          <div className="container mx-auto mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#222831]">
              Meet our AI workforce
            </h2>
            <p className="text-md max-w-5xl px-24 text-center leading-[1.75rem] font-normal -tracking-wide md:text-xl md:leading-[150%]">
              Skilled, specialized, and always ready, these AI agents are built
              to work for you.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm"
              >
                {/* Agent ID Circle */}
                <div className="absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
                  {agent.id}
                </div>
                {/* Agent Image */}
                <Image
                  src={agent.image} // Replace with actual agent image paths
                  alt={agent.name}
                  width={250} // Adjust based on actual image dimensions
                  height={300} // Adjust based on actual image dimensions
                  className="h-auto w-full rounded-t-xl object-cover"
                />
                {/* Name and Role Overlay */}
                <div className="absolute right-0 bottom-0 left-0 rounded-b-xl bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white">
                  <h3 className="text-xl font-semibold">{agent.name}</h3>
                  <p className="text-sm text-gray-300">{agent.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Our Workers General Features Section */}
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Left Column: Features List */}
            <div className="flex flex-col space-y-6">
              <h2 className="mb-4 text-4xl font-bold text-[#222831]">
                Our Workers general features
              </h2>
              <ul className="space-y-4">
                {generalFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle
                      size={20}
                      className="mt-1 flex-shrink-0 text-[#00bcd4]"
                    />
                    <p className="text-lg text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center md:justify-end">
              {/* Placeholder for the image of a person using AI */}
              <Image
                src="/" // Replace with actual image path
                alt="User interacting with AI"
                width={500} // Adjust as needed
                height={400} // Adjust as needed
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
