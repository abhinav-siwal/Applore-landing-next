import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Make sure this path is correct

const Accordian = () => {
  return (
    <div className="mx-auto w-9/12">
         <div className='text-center mt-20'>
        <h1 className="text-3xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent">
        Frequently asked questions
        </h1>
        
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the Accordion using Tailwind CSS or your preferred styling approach.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What libraries does it use?</AccordionTrigger>
          <AccordionContent>
            This Accordion is built using Radix UI for accessibility and flexibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the Accordion using Tailwind CSS or your preferred styling approach.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What libraries does it use?</AccordionTrigger>
          <AccordionContent>
            This Accordion is built using Radix UI for accessibility and flexibility.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
          <AccordionContent>
            Yes, you can customize the Accordion using Tailwind CSS or your preferred styling approach.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What libraries does it use?</AccordionTrigger>
          <AccordionContent>
            This Accordion is built using Radix UI for accessibility and flexibility.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordian;
