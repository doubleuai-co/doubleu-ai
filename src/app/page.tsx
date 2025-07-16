import HeroSection from "@/components/hero-section";
import HowSection from "@/components/how-it-works-section";
import CounterSection from "@/components/counter-row-section";
import MeetWorkersSection from "@/components/meet-workers-section";
import Script from "next/script";
import AnywhereYouworkSection from "@/components/anywhere-youworksection";
import FAQSection from "@/components/faq-section";
import CallToActionSection from "@/components/calltoaction-section";
import WhyChooseUsSection from "@/components/whyChooseus-section";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <CounterSection/>
      <HowSection />
      <MeetWorkersSection />
      <AnywhereYouworkSection/>
      <WhyChooseUsSection/>
      <FAQSection/>
      <CallToActionSection/>

      {/* <section className="l flex items-center justify-center bg-[#D9DFF0] px-5 py-6 md:px-[100px] md:py-20">
        <div className="max-w-7x relative flex w-full flex-col items-center justify-center gap-6 rounded-[36px] bg-white px-5 py-6 text-center">
          <div className="space-y-1">
            <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide text-[#222831] md:text-[4rem] md:leading-16">
              Got Questions?
            </h2>
            <h2 className="font-montserrat text-center text-[2.5rem] leading-12 font-bold -tracking-wide text-[#222831] md:text-[4rem] md:leading-16">
              Let’s clear things up.
            </h2>
          </div>
          <p className="max-w-3xl text-center text-xl leading-7 -tracking-wide text-[#222831] md:text-2xl md:leading-[2.125rem]">
            Yes, we understand AI is relatively new and these terms used can get
            confusing. So if you have any questions at all, Myneo is always
            ready to answer.
          </p>
          <Button className="h-11 w-full rounded-full border border-[#1E2A47] bg-[#1E2A47] px-8 font-normal text-white shadow-md shadow-black/50 transition-colors duration-300 hover:bg-white hover:text-[#1E2A47] hover:shadow-none md:h-14 md:w-fit md:text-xl">
            Ask Myneo
          </Button>

          <div className="absolute left-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <Image
              placeholder="blur"
              blurDataURL="/watermark.png"
              src="/watermark.png"
              alt="watermark"
              width={1000}
              height={200}
            />
          </div>
        </div>
      </section> */}

      {/* <button
        id="chat-widget"
        className="fixed right-6 bottom-6 z-50 rounded-full bg-[#2e6ee1] p-4 text-white shadow-lg"
        aria-label="Open chat"
      >
        Chat
      </button> */}
      <Script src="/voiceflow-widget.js" strategy="afterInteractive" />
    </main>
  );
}
