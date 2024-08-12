import React, { useState } from 'react';

interface AccordionItem {
  title: string;
  items: string[];
}

interface AccordionProps {
  sections: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className=" py-4 rounded-t-lg">
        {sections.map((section, index) => (
          <div key={index} className=''>
            <div className='font-bold text-lg pb-2'>{section.title}</div>
            <div className='pb-3'>{section.items}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
