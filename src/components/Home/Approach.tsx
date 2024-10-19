import Image from 'next/image';
import React from 'react';

const Approach = () => {
  const cards = [
    { id: 1, title: "Discovery", content: "We understand your business goals and target audience to determine the best approach for your mobile app.", icon: "/Home/discoveryIcon.svg", image: "/Home/discoveryImage.svg" },
    { id: 2, title: "Design:", content: "Our team of expert designers will create a visually appealing and user-friendly app design that aligns with your brand.", icon: "/Home/designIcon.svg", image: "/Home/designImage.svg" },
    { id: 3, title: "Development:", content: "Using the most recent technologies, our experts will create your mobile app, guaranteeing a top-notch and flawless user experience.", icon: "/Home/developmentIcon.svg", image: "/Home/developementImage.svg" },
    { id: 4, title: "Deployment:", content: "Applore will work with you to launch your application, providing ongoing support and maintenance to ensure its success.", icon: "/Home/deploymentIcon.svg", image: "/Home/deploymentImage.svg" },
  ];

  return (
    <div className='relative mt-24 w-full'>
      {/* Background Image */}
      <div className='relative h-[500px]'>
        <Image 
          src="/Home/Approachbg.svg"
          layout="fill"
          objectFit="cover" 
          alt="UI/UX Design"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-3 text-white z-10">
          <h1 className="text-4xl font-semibold">Embrace</h1>
          <h2 className="text-2xl">Innovation:</h2>
          <h3 className="text-3xl font-semibold">Beyond basix</h3>
          
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2">
            <span>Get Free Quote</span>
            <span>→</span> {/* Arrow symbol */}
          </button>

          <div className="mt-10 flex space-x-6 text-white">
            <div className="flex items-center">
              <Image src="Home/check.svg" alt="Check Icon" width={20} height={20} className="mr-1" />
              <span>Customer solution</span>
            </div>
            <div className="flex items-center">
              <Image src="Home/check.svg" alt="Check Icon" width={20} height={20} className="mr-1" />
              <span>Expert support</span>
            </div>
            <div className="flex items-center">
              <Image src="Home/check.svg" alt="Check Icon" width={20} height={20} className="mr-1" />
              <span>Proven result</span>
            </div>
          </div>
        </div>
      </div>

      {/* Title Image Above Cards */}
      <div className="flex justify-center my-10">
        <Image 
          src="/Home/OurApproach.svg" 
          alt="Our Approach" 
          width={300} // Set an appropriate width
          height={100} // Adjust height as necessary
          className="object-contain" // Ensure it scales properly
        />
      </div>

      {/* Card Display Code */}
      <div className="flex flex-wrap justify-center gap-[1.5rem]">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative w-[20rem] h-[27rem] p-[1rem] shadow-lg flex flex-col justify-between rounded-lg border border-gray-200 overflow-hidden ${
              index === 1 || index === 3 ? "mt-[5rem]" : ""
            }`}
          >
            {/* Large Number Overlay */}
            <div className="absolute left-[-4rem] top-[-5rem] transform text-[16rem] font-semibold text-gray-300 opacity-20">
              {card.id < 10 ? `0${card.id}` : card.id}
            </div>
            {/* Icon */}
            <div className="flex justify-start mt-2">
              <Image src={card.icon} alt={`Icon for ${card.title}`} width={30} height={30} />
            </div>
            {/* Title and Description at the Top */}
            {/* <div className="flex flex-col items- mt-4">
              <h3 className="text-lg font-semibold z-10">{card.title}</h3>
              <p className="z-10 text-base">{card.content}</p>
            </div> */}
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
