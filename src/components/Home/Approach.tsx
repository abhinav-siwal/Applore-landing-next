import Image from "next/image";
import React from "react";

const Approach = () => {
  const cards = [
    {
      id: 1,
      title: "Discovery",
      content:
        "We understand your business goals and target audience to determine the best approach for your mobile app.",
      icon: "/Home/discoveryIcon.svg",
      image: "/Home/discoveryImage.svg",
    },
    {
      id: 2,
      title: "Design:",
      content:
        "Our team of expert designers will create a visually appealing and user-friendly app design that aligns with your brand.",
      icon: "/Home/designIcon.svg",
      image: "/Home/designImage.svg",
    },
    {
      id: 3,
      title: "Development:",
      content:
        "Using the most recent technologies, our experts will create your mobile app, guaranteeing a top-notch and flawless user experience.",
      icon: "/Home/developmentIcon.svg",
      image: "/Home/developementImage.svg",
    },
    {
      id: 4,
      title: "Deployment:",
      content:
        "Applore will work with you to launch your application, providing ongoing support and maintenance to ensure its success.",
      icon: "/Home/deploymentIcon.svg",
      image: "/Home/deploymentImage.svg",
    },
  ];

  return (
    <div className="relative mt-24 w-full">
      {/* Background Image */}
      <div className="relative h-[500px]">
        
         {/* Line image */}
        

        <Image
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover"
          alt="UI/UX Design"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10">
          <h1 className="text-4xl font-semibold bricolage-grotesque-medium">
            Embrace
          </h1>
          <h2 className="text-2xl libre-baskerville-regular-italic">
            Innovation:
          </h2>
          <h3 className="text-3xl font-semibold bricolage-grotesque-medium">
            Beyond{" "}
            <span className="libre-baskerville-regular-italic">Basic</span>
          </h3>

          {/* Button */}
          <button className="mt-8 bg-white inter-regular text-black px-10 py-3 rounded-full flex items-center libre-baskerville-bold relative">
            <span>Get Free Quote</span>
            <Image
              src="/Home/rightArrow.svg"
              width={20}
              height={20}
              alt="Arrow"
              className="absolute filter invert right-4"
            />
          </button>

          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6 text-white">
            <div className="flex items-start mb-4 sm:mb-0">
              <Image
                src="Home/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Customer solution</span>
            </div>
            <div className="flex items-start mb-4 sm:mb-0">
              <Image
                src="Home/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Expert support</span>
            </div>
            <div className="flex items-start mb-4 sm:mb-0">
              <Image
                src="Home/check.svg"
                alt="Check Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <span>Proven result</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title Image Above Cards */}
      <div className="flex justify-center my-10 ">
        <h1 className="text-4xl bricolage-grotesque-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent">
          Our Approach
        </h1>
      </div>
            {/* Card Display Code */}
      <div className="flex flex-wrap justify-center gap-[1.5rem] relative px-4 md:px-10">
        {" "}
        {/* Added padding on mobile (px-4) */}
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative w-full sm:w-[20rem] h-[27rem] p-[1rem] shadow-lg flex flex-col justify-between rounded-lg border border-gray-200 overflow-hidden ${
              index % 2 == 1 ? "mt-[5rem]" : ""
            }`}
          >

            {/* Large Number Overlay */}
            <div className="absolute left-[-4rem] top-[-7rem] transform text-[16rem] font-semibold text-gray-300 opacity-20">
              {card.id < 10 ? `0${card.id}` : card.id}
            </div>
            {/* Icon */}
            <div className="flex justify-start mt-2">
              <Image
                src={card.icon}
                alt={`Icon for ${card.title}`}
                width={30}
                height={30}
              />
            </div>
            {/* Title and Description at the Top */}
            <div className="flex flex-col items- mt-4 absolute top-14">
              <h3 className="text-lg font-semibold z-10 bricolage-grotesque-bold">
                {card.title}
              </h3>
              <p className="z-10 text-base libre-baskerville-regular-italic mt-3">
                {card.content}
              </p>
            </div>
            {/* Image at the bottom right */}
            <div className="absolute bottom-0 right-0 pr-0 pb-0 p-2">
              <Image
                src={card.image}
                alt={`Image for ${card.title}`}
                width={240} // Set width to 240px
                height={80} // Adjust height proportionally if necessary
                className="rounded-tl-lg rounded-br-lg" // Rounded corners on top-left and bottom-right
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
