"use client";
import React, { useState, useEffect } from "react";
import styles from "./Herosectionstyle.module.css";
import Cards from "./Cards/Cards";
import Bookingform from "../bookingform/Bookingform";

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fadeKey, setFadeKey] = useState<number>(0);

  // Image paths and text content
  const images: string[] = ["images/Bannerimage1.png", "images/Bannerimage2.png", "images/Bannerimage3.png"];
  const text: { heading: string; headingYellow: string; content: string }[] = [
    { heading: " VIP Transfers", headingYellow: "Limousine", content: " for your Success in Business" },
    { heading: " VIP Transfers", headingYellow: "Limousine", content: "for your Success in Business" },
    { heading: " VIP Transfers", headingYellow: "Limousine", content: "for your Success in Business" },
  ];
  const cards: { src: string; heading: string; content: string }[] = [
    {
      src: "/cardimg.jpg",
      heading: "Airport Transfers",
      content:
        "Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.",
    },
    {
      src: "/cardimg.jpg",
      heading: "Airport Transfers",
      content:
        "Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.",
    },
    {
      src: "/cardimg.jpg",
      heading: "Airport Transfers",
      content:
        "Pellentesque semper dui eget fermentum sagittis. Cur abitur bibe ndum id ante.",
    },
  ];

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    setFadeKey((prevKey) => prevKey + 1); // Change fadeKey for animation
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFadeKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`${styles.Banner}  relative`}>
      <div className="relative">
      <div className={styles.heroSection}>
        {/* Background layers for smooth fade */}
        <div className={styles.backgroundWrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.backgroundImage} ${activeIndex === index ? styles.active : styles.inactive
                }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="container relative px-4 flex justify-start z-10">
          <div className=" max-w-[782px]  text-white flex flex-col items-start">
            <h1 className="relative mb-3 z-2 ">
              <span className="text-yellow">{text[activeIndex].headingYellow}</span><br />{text[activeIndex].heading}
            </h1>
            <p className="relative z-10 text-center body-text-big">
              {text[activeIndex].content}
            </p>
          </div>

          <div className="formblock lg:block hidden absolute right-0 top-20 z-10 max-w-[468px] w-full">
            <Bookingform />
          </div>
        </div>

      </div>
      <div className={styles.buttonPanel}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${activeIndex === index ? styles.active : ""
              }`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
      </div>
      <div className="lg:hidden block">
      <Bookingform />
      </div>
      {/* <div className="bg-[#212121] px-5">
        <div className="flex container mx-auto max-w-[1200px] py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-2 lg:gap-6">
          {cards.map((card, index) => (
            <Cards
              key={index}
              src={card.src}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
