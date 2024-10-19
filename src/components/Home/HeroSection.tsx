import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[45rem]">
      {/* Background Image */}
      <Image 
        src="/Home/Section.svg" // Update with your actual background image path
        layout="fill"
        objectFit="cover"
        className="w-full h-full" 
        alt="Background" 
      />

      {/* Logo and Text */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <Image 
          src="/Home/Subtract.svg"  // Assuming the logo is in this path
          width={50}  // Adjust the width as needed
          height={50}  // Adjust the height as needed
          alt="logo"
        />
        <span className="text-white text-3xl font-bold">Applore</span>
      </div>

      {/* Main Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white -mt-28">
        <h1 className="text-5xl font-bold text-foreground font-bricolage">
          From idea to <span className="text-blue-500">go-live</span> in
        </h1>
        <h2 className="text-6xl italic mt-4">60 days</h2>
        <p className="mt-4 text-lg">
          We craft powerful digital experiences that captivate customers and fuel growth.
        </p>

        {/* Button */}
        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2">
          <span>Get Free Quote</span>
          <span>→</span> {/* Arrow symbol */}
        </button>
      </div>
      <div className="absolute bottom-20 w-full text-center text-gray-500 text-lg">
  Trusted By
</div>

      {/* Trusted By Section (Optional for logos) */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-10">
        <Image src="/Home/brand1.svg" width={100} height={40} alt="Brand1" />
        <Image src="/Home/brand2.svg" width={100} height={40} alt="Brand2" />
        <Image src="/Home/brand3.svg" width={100} height={40} alt="Brand3" />
      </div>
    </div>
  );
};

export default HeroSection;
