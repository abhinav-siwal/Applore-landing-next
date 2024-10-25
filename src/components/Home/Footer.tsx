"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { content } from '/data/content.js'; 
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import GetQuoteForm from "./GetQuoteForm";
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.footer || {}; // Default to an empty object if not found

  const openModal = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal on close icon click
  };

  return (
    <div className="mt-24">
      {/* Background Image Section */}
      <div className="relative h-[400px]">
        <Image
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10 mt-10">
          <h1 className="text-4xl">
            <span className="libre-baskerville-regular-italic sm:text-5xl text-3xl">{currentContent.highlight1}</span>
            <span className="normal-case bricolage-grotesque-medium text-3xl sm:text-5xl">
           {" "}   {currentContent.title1}
            </span>{" "}
            <br />
            <div className="sm:text-5xl text-3xl  sm:mt-4">
              <span className="bricolage-grotesque-medium sm:text-5xl text-3xl">
              {currentContent.title2}
              </span>{" "}
              <span className="libre-baskerville-regular-italic">{currentContent.highlight2}</span>
            </div>
          </h1>
           {/* Button */}
           {/* <button className="mt-8 bg-white inter-semibold text-black px-10 py-3 rounded-full flex items-center libre-baskerville-bold relative">
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
        onClick={openModal}
           // Keep the onClick handler to open the modal
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


          <p className="mt-10 bricolage-grotesqu-light">
            Our Clients are backed by top Investors
          </p>
        </div>
      </div>
      {/* New black background section */}
      <div className="bg-black w-full p-6 sm:p-32  relative h-[500px]">
       <div className="md:pl-16">
         {/* Social Media Icons - Mobile Only */}
         <div className="sm:hidden flex justify-center mb-12">
          <div className="flex space-x-6">
            <FaFacebookF className="text-2xl text-white cursor-pointer hover:text-blue-600" />
            <FaTwitter className="text-2xl text-white cursor-pointer hover:text-blue-600" />
            <FaInstagram className="text-2xl text-white cursor-pointer hover:text-pink-600" />
            <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-blue-600" />
          </div>
        </div>
        {/* Address section */}
        <div className="flex flex-col sm:flex-row justify-between text-white">
          <div className="mb-8 sm:mb-0 pl-4 sm:pl-0">
            <h1 className="bricolage-grotesque-light text-xl">Addresses</h1>
            <div className="flex items-center mt-4">
              <img src="/Home/india.svg" alt="Country Flag" className="mr-2" />
              <span className="inter-regular">
                803, Pegasus Tower, Sector 68, Noida, India
              </span>
            </div>
            <div className="flex items-center mt-4">
              <img src="/Home/germany.svg" alt="Country Flag" className="mr-2" />
              <span className="inter-regular">
                Lohhof 5, Hamburg, Germany, 20535
              </span>
            </div>
            <div className="flex items-center mt-4">
              <img src="/Home/america.svg" alt="Country Flag" className="mr-2" />
              <span className="inter-regular">
                8 The Green, Suite R, Dover, DE 19901, United States
              </span>
            </div>
          </div>
          {/* Social Media Section for Desktop/Laptop */}
          <div className="hidden sm:flex justify-center absolute top-3 sm:static">
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <FaFacebookF className="text-2xl text-white cursor-pointer hover:text-blue-600" />
              <FaTwitter className="text-2xl text-white cursor-pointer hover:text-blue-600" />
              <FaInstagram className="text-2xl text-white cursor-pointer hover:text-pink-600" />
              <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>
       </div>
        {/* Copyright Section */}
        <div className="absolute sm:bottom-4 bottom-10  left-0 right-0 text-white">
          <p className="text-center px-4">
            Copyright 2024, © 2024 Applore Technologies. All rights reserved
          </p>
        </div>
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
export default Footer;