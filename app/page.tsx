"use client"
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchActive, setSearchActive] = useState(false); // State to track search bar activity

  const items = [
    { text: 'GeolocatAr', link: '/Geolocatar', style: { top: '40%', left: '40%' }, type: 4 },
    { text: 'Sensor Fusion', link: '/Geolocatar/SensorFusion', style: { top: '20%', left: '30%' }, type: 2 },
    { text: 'Broadcast App', link: '/BroadcastApp', style: { top: '70%', left: '65%' }, type: 4 },
    { text: 'GPS Upsampling', link: '/Geolocatar/GpsUpsampling', style: { top: '25%', left: '60%' }, type: 2 },
    { text: 'rs_vision', link: '/rs_vision', style: { top: '55%', left: '50%' }, type: 1 },
    { text: 'Vision Resource Service', link: '/rs_vision/VisionResourceService', style: { top: '45%', left: '70%' }, type: 3 },
    { text: 'Vision Python SDK', link: '/rs_vision/VisionPythonSdk', style: { top: '60%', left: '25%' }, type: 3 },
  ];

  const filteredItems = items.map(item => ({
    ...item,
    highlight: searchTerm && item.text.toLowerCase().includes(searchTerm.toLowerCase())
  }));

  const getTypeClasses = (type:number) => {
    switch (type) {
      case 1:
        return 'text-6xl font-medium';
      case 2:
        return 'text-4xl font-normal';
      case 3:
        return 'text-xl font-normal';
      case 4:
        return 'text-5xl font-medium';
      default:
        return '';
    }
  };

  return (
    <div className="relative h-screen w-screen font-merriweather bg-white text-black sepia">
      <div className="absolute top-4 right-4 text-black sepia-0">
        <input
          type="text"
          placeholder="search . . ."
          className="p-2 px-4 m-2  bg-gray-200 border-black rounded-full"
          value={searchTerm}
          onFocus={() => setSearchActive(true)} // Set searchActive to true when focused
          onBlur={() => setSearchActive(false)} // Set searchActive to false when blurred
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredItems.map((item, index) => (
        <Link key={index} href={item.link}>
          <div
            className={`absolute ${searchActive ? (item.highlight ? 'text-black' : ' text-gray-500') : 'text-black'} ${getTypeClasses(item.type)}`}
            style={{
              ...item.style,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {item.text}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
