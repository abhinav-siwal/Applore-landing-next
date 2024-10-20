import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const CardSlider = () => {
  // Array of 6 items (you can modify this according to your need)
  const cards = Array.from({ length: 6 });

  return (
    <div className="relative w-9/12 overflow-hidden">
      <Carousel className="relative">
        {/* Carousel Items */}
        <CarouselContent className="flex">
          {/* Loop over cards array and pass the index to TestimonialCard */}
          {cards.map((_, index) => (
            <CarouselItem
              key={index}
              className="w-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 p-4"
            >
              <TestimonialCard  />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <CarouselPrevious className="absolute -left-2 top-1/2 transform translate-y-1/2  bg-white text-black p-2 rounded-full z-10">
          ‹
        </CarouselPrevious>

        {/* Next Button */}
        <CarouselNext className="absolute -right-2 top-1/2 transform translate-y-1/2 bg-white text-black p-2 rounded-full z-10">
          ›
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CardSlider;
