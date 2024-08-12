// components/SidebarHamburgerMenu.tsx

import React from 'react';
import { useHeadings } from '../context/heading-context';

interface Heading {
  title: string;
  children?: Heading[];
}

interface SidebarHamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidebarHamburgerMenu: React.FC<SidebarHamburgerMenuProps> = ({ isOpen, onClose }) => {
  const { headings } = useHeadings();

  const renderHeadings = (headings: Heading[]) => {
    return headings.map((heading, index) => (
      <div key={index} className="my-2">
        <a href={`#${heading.title.toLowerCase().replace(/\s+/g, '-')}`} onClick={onClose} className="text-sm px-8 w-60 block">{heading.title}</a>
        {heading.children && (
          <div className="pl-4">{renderHeadings(heading.children)}</div>
        )}
      </div>
    ));
  };

  return (
    <div className={`fixed top-0 left-0 py-8  bg-white z-50 sepia text-black font-merriweather transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}>
      <button onClick={onClose} className="pl-60">
        <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      {renderHeadings(headings)}
    </div>
  );
};

export default SidebarHamburgerMenu;
