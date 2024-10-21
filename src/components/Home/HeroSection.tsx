import Image from "next/image";
import React from "react";
import HeroSectionCarousel from "./lib/HeroSectionCarousel";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[45rem] bg-[#12191B] overflow-hidden">
      {/* First Gradient (Top Left) */}
      {/* <div className='absolute -top-20 -left-20 rounded-full h-[320px] w-[350px] bg-gradient-to-r from-[#10A4F2] to-[#5E6EF9] filter blur-3xl'></div> */}
      <div
        className="absolute -top-20 -left-20 rounded-full h-[320px] w-[350px] filter blur-[100px]"
        style={{ background: "radial-gradient(circle, #10A4F2, #5E6EF9)" }}
      ></div>

      {/* Second Gradient (Bottom Right) */}
      {/* <div className='absolute -bottom-72 -right-80 h-[675px] w-[725px] rounded-full bg-gradient-to-r from-[#10A4F2] to-[#5E6EF9] filter blur-3xl'></div> */}
      <div
        className="absolute -bottom-72 -right-80 h-[675px] w-[725px] rounded-full filter blur-[150px]"
        style={{ background: "radial-gradient(circle, #10A4F2, #5E6EF9)" }}
      ></div>

      {/* Third Gradient (Bottom Left) */}
      {/* <div className='absolute bottom-0 left-0 h-[150px] w-[400px] rounded-lg bg-gradient-to-r from-[#10A4F2] to-[#5E6EF9] filter blur-3xl'></div> */}
      <div
        className="absolute bottom-0 left-0 h-[150px] w-[400px] rounded-lg filter blur-[100px]"
        style={{ background: "radial-gradient(circle, #10A4F2, #5E6EF9)" }}
      ></div>

      {/* Logo and Text */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <Image
          src="/Home/Subtract.svg" // Update with the actual logo path
          width={50} // Adjust the width as needed
          height={50} // Adjust the height as needed
          alt="logo"
        />
        <span className="text-white font-semibold text-xl">APPLORE</span>
      </div>

      {/* Main Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white -mt-28 p-4">
        <div className="max-w-[650px]">
        <h1
  className="sm:text-6xl text-5xl font-bold bricolage-grotesque-bold bg-gradient-to-r from-white via-[#FFFFFF99] to-[#FFFFFF] bg-clip-text text-transparent"
>
  From idea to <span className="text-[#3A88F6]">go-live</span> in
</h1>
<h2
  className="sm:text-6xl text-5xl mt-4 libre-baskerville-regular-italic  "
>
  60 days
</h2>




          {/* Adjusted Paragraph */}
          <div className="flex flex-col items-center mt-10">
            <p className="text-lg bricolage-grotesque-light text-center">
              We craft powerful digital experiences that captivate customers and
              fuel growth.
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 bg-black text-white inter-regular px-6 py-3 rounded-full flex items-center space-x-2 ">
          <span>Get Free Quote</span>
          <Image
                src="/Home/rightArrow.svg"
                width={20}
                height={20}
                alt="Arrow"
              />
        </button>
      </div>

      <div className="absolute sm:bottom-44 bottom-32 w-full text-center text-[#8C8C8C] text-lg bricolage-grotesque-light">
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
