import Image from "next/image";

export default function ServicesSection() {
  const singleServices = [
    {
      title: "Business Automation",
      description:
        "Automate repetitive tasks, data entry, and routine processes to free up your team for higher-value activities.",
      image: "/new-img/user-settings.png", // Placeholder for web interface
      alt: "Business Automation",
    },
    {
      title: "Workflow Optimization",
      description:
        "Streamline complex workflows, reduce bottlenecks, and improve operational efficiency across departments.",
      image: "/new-img/community-group.png", // Placeholder for Whatsapp interface
      alt: "Workflow Optimization",
    },
    {
      title: "Customer Engagement",
      description:
        "Enhance customer interactions with AI-powered chatbots, personalized support, and proactive communication.",
      image: "/new-img/aii.png", // Placeholder for social media interface
      alt: "Customer Engagement",
    },
    {
      title: "Decision Making",
      description:
        "Leverage AI-driven insights and analytics to make faster, more informed strategic and operational decisions.",
      image: "/new-img/chess-glass.png", // Placeholder for social media interface
      alt: "Decision Makin",
    },
    {
      title: "Scalable AI Solutions",
      description:
        "Implement AI solutions that grow with your business, adapting to increasing demands and evolving needs.",
      image: "/new-img/books.png", // Placeholder for social media interface
      alt: "Scalable AI Solutions",
    },
  ];

  return (
    <section className="bg-white px-0 py-16 text-[#0B0A0A] lg:px-8">
      <div className="container mx-auto mb-12 px-4 text-center">
        <h2 className="mb-4 text-2xl font-medium lg:text-4xl">Services</h2>
      </div>

      <div className="container mx-auto py-8">
        {/* First Row: 3 items */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {singleServices.slice(0, 3).map((singleService, index) => (
            <div
              key={index}
              className="mx-10 flex flex-col items-center rounded-xl border border-gray-100 text-center shadow-sm"
            >
              <Image
                src={singleService.image}
                alt={singleService.alt}
                width="1000"
                height={200}
                className="rounded-lg object-contain"
              />
              <h3 className="mb-2 pt-8 text-xl font-semibold text-[#222831]">
                {singleService.title}
              </h3>
              <p className="px-12 pb-8 text-base text-gray-700">
                {singleService.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 items centered on large screens */}
        <div className="mt-14 flex flex-col items-center gap-8 lg:flex-row lg:justify-center max-w-5xl mx-auto">
          {singleServices.slice(3, 5).map((singleService, index) => (
            <div
              key={index}
              className="mx-10 flex flex-col items-center rounded-xl border border-gray-100 text-center shadow-sm"
            >
              <Image
                src={singleService.image}
                alt={singleService.alt}
                width="1000"
                height={200}
                className="rounded-lg object-contain p-0"
              />
              <h3 className="mb-2 pt-8 text-xl font-semibold text-[#222831]">
                {singleService.title}
              </h3>
              <p className="px-12 pb-8 text-base text-gray-700">
                {singleService.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
