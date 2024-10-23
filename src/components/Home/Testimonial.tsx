"use client";
import Image from 'next/image';
import React from 'react';
import CardSlider from './lib/CardSlider';
import { usePathname } from 'next/navigation';
import { content } from '/data/content.js';

const Testimonial = ({testimonialData}) => {
  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.testimonialSection || {};
  return (
    <div>
      <div className='relative h-[400px] mt-24'>
        <Image 
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10 p-2  ">
          <h1 className="text-4xl font-semibold bricolage-grotesque-medium">
            {currentContent.heading1} 
            <span className="libre-baskerville-regular-italic">{currentContent.highlight1}</span>
          </h1>
          <h1 className="text-4xl font-semibold bricolage-grotesque-medium">
            {currentContent.staffHeading} 
            <span className="libre-baskerville-regular-italic">{currentContent.staffHighlight}</span>
          </h1>
          <h2 className="text-4xl bricolage-grotesque-medium">
          {currentContent.heading2} 
            <span className="font-medium libre-baskerville-regular-italic">{currentContent.highlight2}</span>
          </h2>

            {/* Button */}
            <button className="mt-8 bg-white text-black inter-medium px-10 py-3 rounded-full flex items-center libre-baskerville-bold relative">
            <span>{currentContent.buttonText}</span>
            <Image
              src="/Home/rightArrow.svg"
              width={20}
              height={20}
              alt="Arrow"
              className="absolute filter invert right-4"
            />
          </button>
        </div>
      </div>
      {/* Testimonial */}
      <div className='text-center mt-20'>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent bricolage-grotesque-bold">
          What our clients say
        </h1>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent bricolage-grotesque-bold">
          about our work
        </h1>
      </div>
      <div className='flex justify-center mt-12'>

    <CardSlider testimonialData={testimonialData}/>
      </div>
    </div>
  );
};

export default Testimonial;
