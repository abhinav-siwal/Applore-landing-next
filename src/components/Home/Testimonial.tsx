import Image from 'next/image';
import React from 'react';
import CardSlider from './lib/CardSlider';

const Testimonial = () => {
  return (
    <div>
      <div className='relative h-[500px] mt-24'>
        <Image 
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10 ">
          <h1 className="text-4xl font-semibold bricolage-grotesque-medium">
            Bring your 
            <span className="libre-baskerville-regular-italic"> Vision</span>
          </h1>
          <h2 className="text-4xl bricolage-grotesque-medium">
            to Life with 
            <span className="font-medium libre-baskerville-regular-italic"> Custom Applications</span>
          </h2>

          <button className="mt-8 bg-white font-semibold text-black px-6 py-3 rounded-full flex items-center space-x-2 libre-baskerville-bold">
            <span >Start your project now</span>
            <span className='text-xl'>→</span> {/* Arrow symbol */}
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

    <CardSlider/>
      </div>
    </div>
  );
};

export default Testimonial;
