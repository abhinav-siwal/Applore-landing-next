import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='mt-24'>
      {/* Background Image Section */}
      <div className='relative h-[500px]'>
        <Image 
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
          priority
        />
       <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10">
  <h1 className="text-4xl libre-baskerville-regular-italic">
    Experience <span className="normal-case bricolage-grotesque-medium">the difference</span> <br />
    <div className="text-3xl">
      <span className="bricolage-grotesque-medium">Applore brings to your</span> <span className="normal-case">projects.</span>
    </div>
  </h1>
  <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2 libre-baskerville-light">
    <span className='font-semibold'>Get Free Quote</span>
    <span className='text-xl'>→</span>
  </button>
  <p className="mt-10 bricolage-grotesque-medium">Our Clients are backed by top Investors</p>
</div>

      </div>

      {/* New black background section */}
      <div className="bg-black text-white py-10 h-[500px] flex flex-col justify-between p-24">
        {/* Address and Social Media Section */}
        <div className="flex justify-between mb-4">
          <div className="flex flex-col mb-4 ml-28 mt-20">
            <h2 className="text-lg font-semibold mb-2">Addresses</h2>
            <div className="flex flex-col gap-2 items-start space-y-2">
              <div className="flex items-center ">
                <img src="/Home/india.svg" alt="Country Flag" className="mr-2" />
                <span className='bricolage-grotesque-medium'>803, Pegasus Tower, Sector 68, Noida, India</span>
              </div>
              <div className="flex items-center">
                <img src="/Home/germany.svg" alt="Country Flag" className="mr-2" />
                <span className='bricolage-grotesque-medium'>Lohhof 5, Hamburg, Germany, 20535</span>
              </div>
              <div className="flex items-center">
                <img src="/Home/america.svg" alt="Country Flag" className="mr-2" />
                <span className='bricolage-grotesque-medium'>8 The Green, Suite R, Dover, DE 19901, United States</span>
              </div>
            </div>
          </div>

          {/* Social Media Names Section */}
          <div className="flex flex-col items-end mt-20">
          <div className="flex space-x-6">
              <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>

        {/* Move copyright text to the bottom */}
        <p className="text-center -mb-4 bricolage-grotesque-medium text-sm">
          Copyright 2024, © Applore Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
