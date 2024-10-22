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

const Accordian = ({ faqData }) => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (value) => {
    setOpenItem(openItem === value ? null : value); // Toggle the open item
  };

  const pathname = usePathname(); // Get router instance
  const currentPath = pathname; // Get the current route
  console.log("currentPath", currentPath);

  // Static FAQ data for "/staff" path
  const staffFaqs = [
    {
      _id: 1,
      question: "What is staff augmentation?",
      answer: "Staff augmentation is a flexible staffing solution that allows businesses to supplement their workforce with skilled professionals on a temporary or project basis, helping meet specific project needs without long-term hiring commitments."
    },
    {
      _id: 2,
      question: "How can Applore help with staff augmentation?",
      answer: "Applore connects you with highly skilled professionals tailored to your project requirements. Our extensive talent pool ensures you have the right expertise to meet deadlines and maintain quality without the burdens of traditional hiring."
    },
    {
      _id: 3,
      question: "What types of roles can Applore fill through staff augmentation?",
      answer: "We can provide talent for Technical roles, including software developers, project managers, among others, ensuring you find the right expertise for your needs."
    },
    {
      _id: 4,
      question: "How does the staff augmentation process work?",
      answer: "Our process involves assessing your project requirements, identifying necessary skills, and matching you with qualified candidates. Once selected, candidates seamlessly integrate into your team for the project duration."
    },
    {
      _id: 5,
      question: "Is staff augmentation a cost-effective solution?",
      answer: "Yes, staff augmentation is often more cost-effective than traditional hiring, eliminating recruitment costs and providing specialized skills without long-term commitments."
    },
    {
      _id: 6,
      question: "How do I get started with staff augmentation at Applore?",
      answer: "Getting started is simple! Contact us to discuss your project needs, and we’ll guide you through the process of finding the right talent to support your business goals."
    },
  ];

  // Determine which FAQ data to use
  const faqToDisplay = currentPath === '/staff' ? staffFaqs : faqData?.questions || [];

  return (
    <div className="mx-auto w-9/12">
      <div className='text-center mt-20'>
        <h1 className="text-4xl font-bold bg-gradient-to-b from-[#1A2224] to-[#1A222480] bg-clip-text text-transparent bricolage-grotesque-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqToDisplay.slice(0, 6).map((faq, index) => (  // Display only the top 5 items
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
