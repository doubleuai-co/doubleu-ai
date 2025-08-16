import Image from "next/image";

export default function HowSection() {
  const steps = [
    {
      title: "You consult with us or choose your ai worker",
      description:
        "Whether you know the right ai worker for your business or need expert advice, book a consultation for tailored guidance or simply choose the ai worker that best fits your goals, it's that easy.",
      icon: "new-img/icon2.svg",
    },
    {
      title: "We build, train, and customize",
      description:
        "Our team configures and trains your ai worker to fit your brand, services, and operational strategy. we ensure a smooth integration into your business processes for maximum efficiency.",
      icon: "new-img/icon1.svg",
    },
    {
      title: "Integrate AI worker into your workforce",
      description:
        "Once ready, your AI worker joins your team, automating tasks, streamlining ops, and keeping engagement strong so you can focus on growth and innovation.",
      icon: "new-img/icon3.svg",
    },
  ];

  return (
    <div className="w-full bg-white px-4 pt-[64px] md:pt-[87px]">
      <section className="bg-white">
        <div className="mb-8 md:mb-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#0B0A0A] md:text-4xl">
            How DoubleU AI works
          </h2>
          <p className="mt-6 px-4 text-[#404040]">
            Plug in your business needs, and watch our AI agents do the work.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 md:px-0">
           {/* Vertical & Horizontal Lines */}
            <div className="absolute top-0 left-4 h-full w-[1px] transform bg-[#C7C7C7] md:left-1/2 md:-translate-x-1/2"></div>
          <div className="absolute xs:translate-x-8 xs:translate-y-6.5 h-14 w-[1px] transform rotate-90 bg-[#C7C7C7] md:left-1/2 md:-translate-x-11 md:h-19 md:w-0.5 md:translate-y-10.5"></div>
          <div className="absolute xs:translate-x-8 xs:translate-y-58.5 h-14 w-[1px] transform rotate-90 bg-[#C7C7C7] md:left-1/2 md:translate-x-11 md:h-19 md:w-0.5 md:translate-y-67"></div>
          <div className="absolute xs:translate-x-8 xs:translate-y-110.5 h-14 w-[1px] transform rotate-90 bg-[#C7C7C7] md:left-1/2 md:-translate-x-11 md:h-19 md:w-0.5 md:translate-y-119"></div>


          <div className="space-y-4 md:space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start md:flex-row md:items-center"
              >
                {/* Dot for timeline */}
                <div className="absolute top-12 w-fit -left-2 z-10 transform md:top-18 md:left-1/2 md:-translate-x-1/2">
                  <Image
                    src="/new-img/dot.svg"
                    height={15}
                    width={15}
                    alt=""
                    className="object-fit"
                  />
                </div>


                {/* Card */}
                <div
                  className={`mt-2 pl-6 md:mt-0 md:w-1/2 md:px-20 ${index % 2 === 1 ? "md:ml-auto md:text-start" : "md:mr-auto md:text-start"}`}
                >
                  <div className="flex items-start justify-between gap-x-2 rounded-xl bg-[#F9FAFC] p-4 md:py-8 md:md:px-3 shadow-sm">
                    <div className="mb-3 flex items-center justify-center">
                      <Image
                        src= {step.icon}
                        height={120}
                        width={120}
                        alt=""
                        className="object-fit"
                      />

                     
                    </div>
                    <div className="px-2">
                      <h3 className="mb-2 md:mb-0 md:pb-2 text-base font-semibold text-[#0B0A0A]">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#404040]">
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
