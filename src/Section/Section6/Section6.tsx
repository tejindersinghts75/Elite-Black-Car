"use client";
import React from "react";
import { FaCar, FaClock, FaTruck, FaShieldAlt, FaDollarSign, FaUserTie } from "react-icons/fa";
import './Section6.css'
// IconBox Component
const IconBox: React.FC<{ Icon: React.ComponentType; title: string }> = ({ Icon, title }) => (
    <div className="max-w-[120px] mx-auto">
        <div className="icon text-center">
            <div className="text-3xl text-yellow text-center mx-auto">
                <Icon   />
            </div>
            <p className="body-text mt-3 text-white">{title}</p>
        </div>
    </div>
);

const Section6: React.FC = () => {
    const iconBoxes = [
        { Icon: FaCar, title: "Luxury Limousine Selection" },
        { Icon: FaClock, title: "24/7 Order Available" },
        { Icon: FaTruck, title: "Fast Car Delivery Service" },
        { Icon: FaShieldAlt, title: "High Safety and Purity" },
        { Icon: FaDollarSign, title: "Fixed Price & Bonus System" },
        { Icon: FaUserTie, title: "Professional Car Drivers" },
    ];

    return (
        <div className="bg-dark Section6 pt-6 md:pt-40 px-8">
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-y-10">
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
