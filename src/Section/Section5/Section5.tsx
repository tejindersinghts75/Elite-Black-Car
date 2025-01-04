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
    
    <div className="flex flex-col items-center px-6 pt-10 md:pt-20 mb-[-50px] bg-gray-100 ">
      <p className="body-text-big">{mainhead}</p>
      <h2 className="mb-10">
       {paragraph}
      </h2>
      <Image
        src={src} // Replace this with your image path
        alt="Example Image"
        width={1000}
        height={300}
        className=""
      />
    </div>
    
  );
};

export default Section5;
