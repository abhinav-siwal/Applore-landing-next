"use client";
import Image from "next/image";
import React, { useState } from "react";
import GetQuoteForm from "./GetQuoteForm";
import { usePathname } from 'next/navigation';
import { content } from '/data/content.js';
const Approach = () => {
  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.ApproachSection || {};
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal on close icon click
  };

  const cards = [
    {
      id: 1,
      title: currentContent.title1,
      content:currentContent.content1,
      icon: "/Home/discoveryIcon.svg",
      image: currentContent.image1,
    },
    {
      id: 2,
      title: currentContent.title2,
      content:currentContent.content2,
      icon: "/Home/designIcon.svg",
      image: currentContent.image2,
    },
    {
      id: 3,
      title: currentContent.title3,
      content:currentContent.content3,
      icon: "/Home/developmentIcon.svg",
      image: currentContent.image3,
    },
    {
      id: 4,
      title: currentContent.title4,
      content:currentContent.content4,
      icon: "/Home/deploymentIcon.svg",
      image: currentContent.image4,
    },
  ];



  return (
    <div className="relative mt-24 w-full">
      {/* Background Image */}
      <div className="relative h-[400px]">
        
         {/* Line image */}
        

        <Image
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10">
        <h1 className="text-4xl font-semibold bricolage-grotesque-medium">
  <span>{currentContent.Embrace}</span>
  <span className="text-3xl libre-baskerville-regular-italic ml-2">
    {currentContent.mainTitle}
  </span>
</h1>

          <h3 className="text-3xl font-semibold bricolage-grotesque-medium">
            {currentContent.Beyond}{" "}
            <span className="libre-baskerville-regular-italic">{currentContent.Basic}</span>
          </h3>

          {/* Button */}
          {/* <button onClick={openModal} className="mt-8 bg-white inter-semibold text-black px-10 py-3 rounded-full flex items-center libre-baskerville-bold relative">
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
        <button
          onClick={openModal} // Keep the onClick handler to open the modal
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


          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6 text-white">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image
                src="Home/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>{currentContent.bulltetPoints1}</span>
            </div>
            <div className="flex items-center mb-4 sm:mb-0">
              <Image
                src="Home/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>{currentContent.bulltetPoints2}</span>
            </div>
            <div className="flex items-center mb-4 sm:mb-0">
              <Image
                src="Home/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>{currentContent.bulltetPoints3}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title Image Above Cards */}
      <div className="flex justify-center my-10 ">
        <h1 className="text-4xl bricolage-grotesque-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent">
          Our Approach
        </h1>
      </div>
            {/* Card Display Code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-[1.5rem] relative px-4 md:px-10 w-full">
        {" "}
        {/* Added padding on mobile (px-4) */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative w-full  h-[27rem] p-[1rem] shadow-lg flex flex-col justify-between rounded-lg border border-gray-200 overflow-hidden ${
              index % 2 == 1 ? "mt-[5rem]" : "" 
            }`}
          >

            {/* Large Number Overlay */}
            <div className="absolute left-[-4rem] top-[-7rem] transform text-[16rem] font-semibold text-gray-300 opacity-20">
              {card.id < 10 ? `0${card.id}` : card.id}
            </div>
            {/* Icon */}
            <div className="flex justify-start mt-2">
              <Image
                src={card.icon}
                alt={`Icon for ${card.title}`}
                width={30}
                height={30}
              />
            </div>
            {/* Title and Description at the Top */}
            <div className="flex flex-col items- mt-4 absolute top-14">
              <h3 className="text-lg font-semibold z-10 bricolage-grotesque-bold">
                {card.title}
              </h3>
              <p className="z-10 text-base libre-baskerville-regular-italic mt-3">
                {card.content}
              </p>
            </div>
            {/* Image at the bottom right */}
            <div className="absolute bottom-0 right-0 pr-0 pb-0 p-2">
              <Image
                src={card.image}
                alt={`Image for ${card.title}`}
                width={240} // Set width to 240px
                height={80} // Adjust height proportionally if necessary
                className="rounded-tl-lg rounded-br-lg" // Rounded corners on top-left and bottom-right
              />
            </div>
          </div>
        ))}
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

export default Approach;
