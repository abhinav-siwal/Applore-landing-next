import Image from 'next/image';
import React from 'react';
import HeroSectionCarousel from './lib/HeroSectionCarousel';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[45rem] bg-[#12191B]">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#5E6EF9,_#10A4F2,_#12191B)]"></div>

      {/* Logo and Text */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <Image 
          src="/Home/Subtract.svg"  // Update with the actual logo path
          width={50}  // Adjust the width as needed
          height={50}  // Adjust the height as needed
          alt="logo"
        />
        <span className="text-white font-semibold">APPLORE</span>
      </div>

      {/* Main Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white -mt-28">
        <div className='max-w-[500px]'>
          <h1 className="text-5xl font-bold bricolage-grotesque-bold">
            From idea to <span className="text-blue-500">go-live</span> in
          </h1>
          <h2 className="text-6xl mt-4 libre-baskerville-regular-italic">60 days</h2>

          {/* Adjusted Paragraph */}
          <div className="flex flex-col items-center mt-4">
            <p className="text-lg bricolage-grotesque-light text-center">
              We craft powerful digital experiences that captivate customers and fuel growth.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 libre-baskerville-bold">
          <span>Get Free Quote</span>
          <span>→</span> {/* Arrow symbol */}
        </button>
      </div>

      <div className="absolute bottom-44 w-full text-center text-gray-500 text-lg bricolage-grotesque-light">
        Trusted By
      </div>

      {/* Trusted By Section (Logos) */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <HeroSectionCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
