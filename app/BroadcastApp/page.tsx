"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { useHeadings } from '../context/heading-context';
//import BroadcastSection from "./broadcast-section";
import Image from 'next/image';

const BroadcastSection = dynamic(() => import("./broadcast-section"), {
  ssr: false,
  });

interface ContentItem {
  type: string;
  [key: string]: any;
}

interface PageData {
  headings: Array<{ title: string; children?: any[] }>;
  content: ContentItem[];
}

const BroadcastApp: React.FC = () => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const { setHeadings } = useHeadings();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/text/broadcast-app.json');
      const data: PageData = await response.json();
      setPageData(data);
      setHeadings(data.headings);
    };

    fetchData();
  }, [setHeadings]);

  if (!pageData) {
    return <div className='bg-white sepia'>Loading...</div>;
  }

  const renderContent = (content: ContentItem[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
          return <HeadingTag key={index} id={item.id} className={`text-${4/item.level}xl font-bold pt-4 pb-${6/item.level}`}>{item.text}</HeadingTag>;
        case 'paragraph':
          return <p key={index} className="text-md py-4">{item.text}</p>;
        case 'image':
          return (
            <div key={index} className="flex justify-center px-10 my-8">
              <Image src={item.src} width={item.width} height={item.height} alt={item.alt} />
            </div>
          );
        case 'component':
        if (item.name === 'BroadcastSection') {
          return (
            <div key={index} className="my-8">
              <BroadcastSection />
            </div>
          );
        }
        default:
          return null;
      }
    });
  };

  return (
    <div className="font-merriweather text-black bg-white sepia">
        <div className='mx-72'>
        {renderContent(pageData.content)}
        </div>
      
    </div>
  );
};

export default BroadcastApp;
