
import { Bot, Zap, Cloud } from 'lucide-react'; 


export default function HowSection() {
 const steps = [
    {
      title: "You consult with us or choose your AI worker",
      description: "Whether you know the right AI worker for your business or need expert advice, book a consultation for tailored guidance or simply choose the AI worker that best fits your goals, it's that easy.",
      icon: Bot, 
    },
    {
      title: "We build, train, and customize",
      description: "Our team configures and trains your AI worker to fit your brand, services, and operational strategy, we ensure a smooth integration into your business processes for maximum efficiency.",
      icon: Zap, 
    },
    {
      title: "Integrate AI worker into your workforce",
      description: "Once ready, your AI worker joins your team, automating tasks, streamlining ops, and keeping engagement strong so you can focus on growth and innovation.",
      icon: Cloud, 
    },
  ];

  return (
  <section className="bg-white text-gray-800 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#222831] mb-4">
          How DoubleU AI works
        </h2>
        <p className="text-lg text-gray-600">
          Plug in your business needs, and watch our AI agents do the work.
        </p>
      </div>

      <div className=" mx-auto relative flex flex-col items-center py-10">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-3/4 w-0.5 bg-gray-200 hidden md:block"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start w-full max-w-3xl mb-12 ${
              index % 2 === 0 ? 'md:pr-20' : 'md:pl-20' // Alternate left/right alignment
            }`}
          >
            {/* Step Content */}
            <div
              className={`flex-1 p-6 bg-gray-50 w-fit rounded-lg shadow-sm border border-gray-100 ${
                index % 2 === 0 ? 'md:text-left text-center md:order-1' : 'md:text-left text-center md:order-3'
              }`}
            >
              <h3 className="text-xl font-semibold text-[#222831] mb-2">{step.title}</h3>
              <p className="text-base text-gray-700">{step.description}</p>
            </div>

            {/* Circle Icon */}
            <div className={`relative z-10 w-10 h-10 rounded-full bg-[#7D73C3] flex items-center justify-center text-white flex-shrink-0 my-4 md:my-0 ${
                index % 2 === 0 ? 'md:order-2 md:ml-4 md:-mr-5' : 'md:order-2 md:-ml-5 md:mr-4'
            }`}>
              <step.icon size={18} />
            </div>

            {/* Empty div for spacing on alternating sides */}
            <div className={`flex-1 hidden md:block ${
                index % 2 === 0 ? 'md:order-3' : 'md:order-1'
            }`}></div>
          </div>
        ))}
      </div>
    </section>

    // <section className="relative grid place-items-center">
    //   <div className="h-[150vh] w-full">
    //     <Image
    //       src="/waterfall.jpeg"
    //       alt="waterfall background"
    //       fill
    //       className="h-full w-full object-cover opacity-40"
    //     />
    //   </div>
    //   <div className="absolute z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-6 md:py-12">
    //     <div className="flex items-center justify-center gap-2.5">
    //       <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide md:text-[4rem] md:leading-[1.1rem]">
    //         How{"  "}
    //       </h2>
    //       <span className="h-[58px] w-[180] md:h-[72px] md:w-[376px]">
    //         <Image
    //           src="./doublelogo.svg"
    //           alt="doubleU logo"
    //           width={254}
    //           height={58}
    //           className="h-full w-full"
    //         />
    //       </span>{" "}
    //       <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide md:text-[4rem] md:leading-[1.1rem]">
    //         works
    //       </h2>
    //     </div>

    //     <p className="text-center text-xl leading-7 -tracking-wide md:text-2xl md:leading-[2.125rem]">
    //       Seamlessly integrate AI into your business. Our AI agents analyze your
    //       needs, automate processes, and optimize performance - helping you cut
    //       costs and increase sales effortlessly.
    //     </p>
    //     <div className="flex flex-col gap-6 md:flex-row">
    //       {steps.map((step, index) => (
    //         <div
    //           key={index}
    //           className={`bg-${step.background} flex max-w-[20.75rem] flex-col gap-2.5 rounded-3xl border border-white px-[1.625rem] py-5`}
    //         >
    //           <div>
    //             <Image
    //               src={step.image}
    //               alt={`Step ${step.number} illustration`}
    //               width={280}
    //               height={211}
    //               className="rounded-[26px]"
    //             />
    //           </div>

    //           <div className="space-y-2.5 text-white">
    //             <div className="font-montserrat text-[1.75rem] font-bold -tracking-wide">
    //               Step {step.number}:
    //             </div>
    //             <h3 className="font-montserrat text-2xl font-semibold -tracking-wide">
    //               {step.title}
    //             </h3>
    //             <p className="text-xl leading-[2.125rem] font-light -tracking-wide text-white">
    //               {step.description}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <p className="text-center text-xl leading-7 -tracking-wide text-white md:text-2xl md:leading-[2.125rem]">
    //       Turn every interaction into an opportunity. Our AI Worker adapt to
    //       your business needs, streamlining workflows and delivering data-driven
    //       insights that fuel growth.
    //     </p>
    //     <Button className="h-11 w-full rounded-full bg-white px-8 font-normal text-[#7D73C3] shadow-md shadow-[#7D73C3]/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#7D73C3] hover:to-[#9993C3] hover:text-white md:h-14 md:w-fit md:text-xl">
    //       Learn more
    //     </Button>
    //   </div>
    // </section>
  );
}
