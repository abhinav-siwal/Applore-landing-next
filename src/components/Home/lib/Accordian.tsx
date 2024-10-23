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
      <div className='text-center mt-20'>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent bricolage-grotesque-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqToDisplay?.map((faq, index) => (  // Display only the top 5 items
          <AccordionItem key={faq._id} value={`item-${index + 1}`}>
            <AccordionTrigger onClick={() => toggleItem(`item-${index + 1}`)}>
              {faq.question}
              <span className="ml-auto text-xl">
                {openItem === `item-${index + 1}` ? 'x' : '+'} {/* Change sign based on state */}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
