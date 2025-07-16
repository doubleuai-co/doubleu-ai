import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Mylo() {
  const items = [
    {
      title: "End-to-End Order Management",
      description:
        "Mylo expertly manages the entire customer journey from initial inquiry through product selection to secure payment processing, creating a seamless buying experience.",
    },
    {
      title: "Concise & Accurate Information",
      description:
        "Mylo delivers well-structured responses that clarify product and service options without overwhelming customers with unnecessary details.",
    },
    {
      title: "Seamless Sales Process",
      description:
        "Mylo assists in guiding customers through your offerings, addressing common questions, and suggesting relevant products and solutions.",
    },
    {
      title: "Multi-Channel Integration",
      description:
        "Whether through your website, mobile apps, or social media platforms, Mylo is always available to assist.",
    },
    {
      title: "Encourages Personalized Shopping",
      description:
        "When appropriate, Mylo suggests specialty products or promotional offerings, ensuring customers explore options without feeling pressured.",
    },
    {
      title: "Conversational & Engaging Interactions",
      description:
        "By using natural language processing, Mylo ensures that every response feels thoughtful and relevant, keeping customers engaged throughout their journey.",
    },
  ];
  return (
    <main className="flex-1 pt-24 md:pt-0">
      <section>
        <div className="mx-auto mt-2.5 flex max-w-6xl flex-col gap-6 px-5 pb-3 md:flex-row md:items-center md:justify-between md:gap-0 md:pt-28">
          <div className="flex flex-col items-center gap-6 md:max-w-[32.75rem] md:items-start">
            <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:text-left md:text-[4rem] md:leading-[110%]">
              Hi, I’m Mylo!
            </h1>
            <p className="text-center text-xl leading-[28px] -tracking-wide text-[#222831] md:text-left md:text-2xl md:leading-[34px]">
              I help you enhance your sales and customer experience effortlessly
              by automating outreach, optimizing campaigns, and driving
              engagement. Let me handle the strategy while you focus on closing
              deals.
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
                  src="/mylo2.png"
                  alt="mylo image"
                  placeholder="blur"
                  blurDataURL="/mylo2.png"
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
        <div className="from-primary/30 to-secondary/30 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-gradient-to-r px-5 py-6 text-center">
          <h2 className="font-montserrat max-w-4xl text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-6xl md:leading-[110%]">
            Who is Mylo?
          </h2>
          <div>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              Mylo is a dedicated sales agent, designed to provide warm,
              attentive, and personalized service throughout your customer
              journey. Whether handling orders from initial inquiry to payment
              processing, providing comprehensive customer support, or holding
              personalized conversations with every user, Mylo ensures every
              interaction is helpful, efficient, and delightful.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              She&apos;s a strategic extension of your sales team. Available
              24/7, she helps create exceptional customer experiences, guides
              prospects through your offerings, and creates seamless pathways to
              connect with real team members when needed. Mylo ensures that
              customers receive value-driven service while keeping interactions
              natural, engaging, and memorable.
            </p>
            <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
              By integrating Mylo into your sales process, businesses streamline
              inquiries, reduce response times, and optimize customer
              satisfaction—all while maintaining a professional and approachable
              brand presence.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col items-center gap-5 bg-[url(/pattern-bg.png)] px-6 py-5 md:px-[100px] md:pt-10 md:pb-32">
        <h2 className="font-montserrat text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-[64px] md:leading-[110%]">
          Who needs Mylo?
        </h2>
        <div className="h-[266px] w-[306px] md:h-[750px] md:w-[950px]">
          <Image
            src="/mylo4.svg"
            alt="mylo image"
            placeholder="blur"
            blurDataURL="/mylo4.svg"
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
          What Can Mylo Do For You
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
            The Future of AI-Driven Sales
          </h2>

          <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
            Mylo redefines the way businesses engage with customers by providing
            a balance between technological efficiency and genuine personal
            service. She ensures that every interaction is informative,
            engaging, and value-driven, making customers feel confident and
            cared for throughout their buying journey. With AI-driven sales
            becoming a must-have for modern businesses, Mylo offers a seamless,
            scalable, and intelligent solution for enhancing customer
            experiences and driving satisfaction. Whether customers are making a
            quick purchase or researching a major investment, interacting with
            Mylo enhances their shopping experience and strengthens their
            connection with your brand.
          </p>
        </div>
      </section>
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 text-center md:py-20">
        <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide text-[#222831] md:text-[4rem] md:leading-16">
          Get Started with Mylo Today!
        </h2>

        <p className="max-w-3xl text-center text-xl leading-7 -tracking-wide text-[#222831] md:text-2xl md:leading-[2.125rem]">
          Discover a new level of customer engagement with an AI sales agent who
          ensures every moment of your customer&apos;s experience counts.
          Integrate Mylo into your business today and revolutionize the way you
          connect with prospects and close sales!
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
