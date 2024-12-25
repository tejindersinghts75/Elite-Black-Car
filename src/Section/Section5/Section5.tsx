"use client";
import React from "react";
import Image from 'next/image';



type sectionProps={
  mainhead: string;
  paragraph: string;
  src: string;
}
const Section5: React.FC<sectionProps> = ({mainhead, paragraph, src}) => {
  return (
    
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-[54px] font-bold text-gray-800 mb-4">{mainhead}</h1>
      <p className="text-[45px] text-gray-600 text-center mb-6">
       {paragraph}
      </p>
      <Image
        src={src} // Replace this with your image path
        alt="Example Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </div>
    
  );
};

export default Section5;
