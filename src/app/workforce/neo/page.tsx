import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Neo() {
  const items = [
    {
      title: "Seamless Appointment Booking",
      description:
        "Neo intelligently coordinates and books appointments directly on both your team's calendar and the customer's calendar, eliminating scheduling conflicts and back-and-forth communications.",
    },
    {
      title: "Lead Enrichment",
      description:
        "Neo gathers essential information through strategic conversation, enriching lead profiles to provide your sales team with valuable insights about prospect interests and needs.",
    },
    {
      title: "Concise & Accurate Information",
      description:
        "Neo delivers well-structured responses that clarify your services without overwhelming prospects with unnecessary details.",
    },
    {
      title: "Conversational & Engaging Interactions",
      description:
        "By using natural language processing, Neo ensures that every response feels thoughtful and relevant, keeping users engaged.",
    },
    {
      title: "Seamless Lead Nurturing",
      description:
        "Neo assists in guiding potential customers through your offerings, addressing common questions, and suggesting relevant solutions.",
    },
    {
      title: "Encourages Meaningful Connections",
      description:
        "When appropriate, Neo suggests booking a call with your team, ensuring prospects move smoothly down the sales funnel without feeling pressured.",
    },
    {
      title: "Multi-Channel Integration",
      description:
        "Whether through your website, chat widgets, or social platforms, Neo is always available to assist.",
    },
    {
      title: "Personalized Responses",
      description:
        "Using AI-driven insights, Neo tailors replies based on user interactions, ensuring relevant recommendations and a personalized experience.",
    },
    {
      title: "Improved Efficiency",
      description:
        "By handling repetitive questions and initial inquiries, Neo frees up your team to focus on high-value conversations and closing deals.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Neo provides analytics on customer interactions, helping businesses refine their messaging and optimize engagement strategies.",
    },
  ];
  return (
    <main className="flex-1 pt-24 md:pt-0">
      <section>
        <div className="mx-auto mt-2.5 flex max-w-6xl flex-col gap-6 px-5 pb-3 md:flex-row md:items-center md:justify-between md:gap-0 md:pt-28">
          <div className="flex flex-col items-center gap-6 md:max-w-[32.75rem] md:items-start">
            <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:text-left md:text-[4rem] md:leading-[110%]">
              Hi, I’m Neo!
            </h1>
            <p className="text-center text-xl leading-[28px] -tracking-wide text-[#222831] md:text-left md:text-2xl md:leading-[34px]">
              I help you enhance your sales and engagement process by automating
              outreach, nurturing leads, and driving meaningful customer
              interactions. Let me handle the conversations while you focus on
              closing deals.
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
                  src="/neo2.png"
                  alt="neo image"
                  placeholder="blur"
                  blurDataURL="/neo2.png"
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
            Who is Neo?
          </h2>
          <div>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Neo is a dedicated brand advocate, designed to provide clear,
              accurate, and engaging information about your services. Whether
              answering inquiries, assisting potential clients, or encouraging
              meaningful conversations, Neo ensures every interaction is
              helpful, informative, and inviting.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              She&apos;s a strategic extension of your team. Available 24/7, she
              helps businesses build relationships with prospects, guide them
              through service offerings, and create seamless pathways to connect
              with real team members. Neo ensures that users receive
              value-driven responses while keeping conversations natural,
              engaging, and effective. By integrating Neo into your sales and
              customer engagement process, businesses can streamline inquiries,
              reduce response times, and optimize lead conversion—all while
              maintaining a professional and approachable brand presence.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center gap-5 bg-[url(/pattern-bg.png)] px-6 py-5 md:px-[100px] md:pt-10 md:pb-32">
        <h2 className="font-montserrat text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-[64px] md:leading-[110%]">
          Who needs Neo?
        </h2>
        <div className="h-[266px] w-[306px] md:h-[750px] md:w-[950px]">
          <Image
            src="/neo4.svg"
            alt="neo image"
            placeholder="blur"
            blurDataURL="/neo4.svg"
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
          What Can Neo Do For You
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
            The Future of Brand Advocacy
          </h2>

          <div>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Neo redefines the way businesses engage with prospects by
              providing a balance between automation and human connection. She
              ensures that every interaction is informative, engaging, and
              value-driven, making customers feel confident in their next steps.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              With AI-driven sales enablement becoming a must-have for modern
              businesses, Neo offers a seamless, scalable, and intelligent
              solution for engaging customers and driving conversions. Whether
              you&apos;re a startup or an established brand, integrating Neo
              enhances your sales process and strengthens customer
              relationships.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 text-center md:py-20">
        <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide text-[#222831] md:text-[4rem] md:leading-16">
          Get Started with Neo Today!
        </h2>

        <p className="max-w-3xl text-center text-xl leading-7 -tracking-wide text-[#222831] md:text-2xl md:leading-[2.125rem]">
          Empower your business with an AI brand advocate who ensures every
          interaction counts. Contact us today to integrate Neo and
          revolutionize the way you connect with prospects and grow your brand!
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
