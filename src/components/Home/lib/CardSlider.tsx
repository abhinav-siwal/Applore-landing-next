import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const CardSlider = ({ testimonialData }) => {
  return (
    <div className="relative w-9/12 overflow-hidde">
      <Carousel className="relative">
        {/* Carousel Items */}
        <CarouselContent className="flex">
          {/* Loop over the testimonialData array and render each testimonial */}
          {testimonialData?.testimonial?.map((testimonial, index) => (
            <CarouselItem
              key={testimonial._id} // Use _id as the key
              className="w-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 p-4"
            >
              {/* Pass the relevant testimonial data to the TestimonialCard */}
              <TestimonialCard
                name={testimonial.name}
                description={testimonial.description}
                media={testimonial.media}
                mediaType={testimonial.mediaType}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <CarouselPrevious className="absolute -left-3 top-1/2 transform translate-y-1/2 bg-white text-black p-2 rounded-full z-10">
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
