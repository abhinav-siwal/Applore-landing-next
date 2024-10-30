"use client";
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import { content } from '/data/content.js';
const Services: React.FC = () => {

  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);
  const isConsultancyPage = pathname === '/consultancy';
  // Fetch the content based on the current route
  const currentContent = content[currentPath]?.serviceSection || {};

  return (
    <div className="mt-10 mx-auto w-10/12 ">
      {/* Idea section */}
      <div className="mb-[2rem]">
        <h1 className="sm:text-5xl text-4xl font-bold bricolage-grotesque-bold">
          {currentContent.title} <span className="italic libre-baskerville-regular-italic">{currentContent.highlight}</span>
        </h1>
        <p className="mt-8 text-gray-800 text-2xl ">
         {currentContent.description}
        </p>
      </div>

      {/* Services stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[4rem] gap-x-[2rem] mt-16">
  <div>
    <h2 className="sm:text-4xl text-3xl font-bold">{currentContent.statsNum1}</h2>
    <p className="mt-[0.5rem] text-[#0F0E0E] text-xl">{currentContent.statsText1}</p>
  </div>
  <div>
    <h2 className="sm:text-4xl text-3xl font-bold">{currentContent.statsNum2}</h2>
    <p className="mt-[0.5rem] text-[#0F0E0E] text-xl">{currentContent.statsText2}</p>
  </div>
  <div>
    <h2 className="sm:text-4xl text-3xl font-bold">{currentContent.statsNum3}</h2>
    <p className="mt-[0.5rem] text-[#0F0E0E] text-xl">{currentContent.statsText3}</p>
  </div>
  <div>
    <h2 className="sm:text-4xl text-3xl font-bold">{currentContent.statsNum4}</h2>
    <p className="mt-[0.5rem] text-[#0F0E0E] text-xl">{currentContent.statsText4}</p>
  </div>
</div>


      {/* Cards */}
      <div className='mt-20'>
        <h1 className='sm:text-5xl text-4xl bricolage-grotesque-bold'>{currentContent.keyService}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
          {/* 1st card  */}
          <div>
  <Image
    src={currentContent.image1}
    alt="Design"
    width={400}
    height={400}
    className=" w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-2xl font-bold mt-5 bricolage-grotesque-medium ">{currentContent.keyService1}</h2>
  <p className='opacity-80'>{currentContent.desc1}</p>
</div>
{/* 2nd */}
<div>
  <Image
    src={currentContent.image2}
    alt="Design"
    width={400}
    height={400}
    className=" w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-2xl font-bold mt-5 bricolage-grotesque-medium ">{currentContent.keyService2}</h2>
  <p className='opacity-80'>{currentContent.desc2}</p>
</div>
{/* 3rd */}
<div>
  <Image
    src={currentContent.image3}
    alt="Design"
    width={400}
    height={400}
    className=" w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-2xl font-bold mt-5 bricolage-grotesque-medium ">{currentContent.keyService3}</h2>
  <p className='opacity-80'>{currentContent.desc3} </p>
</div>
{/* 4rth */}
<div>
  <Image
    src={currentContent.image4}
    alt="Design"
    width={400}
    height={400}
    className={`w-full h-[400px] ${!isConsultancyPage ? 'object-cover' : ''} object-top rounded-[20px]`}f // Use object-top to show the top part of the image
  />
  <h2 className="text-2xl font-bold mt-5 bricolage-grotesque-medium ">{currentContent.keyService4}</h2>
  <p className='opacity-80'>{currentContent.desc4} </p>
</div>



         </div>
      </div>
    </div>
  );
};

export default Services;
