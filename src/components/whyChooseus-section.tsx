import React from "react";

import Link from "next/link";

import Image from "next/image"; // Import Next.js Image component

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Faster Task Execution",

      description:
        "DoubleU AI handles repetitive tasks at lightning speed, cutting your turnaround time from hours to seconds, so your team can focus on what truly matters.",

      imageSrc: "/new-img/thunderbolt.png", // Replace with your actual image path for the icon

      imageAlt: "Bolt icon",

      highlight: false,
    },

    {
      title: "Custom-Built AI Workers",

      description:
        "Tailored to fit your brand's exact workflow, tone of voice, and business goals, so it feels like an in-house teammate, not just another tool.",

      imageSrc: "/new-img/puzzle.png", // Replace with your actual image path for the icon

      imageAlt: "Puzzle icon",

      highlight: true, // This card has a dark background
    },

    {
      title: "Always-On Support",

      description:
        "Your AI agents never sleep, never miss a task, and never burn out, providing round-the-clock assistance so nothing falls through the cracks.",

      imageSrc: "/new-img/boat.png", // Replace with your actual image path for the icon

      imageAlt: "Boat icon",

      highlight: false,
    },

    {
      title: "Plug & Play Integration",

      description:
        "Seamlessly connects with your existing tools, apps, and systems. No complicated setup, no learning curve, just instant productivity.",

      imageSrc: "/new-img/plug.png", // Replace with your actual image path for the icon

      imageAlt: "Plug icon",

      highlight: false,
    },

    {
      title: "Scales As You Grow",

      description:
        "Whether you're a small team or a growing enterprise, the DoubleU workforce evolves with you, adapting to your scale, speed, and changing needs.",

      imageSrc: "/new-img/charts.png", // Replace with your actual image path for the icon

      imageAlt: "Charts icon",

      highlight: false,
    },

    {
      title: "Cost-Efficient Results",

      description:
        "Get enterprise-level output without expanding your team, save time, cut costs, and increase ROI with smart automation that pays for itself.",

      imageSrc: "/new-img/coins.png", // Replace with your actual image path for the icon

      imageAlt: "Coins icon",

      highlight: false,
    },
  ];

  return (
    <section className="bg-white px-8 py-16 text-[#0B0A0A] sm:px-6 lg:px-8">
      <div className="container mx-auto mb-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-[#222831] lg:text-4xl">
          Why top brands choose DoubleU AI
        </h2>

        <p className="text-md mx-auto max-w-2xl text-gray-600 lg:text-lg">
          It&apos;s more than automation, it&apos;s smarter work, seamless
          integration, and real results.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 gap-x-12 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-28">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group transform rounded-xl border px-8 py-14 text-center shadow-md transition-all duration-300 ease-in-out hover:scale-[1.01] ${
              feature.highlight
                ? "border-[#1a1a2e] bg-[#1a1a2e] text-white" // Dark background for highlighted card
                : "border-gray-100 bg-gray-50 text-gray-800" + // Light background for regular cards
                  " animate-blob animation-delay-2000 hover:border-[#6a5acd] hover:bg-[#2a2a4e] hover:text-white" // Hover glow effect
            } `}
          >
            {/* Icon with background circle - Centering is handled by flex, items-center, justify-center */}

            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md transition-colors duration-300 ease-in-out ${
                feature.highlight
                  ? "bg-gray-50" // Icon background color for highlighted
                  : "bg-gradient-to-r from-[#7e73c3b7] to-[#00b4d85f] group-hover:bg-[#6a5acd] hover:bg-white" // Icon background for regular, changes on hover
              } `}
            >
              {/* Using Next.js Image component for icons */}

              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                width={28} // Adjust icon size as needed
                height={28} // Adjust icon size as needed
                className={`flex-shrink-0 object-contain transition-all duration-300 ease-in-out ${feature.highlight ? "brightness-200 filter" : "brightness-50 filter group-hover:brightness-200"} `}
              />
            </div>

            <h3
              className={`mb-2 text-xl font-semibold transition-colors duration-300 ease-in-out ${feature.highlight ? "text-white" : "text-[#222831] group-hover:text-white"}`}
            >
              {feature.title}
            </h3>

            <p
              className={`text-base transition-colors duration-300 ease-in-out ${feature.highlight ? "text-gray-300" : "text-gray-700 group-hover:text-white"}`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link href="/workforce" passHref>
          <button className="text-md rounded-md bg-[#6a5acd] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee]">
            Explore AI Workers
          </button>
        </Link>
      </div>
    </section>
  );
}
