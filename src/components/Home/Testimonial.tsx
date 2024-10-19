import Image from 'next/image';
import React from 'react';

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
          <h1 className="text-4xl font-semibold font-serif">
            Bring your 
            <span className="italic font-bricolage"> vision</span>
          </h1>
          <h2 className="text-2xl font-light">
            to life with 
            <span className="font-medium"> custom Applications</span>
          </h2>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2">
            <span>Start your project</span>
            <span>→</span> {/* Arrow symbol */}
          </button>
        </div>
      </div>
      {/* Testimonial */}
      <div className='text-center mt-20'>
        <h1 className="text-3xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent">
          What our clients say
        </h1>
        <h1 className="text-3xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent">
          about our work
        </h1>
      </div>
    </div>
  );
};

export default Testimonial;
