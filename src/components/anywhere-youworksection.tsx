"use client";

import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export default function AnywhereYouworkSection() {
  const platforms = [
    {
      title: "DoubleU on Web",
      description:
        "Easy to use, smart to scale, your AI command center on the web. One tab, all tasks, chat with your AI.",
      image: "/new-img/frame-1.png",
      alt: "DoubleU AI web interface mockup",
    },
    {
      title: "DoubleU on Whatsapp",
      description:
        "Just send a message, doubleU picks it up, handles bookings, answers faqs, or follows up leads, right inside your whatsapp.",
      image: "/new-img/frame-2.png",
      alt: "DoubleU AI Whatsapp interface mockup",
    },
    {
      title: "DoubleU in your socials",
      description:
        "Slide into conversations, not just dms. DoubleU handles replies, leads, and more, right inside your social apps.",
      image: "/new-img/frame-3.png",
      alt: "DoubleU AI social media interface mockup",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section className="bg-white px-0 py-2 text-[#0B0A0A] lg:px-8">
      {/* Section Header */}
      <motion.div
        className="container mx-auto mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="mb-4 text-2xl font-bold lg:text-4xl px-12 max-w-lg mx-auto">
          DoubleU AI, anywhere you work
        </h2>
        <p className="text-md mx-auto max-w-xl px-8 text-gray-600 lg:text-lg">
          Your AI agents go where you go, making work faster, smoother, and
          hands-free. Start anywhere, pick up anytime. One AI, same great
          experience.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} 
            className="mx-4 flex flex-col rounded-xl border border-gray-100 text-justify shadow-sm md:text-start"
          >
            <Image
              src={platform.image}
              alt={platform.alt}
              width={1000}
              height={200}
              className="rounded-lg object-contain w-full"
            />

            <h3 className="mb-2 px-4 pt-6 text-xl font-medium text-[#0B0A0A] md:px-6">
              {platform.title}
            </h3>
            <p className="px-4 pb-6 text-base text-gray-700 md:px-6">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
