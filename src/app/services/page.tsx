import Link from "next/link";
import React from "react";
import FAQSection from "@/components/faq-section";
import CallToActionSection from "@/components/calltoaction-section";
import ServicesSection from "@/components/services/services-section";


const Services = () => {

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section for Services Page */}
      <section className="relative flex h-[650px] items-center justify-center overflow-hidden bg-[#0B0A0A] px-4 py-20 text-white sm:px-6 lg:h-[700px] lg:px-8">
        {/* Background elements - subtle blurs/gradients */}
        <div className="animate-blob absolute top-0 left-0 h-80 w-80 rounded-full bg-[#00bcd4] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute top-1/2 right-0 h-80 w-80 rounded-full bg-[#6a5acd] opacity-10 mix-blend-screen blur-3xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-60 w-60 rounded-full bg-[#ff6347] opacity-10 mix-blend-screen blur-3xl filter"></div>

        <div className="relative z-10 mx-auto my-48 flex max-w-4xl flex-col items-center px-8 text-center">
          <h1 className="font-montserrat mb-6 text-center text-[40px] leading-[46px] font-black -tracking-wide text-white md:text-[4rem] md:leading-[72px]">
            Our AI-Powered Business Solutions
          </h1>
          <p className="mb-8 max-w-2xl text-center text-xl leading-[28px] -tracking-wide text-gray-300 md:text-2xl md:leading-[34px]">
            Unlock efficiency, innovation, and growth with our intelligent AI
            workforce solutions.
          </p>
          <Link href="/contact-us" passHref>
            <button className="text-md mt-2 rounded-md bg-[#6a5acd] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-[#7b68ee] md:text-xl lg:text-lg">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Our Services Grid Section */}
      <ServicesSection />

      <FAQSection />
      <CallToActionSection />
    </div>
  );
};

export default Services;

// import Image from "next/image";

// export default function Services() {
//   return (
//     <main className="flex-1 pt-24 md:pt-0">
//       <section className="relative h-[40vh] w-full md:h-screen">
//         <Image
//           src="/servicesbg.jpg"
//           placeholder="blur"
//           blurDataURL="/servicesbg.jpg"
//           alt="mountain background"
//           fill
//           className="h-full w-full object-cover opacity-40"
//         />
//         <div className="absolute flex h-full w-full flex-col items-center gap-6 px-5 py-6 md:py-72">
//           <h1 className="font-montserrat text-center text-[40px] leading-[46px] font-black -tracking-wide text-[#222831] md:max-w-[718px] md:text-[4rem] md:leading-[72px]">
//             Our AI-Powered Business Solutions
//           </h1>
//           <p className="justify-center text-center text-xl leading-[28px] -tracking-wide text-[#222831] text-shadow-gray-50 text-shadow-xs md:max-w-[562px] md:text-2xl md:leading-[34px]">
//             Leverage AI to streamline processes, reduce costs, and drive growth.
//           </p>
//         </div>
//       </section>
//       <section className="bg-primary">
//         <div className="flex flex-col items-center justify-center overflow-hidden bg-[url(/elipse.svg)] bg-cover px-5 py-6 md:flex-row-reverse md:bg-[url(/elipse1m.svg)]">
//           <div className="relative h-[250px] w-[372px] md:h-[528px] md:w-[610px]">
//             <Image
//               placeholder="blur"
//               blurDataURL="/handasset.svg"
//               src="/handasset.svg"
//               alt="hand image"
//               width={250}
//               height={372}
//               loading="lazy"
//               className="h-full w-full"
//             />
//             {/* <div className="bg-primary absolute top-[36.83px] right-[0.42px] h-[251.95px] w-[261.74px] rounded-full blur-3xl md:top-[184.43px] md:right-0 md:w-[403.61]"></div> */}
//           </div>
//           <div className="max-w-[570px] space-y-6 px-5 py-6 text-center text-white">
//             <h3 className="font-montserrat text-[40px] leading-[46px] font-bold -tracking-wide md:text-[64px] md:leading-[110%]">
//               Business Automation
//             </h3>
//             <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
//               Eliminate repetitive tasks and streamline operations with
//               AI-driven automation, allowing your team to focus on what truly
//               matters - growth and innovation.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="bg-[#1E2A47]">
//         <div className="flex flex-col items-center justify-center overflow-hidden bg-[url(/elipse2.svg)] bg-cover px-5 py-6 md:flex-row md:bg-[url(/elipse2m.svg)]">
//           <div className="relative h-[256px] w-[372px] md:h-[444.11px] md:w-[644px]">
//             <Image
//               placeholder="blur"
//               blurDataURL="/workflow.svg"
//               src="/workflow.svg"
//               alt="hand image"
//               width={250}
//               height={372}
//               loading="lazy"
//               className="h-full w-full"
//             />
//             {/* <div className="bg-primary absolute top-[36.83px] right-[0.42px] h-[251.95px] w-[261.74px] rounded-full blur-3xl md:top-[184.43px] md:right-0 md:w-[403.61]"></div> */}
//           </div>
//           <div className="max-w-[575px] space-y-6 px-5 py-6 text-center text-white">
//             <h3 className="font-montserrat text-[40px] leading-[46px] font-bold -tracking-wide md:text-[64px] md:leading-[110%]">
//               Workflow Optimization
//             </h3>
//             <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
//               Enhance efficiency by integrating AI into your processes, reducing
//               bottlenecks, improving accuracy, and ensuring seamless
//               collaboration across teams.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="bg-primary">
//         <div className="flex flex-col items-center justify-center overflow-hidden bg-[url(/elipse3.svg)] bg-cover px-5 py-6 md:flex-row-reverse md:bg-[url(/elipse3m.svg)]">
//           <div className="relative h-[323px] w-[372px] md:h-[529.66px] md:w-[610px]">
//             <Image
//               placeholder="blur"
//               blurDataURL="/aiasset.svg"
//               src="/aiasset.svg"
//               alt="hand image"
//               width={250}
//               height={372}
//               loading="lazy"
//               className="h-full w-full"
//             />
//             {/* <div className="bg-primary absolute top-[36.83px] right-[0.42px] h-[251.95px] w-[261.74px] rounded-full blur-3xl md:top-[184.43px] md:right-0 md:w-[403.61]"></div> */}
//           </div>
//           <div className="max-w-[570px] space-y-6 px-5 py-6 text-center text-white">
//             <h3 className="font-montserrat text-[40px] leading-[46px] font-bold -tracking-wide md:text-[64px] md:leading-[110%]">
//               AI-Powered Customer Engagement
//             </h3>
//             <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
//               Transform customer interactions with AI agents that provide
//               instant responses, personalized recommendations, and 24/7 support,
//               enhancing customer satisfaction.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="bg-[#1E2A47]">
//         <div className="flex flex-col items-center justify-center overflow-hidden bg-[url(/elipse4.svg)] bg-cover px-5 py-6 md:flex-row md:bg-[url(/elipse4m.svg)]">
//           <div className="relative h-[428.19px] w-[372px] md:h-[530px] md:w-[460.45px]">
//             <Image
//               placeholder="blur"
//               blurDataURL="/Chess.svg"
//               src="/Chess.svg"
//               alt="chess image"
//               width={250}
//               height={372}
//               loading="lazy"
//               className="h-full w-full"
//             />
//             {/* <div className="bg-primary absolute top-[36.83px] right-[0.42px] h-[251.95px] w-[261.74px] rounded-full blur-3xl md:top-[184.43px] md:right-0 md:w-[403.61]"></div> */}
//           </div>
//           <div className="max-w-[719.55px] space-y-6 px-5 py-6 text-center text-white">
//             <h3 className="font-montserrat text-[40px] leading-[46px] font-bold -tracking-wide md:text-[64px] md:leading-[110%]">
//               Data-Driven Decision Making
//             </h3>
//             <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
//               Leverage AI to analyze vast amounts of data, uncover trends, and
//               provide actionable insights that drive smarter, faster, and more
//               strategic business decisions.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="bg-primary">
//         <div className="flex flex-col items-center justify-center overflow-hidden bg-[url(/elipse3.svg)] bg-cover px-5 py-6 md:flex-row-reverse md:bg-[url(/elipse3m.svg)]">
//           <div className="relative h-[423px] w-[372px] md:h-[528px] md:w-[464px]">
//             <Image
//               src="/scalable.svg"
//               placeholder="blur"
//               blurDataURL="/scalable.svg"
//               alt="hand image"
//               width={250}
//               height={372}
//               loading="lazy"
//               className="h-full w-full"
//             />
//             {/* <div className="bg-primary absolute top-[36.83px] right-[0.42px] h-[251.95px] w-[261.74px] rounded-full blur-3xl md:top-[184.43px] md:right-0 md:w-[403.61]"></div> */}
//           </div>
//           <div className="max-w-[570px] space-y-6 px-5 py-6 text-center text-white">
//             <h3 className="font-montserrat text-[40px] leading-[46px] font-bold -tracking-wide md:text-[64px] md:leading-[110%]">
//               Scalable AI Solutions
//             </h3>
//             <p className="text-xl leading-7 -tracking-wide md:text-2xl md:leading-[34px]">
//               As your business grows, so do our AI solutions. Our intelligent
//               agents adapt to your evolving needs, ensuring long-term efficiency
//               and success.
//             </p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
