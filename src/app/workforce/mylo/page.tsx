import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Mylo() {
  // Data for "What Mylo can do for you" section
  const Capabilities = [
    {
      icon: "/brand-logo.png", //
      title: "End-to-End Order Management",
      description:
        "Mylo expertly manages the entire customer journey from initial inquiry through product selection to secure payment processing, creating a seamless buying experience.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Concise & Accurate Information",
      description:
        "Mylo delivers well-structured responses that clarify product and service options without overwhelming customers with unnecessary details.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Seamless Sales Process",
      description:
        "Mylo assists in guiding customers through your offerings, addressing common questions, and suggesting relevant products and solutions.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Multi-Channel Integration",
      description:
        "Multi-Channel Integration Whether through your website, mobile apps, or social media platforms, Mylo is always available to assist.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Encourages Personalized Shopping",
      description:
        "When appropriate, Mylo suggests specialty products or promotional offerings, ensuring customers explore options without feeling pressured.",
    },
    {
      icon: "/brand-logo.png", //
      title: "Conversational & Engaging Interactions",
      description:
        "By using natural language processing, Mylo ensures that every response feels thoughtful and relevant, keeping customers engaged throughout their journey.",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section for Mylo Page */}
      <section className="relative overflow-hidden bg-[#0B0A0A] text-white md:px-[120px] md:pt-2">
        {/* Background elements - subtle blurs/gradients */}
        {/* <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bcd4] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div> */}
        {/* <div className="animate-blob animation-delay-2000 absolute top-[45%] right-40 h-120 w-120 rounded-full bg-[#00bcd4] opacity-20 mix-blend-screen blur-3xl filter"></div> */}
        {/* <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#ff6347] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div> */}

        <div className="max-h-7xl relative z-10 flex flex-col items-center justify-between gap-x-4 pt-20 md:flex-row md:items-center md:justify-between md:pt-8 md:px-0">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center pb- px-2 md:px-0 md:pb-22 pt-18 text-center md:mt-26 md:mb-0 md:w-1/2 md:items-start md:text-left">
            <h1 className="mb-6 text-[40px] leading-[46px] -tracking-wide text-white md:text-[3rem] md:leading-[72px]">
              Hi, I&apos;m Mylo!
            </h1>
            <p className="mb-8 max-w-lg px-4 text-sm leading-[28px] -tracking-wide text-[#D9D9D9] md:-mr-40 md:px-0 md:text-[14px] md:leading-[34px]">
              I help you enhance your sales and customer experience effortlessly
              by automating outreach, optimizing campaigns, and driving
              engagement. Let me handle the strategy while you focus on closing
              deals.
            </p>
            <Link href="/contact" passHref>
              <button className="text-sm md:text-[16px] cursor-pointer rounded-md bg-[#7D73C3] px-6 py-3.5 font-normal text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#9747FF] md:mb-4">
                Try DoubleU AI
              </button>
            </Link>
          </div>

          {/* Right Column: Mylo Image with Overlays */}
          <div className="w-full flex justify-end transform md:translate-x-22">
            {" "}
            <Image
              src="/new-img/mylo-m.svg" // Placeholder for Mylo's image
              alt="Mylo AI Worker"
              width={400} // Adjust based on actual image dimensions
              height={500} // Adjust based on actual image dimensions
              className="md:h-fit md:w-[800px] object-fill w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 2. Who is Mylo? Section */}
      <section className="bg-white px-6 sm:px-6 md:px-[120px] md:pt-[118px] pt-[49px]">
        <div className="grid grid-cols-1 items-center justify-between gap-4 md:gap-2 md:grid-cols-2">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h2 className="mb-6 text-[28px] font-bold text-[#0B0A0A] md:text-[40px]">
              Who is Mylo?
            </h2>
            <p className="text-sm md:text-[16px] mb-4 leading-relaxed text-[#404040]">
              Mylo is your always-on sales assistant, built to deliver warm,
              attentive, and personalized service throughout the customer
              journey. From handling inquiries to processing payments and
              offering tailored support, Mylo makes every interaction efficient
              and delightful. As a 24/7 extension of your sales team, she
              enhances experiences, guides prospects, and seamlessly connects
              users to real team members when needed. Integrating Mylo helps
              streamline inquiries, reduce response times, and boost customer
              satisfaction, while keeping your brand approachable and
              professional.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/new-img/image.png" // Placeholder for the sales illustration
              alt="Sales process illustration"
              width={400}
              height={300}
              className="rounded-xl border border-[#7D73C3] object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. What Mylo can do for you Section */}
      <section className="mx-auto bg-white px-8 sm:px-6 md:px-[120px] py-[49px] md:py-[89px]">
        <div className=" mx-auto md:mb-16 mb-10 text-center">
          <h2 className="mb-4 px-14 text-[28px] font-bold text-[#0B0A0A] md:px-0 md:text-4xl">
            What Mylo can do for you
          </h2>
          <p className="px-2 text-[#404040] md:px-0 mx-auto max-w-sm">
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
              <h3 className="text-md mb-2 pt-4 font-semibold text-[#404040] md:text-lg">
                {capability.title}
              </h3>
              <p className="md:text-md text-sm text-[#0B0A0A]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The future of AI-driven sales Section (CTA) */}
      <section className="relative w-screen overflow-hidden bg-[#0B0A0A] px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <div className="animate-blob animation-delay-2000 absolute top-0 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-20 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob absolute top-1/2 left-8 h-80 w-80 rounded-full bg-[#00bcd4] opacity-20 mix-blend-screen blur-3xl filter md:top-0 md:left-0"></div>

        <div className="container mx-0 max-w-5xl md:mx-auto">
          <h2 className="mb-8 px-10 text-[#F0F0F0] text-[28px] leading-tight font-bold md:px-0 md:text-4xl">
            The Future of AI-Driven Sales
          </h2>
          <p className="text-[16px] mx-auto px-4 md:px-0 max-w-5xl text-start leading-relaxed text-[#D9D9D9] md:text-center">
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

      {/* 5. Bottom CTA Banner */}
      <section className="relative mx-4 my-10 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-b from-[#000] to-[#7D73C3] px-4 text-[#F0F0F0] sm:px-6 md:mx-[120px] py-[49px] md:py-[87px]">
        <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <h2 className="mb-4 text-2xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            Get Started with Mylo Today
            <br className="hidden sm:block" />{" "}
          </h2>
          <p className="px-4 md:px-0">
            Discover a new level of customer engagement with an AI sales agent
            who ensures every moment of your customer&apos;s experience counts.
            Integrate Mylo into your business today and revolutionize the way
            you connect with prospects and close sales.
          </p>
          <Link href="/contact-us" passHref className="mt-14">
            <button className="cursor-pointer rounded-md bg-white px-8 py-4 text-base font-normal text-[#160F0F] shadow-md transition duration-300 ease-in-out hover:bg-[#9747FF]">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
