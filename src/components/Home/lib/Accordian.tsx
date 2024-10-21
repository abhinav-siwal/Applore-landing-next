"use client"; 

import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure this path is correct

const Accordian = ({ faqData }) => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (value) => {
    setOpenItem(openItem === value ? null : value); // Toggle the open item
  };

  return (
    <div className="mx-auto w-9/12">
      <div className='text-center mt-20'>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent bricolage-grotesque-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqData?.questions?.slice(0, 5).map((faq, index) => (  // Display only the top 5 items
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
