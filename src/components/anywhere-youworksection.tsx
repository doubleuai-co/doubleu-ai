import Image from "next/image";

export default function AnywhereYouworkSection() {
  const platforms = [
    {
      title: "DoubleU on Web",
      description:
        "Easy to use, smart to scale, your AI command center on the web. One tab, all tasks, chat with your AI.",
      image: "/new-img/frame-1.png", // Placeholder for web interface
      alt: "DoubleU AI web interface mockup",
    },
    {
      title: "DoubleU on Whatsapp",
      description:
        "Just send a message, doubleU picks it up, handles bookings, answers faqs, or follows up leads, right inside your whatsapp.",
      image: "/new-img/frame-2.png", // Placeholder for Whatsapp interface
      alt: "DoubleU AI Whatsapp interface mockup",
    },
    {
      title: "DoubleU in your socials",
      description:
        "Slide into conversations, not just dms. DoubleU handles replies, leads, and more, right inside your social apps.",
      image:
        "/new-img/frame-3.png", // Placeholder for social media interface
      alt: "DoubleU AI social media interface mockup",
    },
  ];

  return (
    <section className="bg-white px-0 py-16 text-[#0B0A0A] lg:px-8">
      <div className="container mx-auto mb-12 text-center px-4">
        <h2 className="mb-4 text-2xl lg:text-4xl font-bold">
          DoubleU AI, anywhere you work
        </h2>
        <p className="mx-auto max-w-2xl text-md lg:text-lg text-gray-600">
          Your AI agents go where you go, making work faster, smoother, and
          hands-free. Start anywhere, pick up anytime. One AI, same great
          experience.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {platforms.map((platform, index) => (
          <div key={index} className="flex flex-col items-center text-center rounded-xl border border-gray-100 mx-10 shadow-sm">
              {/* Placeholder for the device mockups. You'll need actual images for these. */}
              <Image
                src={platform.image} // Replace with actual image paths
                alt={platform.alt}
                width="1000" // Adjust based on your actual image dimensions
                height={200} // Adjust based on your actual image dimensions
                className="rounded-lg object-contain"
              />

            <h3 className="mb-2 text-xl font-semibold text-[#222831] pt-8">
              {platform.title}
            </h3>
            <p className="text-base text-gray-700 pb-8 px-12">{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
