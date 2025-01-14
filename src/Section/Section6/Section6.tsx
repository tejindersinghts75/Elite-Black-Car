"use client";
import React from "react";
import "./Section6.css";

// IconBox Component
const IconBox: React.FC<{ Icon: string; title: string }> = ({ Icon, title }) => (
    <div className="max-w-[120px] mx-auto text-center">
        <div className="icon mb-4">
            <img src={Icon} alt={title} className="w-12 h-12 mx-auto" />
        </div>
        <p className="body-text text-white">{title}</p>
    </div>
);

const Section6: React.FC = () => {
    const iconBoxes = [
        { Icon: "/images/icon1.svg", title: "Luxury Limousine Selection" },
        { Icon: "/images/icon2.svg", title: "24/7 Order Available" },
        { Icon: "/images/icon3.svg", title: "Fast Car Delivery Service" },
        { Icon: "/images/icon4.svg", title: "High Safety and Purity" },
        { Icon: "/images/icon5.svg", title: "Fixed Price & Bonus System" },
        { Icon: "/images/icon6.svg", title: "Professional Car Drivers" },
    ];

    return (
        <div className="bg-dark mt-[-1px] relative z-1 Section6 pt-6 md:pt-28 px-8">
            <div className="container">
                <div className="grid md:grid-cols-2 mx-auto py-24 gap-12">
                    <div className="image_trip">
                        <img
                            src="/about-chairs.png"
                            alt="about-chairs"
                            className="md:mb-[-200px] w-full"
                        />
                    </div>
                    <div className="trip_text">
                        <h4 className="mb-20 text-white max-w-[632px]">
                            We make sure that{" "}
                            <span className="text-yellow">your every trip</span> is comfortable
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10">
                            {iconBoxes.map((box, index) => (
                                <IconBox key={index} Icon={box.Icon} title={box.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section6;
