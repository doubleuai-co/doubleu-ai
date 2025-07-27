import Image from "next/image";

export default function ServicesSection() {
  const singleServices = [
    {
      title: "Business Automation",
      description:
        "Automate repetitive tasks, data entry, and routine processes to free up your team for higher-value activities.",
      image: "/new-img/user-settings.png",
      alt: "Business Automation",
    },
    {
      title: "Workflow Optimization",
      description:
        "Streamline complex workflows, reduce bottlenecks, and improve operational efficiency across departments.",
      image: "/new-img/community-group.png",
      alt: "Workflow Optimization",
    },
    {
      title: "Customer Engagement",
      description:
        "Enhance customer interactions with AI-powered chatbots, personalized support, and proactive communication.",
      image: "/new-img/aii.png",
      alt: "Customer Engagement",
    },
    {
      title: "Decision Making",
      description:
        "Leverage AI-driven insights and analytics to make faster, more informed strategic and operational decisions.",
      image: "/new-img/chess-glass.png",
      alt: "Decision Making",
    },
    {
      title: "Scalable AI Solutions",
      description:
        "Implement AI solutions that grow with your business, adapting to increasing demands and evolving needs.",
      image: "/new-img/books.png",
      alt: "Scalable AI Solutions",
    },
  ];

  return (
    <section className="bg-white px-0 py-16 text-[#0B0A0A] md:py-12">
      <div className="container mx-auto mb-2 px-4 text-center md:mb-8">
        <h2 className="mb-4 text-2xl font-medium lg:text-4xl">Services</h2>
      </div>

      <div className="container mx-auto py-8">
        {/* First Row: 3 items */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {singleServices.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="mx-6 flex flex-col overflow-hidden rounded-xl border border-gray-100 text-left shadow-sm md:text-center"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={450}
                height={200}
                className="w-full object-fit" // removed padding
              />
              <h3 className="mb-2 px-6 pt-6 text-xl font-semibold text-[#222831]">
                {service.title}
              </h3>
              <p className="px-6 pb-8 text-justify text-base text-gray-700 md:px-12">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row: 2 items centered on large screens */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {singleServices.slice(3, 5).map((service, index) => (
            <div
              key={index}
              className="mx-6 flex flex-col overflow-hidden rounded-xl border border-gray-100 text-left shadow-sm md:text-center"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={1000}
                height={200}
                className="w-full object-cover" // uniform style
              />
              <h3 className="mb-2 px-6 pt-6 text-xl font-semibold text-[#222831]">
                {service.title}
              </h3>
              <p className="px-6 pb-8 text-justify text-base text-gray-700 md:px-12">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
