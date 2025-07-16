import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Agora() {
  const items = [
    {
      title: "Professional & Organized",
      description:
        "Agora intelligently manages schedules, reminders, and logistics, coordinating multiple vendors and resources seamlessly to ensure nothing falls through the cracks.",
    },
    {
      title: "Responsive & Reliable",
      description:
        "Agora provides instant, accurate answers to guest inquiries and manages RSVPs efficiently, facilitating clear, real-time communication among team members and attendees.",
    },
    {
      title: "Adaptable & Versatile",
      description:
        "Agora adjusts his approach to fit any event type, from formal galas to lively festivals, supporting themed events by tailoring responses to match the event's tone and style.",
    },
    {
      title: "Multilingual & Inclusive",
      description:
        "Agora communicates in multiple languages, ensuring all guests feel welcome and understood, with accessibility options for guests with special needs.",
    },
    {
      title: "Proactive & Insightful",
      description:
        "Agora anticipates potential issues and offers data-driven insights to optimize planning, sending real-time updates to keep everyone informed as the event unfolds.",
    },
    {
      title: "Enhanced Guest Experience",
      description:
        "Agora personalizes interactions with guests for truly memorable experiences, providing interactive features such as live polls or Q&A sessions during events.",
    },
    {
      title: "Seamless Integration",
      description:
        "Agora syncs with popular event management tools, streamlining tasks like bookings, check-ins, and guest list management without requiring complex setup.",
    },
  ];
  return (
    <main className="flex-1 pt-24 md:pt-0">
      <section>
        <div className="mx-auto mt-2.5 flex max-w-6xl flex-col gap-6 px-5 pb-3 md:flex-row md:items-center md:justify-between md:gap-0 md:pt-28">
          <div className="flex flex-col items-center gap-6 md:max-w-[32.75rem] md:items-start">
            <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:text-left md:text-[4rem] md:leading-[110%]">
              Hi, I’m Agora!
            </h1>
            <p className="text-center text-xl leading-[28px] -tracking-wide text-[#222831] md:text-left md:text-2xl md:leading-[34px]">
              I help you enhance your event planning experience by streamlining
              bookings, managing schedules, and ensuring every detail is
              perfectly executed. Leave the planning stress to me while you
              focus on creating memorable moments.
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
                  src="/agora2.png"
                  alt="agora image"
                  placeholder="blur"
                  blurDataURL="/agora2.png"
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
            Who is Agora?
          </h2>
          <div>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Agora isn&apos;t just another digital tool, he&apos;s your
              dedicated event partner, designed to streamline planning and
              elevate guest experiences. Whether managing corporate conferences,
              weddings, nightclub events, or private gatherings, Agora ensures
              every interaction is efficient, responsive, and memorable.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Agora is more than just an assistant, he&apos;s a strategic
              extension of your event team. Available 24/7, he helps planners
              coordinate logistics, manage guest inquiries, and create seamless
              pathways for successful events. Agora ensures that both hosts and
              attendees receive value-driven support while keeping operations
              smooth, organized, and effective.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              By integrating Agora into your event management process,
              businesses can automate bookings, reduce planning stress, and
              optimize guest satisfaction—all while maintaining a professional
              and adaptable approach to event coordination.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center gap-5 bg-[url(/pattern-bg.png)] px-6 py-5 md:px-[100px] md:pt-10 md:pb-32">
        <h2 className="font-montserrat text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-[64px] md:leading-[110%]">
          Who needs Agora?
        </h2>
        <div className="h-[266px] w-[306px] md:h-[750px] md:w-[950px]">
          <Image
            src="/agora4.svg"
            alt="agora image"
            placeholder="blur"
            blurDataURL="/agora4.svg"
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
          What Can Agora Do For You
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
            The Future of AI-Driven Event Management
          </h2>

          <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
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
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 text-center md:py-20">
        <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide text-[#222831] md:text-[4rem] md:leading-16">
          Get Started with Agora Today!
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
