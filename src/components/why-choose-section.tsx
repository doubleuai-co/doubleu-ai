import Image from "next/image";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Link from "next/link";

export default function WhyChooseSection() {
  const carouselItems = [
    {
      image: "/learn.png",
      alt: "Continuously Learning",
      title: "Continuously Learning",
      description:
        "Adapts with every interaction, improving decision-making and efficiency.",
    },
    {
      image: "/bag.png",
      alt: "Tailored for Your Business",
      title: "Tailored for Your Business",
      description:
        "Remembers context, refines insights, and evolves with your needs.",
    },
    {
      image: "/plug.png",
      alt: "plug image",
      title: "Seamless Integration",
      description: "Works smoothly within your existing tools and systems.",
    },
    {
      image: "/robot.png",
      alt: "robot image",
      title: "Autonomous & Proactive ",
      description: " Executes complex tasks independently to boost efficiency.",
    },
    {
      image: "/lock.png",
      alt: "security image",
      title: "Enterprise-Grade Security",
      description: "Built with top-tier encryption and compliance standards.",
    },
  ];

  return (
    <section>
      <div className="mx-auto flex max-w-6xl items-center space-y-6 px-5 py-6 md:py-12">
        <div className="from-primary/30 to-secondary/30 mx-auto flex w-full flex-col items-center justify-center gap-6 rounded-[36px] bg-gradient-to-r px-5 py-6 text-center">
          <div className="space-y-2">
            <h2 className="font-montserrat max-w-4xl text-center text-4xl leading-11 font-bold -tracking-wide text-[#222831] md:text-6xl md:leading-[110%]">
              Why Choose Our AI Workers?
            </h2>
          </div>
          <Carousel className="w-full max-w-xl">
            <CarouselContent>
              {carouselItems.map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-lg md:pl-10">
                  <div className="flex flex-col items-center justify-center gap-0 rounded-[36px] bg-white p-2 md:min-h-[472px]">
                    <div className="h-[147px] w-[187px] md:h-[380px] md:w-[320px]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        placeholder="blur"
                        blurDataURL={item.image}
                        width={180}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mb-5 max-w-96 space-y-1">
                      <h3 className="font-montserrat text-center text-base leading-6 font-bold -tracking-wide md:text-left md:text-2xl md:leading-8">
                        {item.title}
                      </h3>
                      <p className="max-w-[187px] text-center text-xs leading-4 font-normal -tracking-wide md:max-w-fit md:text-left md:text-base md:leading-5.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Link href="workforce">
            <Button className="mt-4 h-11 w-full rounded-full bg-white px-8 font-normal text-[#7D73C3] shadow-md shadow-[#7D73C3]/50 transition-colors duration-300 hover:bg-slate-50 hover:bg-gradient-to-r hover:from-[#7D73C3] hover:to-[#9993C3] hover:text-white md:h-14 md:w-fit md:text-xl">
              Explore Agents
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
