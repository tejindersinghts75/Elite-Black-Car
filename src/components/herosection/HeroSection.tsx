"use client";
import React, { useState } from "react";
import styles from "./Herosectionstyle.module.css"; // Correctly imports CSS Modules

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [zoomKey, setZoomKey] = useState<number>(0); // Key to reset animation

  // Define the image paths and text content
  const images: string[] = [
    "/SLIDE_04.jpg",
    "/SLIDE_05.jpg",
    "/SLIDE_02.jpg",
  ];

  const text: { heading: string; content: string }[] = [
    { heading: "Design with", content: " Technology" },
    { heading: "Limousine", content: "Travel well" },
    { heading: "My Third Heading", content: "My third content" },
  ];

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    setZoomKey((prevKey) => prevKey + 1); // Change the key to trigger animation
  };

  return (
    <div className={styles.heroSection}>
      {/* The animated background */}
      <div
        key={zoomKey} // Triggers re-render for animation
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
      ></div>

      {/* Content */}
      <div className="container mx-auto max-w-[1200px] px-4 flex justify-start  z-10">
        <div className="text-center text-white flex flex-col items-start">
          <h1 className="relative z-2 text-center leading-[100%] m-0 text-[80px] font-extrabold text-[#800401] transition-transform duration-[20000ms] ease-out opacity-[1]  max-md:text-[52px]">{text[activeIndex].heading}</h1>
          <p className="relative z-10 text-center m-0 text-[80px] font-bold text-[#fff] transition-transform duration-[20000ms] ease-out opacity-100 leading-tight  max-md:text-[52px]">
            {text[activeIndex].content}
          </p>
        </div>
        <div className={styles.buttonPanel}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => handleButtonClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
