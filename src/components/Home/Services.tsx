import Image from 'next/image';
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="mt-10 w-full mx-auto max-w-[1200px] px-[1rem]">
      {/* Idea section */}
      <div className="mb-[2rem]">
        <h1 className="text-3xl font-bold">
          Shaping ideas into <span className="italic font-light">results</span>
        </h1>
        <p className="mt-[1rem] text-gray-600">
          At Applore, we transform your concepts into impactful solutions that drive success.
          Let us help you navigate the path from vision to reality with our expertise and
          innovative approach.
        </p>
      </div>

      {/* Services stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <h2 className="text-4xl font-bold">500+</h2>
          <p className="mt-[0.5rem] text-gray-500">Applications Developed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">750+</h2>
          <p className="mt-[0.5rem] text-gray-500">Live Websites Developed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">200,000+</h2>
          <p className="mt-[0.5rem] text-gray-500">Users Downloaded</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">400+</h2>
          <p className="mt-[0.5rem] text-gray-500">Clients</p>
        </div>
      </div>

      {/* Cards */}
      <div className='mt-20'>
        <h1 className='text-3xl font-bold'>Key services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* 1st Card */}
          <div className="flex flex-col items-start"> {/* Change items-center to items-start */}
            <div className="relative w-full h-96 mb-4">
              <Image 
                src="/Home/service1.svg"
                layout="fill"
                objectFit="contain"
                alt="iOS App Development"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">iOS App Development</h2>
            <p className="text-gray-600">
              We create high-performance iOS apps that offer exceptional user experiences, tailored to your business needs.
            </p>
          </div>

          {/* 2nd Card */}
          <div className="flex flex-col items-start"> {/* Change items-center to items-start */}
            <div className="relative w-full h-96 mb-4">
              <Image 
                src="/Home/service2.svg"
                layout="fill"
                objectFit="contain"
                alt="Android App Development"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Android App Development</h2>
            <p className="text-gray-600">
              We specialize in developing Android apps that are fast, scalable, and deliver great user experiences.
            </p>
          </div>

          {/* 3rd Card */}
          <div className="flex flex-col items-start"> {/* Change items-center to items-start */}
            <div className="relative w-full h-96 mb-4">
              <Image 
                src="/Home/service3.svg"
                layout="fill"
                objectFit="contain"
                alt="Web Development"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
            <p className="text-gray-600">
              We build responsive, high-performance websites that engage users and drive conversions.
            </p>
          </div>

          {/* 4th Card */}
          <div className="flex flex-col items-start"> {/* Change items-center to items-start */}
            <div className="relative w-full h-96 mb-4">
              <Image 
                src="/Home/service4.svg"
                layout="fill"
                objectFit="contain"
                alt="UI/UX Design"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
            <p className="text-gray-600">
              Our UI/UX design services ensure your product looks stunning and provides seamless user interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
