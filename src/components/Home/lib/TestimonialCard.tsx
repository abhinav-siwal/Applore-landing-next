import Image from "next/image";
import React from "react";

const TestimonialCard = ({ name, media }) => {
  // Split the name and company
  const [testimonialName, company] = name.split(', ');

  return (
    <div className="max-w-[350px] h-[450px] rounded-lg shadow-lg">

      {/* Video Frame */}
      <div className="h-[250px] p-2">
      <video
          className="w-full h-full"
          controls
          // Use the media prop for the video link
          src={media} 
          type="video/mp4" 
          // Ensure video does not download
          preload="metadata" 
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Product Owner Details */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">{testimonialName}</h2>
        <p className="text-gray-500">{`Product Owner,${company}`}</p> {/* Update to show CEO and company */}

        {/* App Logo */}
        <div className="mt-4">
          <Image
            src="/Home/buddylogo.svg"
            alt="Buddy App Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
