import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Link from 'next/link';


export default function Mylo() {
  // Data for "What Mylo can do for you" section
  const myloCapabilities = [
    {
      icon: "/", // Placeholder for specific icons
      title: "Lead Generation & Qualification",
      description: "Mylo identifies and qualifies high-potential leads, ensuring your sales team focuses on the most promising opportunities.",
    },
    {
      icon: "/2",
      title: "Automated Outreach Campaigns",
      description: "Mylo designs and executes personalized email and social media outreach campaigns, nurturing leads efficiently.",
    },
    {
      icon: "/",
      title: "Customer Relationship Management",
      description: "Mylo tracks customer interactions and preferences, providing insights to build stronger, more lasting relationships.",
    },
    {
      icon: "/",
      title: "Sales Funnel Optimization",
      description: "Mylo analyzes your sales pipeline to identify bottlenecks and suggest improvements for a smoother conversion process.",
    },
    {
      icon: "/",
      title: "Cross-selling & Upselling",
      description: "Mylo identifies opportunities to offer additional products or services to existing customers, maximizing revenue.",
    },
    {
      icon: "/",
      title: "Performance Reporting & Analytics",
      description: "Mylo provides comprehensive reports on sales activities and outcomes, giving you clear insights into performance.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section for Mylo Page */}
      <section className="relative bg-[#1a1a2e] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background elements - subtle blurs/gradients */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#00bcd4] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#6a5acd] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#ff6347] opacity-10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-montserrat text-[40px] leading-[46px] font-black -tracking-wide text-white md:text-[4rem] md:leading-[72px] mb-6">
              Hi, I&apos;m Mylo!
            </h1>
            <p className="text-xl leading-[28px] -tracking-wide text-gray-300 md:text-2xl md:leading-[34px] mb-8 max-w-lg">
              Your dedicated AI Product Sale Worker, designed to supercharge your sales pipeline and drive revenue growth.
            </p>
            <Link href="/book-mylo-demo" passHref>
              <button className="bg-[#6a5acd] hover:bg-[#7b68ee] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out text-lg md:text-xl">
                Book a Demo with Mylo
              </button>
            </Link>
          </div>

          {/* Right Column: Mylo Image with Overlays */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="/" // Placeholder for Mylo's image
              alt="Mylo AI Worker"
              width={400} // Adjust based on actual image dimensions
              height={500} // Adjust based on actual image dimensions
              className="object-contain rounded-xl"
            />
            {/* Small info overlays - these are illustrative and might need custom SVG/CSS */}
            <div className="absolute top-1/4 left-0 bg-gray-700 bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">AI Model</div>
            <div className="absolute top-1/3 right-0 bg-gray-700 bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">Sales Agent</div>
          </div>
        </div>
      </section>

      {/* 2. Who is Mylo? Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#222831] mb-4">
              Who is Mylo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Mylo is your dedicated AI Product Sale Worker, meticulously designed and trained to revolutionize your sales operations. Equipped with advanced machine learning capabilities, Mylo seamlessly integrates into your existing workflows, taking on repetitive and time-consuming sales tasks.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From lead qualification to automated outreach and insightful analytics, Mylo ensures your sales team can focus on building relationships and closing deals, while the AI handles the heavy lifting.
            </p>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/" // Placeholder for the sales illustration
              alt="Sales process illustration"
              width={400}
              height={300}
              className="object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 3. What Mylo can do for you Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#222831] mb-4">
            What Mylo can do for you
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myloCapabilities.map((capability, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                {/* Placeholder for capability icon */}
                <Image
                  src={capability.icon}
                  alt={capability.title + " icon"}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#222831] mb-2">{capability.title}</h3>
              <p className="text-base text-gray-700">{capability.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The future of AI-driven sales Section (CTA) */}
      <section className="bg-[#1a1a2e] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            The future of AI-driven sales is here.
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Empower your sales team with Mylo and unlock unprecedented growth.
          </p>
          <Link href="/contact-us" passHref>
            <button className="bg-[#6a5acd] hover:bg-[#7b68ee] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out text-lg mt-8">
              Get Started
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
