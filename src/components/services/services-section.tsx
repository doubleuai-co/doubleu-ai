import Image from "next/image";


export default function ServicesSection() {
  const singleServices = [
    {
      title: "Business Automation",
      description:
        "Eliminate repetitive tasks and streamline operations with AI-driven automation, allowing your team to focus on what truly matters - growth and innovation.",
      image: "/new-img/user-settings.png",
      alt: "Business Automation",
    },
    {
      title: "Workflow Optimization",
      description:
        "Enhance efficiency by integrating AI into your processes, reducing bottlenecks, improving accuracy, and ensuring seamless collaboration across teams.",
      image: "/new-img/community-group.png",
      alt: "Workflow Optimization",
    },
    {
      title: "Customer Engagement",
      description:
        "Transform customer interactions with AI agents that provide instant responses, personalized recommendations, and 24/7 support, enhancing customer satisfaction.",
      image: "/new-img/aii.png",
      alt: "Customer Engagement",
    },
    {
      title: "Decision Making",
      description:
        "Leverage AI to analyze vast amounts of data, uncover trends, and provide actionable insights that drive smarter, faster, and more business decisions.",
      image: "/new-img/chess-glass.png",
      alt: "Decision Making",
    },
    {
      title: "Scalable AI Solutions",
      description:
        "As your business grows, so do our AI solutions. Our intelligent agents adapt to your evolving needs, ensuring long-term efficiency and success.",
      image: "/new-img/books.png",
      alt: "Scalable AI Solutions",
    },
  ];

  return (
    <section className="bg-white text-[#0B0A0A] pt-[87px] pb-[49px] md:py-[87px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-medium lg:text-4xl">Our Services</h2>
      </div>

      <div className="container mx-auto py-8 max-w-6xl">
        {/* First Row: 3 items */}
        <div className="grid grid-cols-1 md:gap-5 gap-8 px-6 lg:grid-cols-3">
          {singleServices.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="mx-auto flex flex-col overflow-hidden rounded-xl text-left shadow-xs md:text-left"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={450}
                height={250}
                className="mx-auto object-cover object-center w-full h-64"
              />
              <h3 className="mb-2 px-6 pt-6 text-xl font-bold text-[#000000] md:text-2xl">
                {service.title}
              </h3>
              <p className="px-6 pb-8 text-sm text-[#404040] md:px-6 md:text-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 items centered on large screens */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-5 px-6 lg:flex-row lg:justify-center">
          {singleServices.slice(3, 5).map((service, index) => (
            <div
              key={index}
              className="mx-auto flex flex-col overflow-hidden rounded-xl text-left shadow-xs md:text-left"
            >
               <Image
                src={service.image}
                alt={service.alt}
                width={450}
                height={250}
                className="mx-auto object-cover object-center w-full h-64"
              />
              <h3 className="mb-2 px-6 pt-6 text-lg text-[#000000] md:text-2xl">
                {service.title}
              </h3>
              <p className="px-6 pb-8 text-sm text-[#404040] md:px-6 md:text-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
