"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = React.ComponentPropsWithRef<"button"> & {
  isSelected?: boolean;
};

export const DotButton: React.FC<PropType> = ({ isSelected, ...props }) => (
  <button
    type="button"
    className={
      "ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border-0 bg-[#7d73c333] p-0 md:h-[25px] md:w-[25px] " +
      (isSelected
        ? "inset-ring-primary inset-ring-4"
        : "inset-ring-primary/40 inset-ring-0")
    }
    {...props}
  >
    <span className="block h-full w-full rounded-full"></span>
  </button>
);
