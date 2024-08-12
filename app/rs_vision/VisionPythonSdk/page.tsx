"use client"
import React, { useEffect, useState } from 'react';
import { useHeadings } from '../../context/heading-context';
import Image from 'next/image';
import Link from 'next/link';
import pageData from "../../../public/text/vision-python-sdk.json"

interface ContentItem {
  type: string;
  [key: string]: any;
}

interface PageData {
  headings: Array<{ title: string; children?: any[] }>;
  content: ContentItem[];
}

const VisionPythonSdk: React.FC = () => {
  const { setHeadings } = useHeadings();

  // Set the pageData directly from the import
  useEffect(() => {
    setHeadings(pageData.headings);
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
          case 'component0':
            return (
                <div key={index} className="py-4">
                  <p className="text-md py-4">{item.text}</p>
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <Link href='/'>
                      <div>
                        <span className='font-bold hover:text-gray-500'>{item.name0}</span>{item.text0}
                      </div>
                    </Link>
                    <Link href='/'>
                      <div>
                        <span className='font-bold hover:text-gray-500'>{item.name1}</span>{item.text1}
                      </div>
                    </Link>
                    <Link href='/'>
                      <div>
                        <span className='font-bold hover:text-gray-500'>{item.name2}</span>{item.text2}
                      </div>
                    </Link>
                    <Link href='/'>
                      <div>
                        <span className='font-bold hover:text-gray-500'>{item.name3}</span>{item.text3}
                      </div>
                    </Link>
                    
                  </div>
                </div>
              );
          case 'component1':
            return (
              <div key={index} className="py-4 flex justify-between">
                <Link href='/BroadcastApp'><div className='px-8 py-4 border-4           text-sm hover:text-gray-500 hover:border-gray-500 border-black rounded-3xl'>{item.name0}</div></Link>
                <Link href='/VisionPythonSdk'><div className='px-8 py-4 border-4  text-sm hover:text-gray-500 hover:border-gray-500 border-black rounded-3xl'>{item.name1}</div></Link>
                <Link href='/vision-python_sdk'><div className='px-8 py-4 border-4      text-sm hover:text-gray-500 hover:border-gray-500 border-black rounded-3xl'>{item.name2}</div></Link>
              </div>
            );
      
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

export default VisionPythonSdk;
