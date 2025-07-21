
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
        <h2 className="text-2xl lg:text-4xl font-bold text-[#0B0A0A] mb-4">
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
            className={`flex flex-col md:flex-row items-center md:items-start w-full max-w-5xl mb-12 ${
              index % 2 === 0 ? 'md:pr-20' : 'md:pl-20' // Alternate left/right alignment
            }`}
          >
            {/* Step Content */}
            <div
              className={`flex-1 p-6 bg-gray-50 w-fit rounded-lg shadow-sm border border-gray-100 ${
                index % 2 === 0 ? 'md:text-left text-center md:order-1' : 'md:text-left text-center md:order-3'
              }`}
            >
              <h3 className="text-lg font-semibold text-[#0B0A0A] mb-2">{step.title}</h3>
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
  );
}
