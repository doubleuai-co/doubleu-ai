
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
    <div className="w-full px-4 py-0 bg-white">
      <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          How DoubleU AI works
        </h2>
        <p className="mt-2 text-gray-500">
          Plug in your business needs, and watch our AI agents do the work.
        </p>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 md:px-0">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>

        <div className="space-y-14 md:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start md:items-center"
            >
              {/* Dot for timeline */}
              <div className="absolute left-3.5 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-indigo-500 border-4 border-white rounded-full z-10"></div>

              {/* Card */}
              <div
                className={`mt-4 md:mt-0 md:w-1/2 ${index % 2 === 1 ? 'md:ml-auto md:text-left' : 'md:mr-auto md:text-right'}`}
              >
                <div className="bg-gray-50 rounded-xl shadow-sm p-6">
                  <div className="mb-3 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500">
                    {step.icon}
                  </div>
                  <div>
                  <h3 className="text-base font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
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
