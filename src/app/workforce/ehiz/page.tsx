import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Ehiz() {
  const items = [
    {
      title: "Smart and Efficient Screening",
      description:
        "Ehiz instantly evaluates candidate qualifications, matching skills and experience to job requirements with AI-driven precision, prioritizing applicants based on best-fit analysis to ensure recruiters focus on top-tier candidates.",
    },
    {
      title: "Automated Interview Scheduling",
      description:
        "Ehiz eliminates the tedious back-and-forth by coordinating interview times with both recruiters and candidates, ensuring a smooth, conflict-free process that enhances the candidate experience.",
    },
    {
      title: "Streamlined Communication",
      description:
        "Ehiz acts as a 24/7 hiring assistant, handling inquiries, application updates, and follow-ups in real-time, keeping recruiters and candidates informed to foster transparency and engagement.",
    },
    {
      title: "AI-Powered Insights & Analytics",
      description:
        "Ehiz provides actionable insights into candidate performance, hiring trends, and potential recruitment roadblocks, helping recruiters refine their strategies for continuous improvement.",
    },
    {
      title: "Seamless Integration with Existing Tools",
      description:
        "Ehiz syncs effortlessly with ATS platforms, HR software, and communication tools to create a unified hiring workflow, minimizing disruption without requiring major process overhauls.",
    },
    {
      title: "Reliable and Scalable Support",
      description:
        "Ehiz adapts to various industries and hiring needs, ensuring a tailored approach to recruitment that scales alongside your business as your team grows.",
    },
    {
      title: "Improved Candidate Experience",
      description:
        "Ehiz ensures quick responses and personalized interactions, making candidates feel valued and strengthening your employer brand by delivering a professional and engaging hiring experience.",
    },
  ];
  return (
    <main className="flex-1 pt-24 md:pt-0">
      <section>
        <div className="mx-auto mt-2.5 flex max-w-6xl flex-col gap-6 px-5 pb-3 md:flex-row md:items-center md:justify-between md:gap-0 md:pt-28">
          <div className="flex flex-col items-center gap-6 md:max-w-[32.75rem] md:items-start">
            <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:text-left md:text-[4rem] md:leading-[110%]">
              Hi, I’m Ehiz!
            </h1>
            <p className="text-center text-xl leading-[28px] -tracking-wide text-[#222831] md:text-left md:text-2xl md:leading-[34px]">
              I help you enhance your recruitment process by sourcing top
              talent, screening candidates, and simplifying hiring decisions.
              Let me handle the search while you focus on building your dream
              team.
            </p>
            <Button className="h-11 w-full rounded-full border border-[#1E2A47] bg-[#1E2A47] px-8 font-normal text-white shadow-md shadow-black/50 transition-colors duration-300 hover:bg-white hover:text-[#1E2A47] hover:shadow-none md:h-14 md:w-fit md:text-xl">
              Book a demo
            </Button>
          </div>

          {/* <div className="h-[283px] w-[372px] pt-3.5 md:h-[617px] md:w-[833px]">
            <Image
              src="/mylo3.svg"
              alt="mylo image"
              width={833}
              height={617}
              className="z-30 h-full w-full object-cover"
            />
          </div> */}

          <div className="relative flex w-full justify-end">
            <div className="from-primary to-secondary absolute inset-0 -z-10 rounded-full bg-linear-to-r blur-[300px]"></div>

            <div>
              <div className="h-[226px] w-[357.55px] bg-[url(/gridm.svg)] bg-center bg-no-repeat md:h-[510px] md:w-[625px] md:bg-[url(/grid.svg)]">
                <Image
                  src="/ehiz2.png"
                  alt="ehiz image"
                  placeholder="blur"
                  blurDataURL="/ehiz2.png"
                  width={400}
                  height={320}
                  className="h-full w-full shrink-0 object-contain"
                />
              </div>
              <div className="h-[36px] w-[355px] md:h-[46.5px] md:w-[671px]">
                <Image
                  src="/grad.svg"
                  alt="gradient"
                  placeholder="blur"
                  blurDataURL="/grad.svg"
                  width={400}
                  height={320}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center px-6 py-5 md:px-[100px] md:py-20">
        <div className="from-primary/30 to-secondary/30 flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-gradient-to-r px-5 py-6 text-center">
          <h2 className="font-montserrat max-w-4xl text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-6xl md:leading-[110%]">
            Who is Ehiz?
          </h2>
          <div>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Ehiz isn&apos;t just another hiring tool, it&apos;s your dedicated
              recruitment partner, designed to streamline every aspect of talent
              acquisition. Whether screening applicants, scheduling interviews,
              or managing candidate communications, Ehiz ensures every
              interaction is efficient, personalized, and effective.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Ehiz is more than just automation, it&apos;s a strategic extension
              of your recruitment team. Available 24/7, it helps hiring managers
              evaluate candidates, coordinate interviews, and create seamless
              pathways to connect with top talent. Ehiz ensures that both
              recruiters and candidates receive value-driven experiences while
              keeping the hiring process natural, engaging, and productive.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              By integrating Ehiz into your recruitment workflow, organizations
              can reduce time-to-hire, enhance candidate engagement, and
              optimize hiring decisions—all while maintaining a professional and
              approachable employer brand.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center gap-5 bg-[url(/pattern-bg.png)] px-6 py-5 md:px-[100px] md:pt-10 md:pb-32">
        <h2 className="font-montserrat text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-[64px] md:leading-[110%]">
          Who needs Ehiz?
        </h2>
        <div className="h-[266px] w-[306px] md:h-[750px] md:w-[950px]">
          <Image
            src="/ehiz4.svg"
            alt="ehiz image"
            placeholder="blur"
            blurDataURL="/ehiz4.svg"
            width={400}
            height={320}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="rounded-[36px] bg-[#D9DFF0] text-center shadow-md shadow-black/25 lg:absolute lg:top-[35%] lg:left-[8%]">
          <h4 className="font-montserrat rounded-t-[36px] bg-white px-[23px] py-6 text-[28px] leading-[110%] font-bold -tracking-wide">
            For Tech Companies
          </h4>
          <p className="max-w-[317px] px-[19px] py-6 text-lg leading-7 -tracking-wide">
            Agora syncs with popular event management tools, streamlining tasks
            like bookings, check-ins, and guest list management without
            requiring complex setup.
          </p>
        </div>
        <div className="rounded-[36px] bg-[#D9DFF0] text-center shadow-md shadow-black/25 lg:absolute lg:bottom-[5%] lg:left-[38%]">
          <h4 className="font-montserrat rounded-t-[36px] bg-white px-[23px] py-6 text-[28px] leading-[110%] font-bold -tracking-wide">
            For Tech Companies
          </h4>
          <p className="max-w-[317px] px-[19px] py-6 text-lg leading-7 -tracking-wide">
            Agora syncs with popular event management tools, streamlining tasks
            like bookings, check-ins, and guest list management without
            requiring complex setup.
          </p>
        </div>
        <div className="rounded-[36px] bg-[#D9DFF0] text-center shadow-md shadow-black/25 lg:absolute lg:top-[35%] lg:right-[10%]">
          <h4 className="font-montserrat rounded-t-[36px] bg-white px-[23px] py-6 text-[28px] leading-[110%] font-bold -tracking-wide">
            For Tech Companies
          </h4>
          <p className="max-w-[317px] px-[19px] py-6 text-lg leading-7 -tracking-wide">
            Agora syncs with popular event management tools, streamlining tasks
            like bookings, check-ins, and guest list management without
            requiring complex setup.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 bg-[#D9DFF0] px-6 py-5 md:px-[100px] md:py-20">
        <h2 className="font-montserrat text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-[64px] md:leading-[110%]">
          What Can Ehiz Do For You
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="space-y-4 rounded-[36px] bg-white px-5 py-6 text-center"
            >
              <h4 className="font-montserrat max-w-[317px] rounded-[36px] bg-[#D9DFF0] p-2 text-[28px] leading-8 font-bold -tracking-wide md:text-[32px] md:leading-[110%]">
                {item.title}
              </h4>
              <p className="max-w-[317px] p-2 text-base leading-5 -tracking-wide md:text-lg md:leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex items-center px-6 py-5 md:px-[100px] md:py-20">
        <div className="from-primary/30 to-secondary/30 flex w-full flex-col items-center justify-center gap-6 rounded-[36px] bg-gradient-to-r px-5 py-6 text-center">
          <h2 className="font-montserrat max-w-4xl text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-6xl md:leading-[110%]">
            The Future of AI-Driven Business Solutions
          </h2>

          <div>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Ehiz redefines how organizations approach talent acquisition by
              providing a balance between automation and human connection. It
              ensures that every stage of recruitment is streamlined,
              data-informed, and candidate-centric, making hiring managers
              confident in their decisions and candidates impressed with their
              experience.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              With AI-driven recruitment becoming essential for competitive
              organizations, Ehiz offers a seamless, scalable, and intelligent
              solution for engaging candidates and building exceptional teams.
              Whether you&apos;re a growing startup or an established
              enterprise, integrating Ehiz enhances your hiring process and
              strengthens your talent pipeline.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 text-center md:py-20">
        <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide text-[#222831] md:text-[4rem] md:leading-16">
          Get Started with Ehiz Today!
        </h2>

        <p className="max-w-3xl text-center text-xl leading-7 -tracking-wide text-[#222831] md:text-2xl md:leading-[2.125rem]">
          Empower your events with an AI-powered agent who ensures every detail
          is handled perfectly. Contact us today to integrate Agora and
          revolutionize the way you plan, manage, and deliver unforgettable
          experiences!
        </p>
        <Button className="h-11 w-full rounded-full border border-[#1E2A47] bg-[#1E2A47] px-8 font-normal text-white shadow-md shadow-black/50 transition-colors duration-300 hover:bg-white hover:text-[#1E2A47] hover:shadow-none md:h-14 md:w-fit md:text-xl">
          Book a Demo
        </Button>

        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Image
            src="/watermark.png"
            alt="watermark"
            placeholder="blur"
            blurDataURL="/watermark.png"
            width={1000}
            height={200}
          />
        </div>
      </section>
    </main>
  );
}
