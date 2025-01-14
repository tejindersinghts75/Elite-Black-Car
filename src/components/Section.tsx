"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "./button";
import TextSlider from "@/Section/text-slide/slider";

type contentdetails = {
  heading: string;
  content: string;
  src: string;
};

const Section: React.FC<contentdetails> = ({ heading, content, src }) => {
  const textItems = ["Satisfaction", "Satisfaction", "Satisfaction", "Satisfaction"];

  const [inView, setInView] = useState(false);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {

          setTimeout(() => {
            setInView(true);
          }, 200);
        }
      },
      { threshold: 0.5 }
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
    <div className="container overflow-hidden md:py-32 pt-16 pb-40 md:h-[100vh] grid grid-cols-1 md:grid-cols-[40%_60%] md:gap-10 gap-6 md:gap-2 lg:gap-6 px-5">
      <div className="flex flex-col max-w-[500px] items-start justify-center gap-4">
        <h2 className="">{heading} <TextSlider items={textItems} /> </h2>
        <p>{content}</p>
        <Button text="Learn More" />
      </div>
      <div
        className="image-box-about relative"
        ref={imageRef}
      >
        <img src="/images/png-clipart.png" alt="image" className="md:ms-[-80px] md:mt-[-120px]" />
        <img
          src="/images/about-limmo.png"
          alt="image"
          className={`md:mt-[-100px] mt-[-50px] absolute transition-transform duration-700 ease-in-out transform ${inView
            ? "translate-x-0 translate-y-0"
            : "translate-x-[50%] -translate-y-[50%]"
            }`}
        />
      </div>
    </div>
  );
};

export default Section;
