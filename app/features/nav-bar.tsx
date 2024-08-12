// components/nav-bar.tsx

"use client"
import React, { useState } from 'react';
import HamburgerMenu from './hamburger-menu';
import SidebarHamburgerMenu from './side-hamburger-menu';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full py-6 px-60 z-50 h-16 bg-white text-black sepia">
        <div className="flex justify-between">
          <div>
          <button onClick={toggleSidebar}>
            <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          </div>
          
          <div><Link href='/' className='text-black'>Home</Link></div>
          <div>
          <button onClick={toggleMenu}>
          <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
          </div>
          
        </div>
        
      </nav>
      <HamburgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <SidebarHamburgerMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default NavBar;
