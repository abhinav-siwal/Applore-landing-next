"use client"; // This directive should be at the top

import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure this path is correct

const Accordian = () => {
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
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={() => toggleItem("item-1")}>
            Is it accessible?
            <span className="ml-auto text-xl">
              {openItem === "item-1" ? 'x' : '+'} {/* Change sign based on state */}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger onClick={() => toggleItem("item-2")}>
            Can I customize the styles?
            <span className="ml-auto text-xl">
              {openItem === "item-2" ? 'x' : '+'} {/* Change sign based on state */}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the Accordion using Tailwind CSS or your preferred styling approach.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger onClick={() => toggleItem("item-3")}>
            What libraries does it use?
            <span className="ml-auto text-xl">
              {openItem === "item-3" ? 'x' : '+'} {/* Change sign based on state */}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            This Accordion is built using Radix UI for accessibility and flexibility.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordian;
