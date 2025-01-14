"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

type SectionProps = {
  mainhead: string;
  paragraph: string;
  src: string;
};

const Section5: React.FC<SectionProps> = ({ mainhead, paragraph, src }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0); // Tracks current background index
  const [imageVisible, setImageVisible] = useState(false); // Tracks if the image is visible
  const imageRef = useRef<HTMLDivElement | null>(null); // Ref for the image container

  const backgroundImages = [
    "/images/Incredible-bg-1.png",
    "/images/Incredible-bg-2.png",
  ];
  const changeInterval = 3000; // Background change interval in ms

  useEffect(() => {
    // Background rotation
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, changeInterval);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    // Intersection Observer to track when the image comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setImageVisible(true); // Trigger animation when the image is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center px-6 pt-10 md:pt-20 mb-[-50px] bg-gray-100 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 incredible text-white text-center max-w-[500px]">
        <p className="body-text-big">{mainhead}</p>
        <h2 className="mb-10">{paragraph}</h2>
      </div>

      {/* Animated Image */}
      <div ref={imageRef} className="relative z-10">
        <Image
          src={src}
          alt="Example Image"
          width={1000}
          height={300}
          className={`transform transition-transform duration-1000 ease-out ${
            imageVisible ? "translate-x-0" : "translate-x-full"
          }`}
        />
      </div>
    </div>
  );
};

export default Section5;
