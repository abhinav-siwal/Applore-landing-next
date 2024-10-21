import Image from 'next/image';
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="mt-10 w-full mx-auto max-w-[1200px] px-[1rem]">
      {/* Idea section */}
      <div className="mb-[2rem]">
        <h1 className="text-3xl font-bold bricolage-grotesque-bold">
          Shaping ideas into <span className="italic libre-baskerville-regular-italic">results</span>
        </h1>
        <p className="mt-[1rem] text-gray-800">
          At Applore, we transform your concepts into impactful solutions that drive success.
          Let us help you navigate the path from vision to reality with our expertise and
          innovative approach.
        </p>
      </div>

      {/* Services stats */}
      <div className="grid grid-cols-2 gap-y-[4rem] gap-x-[2rem]">
  <div>
    <h2 className="sm:text-4xl text-2xl font-bold">500+</h2>
    <p className="mt-[0.5rem] text-gray-500">Applications Developed</p>
  </div>
  <div>
    <h2 className="sm:text-4xl text-2xl font-bold">750+</h2>
    <p className="mt-[0.5rem] text-gray-500">Live Websites Developed</p>
  </div>
  <div>
    <h2 className="sm:text-4xl text-2xl font-bold">200,000+</h2>
    <p className="mt-[0.5rem] text-gray-500">Users Downloaded</p>
  </div>
  <div>
    <h2 className="sm:text-4xl text-2xl font-bold">400+</h2>
    <p className="mt-[0.5rem] text-gray-500">Clients</p>
  </div>
</div>


      {/* Cards */}
      <div className='mt-20'>
        <h1 className='text-3xl  bricolage-grotesque-bold'>Key services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* 1st card  */}
          <div>
  <Image
    src="/Home/Phone.svg"
    alt="Design"
    width={100}
    height={100}
    className="sm:w-[560px] w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-xl font-bold mt-5 bricolage-grotesque-medium ">iOS App Development</h2>
  <p className='opacity-80'>We create high-performance iOS apps that offer exceptional user experiences, tailored to your business needs. </p>
</div>
{/* 2nd */}
<div>
  <Image
    src="/Home/Android.svg"
    alt="Design"
    width={100}
    height={100}
    className="sm:w-[560px] w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-xl font-bold mt-5 bricolage-grotesque-medium ">Android App Development</h2>
  <p className='opacity-80'>Our team builds engaging Android applications that stand out on the Google Play Store and drive user retention. </p>
</div>
{/* 3rd */}
<div>
  <Image
    src="/Home/CrossPlatform.svg"
    alt="Design"
    width={100}
    height={100}
    className="sm:w-[560px] w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-xl font-bold mt-5 bricolage-grotesque-medium ">Cross Platform Development</h2>
  <p className='opacity-80'>We provide efficient cross-platform solutions that deliver a consistent experience across devices while minimizing costs. </p>
</div>
{/* 4rth */}
<div>
  <Image
    src="/Home/UIDesign.svg"
    alt="Design"
    width={100}
    height={100}
    className="sm:w-[560px] w-full h-[400px] object-cover object-top rounded-[20px]" // Use object-top to show the top part of the image
  />
  <h2 className="text-xl font-bold mt-5 bricolage-grotesque-medium ">Mobile UX/UI design</h2>
  <p className='opacity-80'>A multi-page website with CMS support, thoughtful UI system and effective code </p>
</div>



         </div>
      </div>
    </div>
  );
};

export default Services;
