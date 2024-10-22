'use client'; // Ensure this component uses client-side rendering

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component

const HeroSectionCarousel = ({ workedWithData }) => {
  // Extract only the 'icon' from each item in workedWithData.workedWith
  const logos = workedWithData?.workedWith?.map(item => item.icon) || [];
  const [visibleLogos, setVisibleLogos] = useState([...logos, ...logos,...logos]); // Duplicate logos for smooth carousel effect

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee w-full">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="mx-4 flex-shrink-0">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-[100px] h-[80px] md:w-[120px] md:h-[96px] lg:w-[150px] lg:h-[120px]" // Maintain sizes across different breakpoints
              width={100} // Set the desired width
              height={80} // Set the desired height
              objectFit="contain" // Adjusts how the image fits in the box
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSectionCarousel;
