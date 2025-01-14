"use client";

import { useEffect, useRef } from "react";
import './slider.css'
interface TextSliderProps {
  items: string[]; // Array of text items to display
}

const TextSlider: React.FC<TextSliderProps> = ({ items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const changebox = sliderRef.current;
    if (!changebox || items.length === 0) return;

    const itemHeight = changebox.children[0]?.clientHeight || 0;

    // Clone the first item and append it to the end of the list
    const firstClone = changebox.children[0]?.cloneNode(true);
    if (firstClone) {
      changebox.appendChild(firstClone);
    }

    let index = 0;

    intervalRef.current = setInterval(() => {
      index++;

      // Smoothly animate to the next text
      changebox.style.transition = "transform 0.5s ease-in-out";
      changebox.style.transform = `translateY(-${index * itemHeight}px)`;

      // Reset the animation loop when the last (cloned) item is reached
      if (index === items.length) {
        setTimeout(() => {
          if (changebox) {
            changebox.style.transition = "none"; // Disable transition for reset
            changebox.style.transform = "translateY(0)";
          }
          index = 0;
        }, 500); // Wait for the animation to finish
      }
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Cleanup interval on component unmount
      }
    };
  }, [items]);

  return (
    <div className="slider_text">
      <div className="changebox" ref={sliderRef}>
        {items.map((item, index) => (
          <div className="text-yellow" key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
