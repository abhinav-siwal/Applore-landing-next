'use client'; // Ensure this component uses client-side rendering

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component

const logos = [
  "/Home/wipro.svg",
  "/Home/jke.svg",
  "/Home/wipro.svg",
  "/Home/jk.svg",
  "/Home/wipro.svg",
  "/Home/wipro.svg",
  "/Home/wipro.svg",
  "/Home/wipro.svg"
];

const HeroSectionCarousel = () => {
  const [visibleLogos, setVisibleLogos] = useState([...logos, ...logos]); // Duplicate logos

  useEffect(() => {
    const interval = setInterval(() => {
      // Shift the first logo to the end of the array
      setVisibleLogos((prev) => [...prev.slice(1), prev[0]]);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee w-full">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="mx-4">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full"
              width={100} // Set the desired width
              height={64} // Set the desired height
              objectFit="contain" // Adjusts how the image fits in the box
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionCarousel;
