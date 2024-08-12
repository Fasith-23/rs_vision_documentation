"use client"
import { useState } from 'react';

const BroadcastSection = () => {
  const [currentIframe, setCurrentIframe] = useState(1);
  const iframes = [
    { src: 'https://fasith-23.github.io/rs_vision_documentation/html-apps/camera-broadcast.html', title: 'Camera Broadcast' },
    { src: 'https://fasith-23.github.io/rs_vision_documentation/html-apps/gps-broadcast.html', title: 'GPS Broadcast' },
    { src: 'https://fasith-23.github.io/rs_vision_documentation/html-apps/imu-broadcast.html', title: 'IMU Broadcast' }
  ];

  const handlePrev = () => {
    setCurrentIframe((prev) => (prev === 0 ? iframes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIframe((prev) => (prev === iframes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="">
      
      <div className="relative w-full text-3xl border-4 rounded-lg border-black font-bold flex justify-center mt-6">
        <button 
          onClick={handlePrev}
          className="absolute left-0  top-1/2 transform -translate-y-1/2  hover:bg-gray-300 rounded-full p-8"
        >
          &lt;
        </button>
        <div className="w-full max-w-lg flex justify-center items-center overflow-hidden rounded-lg border border-gray-300">
          <iframe
            src={iframes[currentIframe].src}
            className="w-full h-80"
            title={iframes[currentIframe].title}
          ></iframe>
        </div>
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  hover:bg-gray-300 rounded-full p-8"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BroadcastSection;
