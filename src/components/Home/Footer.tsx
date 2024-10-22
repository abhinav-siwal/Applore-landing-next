"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from 'next/navigation';
import { content } from '/data/content.js'; 
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.footer || {}; // Default to an empty object if not found

  return (
    <div className="mt-24">
      {/* Background Image Section */}
      <div className="relative h-[500px]">
        <Image
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10">
          <h1 className="text-4xl">
            <span className="libre-baskerville-regular-italic text-5xl">{currentContent.highlight1}</span>
            <span className="normal-case bricolage-grotesque-medium text-5xl">
           {" "}   {currentContent.title1}
            </span>{" "}
            <br />
            <div className="text-3xl mt-4">
              <span className="bricolage-grotesque-medium text-4xl">
              {currentContent.title2}
              </span>{" "}
              <span className="libre-baskerville-regular-italic">{currentContent.highlight2}</span>
            </div>
          </h1>
           {/* Button */}
           <button className="mt-8 bg-white inter-semibold text-black px-10 py-3 rounded-full flex items-center libre-baskerville-bold relative">
            <span>{currentContent.buttonText}</span>
            <Image
              src="/Home/rightArrow.svg"
              width={20}
              height={20}
              alt="Arrow"
              className="absolute filter invert right-4"
            />
          </button>

          <p className="mt-10 bricolage-grotesque-medium">
            Our Clients are backed by top Investors
          </p>
        </div>
      </div>
      {/* New black background section */}
      <div className="bg-black w-full p-6 sm:p-28 relative h-[500px]">
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
            <h1 className="bricolage-grotesque-bold">Addresses</h1>
            <div className="flex items-center mt-4">
              <img src="/Home/india.svg" alt="Country Flag" className="mr-2" />
              <span className="bricolage-grotesque-medium">
                803, Pegasus Tower, Sector 68, Noida, India
              </span>
            </div>
            <div className="flex items-center mt-4">
              <img src="/Home/germany.svg" alt="Country Flag" className="mr-2" />
              <span className="bricolage-grotesque-medium">
                Lohhof 5, Hamburg, Germany, 20535
              </span>
            </div>
            <div className="flex items-center mt-4">
              <img src="/Home/america.svg" alt="Country Flag" className="mr-2" />
              <span className="bricolage-grotesque-medium">
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
        {/* Copyright Section */}
        <div className="absolute sm:bottom-4 bottom-10  left-0 right-0 text-white">
          <p className="text-center px-4">
            Copyright 2024, © 2024 Applore Technologies. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;