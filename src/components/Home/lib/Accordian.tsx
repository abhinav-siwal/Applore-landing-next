"use client"; 

import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure this path is correct

import { usePathname } from 'next/navigation';
import { content } from '/data/content.js'; 
import { staffFaqs, userFaqs, consultancyFaqs } from '/data/faq.js';
import Image from 'next/image';
const Accordian = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (value) => {
    setOpenItem(openItem === value ? null : value); // Toggle the open item
  };

  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);

  

  // Determine which FAQ data to use
  // const faqToDisplay = currentPath === '/staff' ? staffFaqs : faqData?.questions || [];
  const faqToDisplay = currentPath === '/staff' 
  ? staffFaqs 
  : currentPath === '/consultancy' 
  ? consultancyFaqs 
  : currentPath === '/' 
  ? userFaqs 
  : [];



  return (
    <div className="mx-auto w-9/12">
      <div className='text-center mt-20 mb-20'>
        <h1 className="sm:text-5xl text-4xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent bricolage-grotesque-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqToDisplay?.map((faq, index) => (  // Display only the top 5 items
          <AccordionItem key={faq._id} value={`item-${index + 1}`}>
            <AccordionTrigger onClick={() => toggleItem(`item-${index + 1}`)}>
             <span className='text-xl bricolage-grotesque-medium text-left '>{faq.question}</span>
              <span className="ml-auto text-xl flex-none">
                {openItem === `item-${index + 1}` ? <Image src="/Home/xmark.svg" width={30} height={30} alt="minus" /> : <Image src="/Home/plus.svg" width={30} height={30} alt="plus" />} {/* Change sign based on state */}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <span className='inter-semibold text-[#3C3C43] text-center '>{faq.answer}</span>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
