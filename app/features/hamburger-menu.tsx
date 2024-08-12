// HamburgerMenu.tsx
import React from 'react';
import Link from 'next/link';

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { name: 'GeolocatAr', path: '/Geolocatar' },
  { name: 'Sensor Fusion', path: '/Geolocatar/SensorFusion' },
  { name: 'Broadcast App', path: '/BroadcastApp' },
  { name: 'GPS Upsampling', path: '/Geolocatar/GpsUpsampling' },
  { name: 'rs_vision', path: '/rs_vision' },
];

const HamburgerMenu: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0  text-black bg-white sepia z-50 transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-end  pt-8">
        <button onClick={onClose} className='pr-60'>
          <svg className="h-6 w-6 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav className="flex flex-col items-start pt-4 px-10 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <div className="text-lg text-black" onClick={onClose}>
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default HamburgerMenu;
