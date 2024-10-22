'use client'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter()
  return (
    <div className='w-full h-screen bg-gradient-to-b from-blue-400 to-blue-500 mx-auto relative flex flex-col items-center justify-center text-white p-10 md:p-16 lg:p-20'> {/* Removed mt-12 */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-5 right-5"
        onClick={() => router.push('/')}
      >
        <g id="fi_1617543" clipPath="url(#clip0_1100_2117)">
          <path
            id="Vector"
            d="M16 32C7.17749 32 0 24.8225 0 16C0 7.17749 7.17749 0 16 0C24.8225 0 32 7.17749 32 16C32 24.8225 24.8225 32 16 32ZM16 2.28564C8.43799 2.28564 2.28564 8.43799 2.28564 16C2.28564 23.562 8.43799 29.7144 16 29.7144C23.562 29.7144 29.7144 23.562 29.7144 16C29.7144 8.43799 23.562 2.28564 16 2.28564Z"
            fill="white"
          />
          <path
            id="Vector_2"
            d="M21.7145 22.8568C21.4221 22.8568 21.1296 22.7452 20.9064 22.5218L9.47797 11.0934C9.03143 10.6468 9.03143 9.92368 9.47797 9.47739C9.92426 9.0311 10.6476 9.03085 11.0939 9.47739L22.5224 20.9059C22.9689 21.3524 22.9689 22.0755 22.5224 22.5218C22.2993 22.7452 22.007 22.8568 21.7145 22.8568Z"
            fill="white"
          />
          <path
            id="Vector_3"
            d="M10.2858 22.8569C9.99335 22.8569 9.70111 22.7453 9.47797 22.5219C9.03143 22.0756 9.03143 21.3522 9.47797 20.9059L20.9064 9.47748C21.353 9.03094 22.0761 9.03094 22.5224 9.47748C22.9687 9.92377 22.9689 10.6472 22.5224 11.0934L11.0939 22.5219C10.8708 22.7453 10.5783 22.8569 10.2858 22.8569Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1100_2117">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* Logo and Text */}
      <div className="flex flex-col items-center mb-[58px]"> {/* Vertical gap of 58px */}
        <Image
          src="/Home/Subtract.svg" // Update with the actual logo path
          width={50} // Adjust the width as needed
          height={50} // Adjust the height as needed
          alt="logo"
        />
        <span className="text-white font-semibold text-lg mt-1">APPLORE</span> {/* Increased text size */}
      </div>

      <h1 className="text-3xl font-bold mb-0 bricolage-grotesque-bold">Thank you for</h1> {/* No margin-bottom between headings */}
      <h1 className="text-3xl font-bold mb-[58px] libre-baskerville-regular-italic">Reaching Out!</h1> {/* Margin-bottom of 58px to separate from paragraphs */}

      <p className="mb-10">We’ve successfully received your request. Our team is reviewing your details and will be in touch shortly to discuss how we can help with your project.</p>
      <p>In the meantime, feel free to explore more about our services or reach out if you have any immediate questions. We’re excited to collaborate with you!</p>
    </div>
  );
}

export default Page;
