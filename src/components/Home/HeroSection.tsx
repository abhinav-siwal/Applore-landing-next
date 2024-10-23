"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroSectionCarousel from "./lib/HeroSectionCarousel";
import GetQuoteForm from "./GetQuoteForm"; // Import the modal form
import { usePathname } from "next/navigation";
import { content } from "/data/content.js"; // Import the content object

const HeroSection = ({ workedWithData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.heroSection || {};

  const openModal = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal on close icon click
  };

  return (
    <div className="relative w-full h-[45rem] bg-[#12191B] overflow-hidden">
      {/* Gradient Backgrounds */}
      <div
        className="absolute -top-20 -left-20 rounded-full h-[320px] w-[350px] filter blur-[100px]"
        style={{ background: "radial-gradient(circle, #10A4F2, #5E6EF9)" }}
      ></div>
      <div
        className="absolute -bottom-72 -right-80 h-[675px] w-[725px] rounded-full filter blur-[150px]"
        style={{ background: "radial-gradient(circle, #10A4F2, #5E6EF9)" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 h-[150px] w-[400px] rounded-lg filter blur-[100px]"
        style={{ background: "radial-gradient(circle, #10A4F2, #5E6EF9)" }}
      ></div>

      {/* Logo and Text */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <Image
          src="/Home/Subtract.svg" // Update with the actual logo path
          width={50}
          height={50}
          alt="logo"
        />
        <span className="text-white font-semibold text-xl">APPLORE</span>
      </div>

      {/* Main Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white -mt-28 p-4">
        <div className="max-w-[650px]">
          <h1 className="sm:text-6xl text-5xl font-bold bricolage-grotesque-bold bg-gradient-to-r from-white via-[#FFFFFF99] to-[#FFFFFF] bg-clip-text text-transparent">
            {currentContent.title}{" "}
            <span className="text-[#3A88F6]">{currentContent.highlight}</span>
          </h1>
          <h2 className="sm:text-6xl text-5xl mt-4 libre-baskerville-regular-italic">
            {currentContent.time}
          </h2>

          {/* Adjusted Paragraph */}
          <div className="flex flex-col items-center mt-10">
            <p className="text-lg bricolage-grotesque-light text-center">
              {currentContent.description}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={openModal}
          className=" mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 inter-semibold"
        >
          <span>{currentContent.buttonText}</span>
          <Image
            src="/Home/rightArrow.svg"
            width={20}
            height={20}
            alt="Arrow"
          />
        </button>
      </div>

      <div className="absolute sm:bottom-44 bottom-32 w-full text-center text-[#8C8C8C] text-lg bricolage-grotesque-light">
        {/* Additional content here if needed */}
      </div>

      {/* Trusted By Section (Logos) */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <HeroSectionCarousel workedWithData={workedWithData} />
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

export default HeroSection;
