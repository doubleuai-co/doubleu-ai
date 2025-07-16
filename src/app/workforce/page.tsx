import EmblaCarousel from "@/components/card-parrallex";
import { EmblaOptionsType } from "embla-carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import "../embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Workforce() {
  return (
    <main className="flex-1 pt-24 md:pt-0">
      <section className="relative grid place-items-center">
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
      </section>

      <section className="px-5 py-6 md:py-10">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section>
        <div className="mx-auto my-10 flex flex-col items-center gap-6 px-5 py-6 md:max-w-6xl">
          <h3 className="font-montserrat text-center text-[2.5rem] leading-[110%] font-bold -tracking-wide md:text-[4rem]">
            Meet Our Workforce
          </h3>
          <p className="max-w-5xl text-center text-xl leading-[1.75rem] font-normal -tracking-wide md:text-2xl md:leading-[150%]">
            Our AI Workforce is composed of autonomous digital professionals who
            understand natural language, respond intelligently, and make
            decisive actions while adapting in real time. They streamline
            operations by taking over mundane and repetitive tasks once handled
            by humans, delivering results with lightning speed, pinpoint
            accuracy, and zero burnout.
          </p>

          <div className="mx-auto grid w-full grid-cols-1 gap-4 px-5 md:max-w-6xl md:grid-cols-2 md:px-16">
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
          </div>
        </div>
      </section>
    </main>
  );
}
