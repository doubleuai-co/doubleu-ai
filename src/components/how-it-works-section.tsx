import { LucideBot, LucideSettings, LucideUsers } from "lucide-react";

export default function HowSection() {
  const steps = [
    {
      title: "You consult with us or choose your ai worker",
      description:
        "Whether you know the right ai worker for your business or need expert advice, book a consultation for tailored guidance or simply choose the ai worker that best fits your goals, it's that easy.",
      icon: <LucideUsers className="h-5 w-5 text-white" />,
    },
    {
      title: "We build, train, and customize",
      description:
        "Our team configures and trains your ai worker to fit your brand, services, and operational strategy. we ensure a smooth integration into your business processes for maximum efficiency.",
      icon: <LucideSettings className="h-5 w-5 text-white" />,
    },
    {
      title: "Integrate AI worker into your workforce",
      description:
        "Once ready, your AI worker joins your team, automating tasks, streamlining ops, and keeping engagement strong so you can focus on growth and innovation.",
      icon: <LucideBot className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-2">
      <section className="bg-white">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl">
            How DoubleU AI works
          </h2>
          <p className="mt-2 text-gray-500 px-12">
            Plug in your business needs, and watch our AI agents do the work.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 md:px-0">
          <div className="absolute top-0 left-4 h-full w-0.5 transform bg-gray-200 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-14 md:space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start md:flex-row md:items-center"
              >
                {/* Dot for timeline */}
                <div className="absolute -left-2 z-10 h-5 w-5 transform rounded-full border-4 border-white bg-[#7D73C3] md:left-1/2 md:-translate-x-1/2"></div>

                {/* Card */}
                <div
                  className={`mt-2 px-4 md:px-18 md:mt-0 md:w-1/2 ${index % 2 === 1 ? "md:ml-auto md:text-start" : "md:mr-auto md:text-start"}`}
                >
                  <div className="rounded-xl bg-gray-50 p-6 shadow-sm flex items-start justify-around gap-x-8 ">
                    <div className="mb-3 flex h-8 w-14 items-center justify-center rounded-full bg-[#7D73C3]">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-semibold text-gray-800">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-justify">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
