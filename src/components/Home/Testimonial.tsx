"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import CardSlider from './lib/CardSlider';
import { usePathname } from 'next/navigation';
import { content } from '/data/content.js';
import GetQuoteForm from './GetQuoteForm';

const Testimonial = ({testimonialData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.testimonialSection || {};

  const openModal = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal on close icon click
  };

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
          {currentContent.heading2}{" "} 
            <span className="font-medium libre-baskerville-regular-italic">{currentContent.highlight2}</span>
          </h2>

            {/* Button */}
            {/* <button className="mt-8 bg-white text-black inter-medium px-10 py-3 rounded-full flex items-center libre-baskerville-bold relative">
            <span>{currentContent.buttonText}</span>
            <Image
              src="/Home/rightArrow.svg"
              width={20}
              height={20}
              alt="Arrow"
              className="absolute filter invert right-4"
            />
          </button> */}
   {/* Replaced Button */}
 <div className="animated-border-box2-glow mt-12"></div>
        <button onClick={openModal}
          className="animated-border-box2 bg-gray-90 text-black font-bold py-5 px-11 rounded-full flex gap-2 items-center mx-auto relative group transition-all duration-300 ease-in-out hover:bg-gray-700 hover:translate-y-[-4px] hover:shadow-lg inter-semibold"
        >
          <span>{currentContent.buttonText}</span>
          <Image
            src="/Home/blackArrow.svg"
            width={20}
            height={20}
            alt="Arrow"
          />
          <span className="absolute inset-0 rounded-full border-2 border-gray-100  opacity-0 group-hover:opacity-100 animate-pulse"></span>
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
        {/* Modal Component */}
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-[#12191B] rounded-lg p-6 w-full max-w-[1100px]">
            <GetQuoteForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
