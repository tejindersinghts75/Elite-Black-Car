"use client";
import React from "react";

type CardProp = {
    src: string;
    mainhead: string;
    paragraph: string;
    price: string;
    duration: string;
    button: string;
    features: FeatureItem[];
};

type FeatureItem = {
    src: string;
    text: string;
};

const FeatureComponent: React.FC<{ src: string; text: string }> = ({ src, text }) => (
    <div>
        <img src={src} alt="Feature icon" />
        <p>{text}</p>
    </div>
);

const Ridecard: React.FC<CardProp> = ({ src, mainhead, paragraph, price, duration, button, features }) => {
    return (
        <div className="p-10 border-2 border-dashed border-black/10">
            <div>
                <img src={src} alt="Card image" />
            </div>
            <div>
                <h3>{mainhead}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="flex">
                {features.map((feature, index) => (
                    <FeatureComponent key={index} src={feature.src} text={feature.text} />
                ))}
            </div>
            <div>
                <h3>
                    {price}
                    <span>{duration}</span>
                </h3>
            </div>
            <button>{button}</button>
        </div>
    );
};

export default Ridecard;
